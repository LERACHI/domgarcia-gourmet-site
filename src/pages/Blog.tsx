import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "A Arte da Massa Perfeita: Segredos da Nossa Cozinha",
      excerpt: "Descubra como preparamos nossa massa artesanal com fermentação natural de 48 horas para criar pizzas únicas e saborosas.",
      category: "Receitas",
      date: "2024-03-15",
      author: "Chef Dom Garcia",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "História da Pizzaria Dom Garcia: Tradição e Paixão",
      excerpt: "Conheça a história por trás da Dom Garcia Pizzaria, desde nossa fundação até nos tornarmos referência em pizzas gourmet em Foz do Iguaçu.",
      category: "História",
      date: "2024-03-10",
      author: "Equipe Dom Garcia",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "5 Ingredientes Premium que Fazem a Diferença",
      excerpt: "Saiba quais são os ingredientes especiais que selecionamos para criar nossas pizzas gourmet e por que a qualidade importa.",
      category: "Novidades",
      date: "2024-03-05",
      author: "Chef Dom Garcia",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Como Harmonizar Vinhos com Nossas Pizzas",
      excerpt: "Um guia completo de harmonização para você aproveitar ainda mais sua experiência gastronômica na Dom Garcia.",
      category: "Dicas",
      date: "2024-02-28",
      author: "Sommelier Convidado",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Novos Sabores para a Primavera 2024",
      excerpt: "Confira os novos sabores exclusivos que criamos especialmente para a primavera, com ingredientes frescos da estação.",
      category: "Novidades",
      date: "2024-02-20",
      author: "Equipe Dom Garcia",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Receita: Molho de Tomate Italiano Autêntico",
      excerpt: "Aprenda a fazer em casa nosso molho de tomate especial, preparado com tomates San Marzano e ervas frescas.",
      category: "Receitas",
      date: "2024-02-15",
      author: "Chef Dom Garcia",
      image: "/placeholder.svg"
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
                {posts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="hover-lift overflow-hidden group cursor-pointer"
                  >
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
                    </CardContent>
                  </Card>
                ))}
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