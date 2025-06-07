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
    authors: ["А. Квантов", "И. Петров", "С. Сидоров"],
    affiliations: ["МГУ им. М.В. Ломоносова", "IBM Research"],
    abstract: `
      В данной работе представлен комплексный анализ методов смягчения квантовых ошибок для современных квантовых устройств промежуточного масштаба (NISQ). 
      Мы исследуем эффективность различных техник митигации ошибок, включая экстраполяцию нулевого шума, симметричную верификацию и виртуальную дистилляцию.
      
      Наши результаты показывают, что комбинированный подход может снизить влияние ошибок на 40-60% для типичных квантовых алгоритмов. 
      Особое внимание уделено практической реализации этих методов на реальных квантовых процессорах IBM и Google.
    `,
    keywords: ["квантовые вычисления", "коррекция ошибок", "NISQ", "митигация шума"],
    content: `
      ## Введение
      
      Квантовые вычисления представляют собой одну из наиболее перспективных технологий XXI века. Однако современные квантовые устройства страдают от высокого уровня шума и ошибок, что существенно ограничивает их практическое применение.
      
      ## Методология
      
      В нашем исследовании мы использовали следующие подходы:
      
      ### 1. Экстраполяция нулевого шума (Zero Noise Extrapolation)
      
      Метод основан на искусственном увеличении уровня шума в квантовой схеме и последующей экстраполяции результатов к нулевому уровню шума. Мы реализовали этот метод для различных типов квантовых ворот и исследовали его эффективность.
      
      ### 2. Симметричная верификация (Symmetry Verification)
      
      Данный подход использует симметрии квантовых состояний для обнаружения и коррекции ошибок. Мы разработали новый алгоритм, который может работать с произвольными симметриями.
      
      ### 3. Виртуальная дистилляция (Virtual Distillation)
      
      Метод позволяет улучшить качество квантовых состояний без использования дополнительных кубитов. Наша реализация показала значительное улучшение точности измерений.
      
      ## Результаты
      
      Экспериментальные результаты показали:
      
      - Снижение ошибок на 40-60% для алгоритмов средней сложности
      - Улучшение точности квантовых симуляций в 2-3 раза
      - Возможность выполнения более глубоких квантовых схем
      
      ## Заключение
      
      Представленные методы митигации ошибок открывают новые возможности для практического применения современных квантовых устройств. Дальнейшие исследования должны быть направлены на оптимизацию этих методов для конкретных типов квантовых алгоритмов.
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
    authors: ["А. Квантов", "М. Иванова"],
    affiliations: ["МГУ им. М.В. Ломоносова", "IBM Quantum Network"],
    abstract: `
      Представлена первая полная реализация алгоритма Шора для факторизации 15-битных чисел на сверхпроводящем квантовом процессоре. 
      Достигнута точность 94% при факторизации числа 15, что является рекордным результатом для данного класса устройств.
    `,
    keywords: ["алгоритм Шора", "факторизация", "сверхпроводящие кубиты", "квантовое превосходство"],
    content: `
      ## Введение
      
      Алгоритм Шора, предложенный в 1994 году, представляет собой один из наиболее важных квантовых алгоритмов, демонстрирующий экспоненциальное ускорение по сравнению с классическими методами факторизации.
      
      ## Экспериментальная установка
      
      Эксперименты проводились на 27-кубитном сверхпроводящем квантовом процессоре IBM Quantum Falcon r5.11L с топологией heavy-hex.
      
      ## Результаты
      
      Успешно факторизовано число 15 = 3 × 5 с точностью 94%, что превышает предыдущие результаты на 15%.
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
    authors: ["А. Квантов"],
    affiliations: ["МГУ им. М.В. Ломоносова"],
    abstract: `
      Обзор современного состояния квантового машинного обучения, включая анализ основных вызовов и перспектив развития. 
      Рассмотрены гибридные классическо-квантовые алгоритмы и их потенциальные преимущества.
    `,
    keywords: ["квантовое машинное обучение", "гибридные алгоритмы", "NISQ", "нейронные сети"],
    content: `
      ## Введение
      
      Квантовое машинное обучение находится на пересечении двух революционных технологий: квантовых вычислений и искусственного интеллекта.
      
      ## Основные направления
      
      ### Вариационные квантовые алгоритмы
      ### Квантовые нейронные сети  
      ### Квантовое усиление классических алгоритмов
      
      ## Вызовы и ограничения
      
      Основные препятствия на пути развития квантового машинного обучения включают шум, ограниченную связность и малое количество кубитов.
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
          <h1 className="text-2xl font-bold text-white mb-4">Публикация не найдена</h1>
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
                Том {publication.volume}, Выпуск {publication.issue}, стр. {publication.pages}
              </p>
              <p>DOI: {publication.doi}</p>
              <p>Авторы: {publication.authors.join(", ")}</p>
              <p>Аффилиации: {publication.affiliations.join(", ")}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Скачать PDF
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть в журнале
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
                    Аннотация
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
                    Полный текст
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
                  <CardTitle className="text-blue-400">Метрики</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Цитирования:</span>
                    <span className="font-bold text-white">{publication.citations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Скачивания:</span>
                    <span className="font-bold text-white">{publication.downloads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Год публикации:</span>
                    <span className="font-bold text-white">{publication.year}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Citation */}
              <Card className="bg-slate-800 border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Цитирование</CardTitle>
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
                  Скачать PDF
                </Button>
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-900/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Открыть в журнале
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
