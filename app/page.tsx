import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-balance md:text-6xl">Curso Mega Hair</h1>
        <p className="text-lg text-muted-foreground text-pretty md:text-xl">
          Aprenda as melhores técnicas de aplicação de mega hair e transforme sua carreira profissional
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Quero me Inscrever
        </Button>
      </div>
    </main>
  )
}
