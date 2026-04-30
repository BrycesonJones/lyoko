import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "About — Lyoko",
  description: "Lyoko is Democratizing Your Digital Space.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header isLoggedIn={false} />

      <main className="pt-24 pb-32 relative z-10">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide mb-16 leading-tight">
              Lyoko...Scale Your Enterprise,{" "}
              <span className="text-white">Democratize Your Digital Space</span>
            </h1>

            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>The power is not the technology itself.</p>

              <p>
                The power is in commandeering the technology for use in ways that will democratize
                the intelligence for everyone.
              </p>

              <p>With knowledge in dozens of tools,</p>

              <p>The expertise is what matters.</p>

              <p>The drive to create bespoke intelligent systems is what matters.</p>

              <p>Bringing democracy to all users of super-intelligence is what matters.</p>

              <p className="text-2xl md:text-3xl text-white pt-8">
                Lyoko is Democratizing Your Digital Space!
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
