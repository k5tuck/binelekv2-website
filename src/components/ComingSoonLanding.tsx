"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Database, Zap, Brain, Globe } from "lucide-react"

export function ComingSoonLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 210, 64, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FFD240] rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-[#0A0A0A] rounded-sm" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Binelek</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/product" className="text-sm text-gray-400 hover:text-[#FFD240] transition-colors duration-200">
            Platform
          </Link>
          <Link href="/solutions" className="text-sm text-gray-400 hover:text-[#FFD240] transition-colors duration-200">
            Solutions
          </Link>
          <Link href="/pricing" className="text-sm text-gray-400 hover:text-[#FFD240] transition-colors duration-200">
            Pricing
          </Link>
          <Link
            href="/demo"
            className="px-5 py-2 bg-[#FFD240] text-[#0A0A0A] text-sm font-semibold rounded-sm hover:bg-[#FFC700] transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,210,64,0.3)]"
          >
            Schedule Demo
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-48">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD240]/20 bg-[#FFD240]/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#FFD240] animate-pulse" />
            <span className="text-sm text-[#FFD240] font-medium">AI-Powered Command Center for SMBs</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-semibold mb-6 leading-[1.1] tracking-tight"
          >
            <span className="text-white">Turn Data Into</span>
            <br />
            <span className="text-[#FFD240]">Decisive Action</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
            style={{ color: 'rgb(179, 179, 179)' }}
          >
            Automate operations, understand your data, secure your business, and outsmart competition — all from one AI-powered platform built for growing businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#FFD240] text-[#0A0A0A] font-semibold rounded-sm hover:bg-[#FFC700] transition-colors duration-200 inline-block"
            >
              Schedule Demo
            </Link>
            <Link
              href="/resources/videos"
              className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-sm hover:border-[#FFD240] hover:text-[#FFD240] transition-colors duration-200 inline-block"
            >
              Watch Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-800"
          >
            <div>
              <div className="text-4xl font-bold text-[#FFD240] mb-2">4</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Powerful Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD240] mb-2">10+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Integrations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD240] mb-2">1</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Unified Platform</div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 max-w-7xl mx-auto px-8 pb-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Ops Copilot", Icon: Zap, desc: "Automate tasks and workflows with natural language" },
            { title: "Mini Foundry", Icon: Database, desc: "Beautiful dashboards and AI-powered insights" },
            { title: "Security Scanner", Icon: Brain, desc: "Enterprise security made simple" },
            { title: "Marketplace Intel", Icon: Globe, desc: "Real-time competitive intelligence" },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              className="relative group"
            >
              <Link href={`/product/${feature.title.toLowerCase().replace(' ', '-')}`}>
                <div className="h-full p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-lg hover:border-[#FFD240]/40 transition-all duration-300">
                  <feature.Icon className="w-8 h-8 text-[#FFD240] mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgb(128, 128, 128)' }}>{feature.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Product Screenshot Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-8 pb-40"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium text-white mb-4">
              One Platform, Not Ten Tabs
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgb(179, 179, 179)' }}>
              Connect your existing tools and see everything in one place. No technical setup required.
            </p>
            <ul className="space-y-4">
              {[
                "Connect Shopify, QuickBooks, Stripe, HubSpot & more",
                "Ask questions in plain English, get instant answers",
                "Automate workflows without complicated flowcharts",
                "Enterprise security included in every plan"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD240]/10 border border-[#FFD240]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#FFD240]" />
                  </div>
                  <span style={{ color: 'rgb(179, 179, 179)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* Placeholder for product screenshot */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <Database className="w-16 h-16 text-[#FFD240] mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-gray-500">Product Screenshot</p>
                <p className="text-sm text-gray-600 mt-2">Dashboard Interface</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Industries Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-8 pb-40"
      >
        <h2 className="text-3xl font-medium text-white mb-12">
          Built for Growing Businesses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "E-commerce", "Retail", "Professional Services", "SaaS",
            "Agencies", "Consultants", "Small Manufacturers", "Service Providers"
          ].map((industry, i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-sm text-center text-sm hover:border-[#FFD240]/40 transition-all duration-200 cursor-pointer"
              style={{ color: 'rgb(179, 179, 179)' }}
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 max-w-7xl mx-auto px-8 pb-20"
      >
        <div className="relative overflow-hidden p-12 bg-gradient-to-br from-[#FFD240] to-[#FFC700] rounded-xl">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-[#0A0A0A]/80 mb-8">Schedule a demo and see Binelek in action.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                className="px-8 py-4 bg-[#0A0A0A] text-[#FFD240] font-semibold rounded-sm hover:bg-black transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] inline-block"
              >
                Schedule Demo
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold rounded-sm hover:bg-[#0A0A0A] hover:text-[#FFD240] transition-all duration-200 inline-block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Simple Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">© 2025 Binelek. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#FFD240] transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-[#FFD240] transition-colors duration-200">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-[#FFD240] transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
