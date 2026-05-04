"use client";

import { useState } from "react";

const WEB3FORMS_KEY = "96f9558d-4a27-4c08-b698-7e1e327f4dff";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state.kind === "loading") return;

    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_RE.test(trimmed)) {
      setState({ kind: "error", message: "That email doesn't look right." });
      return;
    }

    if (botcheck) {
      setState({ kind: "success" });
      setEmail("");
      return;
    }

    setState({ kind: "loading" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New GisTrip signup",
          from_name: "GisTrip Coming Soon",
          email: trimmed,
          message: `New signup: ${trimmed}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setState({ kind: "success" });
        setEmail("");
      } else {
        setState({
          kind: "error",
          message: "Something went wrong. Try again?",
        });
      }
    } catch {
      setState({ kind: "error", message: "Network error. Try again?" });
    }
  }

  const disabled = state.kind === "loading";

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          className="flex-1 rounded-lg border border-white/10 bg-[#0F2A33] px-4 py-3 text-[15px] text-[color:var(--sand)] placeholder:text-[color:var(--dust)] outline-none transition focus:border-[color:var(--moss)] focus:ring-2 focus:ring-[color:var(--moss)]/30 disabled:opacity-60"
        />
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={botcheck}
          onChange={(e) => setBotcheck(e.target.value)}
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={disabled}
          className="rounded-lg bg-[color:var(--coral)] px-5 py-3 text-[15px] font-semibold text-[#1a0d0a] transition hover:brightness-110 active:brightness-95 disabled:opacity-60"
        >
          {state.kind === "loading" ? "Sending..." : "Notify me"}
        </button>
      </div>

      <div className="mt-3 min-h-[1.25rem] text-sm">
        {state.kind === "success" && (
          <p className="text-[color:var(--moss)]">
            You&apos;re in. We&apos;ll email you when GisTrip is live.
          </p>
        )}
        {state.kind === "error" && (
          <p className="text-[color:var(--coral)]">{state.message}</p>
        )}
      </div>
    </form>
  );
}
