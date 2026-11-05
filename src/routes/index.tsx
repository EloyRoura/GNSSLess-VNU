import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  LifeBuoy,
  Crosshair,
  Eye,
  ScanSearch,
  Map,
  ShieldCheck,
  Layers,
  Mountain,
  Target,
  Camera,
  Plane,
  Box,
  Compass,
  Mail,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/desert_flight.jpg.asset.json";
import dunesImg from "@/assets/dunes_flight.jpg.asset.json";
import tiiLogo from "@/assets/tii_logo.png.asset.json";
import unitImg from "@/assets/visual_nav_unit.png.asset.json";
import gcsImg from "@/assets/gcs_station.jpg";
import { productSpecifications as specs } from "@/lib/product-specifications";

const CONTACT_EMAIL = "eloy.roura@tii.ae";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GNSSLess Navigation · Visual Navigation for UAVs | TII" },
      {
        name: "description",
        content:
          "GNSSLess Navigation by TII: camera-based navigation for high-altitude, long-range UAVs in GNSS-denied environments. 50 m position error at 1000 m AGL.",
      },
      { property: "og:title", content: "GNSSLess Navigation · Enabling GNSS denied environments" },
      {
        property: "og:description",
        content:
          "Visual-based navigation unit for long-range UAVs flying without satellite positioning, day and night.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Overview", "#overview"],
  ["Missions", "#missions"],
  ["Performance", "#performance"],
  ["Contact", "#contact"],
] as const;

const missions = [
  { icon: LifeBuoy, label: "Search & Rescue" },
  { icon: Crosshair, label: "Threat Engagement" },
  { icon: Eye, label: "Surveillance" },
  { icon: ScanSearch, label: "Intel Gathering & Reconnaissance" },
];

const platform = [
  { icon: Map, label: "Mission Planning & Monitoring" },
  { icon: ShieldCheck, label: "Secured Deployment" },
  { icon: Layers, label: "Map Preparation" },
];

