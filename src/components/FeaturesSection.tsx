'use client'

import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Lock, BarChart3 } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: "Quote Calculator Flow",
      description: "Guide visitors through a simple estimate path before they book or contact.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Plan Comparison",
      description: "Show tiered packages, pricing anchors, and clear feature differences.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Booking CTA System",
      description: "Make it obvious what happens after the quote: book, call, or request follow-up.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Funnel",
      description: "Keep the quote and booking experience easy to scan on smaller screens.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Lock,
      title: "Trust and Assurance",
      description: "Add guarantees, social proof, and response-time expectations where they matter.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Conversion Signals",
      description: "Use stats and structured content to show the page is built to convert, not just look good.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Features that support a booking decision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This section shows how a landing page can answer pricing, trust, mobile usability,
              and next-step questions in one place.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Ready to see the quote flow in action?
            </p>
            <a href="/demo" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Quote Flow
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}