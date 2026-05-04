import Logo from "@/components/Logo";
import ContourBackground from "@/components/ContourBackground";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--abyss)]">
      <ContourBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
        <header className="flex items-center justify-between">
          <Logo width={180} />
          <span className="rounded-full border border-white/10 bg-[#0F2A33]/70 px-3 py-1 text-xs uppercase tracking-widest text-[color:var(--dust)] backdrop-blur">
            Coming soon
          </span>
        </header>

        <section className="flex flex-1 flex-col items-start justify-center py-16">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--moss)]">
            GisTrip · 2026
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-balance sm:text-6xl md:text-7xl">
            Plan the route.
            <br />
            <span className="text-gradient">Live the trip.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--dust)]">
            A trip planner that lives on the map. Plan routes with your group,
            see everyone&apos;s edits, skip the Google Doc.
          </p>

          <div className="mt-10 w-full">
            <SubscribeForm />
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/5 pt-6 text-sm text-[color:var(--dust)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} GisTrip</span>
          <span className="font-mono text-xs">gistrip.com</span>
        </footer>
      </div>
    </main>
  );
}
