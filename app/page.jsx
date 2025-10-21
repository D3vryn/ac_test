\
"use client";
import React, { useMemo, useState } from "react";
import "./globals.css";

const NavButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition hover:shadow ${
      active ? "bg-black text-white" : "bg-white text-gray-800 border"
    }`}
  >
    {children}
  </button>
);

const StatCard = ({ label, value, sub }) => (
  <div className="rounded-2xl border p-4 bg-white shadow-sm">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-2xl font-semibold mt-1">{value}</div>
    {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
  </div>
);

const Section = ({ title, desc, children, actions }) => (
  <section className="mb-8">
    <div className="flex items-end justify-between gap-4 mb-4">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        {desc && <p className="text-sm text-gray-500 mt-1">{desc}</p>}
      </div>
      {actions}
    </div>
    <div className="grid gap-4">{children}</div>
  </section>
);

const Hero = ({ onApply }) => (
  <div className="rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-emerald-100 border p-8 md:p-10 mb-8">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-black text-white mb-4">
          <span>Cardano Ecosystem</span>
          <span className="opacity-70">• Grants & Impact</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Powering Cardano’s Builders
        </h1>
        <p className="text-gray-600 mt-3">
          Apply for event and marketing grants, discover standout projects, and
          track real impact across the ecosystem.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button onClick={onApply} className="px-4 py-2 rounded-xl bg-black text-white font-medium">
            Apply for a Grant
          </button>
          <button className="px-4 py-2 rounded-xl border bg-white font-medium">
            Explore Projects
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StatCard label="Projects Funded" value="142" sub="All-time" />
        <StatCard label="Avg Time-to-Decision" value="14 days" sub="Median" />
        <StatCard label="Total Distributed" value="$1.9M" sub="USD equivalent" />
        <StatCard label="Avg ROMI" value="3.2×" sub="Median return" />
      </div>
    </div>
  </div>
);

const FeaturedProjects = () => (
  <div className="grid md:grid-cols-3 gap-4">
    {["DeFi Wallet SDK", "NFT Launchpad", "Education Hub"].map((name) => (
      <div key={name} className="rounded-2xl border p-4 bg-white">
        <div className="text-xs text-emerald-700 font-semibold">Featured</div>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">
          Short project summary goes here. Problem, solution, and Cardano-first
          value proposition.
        </p>
        <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
          <span className="px-2 py-1 rounded-full bg-gray-100">DeFi</span>
          <span className="px-2 py-1 rounded-full bg-gray-100">Open Source</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-black text-white text-sm">View</button>
          <button className="px-3 py-1.5 rounded-lg border text-sm">Website</button>
        </div>
      </div>
    ))}
  </div>
);

const Testimonials = () => (
  <div className="grid md:grid-cols-3 gap-4">
    {[1,2,3].map((i) => (
      <blockquote key={i} className="rounded-2xl border p-4 bg-white">
        <p className="text-gray-700 italic">“The grant let us launch globally in 6 weeks and hit 25k users.”</p>
        <div className="mt-3 text-sm font-medium">A. Lee • Founder, DEXTools for Cardano</div>
      </blockquote>
    ))}
  </div>
);

const Partners = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {["EMURGO","IOG","Rare Network","Cardano Foundation"].map((p) => (
      <div key={p} className="rounded-xl border p-4 bg-white text-center text-sm font-semibold">
        {p}
      </div>
    ))}
  </div>
);

const WizardStep = ({ title, children }) => (
  <div className="rounded-2xl border bg-white p-5">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="grid gap-3">{children}</div>
  </div>
);

const Input = ({ label, ...props }) => (
  <label className="grid gap-1">
    <span className="text-sm text-gray-600">{label}</span>
    <input {...props} className="px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black/10" />
  </label>
);

const Textarea = ({ label, ...props }) => (
  <label className="grid gap-1">
    <span className="text-sm text-gray-600">{label}</span>
    <textarea {...props} className="px-3 py-2 rounded-lg border min-h-[120px] focus:outline-none focus:ring-2 focus:ring-black/10" />
  </label>
);

const Select = ({ label, options = [], ...props }) => (
  <label className="grid gap-1">
    <span className="text-sm text-gray-600">{label}</span>
    <select {...props} className="px-3 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-black/10">
      {options.map(o => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </label>
);

const Divider = () => <hr className="my-6 border-gray-200" />;

const ApplyWizard = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    org: "",
    project: "",
    email: "",
    website: "",
    grantType: "Event Grant",
    category: "DeFi",
    amount: "",
    summary: "",
    milestones: "",
    kpis: "",
    start: "",
    end: "",
  });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const onChange = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2">
        {[1,2,3,4].map((i) => (
          <div key={i} className={`h-2 rounded-full flex-1 ${i <= step ? "bg-black" : "bg-gray-200"}`} />
        ))}
      </div>

      {step === 1 && (
        <WizardStep title="Organization & Project">
          <Input label="Organization Name" value={form.org} onChange={e=>onChange("org", e.target.value)} placeholder="Your Organization" />
          <Input label="Project Name" value={form.project} onChange={e=>onChange("project", e.target.value)} placeholder="Project Title" />
          <div className="grid md:grid-cols-2 gap-3">
            <Input label="Contact Email" value={form.email} onChange={e=>onChange("email", e.target.value)} placeholder="you@org.com" />
            <Input label="Website" value={form.website} onChange={e=>onChange("website", e.target.value)} placeholder="https://..." />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Select label="Grant Type" value={form.grantType} onChange={e=>onChange("grantType", e.target.value)} options={["Event Grant","Marketing Grant"]} />
            <Select label="Category" value={form.category} onChange={e=>onChange("category", e.target.value)} options={["DeFi","Infrastructure","NFT","Gaming","Education","Tooling"]} />
          </div>
        </WizardStep>
      )}

      {step === 2 && (
        <WizardStep title="Objectives, Budget & Timeline">
          <Textarea label="Project Summary / Objectives" value={form.summary} onChange={e=>onChange("summary", e.target.value)} placeholder="What are you building and why is it important for Cardano?" />
          <Input label="Requested Amount (USD)" value={form.amount} onChange={e=>onChange("amount", e.target.value)} placeholder="$25,000" />
          <div className="grid md:grid-cols-2 gap-3">
            <Input label="Start Date" type="date" value={form.start} onChange={e=>onChange("start", e.target.value)} />
            <Input label="End Date" type="date" value={form.end} onChange={e=>onChange("end", e.target.value)} />
          </div>
        </WizardStep>
      )}

      {step === 3 && (
        <WizardStep title="Milestones & KPIs">
          <Textarea label="Milestones" value={form.milestones} onChange={e=>onChange("milestones", e.target.value)} placeholder="List key milestones with due dates and deliverables." />
          <Textarea label="KPIs" value={form.kpis} onChange={e=>onChange("kpis", e.target.value)} placeholder="Reach, engagement, signups, wallets created, transactions, TVL impact, etc." />
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
            Tip: We’ll auto-generate UTM links and tracking templates once approved.
          </div>
        </WizardStep>
      )}

      {step === 4 && (
        <WizardStep title="Review & Submit">
          <div className="text-sm text-gray-600">Please confirm your details before submitting. You’ll get a confirmation email and a dashboard to upload receipts and KPI reports if approved.</div>
          <Divider />
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border p-3">
              <div className="font-semibold mb-1">Organization</div>
              <div>{form.org}</div>
              <div className="text-gray-500">{form.email} • {form.website}</div>
            </div>
            <div className="rounded-xl border p-3">
              <div className="font-semibold mb-1">Project</div>
              <div>{form.project}</div>
              <div className="text-gray-500">{form.category} • {form.grantType}</div>
            </div>
            <div className="rounded-xl border p-3">
              <div className="font-semibold mb-1">Budget & Timeline</div>
              <div>Requested: {form.amount || "—"}</div>
              <div>{form.start || "—"} → {form.end || "—"}</div>
            </div>
            <div className="rounded-xl border p-3">
              <div className="font-semibold mb-1">Milestones & KPIs</div>
              <div className="text-gray-700 whitespace-pre-wrap">{form.milestones || "—"}</div>
              <Divider />
              <div className="text-gray-700 whitespace-pre-wrap">{form.kpis || "—"}</div>
            </div>
          </div>
        </WizardStep>
      )}

      <div className="flex justify-between">
        <button onClick={back} disabled={step===1} className={`px-4 py-2 rounded-xl border ${step===1?"opacity-40" : ""}`}>Back</button>
        {step < 4 ? (
          <button onClick={next} className="px-4 py-2 rounded-xl bg-black text-white">Continue</button>
        ) : (
          <button onClick={()=>alert("Application submitted! (demo)")} className="px-4 py-2 rounded-xl bg-emerald-600 text-white">Submit Application</button>
        )}
      </div>
    </div>
  );
};

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-100 rounded-full h-2">
    <div className="h-2 rounded-full bg-black" style={{ width: `${value}%` }} />
  </div>
);

const MiniChart = ({ title, values }) => {
  const max = Math.max(...values, 1);
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="text-sm font-medium mb-2">{title}</div>
      <div className="flex items-end gap-1 h-24">
        {values.map((v, i) => (
          <div key={i} className="flex-1 bg-gray-200 rounded" style={{ height: `${(v / max) * 100}%` }} />
        ))}
      </div>
    </div>
  );
};

const ImpactDashboard = () => {
  const reach = [1200, 2100, 3800, 5200, 4900, 6300, 7100];
  const leads = [45, 60, 88, 102, 97, 130, 155];
  const romi = 3.2;

  const rows = useMemo(
    () => [
      { grant: "ETH Denver Booth", spend: 36800, leads: 920, cpl: 40, romi: 2.8, status: "Reporting" },
      { grant: "Paris Blockchain Week", spend: 39100, leads: 740, cpl: 52, romi: 2.3, status: "Approved" },
      { grant: "TEAMZ Tokyo Panel", spend: 47500, leads: 1060, cpl: 45, romi: 3.6, status: "Complete" },
      { grant: "Consensus Miami Booth", spend: 35075, leads: 880, cpl: 39, romi: 3.1, status: "Complete" },
    ],
    []
  );

  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard label="Total Grants" value="58" sub="Active + Completed" />
        <StatCard label="Total Spend" value="$612k" sub="This FY" />
        <StatCard label="Median CPL" value="$41" sub="Cost per lead" />
        <StatCard label="Median ROMI" value={`${romi}×`} sub="Return on marketing" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <MiniChart title="Weekly Reach" values={reach} />
        <MiniChart title="Weekly Leads" values={leads} />
        <div className="rounded-2xl border p-4 bg-white">
          <div className="text-sm font-medium mb-2">Approval Pipeline</div>
          <div className="grid gap-3">
            <div>
              <div className="flex justify-between text-sm"><span>Submitted</span><span>124</span></div>
              <ProgressBar value={70} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>In Review</span><span>38</span></div>
              <ProgressBar value={40} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Approved</span><span>22</span></div>
              <ProgressBar value={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-semibold">Grants Performance</div>
          <div className="text-sm text-gray-500">FY 2025</div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-50">
                <th className="px-4 py-2">Grant</th>
                <th className="px-4 py-2">Spend</th>
                <th className="px-4 py-2">Leads</th>
                <th className="px-4 py-2">CPL</th>
                <th className="px-4 py-2">ROMI</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{r.grant}</td>
                  <td className="px-4 py-2">${r.spend.toLocaleString()}</td>
                  <td className="px-4 py-2">{r.leads}</td>
                  <td className="px-4 py-2">${r.cpl}</td>
                  <td className="px-4 py-2">{r.romi}×</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      r.status === "Complete" ? "bg-emerald-100 text-emerald-800" :
                      r.status === "Approved" ? "bg-indigo-100 text-indigo-800" :
                      "bg-amber-100 text-amber-800"
                    }`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <span className="font-semibold">Cardano Grants Hub</span>
          </div>
          <nav className="flex items-center gap-2">
            <NavButton active={route==='home'} onClick={()=>setRoute('home')}>Home</NavButton>
            <NavButton active={route==='apply'} onClick={()=>setRoute('apply')}>Apply</NavButton>
            <NavButton active={route==='impact'} onClick={()=>setRoute('impact')}>Impact</NavButton>
            <button className="ml-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm">Sign In</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {route === "home" && (
          <>
            <Hero onApply={()=>setRoute('apply')} />
            <Section title="Featured Projects" desc="Handpicked teams building on Cardano right now."><FeaturedProjects /></Section>
            <Section title="Testimonials" desc="Real outcomes from funded teams."><Testimonials /></Section>
            <Section title="Partners" desc="Organizations helping the ecosystem grow."><Partners /></Section>
          </>
        )}

        {route === "apply" && (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Apply for a Grant</h2>
              <p className="text-sm text-gray-600 mt-1">Submit your organization and project details. You can save and return any time.</p>
            </div>
            <ApplyWizard />
          </>
        )}

        {route === "impact" && (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Impact Dashboard</h2>
              <p className="text-sm text-gray-600 mt-1">Live view of pipeline, spend, and outcomes across the ecosystem.</p>
            </div>
            <ImpactDashboard />
          </>
        )}
      </main>

      <footer className="mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Cardano Grants Hub</div>
          <div className="flex gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
            <a className="hover:underline" href="#">Media Kit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
