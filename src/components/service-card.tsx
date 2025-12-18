"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

interface ServiceCardProps extends ServiceCardData {
  className?: string;
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  gradient = "from-[#EF4444] to-[#9333EA]",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm border-purple-100 rounded-3xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-red-50 hover:border-[#EF4444]/30 transition-all duration-300 group shadow-lg hover:shadow-xl p-8",
        className
      )}
    >
      <div
        className={cn(
          "bg-gradient-to-br rounded-2xl p-4 w-fit group-hover:shadow-lg group-hover:shadow-[#EF4444]/20 transition-all",
          gradient
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-6 text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}
