import React, { useState } from "react";
import { motion } from "framer-motion";

const workImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515378791036-0648a814c963?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516110833967-0b5656ca893a?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=400&auto=format&fit=crop"
];

export function HireMeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24">
      <div className="flex justify-center">
        <motion.div
          className="hire-me-container relative overflow-hidden rounded-full px-48 py-24 bg-gradient-to-br from-zinc-800/60 via-zinc-700/60 to-black/60 backdrop-blur-md border border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background text */}
          <div className="text-center mb-10 relative z-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Upgrade your web
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              presence with Framer
            </h2>
          </div>

          {/* Hire Me Button - Centered */}
          <div className="flex justify-center mb-8 relative z-20">
            <div className="relative">
              {/* Glow effect behind button */}
              <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-xl scale-125"></div>
              <div className="absolute inset-0 rounded-full bg-orange-400/30 blur-2xl scale-150"></div>
              
              <motion.button
                className="hire-me-button relative overflow-hidden rounded-full px-8 py-4 text-lg font-medium text-white bg-orange-600 hover:bg-orange-500 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">✦</span>
                <span>Hire Me on Contra</span>
              </motion.button>
            </div>
          </div>

          {/* Profile info */}
          <div className="flex items-center justify-center gap-3 text-white relative z-20">
            <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=32&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-zinc-200">Your Name - Framer Developer</span>
          </div>
          
          {/* Background image grid with alternating column animation */}
          <motion.div
            className="absolute inset-0 grid grid-cols-4 gap-2 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {[0, 1, 2, 3].map((colIndex) => (
              <div key={colIndex} className="flex flex-col gap-2">
                {Array.from({ length: 6 }, (_, imgIndex) => {
                  const imageIndex = (colIndex * 6 + imgIndex) % workImages.length;
                  return (
                    <motion.div
                      key={`${colIndex}-${imgIndex}`}
                      className="relative overflow-hidden rounded-lg h-16"
                      initial={{ 
                        y: colIndex % 2 === 0 ? -50 : 50,
                        opacity: 0 
                      }}
                      animate={{ 
                        y: isHovered ? (colIndex % 2 === 0 ? 0 : 0) : (colIndex % 2 === 0 ? -50 : 50),
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ 
                        duration: 0.6,
                        delay: imgIndex * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <img
                        src={workImages[imageIndex]}
                        alt={`Work ${imageIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>

          {/* Overlay to keep content readable but lighter */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-zinc-800/70 via-zinc-700/70 to-black/70 pointer-events-none" 
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
