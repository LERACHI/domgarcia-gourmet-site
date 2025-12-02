import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import fachadaImg from "@/assets/fachada.png";
import fideliCardsImg from "@/assets/fideli1.png";
import fideliStampsImg from "@/assets/fideli2.png";
import saboresOesteImg from "@/assets/saboresoeste.png";
import thiagoImg from "@/assets/thiago.png";
import prontaImg from "@/assets/pronta.png";
import suaChanceImg from "@/assets/suachance.png";
import pizza1Img from "@/assets/pizza1.png";
import pizza2Img from "@/assets/pizza2.png";
import clickImg from "@/assets/click.jpg";
import thiago2Img from "@/assets/thiago2.png";
import pizzaGourmet1Img from "@/assets/pizza-gourmet-1.png";
import cartaoImg from "@/assets/cartao.jpg";
import vinhosCardImg from "@/assets/vinhos.jpeg";
import vinho1Img from "@/assets/vinho1.jpg";
import vinho2Img from "@/assets/vinho2.jpg";
import artPerfeitaImg from "@/assets/artperfeita.jpeg";
import art1Img from "@/assets/art1.jpeg";
import art2Img from "@/assets/art2.jpg";
import logoOficialImg from "@/assets/logo-dom-garcia-official.jpg";
import fachadaNoiteImg from "@/assets/fachada-noite.png";
import ambienteExternoImg from "@/assets/ambiente-externo.jpg";
import fachadaDiaImg from "@/assets/fachada.png";
import interiorPizzariaImg from "@/assets/interior-pizzaria.png";
import ingredientesImg from "@/assets/ingredientes.jpg";
import azeiteImg from "@/assets/azeite.jpeg";
import queijoImg from "@/assets/queijo.jpeg";
import novossaboresImg from "@/assets/novossabores.jpeg";
import burrataImg from "@/assets/burrata.jpeg";
import alcachoImg from "@/assets/alcacho.jpeg";
import aspargosImg from "@/assets/aspargos.jpeg";
import floresImg from "@/assets/flores.jpeg";
import thiago1Img from "@/assets/thiago1.png";
import molhoImg from "@/assets/molho.jpeg";
import malbecImg from "@/assets/malbec.jpeg";
import chardoImg from "@/assets/chardo.jpeg";
import espumanteImg from "@/assets/espumante.jpeg";
import alvarinhoImg from "@/assets/alvarinho.jpeg";
import cremeMilhoImg from "@/assets/creme-milho.png";
import cremePacoquinhaImg from "@/assets/creme-pacoquinha.png";
import historia2Img from "@/assets/historia2.jpg";
import alfajorImg from "@/assets/alfajor.jpg";
import mesaImg from "@/assets/mesa.jpg";
import rpcImg from "@/assets/rpc.jpg";

