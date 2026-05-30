import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Use of the site",
    body:
      "By accessing this website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the platform.",
  },
  {
    title: "Content and services",
    body:
      "The educational content, resources, and materials on this site are provided for general information. We may update, change, or remove content at any time without notice.",
  },
  {
    title: "Accounts and communication",
    body:
      "If you contact us or subscribe to updates, you agree to provide accurate information and receive service-related communications from Achilles Drill.",
  },
  {
    title: "Disclaimer",
    body:
      "We work to keep the website available and accurate, but we do not guarantee that all content will always be complete, current, or free from errors.",
  },
];

function Terms() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-[#eef4ff]">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#214198]">
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[#080F24] lg:text-6xl">
          Terms of Use
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 lg:text-lg">
          These terms explain how you may use the Achilles Drill website and the
          services we provide here. If you do not agree with these terms, please
          stop using the site.
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

        <div className="mt-12 rounded-3xl bg-[#080F24] p-8 text-white shadow-lg lg:p-10">
          <h2 className="text-2xl font-semibold">Questions about these terms?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 lg:text-base">
            Reach out to us at support@achillesdrill.com if you need clarification
            about account access, content usage, or any other part of the site.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contactus"
              className="rounded-full bg-[#F18337] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d96f24]"
            >
              Contact support
            </Link>
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

export default Terms;
