import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative mx-auto mt-8 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-20 mt-20">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop"
            alt="Avatar"
            className="h-32 w-32 rounded-full border border-white/10 object-cover"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-zinc-200 backdrop-blur whitespace-nowrap">
            Unverified Expert
          </div>
        </div>

        <h1 className="max-w-3xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
          Tech nerd, <span className="text-cyan-300">science</span> enthusiast
        </h1>

        <p className="mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">
          Living and learning, has not yet figured out what to, trying to fail
          in as many fields as possible
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="#contact"
            className="running-stroke px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900 relative z-10"
          >
            Contact me
          </a>
          <a
            href="#blog"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors"
          >
            My blog
          </a>
        </div>
      </motion.div>
    </section>
  );
}
