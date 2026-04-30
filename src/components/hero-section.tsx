"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Development", "Consulting", "Education", "ōɅƎ∩Xß4Ꮍ)℞─⅂⊐⊏⊐"],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 80,
    deleteSpeed: 60,
  });
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide mb-6 leading-none">
            Lyoko <br className="hidden md:block" />
            <span className="text-[#00FF00]">
              {text}
              <Cursor cursorColor="#00FF00" />
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Democratize digital health, intelligence, and finance. Scale your enterprise leveraging AI systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
