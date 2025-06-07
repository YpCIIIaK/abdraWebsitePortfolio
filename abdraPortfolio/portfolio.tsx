"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  BookOpen,
  FileText,
  Briefcase,
  User,
  Code,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // Section refs
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const researchRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const publicationsRef = useRef(null)

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    research: researchRef,
    projects: projectsRef,
    experience: experienceRef,
    publications: publicationsRef,
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section on scroll
      const sections = Object.entries(sectionRefs)
      for (const [id, ref] of sections) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId]
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveSection(sectionId)
    }
  }

  const publications = [
    {
      id: "quantum-error-mitigation",
      title: "Quantum Error Mitigation Techniques for Near-Term Quantum Devices",
      journal: "Journal of Quantum Information Science",
      year: "2023",
      authors: "A. Akchurin, I. Petrov, S. Sidorov",
      abstract: "Investigation of quantum error mitigation methods for modern quantum devices...",
    },
    {
      id: "shor-algorithm-implementation",
      title: "Implementing Shor's Algorithm on a Superconducting Quantum Processor",
      journal: "Physical Review Letters",
      year: "2022",
      authors: "A. Akchurin, M. Ivanova",
      abstract: "Practical implementation of Shor's algorithm on a superconducting quantum processor...",
    },
    {
      id: "quantum-ml-challenges",
      title: "Quantum Machine Learning: Challenges and Opportunities",
      journal: "Quantum Computing Review",
      year: "2021",
      authors: "A. Akchurin",
      abstract: "Review of the current state of quantum machine learning and development prospects...",
    },
  ]

  const projects = [
    {
      id: "quantum-error-correction",
      title: "Quantum Error Correction Simulator",
      description: "Development of a simulator for testing quantum error correction algorithms",
      tech: ["Python", "Qiskit", "NumPy"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "quantum-ml-platform",
      title: "Quantum Machine Learning Platform",
      description: "Web platform for training and testing quantum neural networks",
      tech: ["React", "Python", "TensorFlow Quantum"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "quantum-algorithm-viz",
      title: "Quantum Algorithm Visualization",
      description: "Interactive visualization of quantum algorithms for educational purposes",
      tech: ["JavaScript", "D3.js", "WebGL"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experience = [
    {
      title: "Research Scientist",
      company: "Quantum Computing Laboratory, Moscow State University",
      period: "2023 - Present",
      description:
        "Research on quantum error correction methods and development of quantum algorithms for optimization problems.",
    },
    {
      title: "Research Intern",
      company: "IBM Quantum Network",
      period: "2022 - 2023",
      description: "Participation in the development and testing of quantum circuits on real IBM quantum processors.",
    },
    {
      title: "Full-Stack Developer (Part-time)",
      company: "TechStart Solutions",
      period: "2021 - 2022",
      description: "Development of web applications using React and Node.js for scientific data visualization.",
    },
  ]

  const education = [
    {
      degree: "Master of Physics (Specialization: Quantum Informatics)",
      institution: "Moscow State University",
      period: "2022 - Present",
    },
    {
      degree: "Bachelor of Physics",
      institution: "Moscow State University",
      period: "2018 - 2022",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/95 backdrop-blur-lg shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
              <span className="text-blue-400">Abdrahman</span> Akchurin
            </div>
            <nav className="hidden md:flex space-x-8">
              {[
                { name: "Home", icon: <Home className="w-4 h-4" />, id: "home" },
                { name: "About", icon: <User className="w-4 h-4" />, id: "about" },
                { name: "Research", icon: <BookOpen className="w-4 h-4" />, id: "research" },
                { name: "Projects", icon: <Code className="w-4 h-4" />, id: "projects" },
                { name: "Experience", icon: <Briefcase className="w-4 h-4" />, id: "experience" },
                { name: "Publications", icon: <FileText className="w-4 h-4" />, id: "publications" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 hover:text-blue-400 transition-colors ${
                    activeSection === item.id ? "text-blue-400 font-medium" : "text-slate-300"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - No Photo, Simple Background */}
  <section ref={homeRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Exploring the frontiers of <span className="text-blue-400">quantum computing</span>
          </h1>
          <p className="text-xl text-slate-300">
            Physics student and developer specializing in quantum algorithms and their practical applications
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={() => scrollToSection("research")}
            >
              My Research
            </Button>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 rounded-lg bg-gradient-to-br from-blue-900/20 to-slate-800 border-4 border-slate-700 shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <span className="text-blue-400 font-bold text-2xl">AA</span>
              <p className="text-slate-300 text-lg mt-2">Quantum Computing Enthusiast</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-slate-800 p-3 rounded-full shadow-lg border border-slate-700">
            <Badge className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm text-white">Quantum Physicist</Badge>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a graduate student at the Physics Department of Moscow State University, specializing in quantum
                physics and quantum computing. My research work focuses on the development and optimization of quantum
                algorithms for solving computationally complex problems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Alongside my academic activities, I am developing as a software developer, creating tools for modeling
                and visualizing quantum processes. My experience includes working with quantum frameworks (Qiskit, Cirq)
                and classical programming languages (Python, JavaScript).
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My goal is to become a bridge between theoretical physics and practical IT solutions, developing
                technologies that can revolutionize the computational capabilities of the future.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium text-white">{edu.degree}</div>
                      <div className="text-slate-300">{edu.institution}</div>
                      <div className="text-slate-400 text-sm">{edu.period}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Quantum Computing",
                      "Machine Learning",
                      "Algorithms",
                      "Physics",
                      "Programming",
                      "Chess",
                      "Music",
                    ].map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/40"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section ref={researchRef} id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">Research</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Research Areas</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Quantum Error Correction</h4>
                  <p className="text-slate-300">
                    Development and optimization of methods for protecting quantum information from decoherence and
                    noise in real quantum systems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Quantum Machine Learning</h4>
                  <p className="text-slate-300">
                    Research on hybrid classical-quantum algorithms for machine learning and artificial intelligence
                    tasks.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Quantum Optimization Algorithms</h4>
                  <p className="text-slate-300">
                    Development of quantum algorithms for solving NP-hard optimization problems in various fields of
                    science and industry.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Current Project</h3>
              <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-900/20 to-slate-800 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div
                      className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-spin"
                      style={{ animationDuration: "10s" }}
                    ></div>
                    <div
                      className="absolute inset-0 border-4 border-blue-500/40 rounded-full animate-spin"
                      style={{ animationDuration: "15s", animationDirection: "reverse" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Quantum Neural Networks for Natural Language Processing</CardTitle>
                  <CardDescription className="text-slate-400">
                    Research project in collaboration with the Quantum Computing Laboratory at MSU
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Development of a hybrid quantum-classical architecture for natural language processing tasks, with
                    potential applications in machine translation and sentiment analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-blue-900/30 flex items-center justify-center">
                  <div className="text-blue-400/50 text-6xl font-bold">{index + 1}</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-900/20">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500"></div>
                <div className="space-y-2">
                  <Badge className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 mb-2">{exp.period}</Badge>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="text-blue-400 font-medium">{exp.company}</div>
                  <p className="text-slate-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section ref={publicationsRef} id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">Publications</h2>
          </div>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-white hover:text-blue-400 transition-colors">
                    <Link href={`/publications/${pub.id}`}>{pub.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {pub.journal} • {pub.year} • {pub.authors}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-start">
                  <p className="text-slate-300 flex-1 mr-4">{pub.abstract}</p>
                  <Link href={`/publications/${pub.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-900/20"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Open to research collaborations, consultations, and new opportunities in quantum computing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">© 2024 Abdrahman Akchurin. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
