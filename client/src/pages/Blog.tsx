import { useState } from "react";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogArticles, categories } from "@/data/blogArticles";
import { Link } from "wouter";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogArticles[0];
  const restArticles = filteredArticles.filter(a => a.id !== featuredArticle.id || selectedCategory || searchQuery);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-grid">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <p className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">
              Conhecimento & Tendências
            </p>
            <h1 className="font-display text-5xl lg:text-6xl leading-tight mb-4">
              Blog <span className="text-gradient-accent">DDA-Web</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos, dicas e insights sobre web design, marketing digital e tecnologia.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sticky top-16 bg-background/90 backdrop-blur-md z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                selectedCategory === null
                  ? "bg-accent text-white border-accent"
                  : "border-border hover:border-accent text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos ({blogArticles.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === category
                    ? "bg-accent text-white border-accent"
                    : "border-border hover:border-accent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category} ({blogArticles.filter(a => a.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article (only when no filter active) */}
      {!selectedCategory && !searchQuery && (
        <section className="py-12">
          <div className="container">
            <p className="text-xs text-accent font-bold tracking-widest uppercase mb-6">Destaque</p>
            <Link href={`/blog/${featuredArticle.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl border border-border h-72 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="font-display text-3xl lg:text-4xl mb-4 group-hover:text-accent transition leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(featuredArticle.date).toLocaleDateString("pt-PT")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime} min de leitura
                    </span>
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Ler Artigo Completo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                Nenhum artigo encontrado{searchQuery ? ` para "${searchQuery}"` : " nesta categoria"}.
              </p>
              <Button variant="outline" onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}>
                Ver todos os artigos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory || searchQuery ? filteredArticles : restArticles).map(article => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <Card className="h-full cursor-pointer hover:border-accent transition-all group overflow-hidden p-0 flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-accent/90 text-white text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display text-lg mb-3 group-hover:text-accent transition leading-snug flex-grow">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 mt-auto">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.date).toLocaleDateString("pt-PT")}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                          Ler <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-4xl mb-4">
            Pronto para <span className="text-gradient-accent">Crescer Digitalmente?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Aplica o que aprendeste nos artigos e transforma a presença digital do teu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary gap-2">
                Falar Connosco <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline">Calcular Orçamento</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
