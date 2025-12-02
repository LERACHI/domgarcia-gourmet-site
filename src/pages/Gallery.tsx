import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - in production these would be actual photos
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      alt: "Pizza gourmet Dom Garcia",
      category: "Pizzas",
    },
    {
      src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
      alt: "Pizza artesanal",
      category: "Pizzas",
    },
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      alt: "Pizza margherita premium",
      category: "Pizzas",
    },
    {
      src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
      alt: "Esfihas artesanais",
      category: "Esfihas",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      alt: "Ambiente aconchegante",
      category: "Ambiente",
    },
    {
      src: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80",
      alt: "Área familiar com playground",
      category: "Ambiente",
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
            Nossa <span className="text-primary">Galeria</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossas criações e o ambiente acolhedor da Dom Garcia
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-smooth"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <div>
                    <span className="text-primary text-sm font-semibold">
                      {image.category}
                    </span>
                    <p className="text-foreground font-display text-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block gradient-italian h-1 w-24"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Siga-nos no <span className="text-primary">Instagram</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Acompanhe nossas novidades, promoções e bastidores
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              asChild
            >
              <a
                href="https://www.instagram.com/pizzariadomgarciafoz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @pizzariadomgarciafoz
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a
                href="https://www.facebook.com/domgarciapizzaria/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary text-4xl font-light"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg shadow-elegant"
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
