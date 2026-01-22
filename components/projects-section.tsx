"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: "Cryptofile",
      description: "A set of tools for file encryption, including a secure file explorer and an automatic encryptor.",
      image: "/explorer.png?height=300&width=500",
      category: "security",
      tags: ["Python", "Cryptography", "GUI"],
      link: "https://github.com/KenjiXsS/Cryptofile",
      github: "https://github.com/KenjiXsS/Cryptofile",
      details: [
        "Modern and intuitive graphical interface",
        "Strong encryption using Fernet (AES-128-CBC)",
        "Password protection with PBKDF2HMAC",
        "Compatible with Windows and Linux",
        "Integrated file navigation",
        "Individual file encryption and decryption",
      ],
    },
    {
      id: 2,
      title: "Dexter",
      description:
        "A shell script with a collection of various security recon tools for CTFs and bugbounty",
      image: "/dexter.png?height=300&width=500",
      category: "monitoring",
      tags: ["Bash", "Docker", "Cybersecurity"],
      link: "https://github.com/KenjiXsS/Dexter_Toolkit",
      github: "https://github.com/KenjiXsS/Dexter_Toolkit",
      details: [
        "Run All: Runs all available tools automatically in sequence",
        "Nmap: Network scanning and service identification",
        "crt.sh: Subdomain discovery using public certificate transparency logs",
        "Subfinder: Automated subdomain enumeration",
        "Dirsearch: Discovery of hidden directories and files on web servers",
        "FFUF: Fast web content and parameter fuzzing",
        "XSStrike: Detection of potential Cross-Site Scripting (XSS) vulnerabilities",
        "HTTPX: HTTP and HTTPS service probing with basic information gathering",
        "RustScan: High-speed port scanning",
        "SQLMap: Automated SQL injection testing",
        "BloodHound: Active Directory relationship and attack path analysis",
        "Evil-WinRM: Remote access to Windows systems via WinRM",
        "Impacket: Network protocol tools for SMB, Kerberos, and authentication testing",
        "Interface Tools: Terminal cleanup and visual utilities"
      ],
    },
    {
      id: 3,
      title: "Task Manager API",
      description: "An HTTP API in C to manage tasks, integrated with a simple HTML/JavaScript frontend.",
      image: "/apic.png?height=300&width=500",
      category: "api",
      tags: ["C", "HTTP", "HTML/JS"],
      link: "https://github.com/KenjiXsS/API_C",
      github: "https://github.com/KenjiXsS/API_C",
      details: [
        "HTTP API in C using Winsock, running on port 8080 with support for multiple connections via threads",
        "Routes for listing, adding, completing, and deleting tasks",
        "Basic Authentication (username: user, password: pass)",
        "Persistence: Tasks are saved in tasks.txt",
        "Logging: Requests are logged in api_log.txt with timestamps",
        "CORS: Cross-origin request support with appropriate headers",
      ],
    },
    {
      id: 4,
      title: "Raspberry Pi Network Monitor",
      description: "An HTTP server on the Raspberry Pi Pico W to monitor networks and firewalls via Wi-Fi.",
      image: "/monitoring.png?height=300&width=500",
      category: "iot",
      tags: ["C", "Raspberry Pi", "IoT"],
      link: "https://github.com/KenjiXsS/ProjetoFinal_embtech",
      github: "https://github.com/KenjiXsS/ProjetoFinal_embtech",
      details: [
        "HTTP Server on Raspberry Pi Pico W",
        "Network Monitoring: Checks the Wi-Fi connection status and displays the IP address",
        "IP Blocking: Implements a blocklist of IPs to prevent unwanted access",
        "Device Monitoring: Check which devices are connected to the network and their status",
        "Firewall Management: Control and view the status of the network firewall",
      ],
    },
    {
      id: 5,
      title: "SINGED FastAPI",
      description:
        "A full-stack system for device management integrated with the INSS, using FastAPI and a responsive web interface.",
      image: "/singed.png?height=300&width=500",
      category: "web",
      tags: ["Python", "FastAPI", "HTML/CSS/JS"],
      link: "https://github.com/KenjiXsS/FastAPI-INSS",
      github: "https://github.com/KenjiXsS/FastAPI-INSS",
      details: [
        "Device Management: Registration, consultation, and administration of devices",
        "Interactive Web Interface: Dynamic pages for registration and visualization",
        "API with FastAPI: Endpoints for integration and communication between front-end and back-end",
        "Integrated Database: Uses MySQL with scripts and a logical model for table creation",
      ],
    },
    {
      id: 6,
      title: "SINGED Django",
      description: "Django version of the SINGED application for device management.",
      image: "/singed.png?height=300&width=500",
      category: "web",
      tags: ["Python", "Django", "HTML/CSS/JS"],
      link: "https://github.com/KenjiXsS/Singed_ButInDjango",
      github: "https://github.com/KenjiXsS/Singed_ButInDjango",
      details: [
        "Django-based web application for device management",
        "Modern UI with responsive design",
        "Authentication and authorization system",
        "Database integration with Django ORM",
        "RESTful API endpoints for data access",
      ],
    },
    {
      id: 7,
      title: "E-commerce Frutas",
      description:
        "A modern and responsive e-commerce platform specialized in fruits, developed with React, Node.js, and MongoDB.",
      image: "/frutas.png?height=300&width=500",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/KenjiXsS/E-commerce_Frutas",
      github: "https://github.com/KenjiXsS/E-commerce_Frutas",
      details: [
        "User authentication with JWT",
        "Product catalog with filtering and sorting",
        "Shopping cart functionality",
        "Responsive design for all devices",
        "MongoDB database integration",
        "RESTful API with Express",
      ],
    },
    {
      id: 8,
      title: "Go Scraper",
      description: "A Golang Webscraping tool built for studies",
      image: "/goscrap.png?height+300&width=500",
      category: "web",
      tags: ["Golang"],
      link: "https://github.com/KenjiXsS/Webscraping_GO",
      github: "https://github.com/KenjiXsS/Webscraping_GO",
      details: [
        "Receive a URL as the input",
        "Obtain the total number of pages and excracts products",
        "Saves data in CSV or JSON files",
      ],
    },
    {
      id: 9,
      title: "Neural network Visualizer",
      description: "A Anime.js web application to visualize neural networks learning progress",
      image: "/neural.png?height=300&width=500",
      category: "web",
      tags: ["Typescript", "Node.js", "HTML & CSS"],
      link: "https://networkvizualizer.vercel.app",
      github: "https://github.com/KenjiXsS/networkvizualizer",
      details: [
        "Uses the anime.js lib to demonstrate its usage",
        "Displays a neural network learning progress at a web application",
      ],
    },
    {
      id: 10,
      title: "Flashcard creation web tool",
      description: "A web tool to create flashcards for studying",
      image: "/flashcards.png?height=300&width=500",
      category: "web",
      tags: ["Typescript", "HTML & CSS"],
      link: "https://flashcards-lake-zeta.vercel.app",
      github: "https://github.com/KenjiXsS/flashcards",
      details: [
        "Create as many flashcards as the user wants",
        "Remove key words from the cards texts so the user can select the corret ones",
      ],
    },

  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "security", name: "Security Tools" },
    { id: "monitoring", name: "Monitoring" },
    { id: "api", name: "APIs" },
    { id: "iot", name: "IoT" },
    { id: "web", name: "Web Applications" },
  ]

  const handleProjectClick = (id: number) => {
    setSelectedProject(id)
  }

  const handleCloseDetails = () => {
    setSelectedProject(null)
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-black relative z-10" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            All my <span className="text-red-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of cybersecurity and backend projects, tools, and solutions.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-4"
            ref={carouselRef}
          >
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-red-600 hover:bg-black/80"
            >
              <ChevronLeft size={20} />
            </button>

            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  ${
                    activeCategory === category.id
                      ? "bg-red-600 hover:bg-red-700 text-white border-red-600"
                      : "border-red-600/50 text-red-600 hover:bg-red-900/20"
                  }
                `}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-red-600 hover:bg-black/80"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="bg-gray-900 border-red-600/20 overflow-hidden h-full flex flex-col hover:border-red-600/50 transition-all duration-300">
                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 z-20">
                      <Badge variant="outline" className="bg-black/50 border-red-600 text-red-500">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-red-600/10 text-red-500 border-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600/50 text-red-600 hover:bg-red-900/20"
                        onClick={() => handleProjectClick(project.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={handleCloseDetails}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {projects
                  .filter((p) => p.id === selectedProject)
                  .map((project) => (
                    <div key={project.id} className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <Button variant="ghost" size="icon" onClick={handleCloseDetails}>
                          <X className="w-5 h-5" />
                        </Button>
                      </div>

                      <div className="mb-6">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <Badge key={index} className="bg-red-600/10 text-red-500 border-none">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                          {project.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          className="bg-red-600 hover:bg-red-700 text-white flex-1"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                        <Button
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-900/20 flex-1"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Project
                        </Button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
