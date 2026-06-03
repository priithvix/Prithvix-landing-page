"use client";

import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";
import { track } from "@/components/Analytics";



const STORAGE_KEY = "pv_register_form";

type Form = {
  name: string;
  phone: string;
  district: string;
  role: string;
  service: string;
};

const EMPTY: Form = { name: "", phone: "", district: "", role: "", service: "" };

function validate(form: Form, dict: any): Partial<Record<keyof Form, string>> {
  const errors: Partial<Record<keyof Form, string>> = {};
  if (!form.name.trim()) errors.name = dict.errors.name;
  const digits = form.phone.replace(/\D/g, "").replace(/^91/, "");
  if (!/^[6-9]\d{9}$/.test(digits))
    errors.phone = dict.errors.phone;
  if (!form.district.trim()) errors.district = dict.errors.district;
  if (!form.role) errors.role = dict.errors.role;
  if (!form.service) errors.service = dict.errors.service;
  return errors;
}

export function RegisterForm({ dict }: { dict: any }) {
  const [form, setForm] = useState<Form>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [count, setCount] = useState(0);

  // restore persisted inputs + role pre-fill (URL ?role= or in-page event)
  useEffect(() => {
    const applyRole = (role: string) => {
      const map: Record<string, string> = {
        farmer: dict.labels.roleOptions[0],
        dealer: dict.labels.roleOptions[1],
      };
      const mapped = map[role.toLowerCase()];
      if (mapped) setForm((f) => ({ ...f, role: mapped }));
    };

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setForm({ ...EMPTY, ...JSON.parse(saved) });
    } catch {}

    const params = new URLSearchParams(window.location.search);
    const urlRole = params.get("role");
    if (urlRole) applyRole(urlRole);

    const onSetRole = (e: Event) =>
      applyRole((e as CustomEvent<string>).detail);
    window.addEventListener("pv:set-role", onSetRole);

    fetch("/api/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setCount(d.registrations ?? 0))
      .catch(() => {});

    return () => window.removeEventListener("pv:set-role", onSetRole);
  }, []);

  // persist on change (until success)
  useEffect(() => {
    if (status === "success") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {}
  }, [form, status]);

  const update = (key: keyof Form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...form, [key]: value }, dict));
    }
  };

  const blur = (key: keyof Form) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(form, dict));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form, dict);
    setErrors(errs);
    setTouched({ name: true, phone: true, district: true, role: true, service: true });
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
      localStorage.removeItem(STORAGE_KEY);
      track("form_submit", { role: form.role, service: form.service });
    } catch {
      setStatus("error");
    }
  }

  const waMessage = `Hi, I just registered on PrithviX and want to know more.\n\nName: ${form.name}\nMobile: ${form.phone}\nDistrict: ${form.district}\nI am a: ${form.role}\nInterested in: ${form.service}`;

  return (
    <section id="register" className="section-pad bg-field-deep">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Left - text */}
        <div>
          <Reveal>
            <SectionPill variant="onDark">{dict.pill}</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-display font-bold tracking-h2 text-rabi-dust"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {dict.headingPrefix} <span className="text-turmeric">{dict.headingSuffix}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[460px] font-body text-[17px] font-light leading-[1.7] text-[rgba(245,240,230,0.68)]">
              {dict.sub}
            </p>
          </Reveal>
          <div className="mt-6 flex flex-col gap-3">
            {dict.benefits.map((b: any, i: number) => (
              <Reveal key={b} delay={0.1 + i * 0.06} className="flex items-center gap-2.5">
                <span className="font-bold text-turmeric">✓</span>
                <span className="font-body text-[15px] text-rabi-dust">{b}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right - form card */}
        <Reveal delay={0.1}>
          <div
            className="rounded-[24px] bg-rabi-dust p-8 md:p-10"
            style={{ boxShadow: "var(--shadow-hover)" }}
          >
            {status === "success" ? (
              <SuccessPanel waMessage={waMessage} dict={dict} />
            ) : (
              <form onSubmit={submit} noValidate>
                <h3 className="mb-6 font-heading text-[20px] font-bold text-charcoal-root">
                  {dict.formHeading}
                </h3>

                <div className="flex flex-col gap-4">
                  <Field
                    label={dict.labels.name}
                    name="name"
                    placeholder={dict.labels.namePlaceholder}
                    autoComplete="name"
                    value={form.name}
                    error={touched.name ? errors.name : undefined}
                    valid={touched.name && !errors.name && !!form.name}
                    onChange={(v) => update("name", v)}
                    onBlur={() => blur("name")}
                  />
                  <Field
                    label={dict.labels.phone}
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder={dict.labels.phonePlaceholder}
                    autoComplete="tel-national"
                    value={form.phone}
                    error={touched.phone ? errors.phone : undefined}
                    valid={touched.phone && !errors.phone && !!form.phone}
                    onChange={(v) => update("phone", v)}
                    onBlur={() => blur("phone")}
                  />
                  <Field
                    label={dict.labels.district}
                    name="district"
                    placeholder={dict.labels.districtPlaceholder}
                    autoComplete="address-level2"
                    value={form.district}
                    error={touched.district ? errors.district : undefined}
                    valid={touched.district && !errors.district && !!form.district}
                    onChange={(v) => update("district", v)}
                    onBlur={() => blur("district")}
                  />
                  <SelectField
                    label={dict.labels.role}
                    name="role"
                    options={dict.labels.roleOptions}
                    defaultOption={dict.labels.selectPlaceholder}
                    value={form.role}
                    error={touched.role ? errors.role : undefined}
                    onChange={(v) => update("role", v)}
                    onBlur={() => blur("role")}
                  />
                  <SelectField
                    label={dict.labels.service}
                    name="service"
                    options={dict.labels.serviceOptions}
                    defaultOption={dict.labels.selectPlaceholder}
                    value={form.service}
                    error={touched.service ? errors.service : undefined}
                    onChange={(v) => update("service", v)}
                    onBlur={() => blur("service")}
                  />
                </div>

                {count > 0 && (
                  <p className="mt-5 text-center font-body text-[13px] font-medium text-field-deep">
                    {dict.alreadyRegistered.replace("{count}", count.toLocaleString("en-IN"))}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 flex h-[52px] w-full items-center justify-center gap-2 rounded-[10px] bg-field-deep font-heading text-[15px] font-semibold text-rabi-dust transition-colors hover:bg-night-field disabled:opacity-80"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> {dict.sending}
                    </>
                  ) : (
                    dict.submit
                  )}
                </button>

                {status === "error" && (
                  <p className="mt-3 text-center font-body text-[13px] text-[#c0392b]">
                    {dict.errorMsg}{" "}
                    <a
                      href={waLink("Hi, I tried to register on PrithviX but the form failed.")}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.errorLink}
                    </a>
                    .
                  </p>
                )}

                <p className="mt-3 text-center font-body text-[12px] text-dry-clay">
                  {dict.privacyMsg}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- field primitives ---------- */

function fieldClasses(error?: string, valid?: boolean) {
  return `h-[50px] w-full rounded-[10px] border-[1.5px] bg-white px-4 font-body text-[16px] text-earth-brown outline-none transition-all placeholder:text-dry-clay focus:border-field-deep focus:shadow-[var(--shadow-focus)] ${
    error ? "border-[#c0392b]" : valid ? "border-field-mid" : "border-sand"
  }`;
}

const labelClass =
  "mb-1.5 block font-body text-[11px] font-medium uppercase tracking-[0.05em] text-dry-clay";

function Field({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  valid,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  valid?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={fieldClasses(error, valid)}
          {...rest}
        />
        {valid && (
          <Check
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-field-mid"
            style={{ animation: "pv-fade 0.3s ease" }}
          />
        )}
      </div>
      {error && (
        <p className="mt-1 font-body text-[12px] text-[#c0392b]">{error}</p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  defaultOption,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  defaultOption: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`${fieldClasses(error)} appearance-none`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239C8472' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          color: value ? "var(--color-earth-brown)" : "var(--color-dry-clay)",
        }}
      >
        <option value="" disabled>
          {defaultOption}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "var(--color-earth-brown)" }}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 font-body text-[12px] text-[#c0392b]">{error}</p>
      )}
    </div>
  );
}

function SuccessPanel({ waMessage, dict }: { waMessage: string, dict: any }) {
  return (
    <div className="py-6 text-center" style={{ animation: "pv-fade 0.4s ease" }}>
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-field-mid">
        <Check size={28} className="text-rabi-dust" />
      </div>
      <h3 className="font-heading text-[22px] font-bold text-charcoal-root">
        {dict.successHeading}
      </h3>
      <p className="mx-auto mt-2 max-w-[320px] font-body text-[15px] font-light text-earth-brown">
        {dict.successSub}
      </p>
      <a
        href={waLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-pill bg-[#25D366] px-6 py-3 font-heading text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        {dict.successBtn}
      </a>
    </div>
  );
}
