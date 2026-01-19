'use client'

import { PageLayout } from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Lock, BarChart3, Zap, Shield, Users, Settings } from "lucide-react";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      icon: Code,
      title: "Advanced Development Tools",
      description: "Powerful IDE with intelligent code completion, debugging, and version control integration.",
      gradient: "from-blue-500 to-cyan-500",
      details: [
        "Real-time collaboration",
        "Multi-language support",
        "Integrated testing framework",
        "Performance monitoring"
      ]
    },
    {
      icon: Database,
      title: "Scalable Database Solutions",
      description: "High-performance databases that grow with your business, ensuring data integrity and speed.",
      gradient: "from-green-500 to-emerald-500",
      details: [
        "Auto-scaling capabilities",
        "Real-time synchronization",
        "Advanced query optimization",
        "Backup and recovery"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Deploy anywhere with our cloud-first approach, ensuring reliability and global reach.",
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Multi-cloud deployment",
        "Auto-scaling infrastructure",
        "Global CDN integration",
        "Zero-downtime updates"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive interfaces that work perfectly across all devices and screen sizes.",
      gradient: "from-orange-500 to-red-500",
      details: [
        "Progressive Web App support",
        "Offline functionality",
        "Touch-optimized interfaces",
        "Cross-platform compatibility"
      ]
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      gradient: "from-indigo-500 to-blue-500",
      details: [
        "End-to-end encryption",
        "SOC 2 compliance",
        "Two-factor authentication",
        "Regular security audits"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and reporting to help you make data-driven decisions.",
      gradient: "from-teal-500 to-green-500",
      details: [
        "Real-time dashboards",
        "Custom report builder",
        "Predictive analytics",
        "Data export capabilities"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with sub-second response times"
    },
    {
      icon: Shield,
      title: "99.9% Uptime SLA",
      description: "Enterprise-grade reliability you can depend on"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for seamless team communication"
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect with your favorite tools and services"
    }
  ];

  return (
    <PageLayout>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Powerful Features for Modern Teams
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to build, deploy, and scale your applications with confidence.
                Our comprehensive platform covers all aspects of modern software development.
              </p>
            </motion.div>

            {/* Main Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Additional Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of teams already using our platform to build better, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}