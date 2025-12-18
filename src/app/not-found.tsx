"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-red-50 flex items-center justify-center p-6">
      <Card className="max-w-md w-full bg-white border-purple-200 shadow-2xl">
        <CardContent className="p-8 text-center">
          <div className="bg-gradient-to-br from-[#EF4444] to-[#9333EA] bg-clip-text text-transparent">
            <h1 className="text-8xl font-bold mb-2">404</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <Link href="/" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-[#EF4444] to-[#9333EA] hover:opacity-90">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              className="flex-1 border-purple-300 text-gray-700 hover:bg-purple-50"
              onClick={() => window.history.back()}
            >
              <Search className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
