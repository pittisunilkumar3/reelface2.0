"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertCircle,
};

const toastStyles = {
  success: "bg-green-500/10 border-green-500/20 text-green-500",
  error: "bg-red-500/10 border-red-500/20 text-red-500",
  info: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  warning: "bg-yellow-500/10 border-yellow-500/20 text-yellow-500",
};

export function Toast({
  type = "info",
  title,
  message,
  duration = 5000,
  onClose,
  className,
}: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const Icon = toastIcons[type];

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm",
        toastStyles[type],
        "animate-in slide-in-from-right-full",
        className
      )}
      role="alert"
      aria-live="assertive"
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 space-y-1">
        {title && (
          <p className="font-semibold text-sm text-neutral-100">{title}</p>
        )}
        <p className="text-sm text-neutral-300">{message}</p>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="shrink-0 text-neutral-400 hover:text-neutral-100 transition-colors"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: Array<ToastProps & { id: string }>;
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div
      className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none"
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} onClose={() => onRemove(toast.id)} />
        </div>
      ))}
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = React.useState<
    Array<ToastProps & { id: string }>
  >([]);

  const addToast = React.useCallback(
    (toast: ToastProps) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { ...toast, id }]);
    },
    []
  );

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    success: (message: string, title?: string) =>
      addToast({ type: "success", message, title }),
    error: (message: string, title?: string) =>
      addToast({ type: "error", message, title }),
    info: (message: string, title?: string) =>
      addToast({ type: "info", message, title }),
    warning: (message: string, title?: string) =>
      addToast({ type: "warning", message, title }),
  };
}
