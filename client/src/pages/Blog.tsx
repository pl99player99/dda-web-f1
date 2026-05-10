import { useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { blogArticles, categories } from "@/data/blogArticles";
import { Link } from "wouter";

/**
 * DDA-Web Blog Page
 * Design Philosophy: Modern & Technological
 * - Dark background with electric blue accents
 * - Grid layout for articles
 * - Category filtering
 */

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? blogArticles.filter(article => article.category === selectedCategory)
    : blogArticles;

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl leading-tight mb-6">
              Blog <span className="text-accent">DDA-Web</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Artigos, dicas e insights sobre web design, marketing digital e
              tecnologia. Fique atualizado com as últimas tendências do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className="transition-all"
            >
              Todos
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <Card className="h-full cursor-pointer hover:border-accent transition-all hover:shadow-lg group overflow-hidden">
                  <div className="p-6 flex flex-col h-full">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <div className="relative h-40 mb-4 overflow-hidden rounded-lg border border-border">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl mb-3 group-hover:text-accent transition">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("pt-PT")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime} min
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                      Ler Mais <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-4xl mb-4">Quer Aprender Mais?</h2>
          <p className="text-muted-foreground mb-8">
            Inscreva-se em nossa newsletter para receber os últimos artigos e
            dicas diretamente na sua caixa de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary gap-2">
                Entre em Contacto <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline">Solicitar Orçamento</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border text-center text-muted-foreground text-sm">
        <div className="container">
          <p>&copy; 2025 DDA-Web. Todos os direitos reservados.</p>
          <p className="mt-2">
            Transformando negócios com tecnologia e inovação.
          </p>
        </div>
      </footer>
    </div>
  );
}
