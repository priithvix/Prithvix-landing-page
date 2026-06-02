"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";

const FAQS: { q: string; a: string[] }[] = [
  {
    q: "Is it free to register? What will PrithviX charge me?",
    a: [
      "Registering is completely free - for farmers, dealers, equipment owners, and labour providers. No credit card. No trial period. No hidden setup fee.",
      "PrithviX only earns when you earn. We charge a 12% platform fee on completed equipment rental bookings and 10% on completed labour bookings - deducted automatically before your payout. If no booking happens, we charge nothing.",
      "The Dealer ERP & CRM starts at ₹499/month - includes inventory, credit management, billing, GST invoices, and AI-powered payment reminders. No long-term contract. Cancel anytime.",
    ],
  },
  {
    q: "Is my data safe? Who can see my farmer customer list?",
    a: [
      "Your farmer customer list is yours. Only you can see it - not other dealers, not our sales team, not anyone else on the platform. We do not use your customer data for our own marketing or share it with third parties. Ever.",
      "All data is stored encrypted on Indian servers. We comply with India's data protection regulations. If you ever close your account, we permanently delete your data within 30 days on request.",
    ],
  },
  {
    q: "Where is PrithviX available right now?",
    a: [
      "We are launching first in Gujarat and Rajasthan. Maharashtra is next, followed by Madhya Pradesh.",
      "If your district is not listed, register anyway. We personally confirm your area's launch date within 24 hours of registration. Early registrations in unlaunched areas get first access when we expand there.",
    ],
  },
  {
    q: "I already use Tally. Can I move my dealer data to PrithviX?",
    a: [
      "Yes. Export your data from Tally as Excel and we will help you import it into PrithviX - your farmer list, ledger balances, and product catalogue. Our onboarding team walks every new dealer through this personally. It typically takes one afternoon.",
      "PrithviX is not a replacement for Tally - it is built specifically for agri input dealers and does things Tally cannot: farmer CRM with crop calendars, AI calling for credit recovery, WhatsApp order management, and statutory compliance registers (Form N, Form XII, Seed registers).",
    ],
  },
  {
    q: "Does the AI calling agent actually speak Hindi and Gujarati - or just English?",
    a: [
      "The AI speaks and understands Hindi, Gujarati, Marathi, Telugu, and more - not just English. It handles code-switching naturally: if a farmer starts in Gujarati and switches to Hindi mid-sentence, the agent follows without missing a beat.",
      "The agent calls farmers on your behalf for credit payment reminders, order confirmations, and follow-up questions you define. Every call is recorded, transcribed, and summarised in your dashboard - with any payment commitments automatically logged against that farmer's account.",
    ],
  },
  {
    q: "If equipment breaks during a rental - who is responsible?",
    a: [
      "Equipment owners list their machinery with photos and a verified condition rating before any booking goes live. Renters pay a refundable security deposit at booking time - held by PrithviX, not the owner.",
      "If equipment fails during a rental: PrithviX holds the full payment, the owner must provide a working replacement within 24 hours or issue a proportionate refund for downtime. All disputes are mediated by our team within 48 hours. The renter is never left stranded without recourse.",
    ],
  },
  {
    q: "I'm a farm worker. How and when do I get paid?",
    a: [
      "Payment goes directly to your UPI ID or bank account within 24 hours of the farmer confirming the work is complete. You never handle cash, never chase anyone, and never wait weeks.",
      "PrithviX holds the farmer's payment in escrow from the moment you are booked. Once both parties confirm the job is done, it releases automatically. If there is any dispute about attendance or quality, our team mediates within 48 hours.",
    ],
  },
  {
    q: "When does PrithviX officially launch - and why register now?",
    a: [
      "We are in pre-launch. The first 200 registered users in each district become Founding Members - they get: priority onboarding before the public launch; founding-member pricing locked in permanently, not available after launch; a dedicated setup call with our team; and first access to new features before they go public.",
      "Registering takes 60 seconds. We call you within 1 hour to confirm your spot and answer any questions personally.",
    ],
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-dry-grass">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-[720px] text-center">
          <Reveal>
            <SectionPill>Common Questions</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[720px] overflow-hidden rounded-lg border-[0.5px] border-field-stone bg-white">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b-[0.5px] border-field-stone last:border-0"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-rabi-dust md:px-6"
                >
                  <span className="font-heading text-[16px] font-semibold text-charcoal-root">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-field-deep transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 px-5 pb-5 md:px-6">
                      {item.a.map((p, pi) => (
                        <p
                          key={pi}
                          className="font-body text-[15px] font-light leading-[1.7] text-earth-brown"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
