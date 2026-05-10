import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { blogArticles } from "@/data/blogArticles";
import { Streamdown } from "streamdown";

/**
 * DDA-Web Blog Article Page
 * Design Philosophy: Modern & Technological
 * - Full article view with markdown support
 * - Related articles sidebar
 * - Share functionality
 */

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const article = blogArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Artigo não encontrado</h1>
          <Link href="/blog">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Article Header */}
      <section className="pt-32 pb-12 border-b border-border">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Button>
          </Link>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(article.date).toLocaleDateString("pt-PT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {article.readTime} minutos de leitura
            </div>
            <Button
              onClick={handleShare}
              variant="ghost"
              size="sm"
              className="gap-2 ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Partilhar
            </Button>
          </div>


          <div className="relative h-72 md:h-96 mt-8 overflow-hidden rounded-xl border border-border">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="prose prose-invert max-w-none mb-12">
            <Streamdown>{article.content}</Streamdown>
          </div>

          {/* Author Info */}
          <div className="bg-card/50 border border-border rounded-lg p-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-2xl">
                ✍️
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">Sobre o Autor</h3>
                <p className="text-muted-foreground">
                  {article.author} - Especialistas em web design, marketing
                  digital e tecnologia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-card/30 border-t border-border">
          <div className="container">
            <h2 className="font-display text-3xl mb-8">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.id}`}
                >
                  <Card className="h-full cursor-pointer hover:border-accent transition-all group">
                    <div className="p-6">
                      <div className="relative h-28 mb-3 overflow-hidden rounded-lg border border-border">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-display text-lg mb-2 group-hover:text-accent transition">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                        Ler Mais →
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-4xl mb-4">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-muted-foreground mb-8">
            Deixe a DDA-Web ajudar você a criar um site que não apenas parece
            bem, mas que também converte visitantes em clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary">Entre em Contacto</Button>
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
