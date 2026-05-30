import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information we collect",
    body:
      "We may collect information you provide directly, such as your name, email address, and messages submitted through forms or newsletter sign-ups.",
  },
  {
    title: "How we use information",
    body:
      "We use information to respond to requests, deliver updates, improve the website, and better understand how visitors interact with our content.",
  },
  {
    title: "Sharing and security",
    body:
      "We do not sell your personal information. We may share data with trusted service providers only when it is needed to operate the site or support our services.",
  },
  {
    title: "Your choices",
    body:
      "You can contact us to ask about the information we hold about you, request updates, or unsubscribe from newsletter communications at any time.",
  },
];

function Privacy() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4ff]">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#214198]">
          Privacy
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[#080F24] lg:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 lg:text-lg">
          This page explains how Achilles Drill collects, uses, and protects
          information when you interact with our website and communication forms.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#080F24]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 lg:text-base">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#dce6ff] bg-[#214198] p-8 text-white shadow-lg lg:p-10">
          <h2 className="text-2xl font-semibold">Need to update your data?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#e8efff] lg:text-base">
            Send us a message if you want to update contact details, ask about a
            request, or learn more about how we handle your information.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:support@achillesdrill.com"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#214198] transition hover:bg-slate-100"
            >
              Email support
            </a>
            <Link
              to="/"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
