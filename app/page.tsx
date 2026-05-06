"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e17] text-white">
      <motion.section
        className="max-w-6xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >        <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-6">
          IT Support Portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
          Geofany <br />
          <span className="text-emerald-400">Arrizki</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-2xl leading-8 mb-10">
          Results-driven IT Support professional with 3+ years of hands-on
          experience in hardware/software troubleshooting, IT inventory
          management, technical documentation, and staff training.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:geofanyarrizki@gmail.com"
            className="bg-emerald-400 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Hire Me
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "IT Support — Vice Chairman",
              company: "PT SIMS · PON XXI Aceh–Sumut",
              desc: "Handled national-scale IT support operations and trained 150+ staff.",
            },
            {
              title: "Assistant Project Manager",
              company: "PT Pinetop Technology",
              desc: "Managed support tickets and client communications for TalentCloud.ai.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#151e2e] border border-[#1e2d45] rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-emerald-400 mb-4">{item.company}</p>
              <p className="text-zinc-400 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
