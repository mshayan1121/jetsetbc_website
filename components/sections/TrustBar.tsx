"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "500+", label: "companies served", icon: Building2 },
  { value: "1,000+", label: "professionals hosted", icon: Users },
  { value: "10+", label: "years combined experience", icon: Award },
  { value: "95%", label: "client retention rate", icon: TrendingUp },
];

const TrustBar = ({ className = "" }: { className?: string }) => {
  return (
    <section
      className={`py-8 sm:py-10 bg-cream-100/80 border-y border-cream-200 ${className}`}
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-navy-600 font-body">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
