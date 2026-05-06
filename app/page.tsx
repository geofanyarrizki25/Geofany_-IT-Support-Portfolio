"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e17] text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-6">
            IT Support Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Geofany <br />
            <span className="text-emerald-400">Arrizki</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-2xl leading-relaxed">
            Results-driven IT Support professional with 3+ years of hands-on
            experience in hardware/software troubleshooting, IT inventory
            management, technical documentation, and staff training.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#contact"
              className="bg-emerald-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-xl hover:bg-emerald-400 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111827] border border-[#1d2a45] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-2">
              IT Support — Vice Chairman
            </h3>

            <p className="text-emerald-400 mb-4">
              PT SIMS · PON XXI Aceh–Sumut
            </p>

            <p className="text-gray-300 leading-relaxed">
              Handled national-scale IT support operations and trained 150+
              staff in troubleshooting, inventory management, and operational
              systems.
            </p>
          </div>

          <div className="bg-[#111827] border border-[#1d2a45] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-2">
              Assistant Project Manager
            </h3>

            <p className="text-emerald-400 mb-4">
              PT Pinetop Technology
            </p>

            <p className="text-gray-300 leading-relaxed">
              Managed support tickets, coordinated technical documentation, and
              assisted communication between teams and clients.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "IT Support",
            "Networking",
            "Troubleshooting",
            "Hardware Repair",
            "Windows Server",
            "Inventory Management",
            "Technical Documentation",
            "Team Leadership",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-[#111827] border border-[#1d2a45] rounded-xl p-5 text-center text-gray-300 hover:border-emerald-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111827] border border-[#1d2a45] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Enterprise Inventory System
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Built and maintained inventory tracking workflows for large-scale
              IT assets and operational equipment.
            </p>
          </div>

          <div className="bg-[#111827] border border-[#1d2a45] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Staff Training Program
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Designed onboarding and troubleshooting training systems for
              technical and operational staff.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-12">Contact</h2>

        <div className="bg-[#111827] border border-[#1d2a45] rounded-2xl p-10">
          <p className="text-gray-300 text-lg mb-6">
            Interested in working together or hiring me for IT Support roles?
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="bg-emerald-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1d2a45] py-8 text-center text-gray-400">
        © 2026 Geofany Arrizki — IT Support Portfolio
      </footer>
    </main>
  );
}