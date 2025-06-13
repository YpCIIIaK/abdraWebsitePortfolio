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
  const skillsRef = useRef(null)
  const educationRef = useRef(null)

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    research: researchRef,
    projects: projectsRef,
    experience: experienceRef,
    skills: skillsRef,
    education: educationRef,
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
      id: "quantum-perlin-noise",
      title: "Quantum Perlin Noise Game",
      description: "A 2D game incorporating quantum-generated Perlin noise for procedural terrain generation",
      tech: ["Python", "Quantum Computing", "Game Development"],
      features: [
        "Quantum procedural generation",
        "Game development",
        "Noise generation"
      ],
      image: "/placeholder.svg?height=200&width=300",
    }
  ]

  const experience = [
    {
      title: "Research Assistant",
      company: "North Carolina State University - Dr. Chen's Lab",
      period: "January 2025 - Present",
      description: [
        "Developing machine learning models for both forward and inverse prediction in multi-element superconducting quantum computer designs",
        "Extending ML methodologies beyond single-qubit design to multi-element superconducting systems",
        "Optimizing ML models (MLP and INN) to improve the accuracy of output parameters predictions",
        "Training models to predict design parameters required to achieve target quantum performance metrics",
        "Validating model robustness through cross-validation and real-world qubit design scenarios"
      ]
    },
    {
      title: "Research Assistant",
      company: "North Carolina State University - Roederer Group",
      period: "January 2023 - Present",
      description: [
        "Conducting spectrum synthesis and utilizing MOOG and Python to derive elemental abundances for 311 metal-poor stars",
        "Applying NLTE corrections and refining stellar parameters, improving the accuracy of abundance measurements",
        "Performing data analysis, statistical comparisons, and cross-validations with other metal-poor star surveys"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor's of Science, Physics",
      institution: "North Carolina State University",
      period: "August 2022 - May 2026",
      location: "Raleigh, NC",
      details: "Cumulative GPA: 3.9"
    }
  ]

  const skills = {
    technical: [
      "Machine Learning",
      "Quantum Computing",
      "Data Analysis"
    ],
    programming: [
      "Python",
      "LabView",
      "MatLab",
      "Mathematica"
    ],
    tools: [
      "Matplotlib",
      "Scipy",
      "Scikit-learn",
      "Numpy",
      "Qiskit",
      "Qiskit Metal",
      "PyTorch"
    ],
    certifications: [
      {
        name: "CS50P: Introduction to Programming with Python",
        description: "Mastered foundational programming concepts, including functions, loops, and object-oriented programming"
      },
      {
        name: "CS50AI: Introduction to Artificial Intelligence with Python",
        description: "Gained hands-on experience building AI models using search algorithms, neural networks, and natural language processing"
      }
    ]
  }

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
                { name: "Skills", icon: <Code className="w-4 h-4" />, id: "skills" },
                { name: "Education", icon: <BookOpen className="w-4 h-4" />, id: "education" },
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

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Abdrakhman Akchurin
                <br />
                <span className="text-blue-400">Physics Student | Innovating Quantum Hardware with AI</span>
              </h1>
              <p className="text-xl text-slate-300">
                Research Assistant at NCSU specializing in quantum computing and machine learning for superconducting quantum systems
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
                <a href="https://github.com/yourusername" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:aakchur@ncsu.edu" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-lg bg-gradient-to-br from-blue-900/20 to-slate-800 border-4 border-slate-700 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-blue-400 font-bold text-2xl">AA</span>
                  <p className="text-slate-300 text-lg mt-2">Quantum Computing Researcher</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-800 p-3 rounded-full shadow-lg border border-slate-700">
                <Badge className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm text-white">NCSU Physics</Badge>
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
                My name is Abdrakhman Akchurin, and I am a physics student at North Carolina State University (NCSU). Originally from Kazakhstan, I am deeply fascinated by the transformative potential of quantum computing and am committed to contributing to its advancement.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My current efforts are focused on developing machine learning models to automate and optimize the hardware design processes for superconducting quantum computers. I work as a Research Assistant in Dr. Chen's Lab, where I'm developing ML models for both forward and inverse prediction in multi-element superconducting quantum computer designs.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My broader career aspiration is to leverage my physics background to contribute to the future of quantum computing, specifically by aiding in the development of practical and impactful quantum computers that can benefit the world.
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
                      <div className="text-slate-400 text-sm">{edu.location}</div>
                      <div className="text-blue-400 text-sm">{edu.details}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Research Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Quantum Computing",
                      "Machine Learning",
                      "Data Analysis",
                      "Superconducting Quantum Systems",
                      "Quantum Hardware Design Automation"
                    ].map((area) => (
                      <Badge
                        key={area}
                        variant="secondary"
                        className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/40"
                      >
                        {area}
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
              <h3 className="text-2xl font-bold mb-6 text-white">Current Project</h3>
              <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">Machine Learning for Superconducting Qubit Hardware Design Automation</CardTitle>
                  <CardDescription className="text-slate-400">
                    Research project at NCSU - Dr. Chen's Lab
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-blue-400 mb-2">Specific Goal</h4>
                    <p className="text-slate-300">
                      To refine ML models that can efficiently predict the output parameters of multi-qubit superconducting systems and to facilitate inverse design by determining optimal physical configurations based on desired output characteristics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-blue-400 mb-2">Key Technologies/Methodologies</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li>Extending ML methodologies beyond single-qubit design</li>
                      <li>Utilizing models like MLP and INN</li>
                      <li>Expanding datasets with multi-element qubit configurations using structured sampling techniques</li>
                      <li>Analyzing correlations between input design parameters and output capacitance matrices</li>
                      <li>Training models for inverse design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-blue-400 mb-2">Potential Impact</h4>
                    <p className="text-slate-300">
                      This project aims to enable efficient superconducting qubit development by delivering ML models capable of accurately predicting output parameters like qubit frequency and coupling strength, and by providing a validated inverse design approach. This contributes to developing scalable quantum hardware solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Research Areas</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Quantum Computing</h4>
                  <p className="text-slate-300">
                    Focus on developing and optimizing quantum algorithms and hardware for practical applications in computing and information processing.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Machine Learning</h4>
                  <p className="text-slate-300">
                    Application of machine learning techniques to quantum systems, particularly in hardware design and optimization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Superconducting Quantum Systems</h4>
                  <p className="text-slate-300">
                    Research on superconducting qubit design, optimization, and implementation for quantum computing applications.
                  </p>
                </div>
              </div>
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
          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-blue-400">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
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
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">Skills & Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/40">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((lang) => (
                    <Badge key={lang} variant="secondary" className="bg-slate-700 text-slate-300">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Tools & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-slate-700 text-slate-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Certifications</h3>
              <div className="space-y-4">
                {skills.certifications.map((cert, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-blue-400">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="h-px bg-blue-500 w-12"></div>
            <h2 className="text-3xl font-bold text-white">Skills</h2>
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
            Open to research collaborations, consultations, and new opportunities in quantum computing and machine learning
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:aakchur@ncsu.edu">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">© 2024 Abdrakhman Akchurin. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:aakchur@ncsu.edu" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
