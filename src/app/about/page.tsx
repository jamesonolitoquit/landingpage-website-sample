'use client'

import { PageLayout } from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Target, Users, Award, Heart, Globe, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that solve real problems."
    },
    {
      icon: Users,
      title: "Customer Centric",
      description: "Our customers' success is our success. We build everything with their needs in mind."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our diverse team brings passion, creativity, and expertise to every project."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Available" },
    { number: "150+", label: "Team Members" }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize software development workflows."
    },
    {
      year: "2021",
      title: "First 1,000 Customers",
      description: "Rapid growth and validation of our platform's value proposition."
    },
    {
      year: "2022",
      title: "Enterprise Expansion",
      description: "Launched enterprise features and secured major corporate clients."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded to serve customers in over 50 countries worldwide."
    }
  ];

  return (
    <PageLayout>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About Our Company
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to empower teams worldwide with innovative tools
                that make software development faster, easier, and more collaborative.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to powerful development tools, enabling teams of all sizes
                  to build better software faster. We believe that great tools should be accessible
                  to everyone, from solo developers to enterprise teams.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A world where every developer has the tools they need to bring their ideas to life.
                  We envision a future where software development is seamless, collaborative, and
                  accessible to creators everywhere.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Journey
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <div className="flex-shrink-0 w-20 text-right">
                      <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Join Our Mission
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Be part of something bigger. Let's build the future of software development together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Schedule Demo
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}