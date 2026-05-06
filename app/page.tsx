# app / page.tsx

  ```tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  "IT Support",
  "Hardware Troubleshooting",
  "Software Installation",
  "Network Troubleshooting",
  "Windows Administration",
  "Google Workspace",
  "Microsoft 365",
  "Technical Documentation",
  "Inventory Management",
  "Remote Support",
  "Team Coordination",
  "Project Management",
];

const projects = [
  {
    title: "National Event IT Operations",
    company: "PON XXI Aceh–Sumut",
    desc: "Managed large-scale IT support operations, troubleshooting systems, coordinating teams, and ensuring smooth event execution.",
  },
  {
    title: "TalentCloud.ai Support System",
    company: "PT Pinetop Technology",
    desc: "Handled client support tickets, communication flow, and technical issue resolution for enterprise users.",
  },
  {
    title: "Inventory Management System",
    company: "Internal Operations",
    desc: "Organized and documented IT asset inventory to improve tracking efficiency and operational reporting.",
  },
];

const certifications = [
  "Google IT Support Fundamentals",
  "Microsoft Office Specialist",
  "Network Troubleshooting Essentials",
  "IT Asset Management",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-emerald-400 uppercase tracking-[0.35em] text-sm mb-6">
            IT Support Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            Geofany
            <br />
            <span className="text-emerald-400">Arrizki</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-9 max-w-3xl mb-10">
            Results-driven IT Support professional with 3+ years of hands-on
            experience in hardware/software troubleshooting, IT inventory
            management, technical documentation, network support, and team
            coordination.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:geofanyarrizki@gmail.com"
              className="bg-emerald-400 hover:bg-emerald-300 transition text-black px-8 py-4 rounded-xl font-semibold"
            >
              Hire Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition px-8 py-4 rounded-xl font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Passionate about solving
              <span className="text-emerald-400"> technical problems.</span>
            </h2>

            <p className="text-zinc-400 leading-8 text-lg mb-6">
              I specialize in IT support operations, troubleshooting,
              infrastructure assistance, and user support. I enjoy helping teams
              work efficiently by ensuring stable systems, clear documentation,
              and fast issue resolution.
            </p>

            <p className="text-zinc-400 leading-8 text-lg">
              My experience ranges from enterprise support environments to
              national-scale event operations, where reliability, communication,
              and adaptability are critical.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#10182b] border border-[#1d2a45] rounded-3xl p-10"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-5xl font-black text-emerald-400 mb-2">
                  3+
                </h3>
                <p className="text-zinc-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-emerald-400 mb-2">
                  150+
                </h3>
                <p className="text-zinc-400">Staff Trained</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-emerald-400 mb-2">
                  24/7
                </h3>
                <p className="text-zinc-400">Support Mindset</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-emerald-400 mb-2">
                  100%
                </h3>
                <p className="text-zinc-400">Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-bold">Professional Journey</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#10182b] border border-[#1d2a45] rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-3">
              IT Support — Vice Chairman
            </h3>

            <p className="text-emerald-400 mb-5">
              PT SIMS · PON XXI Aceh–Sumut
            </p>

            <p className="text-zinc-400 leading-8">
              Handled national-scale IT support operations, coordinated support
              teams, solved hardware/software issues, and trained more than 150
              staff members.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#10182b] border border-[#1d2a45] rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-3">
              Assistant Project Manager
            </h3>

            <p className="text-emerald-400 mb-5">
              PT Pinetop Technology
            </p>

            <p className="text-zinc-400 leading-8">
              Managed support tickets, coordinated communication with clients,
              monitored issue resolution, and supported operations for
              TalentCloud.ai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-bold">Technical Expertise</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="px-6 py-4 rounded-2xl bg-[#10182b] border border-[#1d2a45] text-zinc-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-bold">Highlighted Work</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={project.title}
              className="bg-[#10182b] border border-[#1d2a45] rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-emerald-400 mb-5">{project.company}</p>

              <p className="text-zinc-400 leading-8">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
            Certifications
          </p>

          <h2 className="text-5xl font-bold">Learning & Growth</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-[#10182b] border border-[#1d2a45] rounded-2xl p-6"
            >
              <p className="text-lg font-medium text-zinc-300">{cert}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="bg-[#10182b] border border-[#1d2a45] rounded-[2rem] p-12 text-center">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Let&apos;s work together.
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-8 mb-10">
            I am open to IT Support, Helpdesk, Technical Support, and IT
            Operations opportunities.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="mailto:geofanyarrizki@gmail.com"
              className="bg-emerald-400 hover:bg-emerald-300 transition text-black px-8 py-4 rounded-xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition px-8 py-4 rounded-xl font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1d2a45] py-8 text-center text-zinc-500">
        © 2026 Geofany Arrizki — IT Support Portfolio
      </footer>
    </main>
  );
}