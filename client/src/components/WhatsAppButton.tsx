import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+244930723070";
  const message = "Olá! Gostaria de saber mais sobre os serviços da DDA-Web.";
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      title="Contacte-nos no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
