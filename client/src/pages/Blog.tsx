import { useState } from "react";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogArticles, categories } from "@/data/blogArticles";
import { Link } from "wouter";
import Reveal from "@/components/Reveal";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticles.filter(article => {
    const s = searchQuery.toLowerCase();
    const matchSearch = !s || article.title.toLowerCase().includes(s) || article.excerpt.toLowerCase().includes(s);
    const matchCat = !selectedCategory || article.category === selectedCategory;
    return matchSearch && matchCat;
  });

  const featured = blogArticles[0];
  const rest = filteredArticles.filter(a => a.id !== featured.id || selectedCategory || searchQuery);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-grid">
        <div className="container">
          <Reveal>
          <div className="max-w-2xl mb-8">
            <div className="pill-blue mb-4">Conhecimento</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
              Blog <span className="text-gradient-accent">DDA-Web</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos sobre web design, marketing digital e tecnologia para empresas.
            </p>
          </div>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Pesquisar artigos..."
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition text-sm" />
          </div>
                  </Reveal>
</div>
      </section>

      {/* Category filter — sticky */}
      <div className="sticky top-16 bg-background/95 backdrop-blur z-30 py-4">
        <div className="container">
          <Reveal>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition border ${
                !selectedCategory ? "bg-accent text-white border-accent" : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
              }`}>
              Todos ({blogArticles.length})
            </button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition border ${
                  selectedCategory === cat ? "bg-accent text-white border-accent" : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
                }`}>
                {cat} ({blogArticles.filter(a => a.category === cat).length})
              </button>
            ))}
          </div>
                  </Reveal>
</div>
      </div>

      {/* Featured article */}
      {!selectedCategory && !searchQuery && (
        <section className="py-12">
          <div className="container">
          <Reveal>
            <Link href={`/blog/${featured.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group cursor-pointer card-modern overflow-hidden p-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-3">Destaque</p>
                  <h2 className="font-display text-2xl sm:text-3xl mb-4 group-hover:text-accent transition leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(featured.date).toLocaleDateString("pt-PT")}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime} min</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
                    </Reveal>
</div>
        </section>
      )}

      {/* Articles grid */}
      <section className="py-10 pb-20">
        <div className="container">
          <Reveal>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">Nenhum artigo encontrado.</p>
              <Button variant="outline" onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}>
                Ver todos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(selectedCategory || searchQuery ? filteredArticles : rest).map(article => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className="card-modern overflow-hidden p-0 cursor-pointer group h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <img src={article.image} alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur text-accent border border-accent/20 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-display text-base mb-2 group-hover:text-accent transition leading-snug flex-grow">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} min</span>
                        <span className="text-accent font-medium group-hover:gap-1 flex items-center gap-0.5 transition-all">
                          Ler <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
                  </Reveal>
</div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <Reveal>
          <h2 className="font-display text-3xl mb-4">
            Pronto para <span className="text-gradient-accent">crescer digitalmente?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Aplique o que aprendeu e transforme a presença digital do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button className="btn-primary gap-2 w-full sm:w-auto">
                Falar Connosco <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline" className="border-border hover:border-accent w-full sm:w-auto">
                Calcular Orçamento
              </Button>
            </Link>
          </div>
                  </Reveal>
</div>
      </section>

      <Footer />
    </div>
  );
}
