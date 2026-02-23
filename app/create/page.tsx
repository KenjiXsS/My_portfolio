"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { motion } from "framer-motion"
import { Upload, FileDown } from "lucide-react"

import Navbar from "../components/navbar"
import ParticleBackground from "../components/particle-background"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

function slugify(value: string) {
  const base = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")

  return base || "post"
}

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [bannerFile, setBannerFile] = useState<File | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [markdownSource, setMarkdownSource] = useState("")

  useEffect(() => {
    if (!bannerFile) return

    const objectUrl = URL.createObjectURL(bannerFile)
    setBannerPreview(objectUrl)

    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [bannerFile])

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setBannerFile(file)
  }

  const handleMarkdownFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.toLowerCase().endsWith(".md")) {
      alert("Por favor, selecione um arquivo .md")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result
      if (typeof text === "string") {
        setMarkdownSource(text)
      }
    }
    reader.readAsText(file)
  }

  const handleDownloadMarkdown = () => {
    if (!markdownSource.trim()) {
      alert("Escreva algum conteúdo em Markdown antes de baixar.")
      return
    }

    const blob = new Blob([markdownSource], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${slugify(title || "post")}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-red-600 relative overflow-hidden"
    >
      <ParticleBackground />
      <Navbar />

      <section className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <p className="text-sm text-red-500/70 mb-2 uppercase tracking-widest">
              Papers &amp; Artigos
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Criar nova postagem em <span className="text-red-600">Markdown</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Use esta página para rascunhar seus papers e artigos em formato{" "}
              <span className="font-semibold text-red-400">.md</span>. Você pode escrever aqui
              diretamente ou carregar um arquivo Markdown e visualizar como ele ficará.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-red-600/20">
              <CardHeader>
                <CardTitle className="text-white">Editor</CardTitle>
                <CardDescription className="text-gray-400">
                  Defina o banner, título e o conteúdo em Markdown.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Título</label>
                  <Input
                    placeholder="Ex: Análise de vulnerabilidades em aplicações web modernas"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-black/40 border-red-600/40 text-white placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-200">Banner do artigo</label>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <label className="flex-1">
                        <span className="sr-only">Selecionar imagem de banner</span>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleBannerChange}
                          className="bg-black/40 border-red-600/40 text-gray-300 file:bg-red-600 file:text-black file:border-0 file:px-3 file:py-1.5 file:mr-3"
                        />
                      </label>
                    </div>
                    {bannerPreview && (
                      <div className="rounded-md overflow-hidden border border-red-600/40">
                        <img
                          src={bannerPreview}
                          alt="Banner preview"
                          className="w-full h-44 object-cover"
                        />
                      </div>
                    )}
                    {!bannerPreview && (
                      <p className="text-xs text-gray-500">
                        Dica: use uma imagem 16:9 para melhores resultados (ex: 1280x720).
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-200">
                    Conteúdo em Markdown
                  </label>

                  <Textarea
                    value={markdownSource}
                    onChange={(e) => setMarkdownSource(e.target.value)}
                    placeholder={`# Título do artigo

Escreva seu conteúdo em **Markdown** aqui.

- Liste ideias
- Referencie CVEs
- Inclua blocos de código, etc.
`}
                    className="min-h-[220px] bg-black/40 border-red-600/40 text-gray-100 placeholder:text-gray-600 font-mono text-sm"
                  />

                  <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Upload className="w-4 h-4" />
                      <label className="cursor-pointer">
                        <span className="underline decoration-dotted">
                          Carregar arquivo .md
                        </span>
                        <Input
                          type="file"
                          accept=".md"
                          onChange={handleMarkdownFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="border-red-600/60 text-red-500 hover:bg-red-900/20 text-xs md:text-sm"
                      onClick={handleDownloadMarkdown}
                    >
                      <FileDown className="w-4 h-4 mr-2" />
                      Baixar como .md
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-600/20">
              <CardHeader>
                <CardTitle className="text-white">Pré-visualização</CardTitle>
                <CardDescription className="text-gray-400">
                  Assim o seu paper/artigo será apresentado na seção de portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bannerPreview && (
                    <div className="rounded-md overflow-hidden border border-red-600/40">
                      <img
                        src={bannerPreview}
                        alt="Banner preview"
                        className="w-full h-44 object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">
                      {title || "Título do artigo / paper"}
                    </h2>
                    <p className="text-xs text-gray-500">
                      Pré-visualização local – para publicar de forma permanente você poderá
                      salvar o arquivo .md e adicioná-lo ao repositório ou à futura seção de
                      artigos.
                    </p>
                  </div>

                  <div className="mt-4 p-4 rounded-md bg-black/40 border border-red-600/20 max-h-[420px] overflow-auto">
                    {markdownSource.trim() ? (
                      <div className="prose prose-invert max-w-none text-gray-100">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {markdownSource}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Comece a escrever em Markdown ou carregue um arquivo
                        <span className="mx-1 font-semibold text-red-400">.md</span>
                        para ver a pré-visualização aqui.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </motion.main>
  )

}