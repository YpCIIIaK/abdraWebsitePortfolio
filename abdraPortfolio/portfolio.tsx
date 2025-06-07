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

  // Refs для секций
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

      // Определяем активную секцию при скролле
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
      authors: "А. Квантов, И. Петров, С. Сидоров",
      abstract: "Исследование методов смягчения квантовых ошибок для современных квантовых устройств...",
    },
    {
      id: "shor-algorithm-implementation",
      title: "Implementing Shor's Algorithm on a Superconducting Quantum Processor",
      journal: "Physical Review Letters",
      year: "2022",
      authors: "А. Квантов, М. Иванова",
      abstract: "Практическая реализация алгоритма Шора на сверхпроводящем квантовом процессоре...",
    },
    {
      id: "quantum-ml-challenges",
      title: "Quantum Machine Learning: Challenges and Opportunities",
      journal: "Quantum Computing Review",
      year: "2021",
      authors: "А. Квантов",
      abstract: "Обзор современного состояния квантового машинного обучения и перспектив развития...",
    },
  ]

  const projects = [
    {
      id: "quantum-error-correction",
      title: "Quantum Error Correction Simulator",
      description: "Разработка симулятора для тестирования алгоритмов квантовой коррекции ошибок",
      tech: ["Python", "Qiskit", "NumPy"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "quantum-ml-platform",
      title: "Quantum Machine Learning Platform",
      description: "Веб-платформа для обучения и тестирования квантовых нейронных сетей",
      tech: ["React", "Python", "TensorFlow Quantum"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "quantum-algorithm-viz",
      title: "Quantum Algorithm Visualization",
      description: "Интерактивная визуализация работы квантовых алгоритмов для образовательных целей",
      tech: ["JavaScript", "D3.js", "WebGL"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experience = [
    {
      title: "Научный сотрудник",
      company: "Лаборатория квантовых вычислений, МГУ",
      period: "2023 - настоящее время",
      description:
        "Исследование методов квантовой коррекции ошибок и разработка квантовых алгоритмов для решения задач оптимизации.",
    },
    {
      title: "Стажер-исследователь",
      company: "IBM Quantum Network",
      period: "2022 - 2023",
      description: "Участие в разработке и тестировании квантовых схем на реальных квантовых процессорах IBM.",
    },
    {
      title: "Full-Stack разработчик (неполный рабочий день)",
      company: "TechStart Solutions",
      period: "2021 - 2022",
      description: "Разработка веб-приложений с использованием React и Node.js для визуализации научных данных.",
    },
  ]

  const education = [
    {
      degree: "Магистр физики (специализация: квантовая информатика)",
      institution: "Московский Государственный Университет",
      period: "2022 - настоящее время",
    },
    {
      degree: "Бакалавр физики",
      institution: "Московский Государственный Университет",
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
              <span className="text-blue-400">Александр</span> Квантов
            </div>
            <nav className="hidden md:flex space-x-8">
              {[
                { name: "Главная", icon: <Home className="w-4 h-4" />, id: "home" },
                { name: "Обо мне", icon: <User className="w-4 h-4" />, id: "about" },
                { name: "Исследования", icon: <BookOpen className="w-4 h-4" />, id: "research" },
                { name: "Проекты", icon: <Code className="w-4 h-4" />, id: "projects" },
                { name: "Опыт", icon: <Briefcase className="w-4 h-4" />, id: "experience" },
                { name: "Публикации", icon: <FileText className="w-4 h-4" />, id: "publications" },
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
              Связаться
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
                Исследуя границы <span className="text-blue-400">квантовых вычислений</span>
              </h1>
              <p className="text-xl text-slate-300">
                Студент-физик и разработчик, специализирующийся на квантовых алгоритмах и их практическом применении
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать CV
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => scrollToSection("research")}
                >
                  Мои исследования
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
              <div className="aspect-square rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-8 border-slate-700 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-slate-800 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-full h-full rounded-full border-4 border-blue-400/30 border-dashed animate-spin"
                        style={{ animationDuration: "15s" }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-3/4 h-3/4 rounded-full border-4 border-blue-500/40 border-dashed animate-spin"
                        style={{ animationDuration: "10s", animationDirection: "reverse" }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full bg-blue-500/20 animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-lg">АК</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-800 p-3 rounded-full shadow-lg border border-slate-700">
                <Badge className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm text-white">Квантовый физик</Badge>
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
            <h2 className="text-3xl font-bold text-white">Обо мне</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Я студент магистратуры физического факультета МГУ, специализирующийся на квантовой физике и квантовых
                вычислениях. Моя исследовательская работа сосредоточена на разработке и оптимизации квантовых алгоритмов
                для решения вычислительно сложных задач.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Параллельно с академической деятельностью, я развиваюсь как разработчик программного обеспечения,
                создавая инструменты для моделирования и визуализации квантовых процессов. Мой опыт включает работу с
                квантовыми фреймворками (Qiskit, Cirq) и классическими языками программирования (Python, JavaScript).
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Моя цель — стать мостом между теоретической физикой и практическими IT-решениями, разрабатывая
                технологии, которые могут революционизировать вычислительные возможности будущего.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Образование</CardTitle>
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
                  <CardTitle className="text-blue-400">Интересы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Квантовые вычисления",
                      "Машинное обучение",
                      "Алгоритмы",
                      "Физика",
                      "Программирование",
                      "Шахматы",
                      "Музыка",
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
            <h2 className="text-3xl font-bold text-white">Исследования</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Направления исследований</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Квантовая коррекция ошибок</h4>
                  <p className="text-slate-300">
                    Разработка и оптимизация методов защиты квантовой информации от декогеренции и шума в реальных
                    квантовых системах.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Квантовое машинное обучение</h4>
                  <p className="text-slate-300">
                    Исследование гибридных классическо-квантовых алгоритмов для задач машинного обучения и
                    искусственного интеллекта.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-blue-400">Квантовые алгоритмы оптимизации</h4>
                  <p className="text-slate-300">
                    Разработка квантовых алгоритмов для решения NP-трудных задач оптимизации в различных областях науки
                    и промышленности.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Текущий проект</h3>
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
                  <CardTitle className="text-white">
                    Квантовые нейронные сети для обработки естественного языка
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Исследовательский проект в сотрудничестве с лабораторией квантовых вычислений МГУ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Разработка гибридной квантово-классической архитектуры для задач обработки естественного языка, с
                    потенциальным применением в машинном переводе и анализе тональности текста.
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
            <h2 className="text-3xl font-bold text-white">Проекты</h2>
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
                      Подробнее
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
            <h2 className="text-3xl font-bold text-white">Опыт работы</h2>
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
            <h2 className="text-3xl font-bold text-white">Публикации</h2>
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
                      Читать
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
          <h2 className="text-3xl font-bold mb-6 text-white">Связаться со мной</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Открыт для исследовательских коллабораций, консультаций и новых возможностей в области квантовых вычислений
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
          <div className="text-slate-400 mb-4 md:mb-0">© 2024 Александр Квантов. Все права защищены.</div>
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
