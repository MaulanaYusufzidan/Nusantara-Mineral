import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="flex min-h-screen items-center justify-center bg-charcoal px-6 text-center">
          <div className="max-w-xl">
            <p className="font-body text-sm tracking-wide text-stone/70">
              {"Building a better future"}
            </p>
            <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
              Nusantara Mineral
            </h1>
            <p className="mt-4 font-body text-stone/70">
              Hero section coming next — navbar is live and turns solid on
              scroll.
            </p>
          </div>
        </section>
        <section className="flex min-h-[60vh] items-center justify-center bg-stone px-6 text-center">
          <p className="font-body text-charcoal-soft">
            More sections are built one stage at a time.
          </p>
        </section>
      </main>
    </>
  );
}
