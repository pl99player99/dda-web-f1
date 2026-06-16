import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const phoneNumber = "244930723070";
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    { label: "💬 Quero um site", text: "Olá! Gostaria de saber mais sobre a criação de um site para o meu negócio." },
    { label: "⚡ Pedir orçamento", text: "Olá! Gostaria de pedir um orçamento para o meu projeto digital." },
    { label: "🤔 Tenho dúvidas", text: "Olá! Tenho algumas dúvidas sobre os serviços da DDA-Web." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick message options */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-1 animate-in slide-in-from-bottom-4 fade-in duration-200">
          <p className="text-xs text-muted-foreground text-right mb-1 bg-background/80 backdrop-blur px-2 py-1 rounded">
            Como posso ajudar?
          </p>
          {messages.map((msg, idx) => (
            <a
              key={idx}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg.text)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="ml-auto px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-green-500 hover:text-green-500 transition-all whitespace-nowrap shadow-md"
            >
              {msg.label}
            </a>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl glow-warm relative"
        title="Contacte-nos no WhatsApp"
        aria-label="Abrir chat WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
          </>
        )}
      </button>
    </div>
  );
}
