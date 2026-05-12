# A Importância da Velocidade do Site: Como 3 Segundos Podem Custar Clientes

Há um número que deve conhecer: **53%** dos utilizadores mobile abandonam um site que demora mais de 3 segundos a carregar.

Mais de metade dos seus potenciais clientes vai embora antes de ver o que tem para oferecer — simplesmente porque o site é lento. E na maioria dos casos, os donos dos negócios nem sabem que o problema existe.

---

## O Impacto Real da Velocidade nos Negócios

Não é só teoria. Eis o que as métricas mostram:

- **Amazon:** cada 100ms de melhoria de velocidade = +1% de receita
- **Google:** sites lentos têm posicionamento mais baixo nos resultados de pesquisa
- **Deloitte:** melhorar o tempo de carregamento em 0.1 segundos aumenta conversões em 8%

Para um pequeno negócio em Angola, isso traduz-se em clientes que chegam ao site e ficam — ou que saem imediatamente para o concorrente.

---

## Por Que Sites Ficam Lentos

### Imagens Não Optimizadas

Este é o culpado número um. Uma fotografia tirada com smartphone moderno pode ter 4–8 MB. Um site com 10 dessas fotos carrega 40–80 MB só em imagens.

A solução é simples: comprimir imagens antes de as colocar no site. Ferramentas como TinyPNG ou Squoosh reduzem o tamanho em 70–90% sem perda de qualidade visível.

**Formatos modernos fazem diferença:**
- JPEG: bom para fotografias
- PNG: bom para transparência
- WebP: melhor que ambos em tamanho (suporte moderno excelente)
- AVIF: o futuro, já suportado pela maioria dos browsers

---

### Demasiados Scripts e Plugins

Cada plugin que adiciona ao site (chat ao vivo, contador de visitas, partilha social, pop-ups) carrega código extra. Um site WordPress com 20 plugins pode demorar o dobro a carregar comparado com a mesma página limpa.

**Regra prática:** se não usa activamente um plugin, desactivar e eliminar.

---

### Hospedagem de Baixa Qualidade

Hospedagens gratuitas ou muito baratas partilham recursos entre centenas de sites no mesmo servidor. Em períodos de pico de tráfego, todos ficam lentos ao mesmo tempo.

Migrar para uma hospedagem de qualidade (Vercel, Netlify para sites estáticos; DigitalOcean, Hetzner para aplicações) é muitas vezes a melhoria de velocidade com maior impacto.

---

### Sem Cache Configurado

Cache significa guardar uma cópia do site no browser ou num servidor intermédio, para não ter de recarregar tudo do zero cada vez. Um site bem configurado pode ser até 10x mais rápido para visitantes recorrentes.

---

## Como Medir a Velocidade do Seu Site

### Google PageSpeed Insights (gratuito)

Aceda a [pagespeed.web.dev](https://pagespeed.web.dev) e insira o URL do seu site. Receberá uma pontuação de 0–100 e uma lista de problemas ordenados por impacto.

**Pontuações de referência:**
- 90–100: Excelente
- 50–89: Necessita melhorias
- 0–49: Mau — impacta SEO e experiência

### Core Web Vitals — As 3 Métricas que o Google Valoriza

**LCP (Largest Contentful Paint)**
Tempo até o maior elemento visível aparecer. Meta: menos de 2.5 segundos.

**FID / INP (Interaction to Next Paint)**
Tempo de resposta a interações do utilizador. Meta: menos de 200ms.

**CLS (Cumulative Layout Shift)**
Mede se elementos "saltam" durante o carregamento (muito irritante em mobile). Meta: menos de 0.1.

---

## 8 Acções Práticas para Melhorar a Velocidade

**1. Comprima todas as imagens**
Use TinyPNG ou Squoosh antes de fazer upload. Meta: menos de 200KB por imagem.

**2. Use lazy loading nas imagens**
Imagens abaixo do fold só carregam quando o utilizador faz scroll até elas.

**3. Reduza os plugins ao essencial**
Faça um inventário e elimine o que não usa activamente.

**4. Active compressão Gzip/Brotli no servidor**
Reduz o tamanho dos ficheiros transferidos em 60–80%.

**5. Use uma CDN (Content Delivery Network)**
Cloudflare (gratuito) coloca o conteúdo do site em servidores distribuídos pelo mundo, reduzindo a distância entre o servidor e o utilizador.

**6. Carregue fontes eficientemente**
Use `font-display: swap` para que o texto apareça imediatamente com fonte do sistema enquanto a fonte personalizada carrega.

**7. Minifique CSS e JavaScript**
Ferramentas de build modernas (Vite, Webpack) fazem isso automaticamente. Certifique-se que está activado.

**8. Remova scripts de terceiros desnecessários**
Analytics, pixels de remarketing, chats, widgets — cada um adiciona tempo de carregamento. Use apenas o essencial.

---

## Velocidade em Mobile: O Contexto Angolano

Em Angola, onde uma parte significativa do acesso à internet é feita por dados móveis com velocidade variável, a optimização para mobile tem impacto ainda maior do que em mercados com fibra óptica generalizada.

Um site que carrega em 2 segundos numa ligação Wi-Fi pode demorar 8–12 segundos em dados móveis 3G. Esse utilizador vai embora.

**Estratégias específicas para mobile:**
- Servir imagens de resolução adequada ao ecrã (não enviar uma imagem 2400px para um ecrã de 400px)
- Reduzir JavaScript ao mínimo necessário
- Usar Progressive Web App (PWA) para experiência de app sem instalação

---

## Velocidade vs. Design: Não Precisa Escolher

Um erro comum é achar que um site visualmente rico é inevitavelmente lento. Não é verdade.

Com as tecnologias certas (React, Vite, Tailwind, optimização de imagens) é possível ter um site visualmente impressionante que carrega em menos de 2 segundos.

A chave está em construir com performance em mente desde o início — não tentar optimizar no final.

---

*O site da sua empresa está lento? A DDA-Web constrói sites modernos optimizados para velocidade desde o primeiro dia. [Veja os nossos pacotes](/services) ou [entre em contacto](/contact).*
