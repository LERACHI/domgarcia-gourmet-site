import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5545999999999"; // Replace with actual number
  const message = encodeURIComponent("Olá! Gostaria de fazer um pedido na Dom Garcia Pizzaria.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-4 rounded-full shadow-elegant transition-smooth hover:scale-110 hover:shadow-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
