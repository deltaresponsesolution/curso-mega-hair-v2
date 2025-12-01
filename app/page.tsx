import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pink-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-gray-900">
            Curso de Mega Hair Profissional
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-pretty mb-8 max-w-3xl mx-auto">
            Aprenda as melhores técnicas de aplicação de mega hair e transforme sua carreira profissional
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-pink-600 hover:bg-pink-700">
            Quero me Inscrever Agora
          </Button>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Ao final do curso você será capaz de:
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Aplicar técnicas de aplicação de mega hair, seja em fio a fio, tic tac ou outras metodologias",
              "Escolher e cuidar do cabelo natural e sintético para garantir durabilidade e aparência impecáveis",
              "Fazer ajustes e manutenção de mega hair com segurança, respeitando o cabelo natural da cliente",
              "Oferecer esse serviço como um diferencial, garantindo a satisfação e fidelização das suas clientes",
            ].map((benefit, index) => (
              <Card key={index} className="p-6 flex gap-4">
                <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus Section */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            E você ainda vai receber acesso a:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Certificado digital reconhecido, válido para atuação profissional",
              "Acesso imediato e vitalício ao conteúdo completo do curso",
              "Suporte disponível para tirar todas as suas dúvidas ao longo do aprendizado",
              "Comunidade exclusiva de alunos para compartilhar sua evolução e se inspirar",
            ].map((bonus, index) => (
              <Card key={index} className="p-6 flex gap-4 bg-white">
                <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{bonus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Curso Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">Sobre o Curso</h2>
          <p className="text-lg text-gray-700 text-pretty mb-6 leading-relaxed">
            Tudo o que você precisa saber para dominar o Mega Hair de forma segura e confiante.
          </p>
          <p className="text-lg text-gray-700 text-pretty mb-6 leading-relaxed">
            O Curso de Mega Hair é um guia completo e prático, abordando desde a introdução ao Mega Hair até técnicas
            avançadas e empreendedorismo no mundo da beleza. Com módulos detalhados e instruções claras, você aprenderá
            como aplicar as melhores técnicas de Mega Hair e oferecer um serviço de alta qualidade para suas clientes.
          </p>
          <p className="text-lg text-gray-700 text-pretty leading-relaxed">
            Além das aulas teóricas, o curso oferece dicas práticas e suporte contínuo, garantindo que você se sinta
            seguro e confiante em cada etapa da sua jornada profissional. Prepare-se para transformar sua paixão pelo
            Mega Hair em uma experiência gratificante e bem-sucedida.
          </p>
        </div>
      </section>

      {/* Para Quem é o Curso Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Para quem indicamos o curso de Mega Hair Profissional:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Profissionais da Beleza em Busca de Aperfeiçoamento",
                description:
                  "Cabeleireiros e esteticistas que desejam expandir suas habilidades e oferecer novos serviços para suas clientes, aumentando sua renda e seu portfólio.",
              },
              {
                title: "Iniciantes na Carreira de Beleza e Mega Hair",
                description:
                  "Pessoas interessadas em começar uma carreira no setor de beleza, que procuram uma formação completa e prática para entrar no mercado de trabalho com confiança.",
              },
              {
                title: "Empreendedores do Setor de Beleza",
                description:
                  "Proprietários de salões que desejam oferecer novos serviços e se destacar no mercado com técnicas profissionais de mega hair.",
              },
            ].map((audience, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-balance">{audience.title}</h3>
                <p className="text-gray-700 text-pretty leading-relaxed">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 px-4 bg-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Pronto para transformar sua carreira?</h2>
          <p className="text-xl mb-8 text-pretty max-w-2xl mx-auto">
            Comece agora mesmo a dominar as técnicas profissionais de mega hair
          </p>
          <Button size="lg" className="text-lg px-12 py-6 bg-white text-pink-600 hover:bg-gray-100">
            Quero me Inscrever Agora
          </Button>
        </div>
      </section>
    </main>
  )
}
