import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[60vh] bg-[#f6f8fd] px-6 py-20 lg:px-10">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-[2rem] border border-slate-200 bg-white px-6 py-16 text-center shadow-sm lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F18337]">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[#080F24] lg:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 lg:text-lg">
          The link you followed does not exist or has moved. Use the button below
          to return to the homepage and continue browsing Achilles Drill.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-[#080F24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#214198]"
          >
            Go home
          </Link>
          <Link
            to="/productsPage"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#080F24] transition hover:border-[#214198] hover:text-[#214198]"
          >
            View products
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
