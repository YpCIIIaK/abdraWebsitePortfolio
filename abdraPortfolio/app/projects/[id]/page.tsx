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
    description: "Комплексный симулятор для тестирования и разработки алгоритмов квантовой коррекции ошибок",
    longDescription: `
      Этот проект представляет собой полнофункциональный симулятор квантовых систем с возможностью моделирования различных типов ошибок и методов их коррекции. 
      Симулятор поддерживает основные коды квантовой коррекции ошибок, включая коды Шора, Стина и поверхностные коды.
      
      Основные возможности включают визуализацию квантовых состояний, анализ эффективности различных методов коррекции 
      и сравнение производительности алгоритмов в условиях различных типов шума.
    `,
    tech: ["Python", "Qiskit", "NumPy", "Matplotlib", "Jupyter"],
    features: [
      "Моделирование различных типов квантовых ошибок",
      "Реализация основных кодов коррекции ошибок",
      "Визуализация квантовых состояний и процессов",
      "Анализ производительности алгоритмов",
      "Интерактивные Jupyter notebooks для обучения",
    ],
    challenges: [
      "Оптимизация вычислительной сложности симуляций",
      "Точное моделирование реальных квантовых систем",
      "Создание интуитивного пользовательского интерфейса",
    ],
    results: [
      "Успешная реализация 5+ алгоритмов коррекции ошибок",
      "Повышение точности симуляций на 30%",
      "Использование в образовательных программах МГУ",
    ],
    duration: "6 месяцев",
    team: "3 человека",
    status: "Завершен",
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
  "quantum-ml-platform": {
    title: "Quantum Machine Learning Platform",
    description: "Веб-платформа для разработки и тестирования квантовых алгоритмов машинного обучения",
    longDescription: `
      Инновационная платформа, объединяющая квантовые вычисления и машинное обучение. Предоставляет исследователям 
      и разработчикам инструменты для создания, тестирования и развертывания квантовых нейронных сетей.
      
      Платформа включает в себя визуальный конструктор квантовых схем, библиотеку предобученных моделей 
      и интеграцию с реальными квантовыми процессорами через облачные сервисы.
    `,
    tech: ["React", "Python", "TensorFlow Quantum", "FastAPI", "Docker"],
    features: [
      "Визуальный конструктор квантовых нейронных сетей",
      "Интеграция с TensorFlow Quantum",
      "Облачное выполнение на реальных квантовых процессорах",
      "Библиотека предобученных квантовых моделей",
      "Система управления экспериментами",
    ],
    challenges: [
      "Интеграция квантовых и классических вычислений",
      "Создание интуитивного интерфейса для сложных концепций",
      "Обеспечение масштабируемости платформы",
    ],
    results: [
      "Более 100 зарегистрированных пользователей",
      "Успешное тестирование на 3 типах квантовых процессоров",
      "Публикация результатов в международном журнале",
    ],
    duration: "8 месяцев",
    team: "5 человек",
    status: "В разработке",
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
  "quantum-algorithm-viz": {
    title: "Quantum Algorithm Visualization",
    description: "Интерактивная система визуализации квантовых алгоритмов для образовательных целей",
    longDescription: `
      Образовательная платформа, предназначенная для визуализации и интерактивного изучения квантовых алгоритмов. 
      Система позволяет студентам и исследователям наглядно понять принципы работы сложных квантовых алгоритмов.
      
      Включает интерактивные демонстрации алгоритмов Шора, Гровера, квантового преобразования Фурье и других 
      фундаментальных квантовых алгоритмов с пошаговым объяснением каждого этапа.
    `,
    tech: ["JavaScript", "D3.js", "WebGL", "Three.js", "React"],
    features: [
      "3D визуализация квантовых состояний",
      "Пошаговое выполнение алгоритмов",
      "Интерактивные элементы управления",
      "Образовательные материалы и тесты",
      "Поддержка мобильных устройств",
    ],
    challenges: [
      "Визуализация многомерных квантовых состояний",
      "Создание интуитивных интерактивных элементов",
      "Оптимизация производительности 3D графики",
    ],
    results: [
      "Внедрение в курсы квантовой физики в 3 университетах",
      "Более 1000 активных пользователей в месяц",
      "Положительные отзывы от преподавателей и студентов",
    ],
    duration: "4 месяца",
    team: "2 человека",
    status: "Завершен",
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
          <h1 className="text-2xl font-bold text-white mb-4">Проект не найден</h1>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться на главную
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
              <span>Назад к портфолио</span>
            </Link>
            <div className="text-xl font-bold">
              <span className="text-blue-400">Александр</span> Квантов
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
                  Код на GitHub
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Живая демонстрация
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
                <h2 className="text-2xl font-bold mb-4 text-white">Описание проекта</h2>
                <div className="prose prose-slate max-w-none">
                  {project.longDescription.split("\n").map((paragraph, index) => (
                    <p key={index} className="text-slate-300 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Ключевые возможности</h2>
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
                <h2 className="text-2xl font-bold mb-4 text-white">Технические вызовы</h2>
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
                <h2 className="text-2xl font-bold mb-4 text-white">Результаты</h2>
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
                  <CardTitle className="text-blue-400">Информация о проекте</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Длительность:</span>
                    <span className="font-medium text-white">{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Команда:</span>
                    <span className="font-medium text-white">{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">Статус:</span>
                    <Badge
                      className={
                        project.status === "Завершен"
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
                  <CardTitle className="text-blue-400">Технологии</CardTitle>
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
                  Посмотреть код
                </Button>
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-900/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Живая демонстрация
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-slate-400">© 2024 Александр Квантов. Все права защищены.</div>
        </div>
      </footer>
    </div>
  )
}
