"use client"

import type React from "react"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
