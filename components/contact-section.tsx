"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const email = "silasotsuka@gmail.com"
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contact from Portfolio`
  
  return (
    <section className="py-20 bg-gray-900 relative z-10" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a security concern or interested in working together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 p-8 rounded-lg border border-red-600/20 h-full hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-all duration-500">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a 
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-500 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <p className="text-red-600">+55 (87) 98806-7754</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-red-600">Petrolina, PE</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/KenjiXsS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 hover:bg-red-600/20 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/kenji-otsuka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 hover:bg-red-600/20 transition-colors"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://x.com/Kenji_XsS_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 hover:bg-red-600/20 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 p-8 rounded-lg border border-red-600/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-all duration-500">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Contact</h3>
              <p className="text-gray-400 mb-6">
                Click the button below to send me an email directly through Gmail.
              </p>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Open Gmail
                </a>
              </motion.div>

              <div className="mt-8 p-6 bg-gray-700/50 rounded-lg border border-red-500/10">
                <h4 className="text-white font-medium mb-2">Alternative Contact Methods</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Connect with me on LinkedIn</li>
                  <li>• Follow me on Twitter</li>
                  <li>• Check my projects on GitHub</li>
                  <li>• Or call me directly</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => {
          const x1 = (i % 4) * 25
          const x2 = ((i + 2) % 4) * 25
          const y1 = Math.floor(i / 4) * 50
          const y2 = (Math.floor(i / 4) + 1) * 50

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-red-500/40"
              initial={{
                x: `${x1}%`,
                y: `${y1}%`,
              }}
              animate={{
                x: `${x2}%`,
                y: `${y2}%`,
              }}
              transition={{
                duration: 10 + (i * 2),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )
        })}
      </div>
    </section>
  )
}
