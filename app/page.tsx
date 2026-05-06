export default function Home() {
  return (
    <main className="bg-[#0a0e17] text-[#e2eaf7] min-h-screen overflow-x-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,160,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0a0e17]/90 backdrop-blur border-b border-[#1e2d45]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-[#00e5a0] text-sm tracking-widest font-mono">
            geo@portfolio:~$
          </span>

          <div className="hidden md:flex gap-6 text-sm text-[#637089]">
            <a href="#experience" className="hover:text-[#00e5a0] transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#00e5a0] transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#00e5a0] transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#00e5a0] transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <section className="py-24">
          <p className="text-[#00e5a0] uppercase tracking-[0.3em] text-xs mb-6 font-mono">
            IT SUPPORT PORTFOLIO
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
            Geofany
            <br />
            <span className="text-[#00e5a0]">Arrizki</span>
          </h1>

          <p className="text-[#637089] font-mono mb-8">
            <span className="text-sky-400">
              IT Support Specialist
            </span>{" "}
            · System Administrator · Technical Trainer
          </p>

          <p className="max-w-2xl text-[#8fa3c1] leading-8 mb-10">
            Results-driven IT Support professional with 3+ years of hands-on
            experience in hardware/software troubleshooting, IT inventory
            management, technical documentation, and staff training. Proven in
            national-scale events and enterprise environments.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:geofanyarrizki@gmail.com"
              className="bg-[#00e5a0] text-[#0a0e17] px-6 py-3 rounded font-bold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-[#00e5a0] text-[#00e5a0] px-6 py-3 rounded hover:bg-[#00e5a0]/10 transition"
            >
              LinkedIn →
            </a>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            ["3+", "Years Experience"],
            ["150+", "Staff Trained"],
            ["99%", "System Uptime"],
            ["50+", "Tickets/Month"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-[#00e5a0] mb-2">
                {num}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#637089]">
                {label}
              </div>
            </div>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-28">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-mono bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0] px-3 py-1 rounded">
              01
            </span>

            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "IT Support — Vice Chairman",
                company: "PT SIMS · PON XXI Aceh–Sumut",
                date: "Jan 2024 – Jan 2025",
                desc: "Served as Vice Chairman of IT Support for a national-scale sporting event, trained 150+ staff, handled operational systems, documentation, and troubleshooting.",
              },
              {
                title: "Assistant Project Manager & Customer Support",
                company: "PT Pinetop Technology",
                date: "Aug 2025 – Feb 2026",
                desc: "Resolved 50+ support tickets monthly, coordinated technical documentation, and communicated with clients & developers.",
              },
              {
                title: "Administrative Staff",
                company: "Yayasan Al-Hidayah",
                date: "Apr 2023 – Apr 2024",
                desc: "Automated reports using Excel and digitized operational archives for efficiency improvements.",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-8 hover:border-[#00e5a0]/40 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>

                    <p className="text-[#00e5a0]">{job.company}</p>
                  </div>

                  <span className="text-sm font-mono text-[#637089]">
                    {job.date}
                  </span>
                </div>

                <p className="text-[#8fa3c1] leading-7">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-28">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-mono bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0] px-3 py-1 rounded">
              02
            </span>

            <h2 className="text-4xl font-bold">Skills</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="bg-[#151e2e] border border-[#1e2d45] rounded-xl py-5 text-center hover:border-[#00e5a0]/40 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-28">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-mono bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0] px-3 py-1 rounded">
              03
            </span>

            <h2 className="text-4xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Enterprise Inventory System
              </h3>

              <p className="text-[#8fa3c1] leading-7">
                Built and maintained inventory tracking workflows for large-scale
                IT assets and operational equipment.
              </p>
            </div>

            <div className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Staff Training Program
              </h3>

              <p className="text-[#8fa3c1] leading-7">
                Designed onboarding and troubleshooting training systems for
                technical and operational staff.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-mono bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0] px-3 py-1 rounded">
              04
            </span>

            <h2 className="text-4xl font-bold">Contact</h2>
          </div>

          <div className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-10">
            <p className="text-[#8fa3c1] mb-8">
              Interested in working together or hiring me for IT Support roles?
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:geofanyarrizki@gmail.com"
                className="bg-[#00e5a0] text-[#0a0e17] px-6 py-3 rounded font-bold hover:scale-105 transition"
              >
                Email Me
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="border border-[#00e5a0] text-[#00e5a0] px-6 py-3 rounded hover:bg-[#00e5a0]/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#1e2d45] py-8 text-center text-[#637089] text-sm font-mono">
          © 2026 Geofany Arrizki — IT Support Portfolio
        </footer>
      </div>
    </main>
  );
}