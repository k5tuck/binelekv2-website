"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { EmailSignup } from "./EmailSignup"

export function ComingSoonLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 210, 64, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Image
            src="/logo.png"
            alt="Binelek Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-3xl font-bold text-white tracking-tight">Binelek</span>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD240]/30 bg-[#FFD240]/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#FFD240] animate-pulse" />
          <span className="text-sm text-[#FFD240] font-medium">Coming Soon</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Something </span>
          <span className="text-[#FFD240]">Big</span>
          <span className="text-white"> is Coming</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed"
        >
          The AI-powered command center for growing businesses.
          Connect your tools, automate operations, and make smarter decisions.
        </motion.p>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <p className="text-sm text-gray-500 mb-4">Be the first to know when we launch</p>
          <EmailSignup
            variant="hero"
            source="coming-soon"
            placeholder="Enter your email"
            buttonText="Notify Me"
            successMessage="You're on the list! We'll notify you when we launch."
          />
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-800"
        >
          {[
            { label: "Ops Copilot", desc: "AI Automation" },
            { label: "Mini Foundry", desc: "Smart Analytics" },
            { label: "Security", desc: "Enterprise Grade" },
            { label: "Marketplace", desc: "Competitive Intel" },
          ].map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-sm font-medium text-[#FFD240] mb-1">{feature.label}</div>
              <div className="text-xs text-gray-600">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-sm text-gray-600"
        >
          &copy; 2025 Binelek. All rights reserved.
        </motion.div>
      </div>
    </main>
  )
}
