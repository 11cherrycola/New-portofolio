"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Instagram, Linkedin, Download, User, Code, Briefcase, Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import { Dialog } from "@headlessui/react";





// Butterfly Animation Component
const ButterflyAnimation = () => {
  const butterflies = [
    { id: 1, delay: 0, duration: 15, scale: 0.6, initialX: "10%", initialY: "20%" },
    { id: 2, delay: 2, duration: 18, scale: 0.8, initialX: "70%", initialY: "15%" },
    { id: 3, delay: 4, duration: 20, scale: 0.5, initialX: "40%", initialY: "80%" },
    { id: 4, delay: 1, duration: 25, scale: 0.7, initialX: "80%", initialY: "60%" },
    { id: 5, delay: 3, duration: 22, scale: 0.4, initialX: "20%", initialY: "40%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          style={{
            left: butterfly.initialX,
            top: butterfly.initialY,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0.8, 1, 0],
            x: [0, 100, 50, -100, -50, 0],
            y: [0, -100, -50, 50, 100, 0],
            rotate: [0, 10, -10, 15, -15, 0],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <div
            style={{
              transform: `scale(${butterfly.scale})`,
            }}
          >
            <ButterflyIcon color={butterfly.id % 2 === 0 ? "#f9a8d4" : "#f472b6"} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Butterfly SVG Icon
const ButterflyIcon = ({ color = "#f472b6" }: { color?: string }) => {
  return (
    <motion.div
      animate={{ rotateY: [0, 30, 0, -30, 0] }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M12 2C9.5 2 7.5 3.5 6 5C4.5 6.5 3 9 3 11C3 13 4.5 14 6 14C7.5 14 9 13 9 11C9 9 7.5 7 6 7"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            d: [
              "M12 2C9.5 2 7.5 3.5 6 5C4.5 6.5 3 9 3 11C3 13 4.5 14 6 14C7.5 14 9 13 9 11C9 9 7.5 7 6 7",
              "M12 2C9.5 2 7.5 3.5 6 5C4.5 6.5 3.5 9 3.5 11C3.5 13 5 14 6.5 14C8 14 9.5 13 9.5 11C9.5 9 8 7 6.5 7",
              "M12 2C9.5 2 7.5 3.5 6 5C4.5 6.5 3 9 3 11C3 13 4.5 14 6 14C7.5 14 9 13 9 11C9 9 7.5 7 6 7",
            ],
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M12 2C14.5 2 16.5 3.5 18 5C19.5 6.5 21 9 21 11C21 13 19.5 14 18 14C16.5 14 15 13 15 11C15 9 16.5 7 18 7"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            d: [
              "M12 2C14.5 2 16.5 3.5 18 5C19.5 6.5 21 9 21 11C21 13 19.5 14 18 14C16.5 14 15 13 15 11C15 9 16.5 7 18 7",
              "M12 2C14.5 2 16.5 3.5 18 5C19.5 6.5 20.5 9 20.5 11C20.5 13 19 14 17.5 14C16 14 14.5 13 14.5 11C14.5 9 16 7 17.5 7",
              "M12 2C14.5 2 16.5 3.5 18 5C19.5 6.5 21 9 21 11C21 13 19.5 14 18 14C16.5 14 15 13 15 11C15 9 16.5 7 18 7",
            ],
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path d="M12 2V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <motion.path
          d="M9 18C9.5 19 10.5 20 12 20C13.5 20 14.5 19 15 18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            d: [
              "M9 18C9.5 19 10.5 20 12 20C13.5 20 14.5 19 15 18",
              "M9 18.5C9.5 19.5 10.5 20.5 12 20.5C13.5 20.5 14.5 19.5 15 18.5",
              "M9 18C9.5 19 10.5 20 12 20C13.5 20 14.5 19 15 18",
            ],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  )
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        {/* Add the Butterfly Animation here */}
        <ButterflyAnimation />

        <motion.div
          className="z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          ><Image
          src="/grdr 2025-03-04 180641.145.JPG"
          alt="Profile"
          width={130}
          height={100}
          className="object-cover -translate-y-4"
        />
      
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Aulia Ivy Yasmin
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-pink-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Web Developer & Designer
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-pink-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
              <User className="inline mr-2 mb-1" /> Tentang Saya
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
  src="/FORMAL PHOTO.jpg"
  alt="About Me"
  width={300}
  height={200}
  className="rounded-lg shadow-lg mx-auto"
/>

              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-pink-600">
              </h3>
              <p className="text-gray-700 mb-4">
                Saya adalah seorang web developer dengan pengalaman dalam membuat website yang menarik dan fungsional.
                Saya memiliki keahlian dalam HTML, CSS, JavaScript, React, dan Next.js.
              </p>
              <p className="text-gray-700 mb-6">
                Saya senang menciptakan pengalaman digital yang indah, intuitif, dan bermanfaat bagi pengguna. Dengan
                pendekatan yang detail dan kreatif, saya berusaha memberikan solusi terbaik untuk setiap proyek.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span className="text-gray-700">Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span className="text-gray-700">UI/UX Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span className="text-gray-700">React & Next.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span className="text-gray-700">Responsive Design</span>
                </div>
              </div>
              <Button
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => setIsOpen(true)}
>
             <Download className="mr-2 h-4 w-4" /> Lihat CV
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-4">
      <Dialog.Title className="text-xl font-semibold mb-4">Curriculum Vitae</Dialog.Title>
      <iframe
        src="/cv.pdf"
        className="w-full h-[80vh]"
        frameBorder="0"
        title="CV Viewer"
      />
      <div className="text-right mt-4">
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Tutup
        </button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
              <Code className="inline mr-2 mb-1" /> Keahlian
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HTML", level: 90 },
              { name: "CSS", level: 85 },
              { name: "JavaScript", level: 60 },
              { name: "React", level: 75 },
              { name: "Next.js", level: 80 },
              { name: "Tailwind", level: 80 },
              { name: "UI/UX", level: 80 },
              { name: "Figma", level: 65 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold text-pink-600 mb-2">{skill.name}</h3>
                <div className="w-full bg-pink-100 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-500 mt-1">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
              <Briefcase className="inline mr-2 mb-1" /> Portofolio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Website", category: "Web Development" },
              { title: "Portfolio Design", category: "UI/UX" },
              { title: "Mobile App", category: "React Native" },
              { title: "Company Website", category: "Web Development" },
              { title: "Dashboard UI", category: "UI/UX" },
              { title: "Blog Platform", category: "Full Stack" },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-pink-100 group-hover:border-pink-300 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Project+${index + 1}`}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="inline-block px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded-full mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-600 transition-colors">
                      {project.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 md:px-8 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
              <Mail className="inline mr-2 mb-1" /> Kontak
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-pink-600">Kirim Pesan</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Kirim Pesan</Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <h3 className="text-2xl font-semibold mb-6 text-pink-600">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <p className="text-gray-600">ivyyasmin.ivy@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Telepon</h4>
                      <p className="text-gray-600">+6281271740827</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Lokasi</h4>
                      <p className="text-gray-600">Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-pink-600">Media Sosial</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="https://www.instagram.com/aaivyasminn?igsh=bnhwa2Y3cmdyenR4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-100 p-3 rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Instagram className="h-6 w-6" />
                  </motion.a>
                  <motion.a
  href="https://www.linkedin.com/in/aulia-yasmin-1851492b1"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-100 p-3 rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
  whileHover={{ y: -5 }}
  transition={{ type: "spring", stiffness: 400 }}
>
                
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/11cherrycola"
                    className="bg-pink-100 p-3 rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-pink-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="text-pink-500 h-6 w-6 animate-pulse" />
          </div>
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Nama Saya. Dibuat dengan <span className="text-pink-500">❤</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