const Blog = () => {
  const posts = [
    {
      id: 7,
      title: "Cartao fidelidade: vantagens do #domgarcialovers",
      excerpt: "Peca sua pizza, ganhe o ima carimbado na tampa e, juntando 9 do mesmo tamanho (B, G ou GG), troque por uma pizza correspondente. Bordas de cheddar ou catupiry tradicional sao cortesia; adicionais e upgrades seguem cobrados a parte. A troca vale no delivery, balcao ou salao.",
      category: "Novidades",
      date: "2025-02-02",
      author: "Equipe Dom Garcia",
      image: cartaoImg,
      gallery: [fideliCardsImg, fideliStampsImg],
      href: "/fidelidade"
    },
    {
      id: 8,
      title: "Reportagem Caminhos do Oeste (2017)",
      excerpt: "Participamos do quadro Sabores do Oeste (Rede Massa/SBT) ensinando duas pizzas juninas: doce de pacoca com suspiro e salgada de creme de milho com bacon. Veja a materia completa.",
      category: "Reportagens",
      date: "2017-06-20",
      author: "Equipe Dom Garcia",
      image: saboresOesteImg,
      href: "/reportagem-sabores-do-oeste",
      gallery: [thiagoImg, prontaImg, cremeMilhoImg, cremePacoquinhaImg]
    },
    {
      id: 9,
      title: "Quadro Sua Chance - RPC TV (2017)",
      excerpt: "Materia do quadro Sua Chance (RPC/Globo) sobre como inovamos no cardapio em Foz, com sabores como Salame com Torresmo e Abobrinha.",
      category: "Reportagens",
      date: "2017-04-10",
      author: "Equipe Dom Garcia",
      image: suaChanceImg,
      href: "/reportagem-sua-chance",
      gallery: [pizza1Img, pizza2Img, thiago1Img, rpcImg]
    },
    {
      id: 10,
      title: "Portal Clickfoz: adaptando o delivery na quarentena (2020)",
      excerpt: "Reportagem do portal Clickfoz sobre como reforcamos o delivery e ajustamos horarios e protocolos para seguir atendendo com seguranca durante a quarentena em Foz do Iguacu.",
      category: "Noticias",
      date: "2020-03-23",
      author: "Clickfoz Noticias",
      image: clickImg,
      href: "/reportagem-clickfoz",
      gallery: [thiago2Img, pizzaGourmet1Img, alfajorImg, mesaImg]
    },
        {
      id: 1,
      title: "A Arte da Massa Perfeita: Segredos da Nossa Cozinha",
      excerpt: "Descubra como preparamos nossa massa artesanal com fermentacao natural de 48 horas para criar pizzas unicas e saborosas.",
      category: "Receitas",
      date: "2024-03-15",
      author: "Chef Dom Garcia",
      image: artPerfeitaImg,
      href: "/massa-artesanal",
      gallery: [art1Img, art2Img]
    },
        {
      id: 2,
      title: "Historia da Pizzaria Dom Garcia: Tradicao e Paixao",
      excerpt: "Do inicio na rua com mesas na calcada ate a casa atual, mantemos a mesma massa de 48h e o atendimento acolhedor que virou referencia em Foz.",
      category: "Historia",
      date: "2016-08-01",
      author: "Equipe Dom Garcia",
      image: logoOficialImg,
      href: "/historia",
      gallery: [ambienteExternoImg, fachadaDiaImg, fachadaNoiteImg, historia2Img]
    },
        {
      id: 3,
      title: "5 Ingredientes Premium que Fazem a Diferenca",
      excerpt: "Nossa massa de 48h encontra azeite selecionado, queijos maturados e insumos frescos. Veja como cada ingrediente eleva o sabor Dom Garcia.",
      category: "Novidades",
      date: "2024-03-05",
      author: "Chef Dom Garcia",
      image: ingredientesImg,
      href: "/ingredientes-premium",
      gallery: [azeiteImg, queijoImg]
    },
    {
      id: 4,
      title: "Como Harmonizar Vinhos com Nossas Pizzas",
      excerpt: "Sugestoes criativas de harmonizacao: tintos para carnes defumadas, brancos para queijos cremosos e rotulos suaves para pizzas doces. Inspire-se e brinde com a gente.",
      category: "Dicas",
      date: "2024-02-28",
      author: "Sommelier Convidado",
      image: vinhosCardImg,
      href: "/harmonizacao-vinhos",
      gallery: [vinho1Img, vinho2Img]
    },
    {
      id: 5,
      title: "Novos Sabores para a Primavera 2024",
      excerpt: "Burrata com Parma e rúcula, aspargos com cogumelos trufados, alcachofra com queijo de cabra e flores com brie: a coleção que celebra a primavera.",
      category: "Novidades",
      date: "2024-02-20",
      author: "Equipe Dom Garcia",
      image: novossaboresImg,
      href: "/sabores-primavera",
      gallery: [burrataImg, alcachoImg]
    },
        {
      id: 6,
      title: "Receita: Molho de Tomate Italiano Autentico",
      excerpt: "Sugestoes criativas de harmonizacao: tintos para carnes defumadas, brancos para queijos cremosos e rotulos suaves para pizzas doces.",
      category: "Receitas",
      date: "2024-02-15",
      author: "Chef Dom Garcia",
      image: molhoImg,
      href: "/molho-italiano",
      gallery: [malbecImg, chardoImg]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Receitas": "bg-accent text-accent-foreground",
      "História": "bg-secondary text-secondary-foreground",
      "Novidades": "bg-primary text-primary-foreground",
      "Dicas": "bg-muted text-muted-foreground"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <>
      <Helmet>
        <title>Blog | Dom Garcia Pizzaria Gourmet</title>
        <meta name="description" content="Receitas, histórias da cozinha e novidades da Dom Garcia Pizzaria. Descubra os segredos por trás das nossas pizzas artesanais gourmet." />
        <meta property="og:title" content="Blog | Dom Garcia Pizzaria Gourmet" />
        <meta property="og:description" content="Receitas, histórias e novidades da nossa pizzaria gourmet" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1 pt-24 pb-16">
          {/* Hero Section */}
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
                  Blog Dom Garcia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Receitas, histórias da cozinha e novidades da nossa pizzaria gourmet
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const content = (
                    <>
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                        />
                        <Badge 
                          className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-display group-hover:text-primary transition-smooth">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {post.author}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {post.excerpt}
                        </p>
                        {post.gallery?.length ? (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {post.gallery.map((src, index) => (
                              <div key={src} className="rounded-md overflow-hidden border border-border">
                                <img
                                  src={src}
                                  alt={`Cartao fidelidade ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </CardContent>
                    </>
                  );

                  return (
                    <Card 
                      key={post.id} 
                      className="hover-lift overflow-hidden group cursor-pointer"
                    >
                      {post.href ? (
                        <Link to={post.href} className="block h-full text-foreground no-underline">
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-card border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  Receba Nossas Novidades
                </h2>
                <p className="text-muted-foreground mb-8">
                  Cadastre-se para receber receitas exclusivas, promoções e novidades em primeira mão
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="px-6 py-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary flex-1 max-w-md"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-smooth shadow-glow"
                  >
                    Assinar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;














