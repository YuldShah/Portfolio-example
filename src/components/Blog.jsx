import React from "react";
import { motion } from "framer-motion";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      date: "Sep 5, 2023",
      title: "The Benefits of Using Free Framer Templates",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=400&auto=format&fit=crop",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      date: "Sep 4, 2023", 
      title: "How to Customize Free Framer Templates to Fit Your Brand",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop",
      gradient: "from-orange-300 to-pink-400"
    },
    {
      id: 3,
      date: "Sep 3, 2023",
      title: "Top 5 Free Framer Templates for Startups", 
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop",
      gradient: "from-red-500 to-red-700"
    }
  ];

  return (
    <section id="blog" className="mt-32 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12">Blog</h2>
        
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border-b border-white/10 last:border-b-0">
                {/* Blog post image */}
                <div className="relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-80`}></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                
                {/* Blog post content */}
                <div className="flex-1 space-y-2">
                  <p className="text-sm text-zinc-400">{post.date}</p>
                  <h3 className="text-xl font-medium text-white group-hover:text-zinc-200 transition-colors">
                    {post.title}
                  </h3>
                </div>
                
                {/* Arrow indicator */}
                <div className="text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 border border-white/20 hover:border-white/30">
            View More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
