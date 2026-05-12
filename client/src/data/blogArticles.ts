import conversaoVisitantesClientes from "@/content/blog/conversao-visitantes-clientes.md?raw";
import iaWebDesign from "@/content/blog/ia-web-design.md?raw";
import seoPequenasEmpresas from "@/content/blog/seo-pequenas-empresas.md?raw";
import velocidadeSiteImportancia from "@/content/blog/velocidade-site-importancia.md?raw";
import webDesignModerno2025 from "@/content/blog/web-design-moderno-2025.md?raw";

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Web Design" | "Marketing" | "Tecnologia";
  author: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "web-design-moderno-2025",
    title: "Web Design Moderno em 2026: Tendências que Você Precisa Conhecer",
    excerpt:
      "Minimalismo intencional, mobile-first real e velocidade como feature — descubra as tendências que definem o web design em 2026 e como aplicá-las.",
    category: "Web Design",
    author: "DDA-Web",
    date: "2026-04-15",
    readTime: 10,
    image: "/images/blog-1.png",
    imageAlt: "Designer a trabalhar num layout moderno de website",
    content: webDesignModerno2025,
  },
  {
    id: "seo-pequenas-empresas",
    title: "SEO para Pequenas Empresas: Guia Completo para Começar",
    excerpt:
      "SEO local, Google Meu Negócio e palavras-chave certas — um guia prático para negócios angolanos aparecerem no Google e atraírem mais clientes.",
    category: "Marketing",
    author: "DDA-Web",
    date: "2026-04-10",
    readTime: 12,
    image: "/images/blog-2.png",
    imageAlt: "Profissional analisando métricas de SEO em portátil",
    content: seoPequenasEmpresas,
  },
  {
    id: "conversao-visitantes-clientes",
    title: "Conversão: Como Transformar Visitantes em Clientes",
    excerpt:
      "97% dos visitantes saem sem agir. Veja as estratégias concretas para transformar mais visitas em contactos, orçamentos e vendas.",
    category: "Marketing",
    author: "DDA-Web",
    date: "2026-04-05",
    readTime: 10,
    image: "/images/blog-3.png",
    imageAlt: "Empreendedora feliz vendo crescimento das vendas online",
    content: conversaoVisitantesClientes,
  },
  {
    id: "velocidade-site-importancia",
    title: "A Importância da Velocidade do Site: Como 3 Segundos Podem Custar Clientes",
    excerpt:
      "53% dos utilizadores abandonam sites que demoram mais de 3 segundos. Saiba o que torna um site lento e 8 acções concretas para melhorar hoje.",
    category: "Tecnologia",
    author: "DDA-Web",
    date: "2026-03-28",
    readTime: 7,
    image: "/images/blog-4.png",
    imageAlt: "Código e performance tools abertos em ecrã",
    content: velocidadeSiteImportancia,
  },
  {
    id: "ia-web-design",
    title: "IA no Web Design: Oportunidades e Limites",
    excerpt:
      "IA cria sites em minutos — mas estratégia, identidade de marca e relação com o cliente continuam a ser humanos. Saiba como equilibrar os dois.",
    category: "Tecnologia",
    author: "DDA-Web",
    date: "2026-03-20",
    readTime: 6,
    image: "/images/blog-5.png",
    imageAlt: "Pessoa utilizando IA para criar experiências digitais",
    content: iaWebDesign,
  },
];

export const categories: BlogArticle["category"][] = [
  "Web Design",
  "Marketing",
  "Tecnologia",
];
