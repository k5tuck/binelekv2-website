"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { EmailSignup } from "./EmailSignup"

export function ComingSoonLanding() {
  const t = useTranslations("comingSoon")

  const features = [
    { label: "Ops Copilot", desc: t("feature1") },
    { label: "Mini Foundry", desc: t("feature2") },
    { label: "Security", desc: t("feature3") },
    { label: "Marketplace", desc: t("feature4") },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Subtle radial gradient - Emerald green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(40, 65, 57, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12"
        >
          <Image
            src="/logo-light.svg"
            alt="Binelek - The SMB AI Platform"
            width={180}
            height={54}
            className="h-14 w-auto"
            priority
          />
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-600/30 bg-primary-600/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
          <span className="text-sm text-primary-600 font-medium">{t("launching")}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="text-gray-900">{t("heroTitle")}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <p className="text-sm text-gray-500 mb-4">{t("features")}</p>
          <EmailSignup
            variant="hero"
            placeholder={t("emailPlaceholder")}
            buttonText={t("notifyMe")}
          />
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-sm font-medium text-primary-600 mb-1">{feature.label}</div>
              <div className="text-xs text-gray-500">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-sm text-gray-400"
        >
          &copy; 2025 Binelek. All rights reserved.
        </motion.div>
      </div>
    </main>
  )
}