const performance = [
  {
    icon: Mountain,
    title: "Terrain suitability",
    body: "Deployed in flat plain desert, dunes, mountains…",
  },
  {
    icon: Target,
    title: "Velocity & position accuracy",
    body: "Low average errors over heterogeneous terrains (50 m position error at 1000 m AGL).",
  },
  {
    icon: Camera,
    title: "Payload availability",
    body: "EO/IR sensors seamlessly integrated across your fleet.",
  },
  {
    icon: Plane,
    title: "Flight envelope",
    body: "Up to platform limitations & onboard maps available.",
  },
  {
    icon: Box,
    title: "Size & weight",
    body: "Small and light to fit your platform (210 × 155 × 125 mm | 1.7 kg).",
  },
  {
    icon: Compass,
    title: "Navigation capabilities",
    body: "Resilient in clouds and fog, both day and night.",
  },
];

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-end">
      <div>
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] md:text-5xl">{title}</h2>
      </div>
      {children && <p className="text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3 text-ink-foreground">
            <img src={tiiLogo.url} alt="Technology Innovation Institute" className="h-8 w-auto" />
            <span className="h-6 w-px bg-ink-foreground/30" />
            <span className="font-display text-lg font-semibold">GNSSLess</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-ink pt-16 text-ink-foreground">
        <img src={heroImg.url} alt="UAV flying over the desert at altitude" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
          <p className="eyebrow text-ink-muted">Visual-based navigation for UAVs</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.95] md:text-7xl">
            GNSS<span className="text-sand">Less</span>
            <br />
            Navigation
          </h1>
          <p className="mt-6 text-2xl font-light text-ink-foreground/90 md:text-3xl">Enabling GNSS denied environments</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            A camera-based navigation unit for UAVs flying high and far. When satellite signals are jammed,
            spoofed or simply unavailable, GNSSLess matches what it sees on the ground against onboard maps
            to keep the aircraft on track.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#performance" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
              See performance <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="rounded-md border border-ink-foreground/40 px-6 py-3 font-medium transition-colors hover:bg-ink-foreground/10">
              Contact us
            </a>
          </div>
        </div>
        <div className="relative w-full border-t border-ink-foreground/10 bg-ink/70 backdrop-blur">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-6 px-6 py-6 md:grid-cols-4">
            {[
              [`${specs.minimumAltitudeAglM}–${specs.maximumAltitudeAglM.toLocaleString("en-US")} m AGL`, "desert · mountains · urban"],
              ["Day & night", "50 m position error"],
              ["Non-visual enabled", "Resilient in clouds and fog"],
              ["Easy deployment", "Georeferenced map & flight plan req."],
            ].map(([v, l]) => (
              <div key={v}>
                <div className="text-base font-semibold">{v}</div>
                <div className="mt-1 text-sm leading-relaxed text-ink-muted">{l}</div>
              </div>
            ))}
          </div>
          <div className="h-0.5 bg-gradient-line" />
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="mx-auto max-w-6xl px-6 py-28">
        <SectionHead eyebrow="Overview" title={<>Eyes on the ground when the sky goes silent</>}>
          Long-range UAVs depend on satellite positioning. GNSSLess removes that dependency: a downward-looking
          camera and onboard maps give the autopilot a reliable position and velocity over desert, dunes and
          mountains, at high altitude.
        </SectionHead>
        <div className="mt-20 grid items-center gap-16 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border-2 border-primary/70" />
            <div className="absolute inset-8 rounded-full bg-primary-soft" />
            <img src={unitImg.url} alt="GNSSLess Visual Navigation Unit" className="relative h-full w-full object-contain p-10 drop-shadow-2xl" />
          </div>
          <div>
            <p className="eyebrow text-primary">The hardware</p>
            <h3 className="mt-4 text-3xl font-extrabold">Visual Navigation Unit</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A compact, rugged box that fits your platform and runs navigation fully on board.
            </p>
            <p className="eyebrow mt-8 text-primary">SWaP & interfaces</p>
            <dl className="mt-4 divide-y overflow-hidden rounded-lg border">
              {[
                ["Size", `${specs.dimensionsMm.join(" × ")} mm`],
                ["Weight", `${specs.weightKg} kg`],
                ["Power", `${specs.powerW} W`],
                ["Interfaces", `Designed for ${specs.interface}`],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 bg-card px-5 py-4">
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="font-semibold text-primary">
                    {value}
                    {label === "Interfaces" && specs.customizableCommunications && (
                      <span className="mt-1 block text-xs font-normal leading-relaxed text-muted-foreground">Customizable for any communications protocol.</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section id="missions" className="relative overflow-hidden bg-ink py-28 text-ink-foreground">
        <div className="absolute inset-0 hud-grid" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="eyebrow text-sand">Missions</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl">
            A single system, limitless possibilities
          </h2>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {missions.map(({ icon: I, label }) => (
              <div key={label} className="group rounded-lg border border-ink-foreground/15 bg-ink/60 p-6 transition-colors hover:border-sand/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary/20">
                  <I className="h-6 w-6 text-ink-foreground" />
                </div>
                <p className="mt-6 font-display text-lg font-semibold">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 inline-block rounded-md bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest">
            And more
          </p>

          <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-sand">Ground software</p>
              <h3 className="mt-4 text-3xl font-extrabold">From the laptop to the mission</h3>
              <ul className="mt-8 space-y-5">
                {platform.map(({ icon: I, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/20">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="text-lg">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-8 border-ink-foreground/10 bg-ink-foreground/5 shadow-elegant">
              <img
                src={gcsImg}
                alt="Rugged ground control station showing map upload, mask generation and flight plan"
                className="w-full rounded"
                loading="lazy"
                width={1600}
                height={1008}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="mx-auto max-w-6xl px-6 py-28">
        <SectionHead eyebrow="System performance" title="Built for the long haul">
          Proven over heterogeneous terrain, from flat plain desert to dunes and mountains.
        </SectionHead>
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-3">
          {performance.map(({ icon: I, title, body }) => (
            <div key={title} className="bg-card p-8 transition-colors hover:bg-primary-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary text-primary">
                <I className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold uppercase tracking-tight text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dunes band */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={dunesImg.url} alt="UAV over desert dunes" className="absolute inset-0 h-full w-full scale-110 object-cover object-bottom animate-drift" />
      </section>

      <Contact />

      <footer className="border-t border-ink-foreground/10 bg-ink py-8 text-ink-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm">
          <img src={tiiLogo.url} alt="Technology Innovation Institute" className="h-8 w-auto opacity-80" />
          <p>© {new Date().getFullYear()} Technology Innovation Institute, Abu Dhabi</p>
        </div>
      </footer>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `GNSSLess Navigation enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const field = "w-full rounded-md border border-ink-foreground/20 bg-ink-foreground/5 px-4 py-3 text-ink-foreground placeholder:text-ink-muted focus:border-sand focus:outline-none";
  return (
    <section id="contact" className="bg-ink py-28 text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="eyebrow text-sand">Contact</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] md:text-5xl">Put GNSSLess on your platform</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            We work with UAV manufacturers, integrators and partners on evaluation units, flight tests and
            integration. Tell us about your vehicle and mission and we'll get back to you.
          </p>
          <p className="mt-8 font-semibold">Technology Innovation Institute, Abu Dhabi</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-flex items-center gap-2 text-sand hover:underline">
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input required placeholder="Your name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder="Company" className={field} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          <textarea rows={5} placeholder="Platform and mission" className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Send enquiry <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-ink-muted">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  );
}
