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
    title: "Web Design Moderno em 2025: Tendências que Você Precisa Conhecer",
    excerpt:
      "Descubra as tendências mais quentes em web design para 2025 e como aplicá-las no seu site.",
    category: "Web Design",
    author: "DDA-Web",
    date: "2025-02-10",
    readTime: 8,
    image: "/images/blog-1.png",
    imageAlt: "Designer a trabalhar num layout moderno de website",
    content: webDesignModerno2025,
  },
  {
    id: "seo-pequenas-empresas",
    title: "SEO para Pequenas Empresas: Guia Completo para Começar",
    excerpt:
      "Aprenda como otimizar seu site para motores de busca com ações simples e consistentes.",
    category: "Marketing",
    author: "DDA-Web",
    date: "2025-02-08",
    readTime: 10,
    image: "/images/blog-2.png",
    imageAlt: "Profissional analisando métricas de SEO em portátil",
    content: seoPequenasEmpresas,
  },
  {
    id: "conversao-visitantes-clientes",
    title: "Conversão: Como Transformar Visitantes em Clientes",
    excerpt:
      "Estratégias comprovadas para aumentar conversão e gerar mais resultado com o tráfego atual.",
    category: "Marketing",
    author: "DDA-Web",
    date: "2025-02-05",
    readTime: 9,
    image: "/images/blog-3.png",
    imageAlt: "Empreendedora feliz vendo crescimento das vendas online",
    content: conversaoVisitantesClientes,
  },
  {
    id: "velocidade-site-importancia",
    title:
      "A Importância da Velocidade do Site: Por que Importa e Como Melhorar",
    excerpt:
      "Entenda por que performance impacta SEO, UX e vendas — e como melhorar rapidamente.",
    category: "Tecnologia",
    author: "DDA-Web",
    date: "2025-02-03",
    readTime: 7,
    image: "/images/blog-4.png",
    imageAlt: "Código e performance tools abertos em ecrã",
    content: velocidadeSiteImportancia,
  },
  {
    id: "ia-web-design",
    title: "IA no Web Design: Oportunidades e Limites",
    excerpt:
      "Como usar IA para acelerar entregas sem perder estratégia, identidade e qualidade.",
    category: "Tecnologia",
    author: "DDA-Web",
    date: "2025-02-01",
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
