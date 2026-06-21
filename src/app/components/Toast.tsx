import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className="flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg"
        style={{ backgroundColor: "#E8F5E9", border: "2px solid #88B04B" }}
      >
        <CheckCircle2 size={24} style={{ color: "#88B04B" }} />
        <p className="font-semibold" style={{ color: "#2D2D2D" }}>
          {message}
        </p>
        <button
          onClick={onClose}
          className="ml-2 hover:opacity-70 transition-opacity"
          style={{ color: "#88B04B" }}
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
