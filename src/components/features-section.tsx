"use client";

import { ArrowUpRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-normal tracking-wide mb-16 text-center">
          Designed for Reliable AI Deployment
        </h2>
        <div className="flex justify-center">
          <button
            onClick={() => {
              const event = new CustomEvent("openInquiryDrawer");
              window.dispatchEvent(event);
            }}
            className="cta-btn px-8 py-4 text-lg font-bold rounded-xl flex items-center gap-2"
          >
            Let&apos;s build together
            <ArrowUpRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-btn {
          background: #00FF00;
          transition: all 0.3s ease;
          color: black;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
          background: #00DD00;
        }
      `}} />
    </section>
  );
};

export default FeaturesSection;
