"use client";

import { useEffect, useState } from "react";
import { CountUp } from "@/components/ui/CountUp";

type Stats = { registrations: number; districts: number };

export function SocialProof() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/stats")
      .then((r) => (r.ok ? r.json() : { registrations: 0, districts: 0 }))
      .then((d) => alive && setStats(d))
      .catch(() => alive && setStats({ registrations: 0, districts: 0 }));
    return () => {
      alive = false;
    };
  }, []);

  const counters = [
    { value: stats?.registrations ?? 0, label: "farmers & dealers registered" },
    { value: stats?.districts ?? 0, label: "districts covered" },
    { value: 4, label: "services launching", ready: true },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {counters.map((c, i) => (
            <div key={c.label} className="flex items-center gap-10">
              {i > 0 && (
                <span className="hidden h-12 w-px bg-[rgba(27,58,45,0.12)] sm:block" />
              )}
              <div className="text-center">
                <div className="font-display text-[52px] font-bold leading-none tracking-tight text-charcoal-root">
                  {stats || "ready" in c ? (
                    <CountUp end={c.value} />
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <div className="mt-2 font-body text-[14px] text-dry-clay">
                  {c.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[520px] text-center font-body text-[16px] font-light text-earth-brown">
          Be part of the first wave of farmers and dealers to digitise agriculture
          in India.
        </p>
      </div>
    </section>
  );
}
