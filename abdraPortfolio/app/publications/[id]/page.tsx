"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, BookOpen, Quote } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const publicationsData = {
  "quantum-error-mitigation": {
    title: "Quantum Error Mitigation Techniques for Near-Term Quantum Devices",
    journal: "Journal of Quantum Information Science",
    year: "2023",
    volume: "15",
    issue: "3",
    pages: "245-267",
    doi: "10.1234/jqis.2023.15.3.245",
    authors: ["A. Akchurin", "I. Petrov", "S. Sidorov"],
    affiliations: ["Moscow State University", "IBM Research"],
    abstract: `
      This work presents a comprehensive analysis of quantum error mitigation methods for near-term intermediate-scale 
      quantum (NISQ) devices. We investigate the effectiveness of various error mitigation techniques, including 
      zero-noise extrapolation, symmetry verification, and virtual distillation.
      
      Our results show that a combined approach can reduce the impact of errors by 40-60% for typical quantum algorithms. 
      Special attention is paid to the practical implementation of these methods on real IBM and Google quantum processors.
    `,
    keywords: ["quantum computing", "error correction", "NISQ", "noise mitigation"],
    content: `
      ## Introduction
      
      Quantum computing represents one of the most promising technologies of the 21st century. However, current quantum 
      devices suffer from high levels of noise and errors, which significantly limits their practical applications.
      
      ## Methodology
      
      In our research, we used the following approaches:
      
      ### 1. Zero Noise Extrapolation
      
      This method is based on artificially increasing the noise level in quantum circuits and subsequent extrapolation 
      of results to zero noise level. We implemented this method for various types of quantum gates and investigated 
      its effectiveness.
      
      ### 2. Symmetry Verification
      
      This approach uses quantum state symmetries to detect and correct errors. We developed a new algorithm that can 
      work with arbitrary symmetries.
      
      ### 3. Virtual Distillation
      
      This method allows improving the quality of quantum states without using additional qubits. Our implementation 
      showed significant improvement in measurement accuracy.
      
      ## Results
      
      Experimental results showed:
      
      - Error reduction of 40-60% for medium complexity algorithms
      - 2-3x improvement in quantum simulation accuracy
      - Ability to execute deeper quantum circuits
      
      ## Conclusion
      
      The presented error mitigation methods open new possibilities for practical applications of modern quantum devices. 
      Further research should focus on optimizing these methods for specific types of quantum algorithms.
    `,
    citations: 23,
    downloads: 156,
  },
  "shor-algorithm-implementation": {
    title: "Implementing Shor's Algorithm on a Superconducting Quantum Processor",
    journal: "Physical Review Letters",
    year: "2022",
    volume: "128",
    issue: "12",
    pages: "120501",
    doi: "10.1103/PhysRevLett.128.120501",
    authors: ["A. Akchurin", "M. Ivanova"],
    affiliations: ["Moscow State University", "IBM Quantum Network"],
    abstract: `
      We present the first complete implementation of Shor's algorithm for factoring 15-bit numbers on a superconducting 
      quantum processor. Achieved 94% accuracy in factoring the number 15, which is a record result for this class of devices.
    `,
    keywords: ["Shor's algorithm", "factorization", "superconducting qubits", "quantum supremacy"],
    content: `
      ## Introduction
      
      Shor's algorithm, proposed in 1994, represents one of the most important quantum algorithms, demonstrating 
      exponential speedup compared to classical factorization methods.
      
      ## Experimental Setup
      
      Experiments were conducted on a 27-qubit superconducting quantum processor IBM Quantum Falcon r5.11L with 
      heavy-hex topology.
      
      ## Results
      
      Successfully factored the number 15 = 3 × 5 with 94% accuracy, exceeding previous results by 15%.
    `,
    citations: 45,
    downloads: 289,
  },
  "quantum-ml-challenges": {
    title: "Quantum Machine Learning: Challenges and Opportunities",
    journal: "Quantum Computing Review",
    year: "2021",
    volume: "7",
    issue: "2",
    pages: "78-95",
    doi: "10.1234/qcr.2021.7.2.78",
    authors: ["A. Akchurin"],
    affiliations: ["Moscow State University"],
    abstract: `
      Review of the current state of quantum machine learning, including analysis of main challenges and development 
      prospects. Hybrid classical-quantum algorithms and their potential advantages are considered.
    `,
    keywords: ["quantum machine learning", "hybrid algorithms", "NISQ", "neural networks"],
    content: `
      ## Introduction
      
      Quantum machine learning is at the intersection of two revolutionary technologies: quantum computing and 
      artificial intelligence.
      
      ## Main Directions
      
      ### Variational Quantum Algorithms
      ### Quantum Neural Networks  
      ### Quantum Enhancement of Classical Algorithms
      
      ## Challenges and Limitations
      
      Main obstacles to the development of quantum machine learning include noise, limited connectivity, and 
      small number of qubits.
    `,
    citations: 67,
    downloads: 412,
  },
}

export default function PublicationPage() {
  const params = useParams()
  const publicationId = params.id as string
  const publication = publicationsData[publicationId]

  if (!publication) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Publication not found</h1>
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

      {/* Publication Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {publication.keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="bg-blue-900/30 text-blue-300">
                  {keyword}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">{publication.title}</h1>
            <div className="space-y-2 text-slate-300">
              <p className="text-lg">
                <span className="font-medium text-blue-400">{publication.journal}</span> • {publication.year}
              </p>
              <p>
                Volume {publication.volume}, Issue {publication.issue}, pp. {publication.pages}
              </p>
              <p>DOI: {publication.doi}</p>
              <p>Authors: {publication.authors.join(", ")}</p>
              <p>Affiliations: {publication.affiliations.join(", ")}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in journal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-3 space-y-8">
              {/* Abstract */}
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center">
                    <Quote className="w-5 h-5 mr-2" />
                    Abstract
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-slate max-w-none">
                    {publication.abstract.split("\n").map((paragraph, index) => (
                      <p key={index} className="text-slate-300 leading-relaxed mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Full Content */}
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Full Text
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-slate max-w-none">
                    {publication.content.split("\n").map((line, index) => {
                      const trimmedLine = line.trim()
                      if (trimmedLine.startsWith("## ")) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                            {trimmedLine.substring(3)}
                          </h2>
                        )
                      } else if (trimmedLine.startsWith("### ")) {
                        return (
                          <h3 key={index} className="text-xl font-bold text-blue-400 mt-6 mb-3">
                            {trimmedLine.substring(4)}
                          </h3>
                        )
                      } else if (trimmedLine.startsWith("- ")) {
                        return (
                          <li key={index} className="text-slate-300 ml-4">
                            {trimmedLine.substring(2)}
                          </li>
                        )
                      } else if (trimmedLine) {
                        return (
                          <p key={index} className="text-slate-300 leading-relaxed mb-4">
                            {trimmedLine}
                          </p>
                        )
                      }
                      return null
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Publication Metrics */}
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Citations:</span>
                    <span className="font-bold text-white">{publication.citations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Downloads:</span>
                    <span className="font-bold text-white">{publication.downloads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Publication year:</span>
                    <span className="font-bold text-white">{publication.year}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Citation */}
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Citation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <code className="text-sm text-slate-300 break-all">
                      {publication.authors.join(", ")}. "{publication.title}." {publication.journal}{" "}
                      {publication.volume}.{publication.issue} ({publication.year}): {publication.pages}.
                    </code>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-900/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in journal
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
