"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Code, Server, Database, Wifi, Bug, FileCode, AlertTriangle, Key, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skills = [
    { 
      name: "Penetration Testing", 
      icon: Bug,
      description: "Expertise in identifying and exploiting security vulnerabilities",
      details: [
        "Web Application Security Testing",
        "Network Penetration Testing",
        "Mobile Application Security Assessment",
        "API Security Testing",
        "Social Engineering Assessment",
        "Vulnerability Assessment and Management"
      ]
    },
    { 
      name: "Network Security", 
      icon: Wifi,
      description: "Implementation and management of network security solutions",
      details: [
        "Firewall Configuration and Management",
        "IDS/IPS Implementation",
        "VPN Setup and Management",
        "Network Traffic Analysis",
        "Security Architecture Design",
        "Network Monitoring and Logging"
      ]
    },
    { 
      name: "Incident Response", 
      icon: AlertTriangle,
      description: "Handling and managing security incidents and breaches",
      details: [
        "Incident Detection and Analysis",
        "Malware Analysis",
        "Digital Forensics",
        "Threat Hunting",
        "Security Monitoring",
        "Incident Documentation and Reporting"
      ]
    },
    { 
      name: "Cryptography", 
      icon: Key,
      description: "Implementation of cryptographic solutions and protocols",
      details: [
        "Encryption Implementation",
        "Key Management",
        "Digital Signatures",
        "SSL/TLS Configuration",
        "Secure Communication Protocols",
        "Cryptographic Algorithm Analysis"
      ]
    },
    { 
      name: "Security Architecture", 
      icon: Shield,
      description: "Design and implementation of secure system architectures",
      details: [
        "Security Controls Design",
        "Zero Trust Architecture",
        "Cloud Security Architecture",
        "Identity and Access Management",
        "Security Policy Development",
        "Risk Assessment and Management"
      ]
    },
    { 
      name: "Database Security", 
      icon: Database,
      description: "Securing and hardening database systems",
      details: [
        "Database Access Control",
        "Data Encryption",
        "SQL Injection Prevention",
        "Audit Logging",
        "Backup and Recovery",
        "Database Hardening"
      ]
    },
    { 
      name: "Development", 
      icon: Code,
      description: "Secure software development and coding practices",
      details: [
        "Secure Coding Practices",
        "Code Review",
        "SAST/DAST Implementation",
        "CI/CD Security",
        "API Development",
        "Version Control"
      ]
    },
    { 
      name: "Access Management", 
      icon: Lock,
      description: "Implementation of access control and authentication systems",
      details: [
        "Identity Management",
        "Multi-factor Authentication",
        "Role-based Access Control",
        "Single Sign-On",
        "Privileged Access Management",
        "User Directory Services"
      ]
    },
  ]

  const programmingLanguages = [
    {
      name: "C/C++",
      description: "System-level programming and performance-critical applications",
      details: [
        "System Programming",
        "Memory Management",
        "Performance Optimization",
        "Cross-platform Development",
        "STL and Modern C++",
        "Network Programming"
      ]
    },
    {
      name: "Python",
      description: "Automation, security tools, and backend development",
      details: [
        "Security Tool Development",
        "Data Analysis",
        "Web Frameworks (Django/Flask)",
        "Automation Scripts",
        "API Development",
        "Machine Learning Integration"
      ]
    },
    {
      name: "JavaScript",
      description: "Frontend and Node.js backend development",
      details: [
        "React/Next.js Development",
        "Node.js Backend",
        "API Integration",
        "DOM Manipulation",
        "Modern ES6+ Features",
        "Security Best Practices"
      ]
    },
    {
      name: "HTML/CSS",
      description: "Web development and UI design",
      details: [
        "Responsive Design",
        "CSS Frameworks",
        "Modern Layout Techniques",
        "Web Accessibility",
        "CSS Animations",
        "Cross-browser Compatibility"
      ]
    },
    {
      name: "Bash",
      description: "Shell scripting and automation",
      details: [
        "System Administration",
        "Process Automation",
        "Text Processing",
        "System Monitoring",
        "Security Scripts",
        "Task Scheduling"
      ]
    },
    {
      name: "PowerShell",
      description: "Windows automation and system administration",
      details: [
        "Windows Administration",
        "Active Directory Management",
        "Security Automation",
        "System Monitoring",
        "Script Development",
        "Task Automation"
      ]
    },
    {
      name: "SQL",
      description: "Database management and querying",
      details: [
        "Database Design",
        "Query Optimization",
        "Data Analysis",
        "Database Security",
        "Stored Procedures",
        "Database Administration"
      ]
    },
    {
      name: "Go",
      description: "Modern systems programming and cloud applications",
      details: [
        "Concurrent Programming",
        "Network Services",
        "Cloud Native Development",
        "Performance Optimization",
        "API Development",
        "System Tools"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-900 relative z-10" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical <span className="text-red-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise spans across multiple areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 border border-red-600/20 hover:border-red-600/50 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedSkill(skill.name)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-red-600/20 hover:border-red-600/50 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedSkill(lang.name)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">{lang.name}</h3>
                  <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <p className="text-gray-400 text-sm">{lang.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal para detalhes */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gray-800 rounded-lg p-6 max-w-lg w-full border border-red-600/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                {selectedSkill}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {(skills.find(s => s.name === selectedSkill)?.details || 
                programmingLanguages.find(l => l.name === selectedSkill)?.details)?.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <p className="text-gray-300">{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-600/30"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  )
}
