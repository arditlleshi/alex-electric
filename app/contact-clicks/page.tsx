import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { getContactClickLog, isContactClickBlobConfigured } from "@/lib/contact-click-store";
import {
  CONTACT_CLICK_VIEWER_COOKIE_NAME,
  isAuthorizedViewerSession,
  isContactClickViewerConfigured,
} from "@/lib/contact-click-viewer";
import { lockContactClicks, unlockContactClicks } from "./actions";

export const metadata: Metadata = {
  title: "Contact Click Log",
  robots: {
    index: false,
    follow: false,
  },
};

type ContactClicksPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

function ContactClicksFallback() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
      <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
        Private Route
      </p>
      <h1 className="mt-3 text-3xl font-bold">Contact Click Log</h1>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Po ngarkohet log-u i klikimeve...
      </p>
    </div>
  );
}

function StatusMessage({ status }: { status?: string }) {
  if (status === "invalid") {
    return (
      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        Secreti nuk ishte i sakte.
      </p>
    );
  }

  if (status === "not-configured") {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        Duhet te shtosh `CONTACT_CLICK_VIEWER_SECRET` ne Vercel para se ta hapesh kete faqe.
      </p>
    );
  }

  return null;
}

async function ContactClicksContent({
  searchParams,
}: ContactClicksPageProps) {
  const cookieStore = await cookies();
  const { status } = await searchParams;
  const isAuthorized = isAuthorizedViewerSession(
    cookieStore.get(CONTACT_CLICK_VIEWER_COOKIE_NAME)?.value,
  );

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-28 text-slate-100">
        <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
            Private Route
          </p>
          <h1 className="mt-3 text-3xl font-bold">Contact Click Log</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Vendos secretin per te pare JSON log-un e klikimeve te phone, email dhe WhatsApp.
          </p>
          <div className="mt-6">
            <StatusMessage status={status} />
          </div>
          <form action={unlockContactClicks} className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-200" htmlFor="secret">
              Viewer secret
            </label>
            <input
              id="secret"
              name="secret"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-blue-400"
              placeholder="CONTACT_CLICK_VIEWER_SECRET"
            />
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
              Open Log
            </button>
          </form>
        </section>
      </main>
    );
  }

  const [log, isBlobConfigured, isViewerConfigured] = await Promise.all([
    getContactClickLog(),
    Promise.resolve(isContactClickBlobConfigured()),
    Promise.resolve(isContactClickViewerConfigured()),
  ]);

  return (
    <section className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
            Private Route
          </p>
          <h1 className="mt-3 text-3xl font-bold">Contact Click Log</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Kjo faqe lexon JSON-in privat nga Vercel Blob dhe e shfaq server-side.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact-clicks/data"
            className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-300">
            Open Raw JSON
          </Link>
          <form action={lockContactClicks}>
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
              Lock
            </button>
          </form>
        </div>
      </div>

      {(!isBlobConfigured || !isViewerConfigured) && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Konfigurimi mungon.
          {!isBlobConfigured && " Shto `BLOB_READ_WRITE_TOKEN` ne Vercel."}
          {!isViewerConfigured &&
            " Shto `CONTACT_CLICK_VIEWER_SECRET` ne Vercel."}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Phone
          </p>
          <p className="mt-3 text-3xl font-bold">{log.totals.phone}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Email
          </p>
          <p className="mt-3 text-3xl font-bold">{log.totals.email}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            WhatsApp
          </p>
          <p className="mt-3 text-3xl font-bold">{log.totals.whatsapp}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
        <p className="text-sm text-slate-400">
          Updated Tirana time: {log.updatedAtTirana ?? "No events yet"}
        </p>
        <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-slate-200">
          {JSON.stringify(log, null, 2)}
        </pre>
      </div>
    </section>
  );
}

export default function ContactClicksPage({
  searchParams,
}: ContactClicksPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-slate-100">
      <Suspense fallback={<ContactClicksFallback />}>
        <ContactClicksContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
