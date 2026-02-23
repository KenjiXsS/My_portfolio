"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Code, Terminal, Cpu, Database } from "lucide-react"
import { Button } from "./ui/button"
import { TypeAnimation } from "react-type-animation"
import { VisitorCounter } from "./visitor-counter"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
        }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-block mb-2 px-3 py-1 border border-red-600 rounded-full text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Engineer & Red Team Jr Analyst
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Silas <span className="text-red-500">Kenji</span>
            </motion.h1>
            <motion.div
              className="text-xl mb-6 text-gray-300 h-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  "Protecting digital assets through innovative security solutions.",
                  2000,
                  "Developing secure applications with a focus on privacy.",
                  2000,
                  "Implementing robust encryption and monitoring systems.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button className="bg-red-600 hover:bg-red-700 text-black" onClick={() => scrollToSection('projects')}>View Projects</Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-900/20" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </motion.div>
            <motion.div
              className="mt-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <VisitorCounter />
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80">
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-red-600/30" />
              </motion.div>

              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-3/4 h-3/4 rounded-full border-4 border-dashed border-red-600/50" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/80 p-6 rounded-full border-2 border-red-600">
                  <Shield className="w-20 h-20 text-red-600" />
                </div>
              </div>

              <motion.div
                className="absolute"
                style={{ top: "10%", left: "10%" }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="bg-black p-3 rounded-full border border-red-600">
                  <Lock className="w-8 h-8 text-red-500" />
                </div>
              </motion.div>

              <motion.div
                className="absolute"
                style={{ bottom: "15%", right: "10%" }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="bg-black p-3 rounded-full border border-red-600">
                  <Code className="w-8 h-8 text-red-500" />
                </div>
              </motion.div>

              <motion.div
                className="absolute"
                style={{ bottom: "10%", left: "20%" }}
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="bg-black p-3 rounded-full border border-red-600">
                  <Terminal className="w-8 h-8 text-red-500" />
                </div>
              </motion.div>

              <motion.div
                className="absolute"
                style={{ top: "20%", right: "15%" }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="bg-black p-3 rounded-full border border-red-600">
                  <Cpu className="w-8 h-8 text-red-500" />
                </div>
              </motion.div>

              <motion.div
                className="absolute"
                style={{ top: "60%", right: "25%" }}
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <div className="bg-black p-3 rounded-full border border-red-600">
                  <Database className="w-8 h-8 text-red-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Binary code floating effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-600/20 text-xs font-mono whitespace-nowrap"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -100,
              opacity: 0.1 + Math.random() * 0.3,
            }}
            animate={{
              y: window.innerHeight + 100,
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 20 })
              .map(() => (Math.random() > 0.5 ? "1" : "0"))
              .join(" ")}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
