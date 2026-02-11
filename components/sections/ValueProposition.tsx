"use client";

import React from "react";
import { motion } from "framer-motion";

const ValueProposition = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-6 leading-tight"
        >
          Everything You Need to Run Your Business — In One Place
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gold-600 font-body font-medium text-lg mb-4"
        >
          We serve startups, SMEs, and international companies looking for flexible workspace solutions in Dubai.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-navy-600 font-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          From private offices and coworking to virtual Ejari and business setup, Jetset makes it easy to operate professionally in Dubai without unnecessary costs or delays.
        </motion.p>
      </div>
    </section>
  );
};

export default ValueProposition;
