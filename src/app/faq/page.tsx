import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import FaqClient from "@/components/faq/faq-client";

export const metadata = {
  title: "FAQ — Lyoko",
  description: "Ask a question. Browse the Lyoko question pool.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header isLoggedIn={false} />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Ask A Question</h1>
              <p className="text-gray-400 text-lg">
                Get answers about AI, automation, and using Lyoko.
              </p>
            </header>
            <FaqClient />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
