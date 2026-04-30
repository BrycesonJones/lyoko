"use client";

import { ArrowUpRight } from "lucide-react";

interface CTASectionProps {
  onInquiryClick?: () => void;
}

const CTASection = ({ onInquiryClick }: CTASectionProps = {}) => {
  const handleClick = () => {
    if (onInquiryClick) {
      onInquiryClick();
    } else {
      const event = new CustomEvent("openInquiryDrawer");
      window.dispatchEvent(event);
    }
  };
  return (
    <section className="py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-8xl md:text-9xl font-black tracking-tight mb-24 text-white"
            style={{ lineHeight: "1.1" }}
          >
            LYOKO
          </h1>

          <div className="mt-16 flex justify-center">
            <button
              onClick={handleClick}
              className="cta-btn px-8 py-4 text-lg font-bold rounded-xl flex items-center gap-2"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-btn {
          background: #00FF00;
          color: black;
          transition: all 0.3s ease;
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

export default CTASection;
