import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // In production, this would send to a backend
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Endereço",
      content: "Foz do Iguaçu, PR",
      link: "https://goo.gl/maps/YOUR_LOCATION",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefone",
      content: "(45) 9 9999-9999",
      link: "tel:+5545999999999",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-mail",
      content: "contato@domgarciapizzaria.com.br",
      link: "mailto:contato@domgarciapizzaria.com.br",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horário",
      content: "Terça a Domingo, 18h às 23h",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 gradient-hero">
        <div className="container mx-auto text-center space-y-6">
          <div className="inline-block gradient-italian h-1 w-24"></div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Fale conosco!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-smooth text-center space-y-3"
              >
                <div className="flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth block break-words"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground break-words">{info.content}</p>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 bg-card border-border">
              <div className="text-center space-y-3 mb-8">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Envie sua Mensagem
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(45) 9 9999-9999"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudá-lo?"
                    className="bg-background border-border min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block gradient-italian h-1 w-24"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Avalie Nossa <span className="text-primary">Experiência</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sua opinião é muito importante para nós!
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold"
            asChild
          >
            <a
              href="https://share.google/tvETKTiniS46vtl2R"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="mr-2 h-5 w-5 fill-current" />
              Avaliar no Google
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
