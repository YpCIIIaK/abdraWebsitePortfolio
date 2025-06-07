"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Target } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const projectsData = {
  "quantum-error-correction": {
    title: "Quantum Error Correction Simulator",
    description: "Comprehensive simulator for testing and developing quantum error correction algorithms",
    longDescription: `
      This project represents a full-featured quantum systems simulator with the ability to model various types of 
      errors and their correction methods. The simulator supports major quantum error correction codes, including 
      Shor codes, Steane codes, and surface codes.
      
      Key features include visualization of quantum states, analysis of the effectiveness of various correction 
      methods, and comparison of algorithm performance under different types of noise.
    `,
    tech: ["Python", "Qiskit", "NumPy", "Matplotlib", "Jupyter"],
    features: [
      "Modeling of various types of quantum errors",
      "Implementation of major error correction codes",
      "Visualization of quantum states and processes",
      "Algorithm performance analysis",
      "Interactive Jupyter notebooks for learning",
    ],
    challenges: [
      "Optimization of computational complexity of simulations",
      "Accurate modeling of real quantum systems",
      "Creating an intuitive user interface",
    ],
    results: [
      "Successful implementation of 5+ error correction algorithms",
      "30% improvement in simulation accuracy",
      "Use in educational programs at MSU",
    ],
    duration: "6 months",
    team: "3 people",
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
  "quantum-ml-platform": {
    title: "Quantum Machine Learning Platform",
    description: "Web platform for developing and testing quantum machine learning algorithms",
    longDescription: `
      An innovative platform that combines quantum computing and machine learning. Provides researchers and developers 
      with tools for creating, testing, and deploying quantum neural networks.
      
      The platform includes a visual quantum circuit constructor, a library of pre-trained models, and integration 
      with real quantum processors through cloud services.
    `,
    tech: ["React", "Python", "TensorFlow Quantum", "FastAPI", "Docker"],
    features: [
      "Visual quantum neural network constructor",
      "Integration with TensorFlow Quantum",
      "Cloud execution on real quantum processors",
      "Library of pre-trained quantum models",
      "Experiment management system",
    ],
    challenges: [
      "Integration of quantum and classical computing",
      "Creating an intuitive interface for complex concepts",
      "Ensuring platform scalability",
    ],
    results: [
      "Over 100 registered users",
      "Successful testing on 3 types of quantum processors",
      "Publication of results in an international journal",
    ],
    duration: "8 months",
    team: "5 people",
    status: "In development",
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
  "quantum-algorithm-viz": {
    title: "Quantum Algorithm Visualization",
    description: "Interactive quantum algorithm visualization system for educational purposes",
    longDescription: `
      An educational platform designed for visualizing and interactively studying quantum algorithms. The system 
      allows students and researchers to visually understand the principles of complex quantum algorithms.
      
      Includes interactive demonstrations of Shor's algorithm, Grover's algorithm, quantum Fourier transform, and 
      other fundamental quantum algorithms with step-by-step explanation of each stage.
    `,
    tech: ["JavaScript", "D3.js", "WebGL", "Three.js", "React"],
    features: [
      "3D visualization of quantum states",
      "Step-by-step algorithm execution",
      "Interactive control elements",
      "Educational materials and tests",
      "Mobile device support",
    ],
    challenges: [
      "Visualization of multidimensional quantum states",
      "Creating intuitive interactive elements",
      "Optimization of 3D graphics performance",
    ],
    results: [
      "Implementation in quantum physics courses at 3 universities",
      "Over 1000 active users per month",
      "Positive feedback from teachers and students",
    ],
    duration: "4 months",
    team: "2 people",
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to portfolio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to portfolio</span>
            </Link>
            <div className="text-xl font-bold">
              <span className="text-blue-400">Abdrahman</span> Akchurin
            </div>
          </div>
        </div>
      </header>

      {/* Project Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-900/30 text-blue-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">{project.title}</h1>
              <p className="text-xl text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-blue-900/30 rounded-lg flex items-center justify-center">
              <div className="text-blue-400/50 text-8xl font-bold">
                {Object.keys(projectsData).indexOf(projectId) + 1}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Project Description</h2>
                <div className="prose prose-slate max-w-none">
                  {project.longDescription.split("\n").map((paragraph, index) => (
                    <p key={index} className="text-slate-300 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Technical Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Duration:</span>
                    <span className="font-medium text-white">{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Team:</span>
                    <span className="font-medium text-white">{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Status:</span>
                    <Badge
                      className={
                        project.status === "Completed"
                          ? "bg-green-900/30 text-green-300"
                          : "bg-yellow-900/30 text-yellow-300"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-900/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-slate-400">© 2024 Abdrahman Akchurin. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
