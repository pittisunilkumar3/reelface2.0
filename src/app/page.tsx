"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users, Briefcase, Mic, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { VideoPreview } from "@/components/video-preview";
import { ServiceCard } from "@/components/service-card";
import { AnimatedSection } from "@/components/animated-section";
import { ContactFormModal } from "@/components/contact-form-modal";

export default function ReelfaceWebsite() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<"interview" | "brand">("interview");

  const openModal = (type: "interview" | "brand") => {
    setFormType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-red-50 text-gray-900">
      <ScrollProgress />
      <Navigation />
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formType={formType}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden mt-16" id="home" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444] via-[#9333EA] to-[#312E81]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Real Faces. <br /> Real Stories. <br /> Real Brands.
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl drop-shadow-md">
              Reelface is a digital media platform focused on founder interviews,
              startup stories, and authentic brand promotions that people actually trust.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button 
                onClick={() => openModal("interview")}
                className="rounded-2xl px-6 py-6 text-base bg-white text-[#EF4444] hover:bg-white/95 hover:scale-105 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                aria-label="Book an interview with ReelFace"
              >
                Book an promotion <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              {/* <Button 
                onClick={() => openModal("brand")}
                variant="outline" 
                className="rounded-2xl px-6 py-6 text-base border-2 border-white text-white hover:bg-white/20 font-semibold backdrop-blur-sm transition-all"
                aria-label="Promote your brand with ReelFace"
              >
                Promote Your Brand
              </Button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-200 to-red-100 flex items-center justify-center overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=800&q=80"
                alt="Professional founder interview setup showing authentic conversation"
                fill
                className="object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-500/30 to-transparent flex items-center justify-center">
                <button 
                  className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Play interview preview video"
                  onClick={() => {}}
                >
                  <Play className="h-12 w-12 text-white fill-white" aria-hidden="true" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/90 text-center font-medium drop-shadow-md">
              Founder interview preview
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white/80 backdrop-blur-sm" id="services" aria-labelledby="services-heading">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          What Reelface Does
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {/* <Card className="bg-white/80 backdrop-blur-sm border-purple-100 rounded-3xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-red-50 hover:border-[#EF4444]/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-[#EF4444] to-[#9333EA] rounded-2xl p-4 w-fit group-hover:shadow-lg group-hover:shadow-[#EF4444]/20 transition-all">
                <Mic className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mt-6 text-gray-900">Founder Interviews</h3>
              <p className="mt-3 text-gray-600">
                Honest conversations with startup founders, creators, and leaders — shot simply, told powerfully.
              </p>
            </CardContent>
          </Card> */}

          <Card className="bg-white/80 backdrop-blur-sm border-purple-100 rounded-3xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-red-50 hover:border-[#EF4444]/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-[#EF4444] to-[#9333EA] rounded-2xl p-4 w-fit group-hover:shadow-lg group-hover:shadow-[#EF4444]/20 transition-all">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mt-6 text-gray-900">Brand Promotions</h3>
              <p className="mt-3 text-gray-600">
                Authentic brand stories integrated into content, not forced ads.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-purple-100 rounded-3xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-red-50 hover:border-[#EF4444]/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-[#EF4444] to-[#9333EA] rounded-2xl p-4 w-fit group-hover:shadow-lg group-hover:shadow-[#EF4444]/20 transition-all">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mt-6 text-gray-900">Audience Trust</h3>
              <p className="mt-3 text-gray-600">
                We focus on real people, real journeys, and long-term trust with our audience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interview Format */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/10 via-transparent to-[#9333EA]/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Promotion Format</h2>
              <ul className="mt-6 space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#EF4444] mr-3 text-xl font-bold">•</span>
                  <span>Story-driven brand content (not ads)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF4444] mr-3 text-xl font-bold">•</span>
                  <span>High-retention short videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF4444] mr-3 text-xl font-bold">•</span>
                  <span>Founder credibility × brand visibility</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="text-[#EF4444] mr-3 text-xl font-bold">•</span>
                  <span>Telugu & English friendly content</span>
                </li> */}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl bg-white shadow-2xl overflow-hidden aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80"
                  alt="Interview Setup Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">Interview Setup Preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444] via-[#9333EA] to-[#312E81]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">
            Let&apos;s Put a Real Face to Your Story
          </motion.h2>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg">
            Whether you are a founder or a brand, Reelface helps you connect with audiences through authenticity.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Button 
              onClick={() => openModal("interview")}
              className="rounded-2xl px-8 py-6 text-base bg-white text-[#EF4444] hover:bg-white/95 font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Apply for Promotion
            </Button>
            {/* <Button 
              onClick={() => openModal("brand")}
              variant="outline" 
              className="rounded-2xl px-8 py-6 text-base border-2 border-white text-white hover:bg-white/20 font-semibold backdrop-blur-sm transition-all"
            >
              Brand Collaboration
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-200 bg-gradient-to-r from-purple-50 to-red-50" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Kind made by Devmithra.</p>
          <p className="text-gray-500" aria-label="Services offered">• Brand Promotions • Digital Media</p>
        </div>
      </footer>
    </div>
  );
}
