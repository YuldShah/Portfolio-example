import React from "react";
import { motion } from "framer-motion";

export function About() {
  const skills = [
    "UX Design", "UI Design", "Product Design", "Consulting", "Design Systems",
    "Front-End Development", "Workshops", "Design Sprint", "Interaction Design", "User Testing",
    "Usability Testing", "UX Research", "Leadership", "Mentoring", "No-Code", "+ More"
  ];

  const testimonials = [
    {
      company: "PerkUp",
      logo: "⚪", // Placeholder
      quote: "He consistently exceeds our expectations"
    },
    {
      company: "S",
      logo: "S", // Placeholder
      quote: "I recommend Goran whole-heartedly"
    },
    {
      company: "ISMS Connect",
      logo: "🛡️", // Placeholder
      quote: "Loved to work with Goran!"
    }
  ];

  return (
    <section className="mt-32 mb-32">
      {/* Bio Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg leading-relaxed text-zinc-300"
        >
          <p>
            Web designer and expert in{" "}
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-sm">
              UX/UI Design
            </span>{" "}
            with over
          </p>
          <p>
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-sm mx-2">
              15 years
            </span>{" "}
            of industry experience. Expertise extends to
          </p>
          <p>
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-sm mx-2">
              Framer Development
            </span>{" "}
            enabling him to create
          </p>
          <p>both aesthetically pleasing and easily implementable.</p>
          <p>
            Currently works as{" "}
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-sm mx-2">
              Product Designer
            </span>{" "}
            at FLYR Hospitality
          </p>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                {testimonial.logo}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">{testimonial.company}</h3>
            <p className="text-zinc-400 italic">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all duration-200 cursor-default border border-white/20"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
