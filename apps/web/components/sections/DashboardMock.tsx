import {
  LayoutDashboard,
  Users,
  Package,
  Wallet,
  Phone,
  Store,
  Settings,
  Bell,
} from "lucide-react";

/**
 * Static dealer-dashboard mock UI shown inside the laptop frame (PRD §7).
 * Pure presentational - also serves as a visual reference for the real ERP
 * (Phase 2). All numbers are realistic placeholder data.
 */
const NAV = [
  { Icon: LayoutDashboard, label: "Dashboard", active: true },
  { Icon: Users, label: "Farmers" },
  { Icon: Package, label: "Inventory" },
  { Icon: Wallet, label: "Payments" },
  { Icon: Phone, label: "AI Agent" },
  { Icon: Store, label: "Online Store" },
  { Icon: Settings, label: "Settings" },
];

const STATS = [
  { value: "₹2,84,500", label: "Total Credit Outstanding" },
  { value: "147", label: "Active Farmers" },
  { value: "23", label: "Pending Follow-ups" },
  { value: "₹48,200", label: "This Month Collections" },
];

const FARMERS = [
  { name: "Suresh Patel", due: "₹12,400", contact: "2 days ago", status: "Overdue" },
  { name: "Anil Desai", due: "₹3,200", contact: "Today", status: "Pending" },
  { name: "Ramji Bhai", due: "₹0", contact: "Yesterday", status: "Paid" },
  { name: "Kiran Shah", due: "₹8,750", contact: "5 days ago", status: "Overdue" },
  { name: "Mahesh Joshi", due: "₹1,500", contact: "Today", status: "Paid" },
];

const STATUS_STYLE: Record<string, string> = {
  Paid: "bg-[#e4f0e9] text-[#1b6b3a]",
  Pending: "bg-[#fdf0dc] text-[#92400e]",
  Overdue: "bg-[#f7e0dc] text-[#b3261e]",
};

const BARS = [60, 85, 45, 95, 70, 50, 80];

export function DashboardMock() {
  return (
    <div className="flex h-full w-full bg-[#f7f5f1] font-body text-charcoal-root">
      {/* Sidebar */}
      <aside className="hidden w-[150px] shrink-0 flex-col justify-between bg-soil-deep p-3 sm:flex">
        <div>
          <div className="mb-5 px-1 font-heading text-[13px] font-bold text-rabi-dust">
            Prithvi<span className="text-harvest-amber">X</span>
          </div>
          <nav className="flex flex-col gap-0.5">
            {NAV.map((n) => (
              <span
                key={n.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
                  n.active
                    ? "bg-[rgba(245,240,230,0.1)] text-rabi-dust"
                    : "text-[rgba(245,240,230,0.55)]"
                }`}
              >
                <n.Icon size={12} />
                {n.label}
              </span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 border-t border-[rgba(245,240,230,0.1)] pt-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-harvest-amber text-[9px] font-bold text-white">
            R
          </span>
          <span className="text-[9px] text-[rgba(245,240,230,0.7)]">
            Ramesh Agri Inputs
          </span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-hidden p-3.5">
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="font-heading text-[13px] font-bold">
              Good morning, Ramesh 👋
            </div>
            <div className="text-[9px] text-dry-clay">Monday, 1 June 2026</div>
          </div>
          <div className="flex items-center gap-2">
            <Bell size={13} className="text-dry-clay" />
            <span className="grid h-6 w-6 place-items-center rounded-full bg-field-deep text-[9px] font-bold text-rabi-dust">
              R
            </span>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mb-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-md border border-[#ece7dd] bg-white p-2.5"
            >
              <div className="font-heading text-[14px] font-bold text-field-deep">
                {s.value}
              </div>
              <div className="mt-0.5 text-[8.5px] leading-tight text-dry-clay">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Table + AI card */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1.6fr_1fr]">
          {/* Farmer ledger table */}
          <div className="overflow-hidden rounded-md border border-[#ece7dd] bg-white">
            <div className="border-b border-[#ece7dd] px-2.5 py-1.5 text-[9px] font-semibold text-dry-clay">
              <div className="grid grid-cols-[1.4fr_1fr_1fr_0.9fr] gap-1">
                <span>Farmer</span>
                <span>Amount Due</span>
                <span>Last Contact</span>
                <span>Status</span>
              </div>
            </div>
            {FARMERS.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[1.4fr_1fr_1fr_0.9fr] items-center gap-1 border-b border-[#f1ece3] px-2.5 py-1.5 text-[9px] last:border-0"
              >
                <span className="font-medium">{f.name}</span>
                <span>{f.due}</span>
                <span className="text-dry-clay">{f.contact}</span>
                <span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${STATUS_STYLE[f.status]}`}
                  >
                    {f.status}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* AI calls card */}
          <div className="rounded-md border border-[#ece7dd] bg-white p-2.5">
            <div className="text-[9px] font-semibold text-dry-clay">
              AI Calls Today
            </div>
            <div className="mt-0.5 flex items-end gap-1">
              <span className="font-heading text-[22px] font-bold leading-none text-charcoal-root">
                34
              </span>
              <span className="text-[8.5px] text-dry-clay">calls</span>
            </div>
            <div className="mt-2 flex h-9 items-end gap-1">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-field-mid"
                  style={{ height: `${h}%`, opacity: 0.5 + i * 0.06 }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full bg-field-mid"
                style={{ animation: "pv-dot 1.6s infinite" }}
              />
              <span className="text-[8.5px] font-medium text-field-deep">
                Agent Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
