"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

interface AnswerDisplayProps {
  question: string
  category: string
}

export function AnswerDisplay({ question, category }: AnswerDisplayProps) {
  const [expanded, setExpanded] = useState(false)

  // Simulasi data jawaban
  const answer = {
    summary:
      "Berdasarkan UU No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan, sanksi pelanggaran lalu lintas bervariasi tergantung jenis pelanggarannya, mulai dari denda administratif hingga pidana kurungan.",
    sources: [
      {
        title: "UU No. 22 Tahun 2009",
        type: "uu",
        description: "Pasal 273-317 mengatur tentang ketentuan pidana pelanggaran lalu lintas",
        relevance: 95,
      },
      {
        title: "PP No. 80 Tahun 2012",
        type: "pp",
        description: "Tentang Tata Cara Pemeriksaan Kendaraan Bermotor di Jalan",
        relevance: 82,
      },
      {
        title: "Permen Perhubungan No. 36 Tahun 2016",
        type: "permen",
        description: "Tentang Tata Cara Pelaksanaan Sanksi Administratif",
        relevance: 75,
      },
    ],
    details: [
      {
        title: "Pelanggaran Ringan",
        content: "Denda administratif Rp100.000 - Rp500.000, contohnya tidak menggunakan helm, tidak membawa SIM/STNK.",
      },
      {
        title: "Pelanggaran Sedang",
        content:
          "Denda Rp500.000 - Rp1.000.000, contohnya melanggar rambu lalu lintas, marka jalan, atau lampu pengatur lalu lintas.",
      },
      {
        title: "Pelanggaran Berat",
        content:
          "Denda di atas Rp1.000.000 dan/atau pidana kurungan, contohnya mengemudi dalam keadaan mabuk, balapan liar di jalan umum.",
      },
    ],
  }

  return (
    <Card className="w-full border-2 border-red-100 dark:border-red-900/20 shadow-lg">
      <CardHeader className="bg-red-50 dark:bg-red-900/10">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Jawaban untuk pertanyaan Anda</CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">{question}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)} className="h-8 w-8">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <p className="text-lg">{answer.summary}</p>

          {expanded && (
            <>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Detail Sanksi</h3>
                <Accordion type="single" collapsible className="w-full">
                  {answer.details.map((detail, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{detail.title}</AccordionTrigger>
                      <AccordionContent>
                        <p>{detail.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Sumber Hukum</h3>
                <div className="space-y-3">
                  {answer.sources.map((source, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg border bg-gray-50 dark:bg-gray-900">
                      <div className="mr-3 mt-1">
                        {source.type === "uu" ? (
                          <BookOpen className="h-5 w-5 text-red-600 dark:text-red-400" />
                        ) : (
                          <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{source.title}</h4>
                          <Badge
                            variant={
                              source.relevance > 90 ? "default" : source.relevance > 80 ? "secondary" : "outline"
                            }
                            className="ml-2"
                          >
                            {source.relevance}% relevan
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{source.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-gray-50 dark:bg-gray-900/50 px-6 py-4">
        <Button variant="outline" size="sm" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Sembunyikan Detail" : "Lihat Detail"}
        </Button>
        <Button variant="outline" size="sm">
          <ExternalLink className="mr-2 h-4 w-4" />
          Baca Lengkap
        </Button>
      </CardFooter>
    </Card>
  )
}
