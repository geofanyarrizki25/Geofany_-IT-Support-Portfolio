export default function Home() {
  return (
    <main className="bg-[#0a0e17] text-[#e2eaf7] min-h-screen overflow-x-hidden">
      {/* GRID */}
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
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-[13px] text-[#00e5a0] tracking-wide">
            geo@portfolio:~$
          </span>

          <div className="hidden md:flex gap-5 flex-wrap">
            <a
              href="#experience"
              className="font-mono text-[11px] text-[#637089] hover:text-[#00e5a0] transition"
            >
              Experience
            </a>

            <a
              href="#gallery"
              className="font-mono text-[11px] text-[#637089] hover:text-[#00e5a0] transition"
            >
              Gallery
            </a>

            <a
              href="#skills"
              className="font-mono text-[11px] text-[#637089] hover:text-[#00e5a0] transition"
            >
              Skills
            </a>

            <a
              href="#certifications"
              className="font-mono text-[11px] text-[#637089] hover:text-[#00e5a0] transition"
            >
              Certs
            </a>

            <a
              href="#casestudy"
              className="font-mono text-[11px] text-[#637089] hover:text-[#00e5a0] transition"
            >
              Case Study
            </a>

            <a
              href="#contact"
              className="font-mono text-[11px] text-[#637089] hover:text-[#00e5a0] transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* HERO */}
        <section className="py-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px] bg-[#00e5a0]" />

            <p className="font-mono text-[12px] text-[#00e5a0] tracking-[0.15em] uppercase">
              IT Support Portfolio
            </p>
          </div>

          <h1 className="text-[clamp(42px,7vw,72px)] leading-[1.05] font-black mb-2">
            Geofany
            <br />
            <span className="text-[#00e5a0]">Arrizki</span>
          </h1>

          <p className="font-mono text-[14px] text-[#637089] mb-7">
            <span className="text-sky-400">
              IT Support Specialist
            </span>{" "}
            · System Administrator · Technical Trainer
          </p>

          <p className="text-[15px] leading-7 text-[#8fa3c1] max-w-[560px] mb-9">
            Results-driven IT Support professional with 3+ years of hands-on
            experience in hardware/software troubleshooting, IT inventory
            management, technical documentation, and staff training. Proven in
            national-scale events and enterprise environments.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:geofanyarrizki@gmail.com"
              className="font-mono text-[12px] tracking-wide px-5 py-3 rounded bg-[#00e5a0] text-[#0a0e17] font-bold hover:bg-[#00ffb3] hover:-translate-y-[1px] transition"
            >
              Hire Me
            </a>

            <a
              href="https://linkedin.com/in/geofany-arrizki"
              target="_blank"
              className="font-mono text-[12px] tracking-wide px-5 py-3 rounded border border-[#00e5a0] text-[#00e5a0] hover:bg-[#00e5a0]/10 transition"
            >
              LinkedIn →
            </a>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            ["3+", "Years Experience"],
            ["150+", "Staff Trained"],
            ["99%", "System Uptime"],
            ["50+", "Tickets/Month"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-[#151e2e] border border-[#1e2d45] rounded-lg px-5 py-6 text-center"
            >
              <div className="font-mono text-[26px] font-bold text-[#00e5a0] mb-1">
                {num}
              </div>

              <div className="text-[11px] uppercase tracking-[0.08em] text-[#637089]">
                {label}
              </div>
            </div>
          ))}
        </section>
        {/* EXPERIENCE */}
        <section id="experience" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#00e5a0]">01.</span>

            <h2 className="text-3xl font-bold">Experience</h2>

            <div className="h-[1px] flex-1 bg-[#1e2d45]" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-7 hover:border-[#00e5a0]/50 transition">
              <h3 className="text-2xl font-bold mb-2">
                IT Support — Vice Chairman
              </h3>

              <p className="font-mono text-[#00e5a0] text-sm mb-5">
                PT SIMS · PON XXI Aceh–Sumut
              </p>

              <p className="text-[#8fa3c1] leading-7 text-[15px]">
                Handled national-scale IT support operations and trained 150+
                staff in troubleshooting, inventory management, and operational
                systems.
              </p>
            </div>

            <div className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-7 hover:border-[#00e5a0]/50 transition">
              <h3 className="text-2xl font-bold mb-2">
                Assistant Project Manager
              </h3>

              <p className="font-mono text-[#00e5a0] text-sm mb-5">
                PT Pinetop Technology
              </p>

              <p className="text-[#8fa3c1] leading-7 text-[15px]">
                Managed support tickets, coordinated technical documentation,
                and assisted communication between teams and clients.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#00e5a0]">02.</span>

            <h2 className="text-3xl font-bold">Gallery</h2>

            <div className="h-[1px] flex-1 bg-[#1e2d45]" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              "IT Operations",
              "Network Setup",
              "Technical Support",
              "Inventory Management",
              "Hardware Maintenance",
              "Team Coordination",
            ].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] rounded-xl border border-[#1e2d45] bg-[#151e2e] flex items-center justify-center text-center p-5 hover:border-[#00e5a0]/40 transition"
              >
                <span className="font-mono text-[#637089]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* SKILLS */}
        <section id="skills" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#00e5a0]">03.</span>

            <h2 className="text-3xl font-bold">Skills</h2>

            <div className="h-[1px] flex-1 bg-[#1e2d45]" />
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
                className="bg-[#151e2e] border border-[#1e2d45] rounded-lg px-5 py-4 text-center hover:border-[#00e5a0]/50 transition"
              >
                <span className="font-mono text-sm text-[#dce7f8]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#00e5a0]">04.</span>

            <h2 className="text-3xl font-bold">Certifications</h2>

            <div className="h-[1px] flex-1 bg-[#1e2d45]" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "IT Support Fundamentals",
                "Google Professional Certificate",
              ],
              [
                "Network Administration",
                "Cisco Networking Basics",
              ],
              [
                "Hardware Troubleshooting",
                "Enterprise IT Operations",
              ],
              [
                "Technical Documentation",
                "Professional Workflow Systems",
              ],
            ].map(([title, org]) => (
              <div
                key={title}
                className="bg-[#151e2e] border border-[#1e2d45] rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3">{title}</h3>

                <p className="font-mono text-sm text-[#00e5a0]">
                  {org}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDY */}
        <section id="casestudy" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#00e5a0]">05.</span>

            <h2 className="text-3xl font-bold">Case Study</h2>

            <div className="h-[1px] flex-1 bg-[#1e2d45]" />
          </div>

          <div className="bg-[#151e2e] border border-[#1e2d45] rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              PON XXI National IT Operations
            </h3>

            <p className="text-[#8fa3c1] leading-8 mb-6">
              Led operational IT support coordination during one of Indonesia’s
              largest national sports events. Managed troubleshooting workflows,
              staff communication, inventory tracking, and technical escalation
              handling under high-pressure operational conditions.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                ["150+", "Staff Coordinated"],
                ["24/7", "Operational Coverage"],
                ["99%", "System Reliability"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#1e2d45] p-5 text-center"
                >
                  <div className="font-mono text-3xl font-bold text-[#00e5a0] mb-2">
                    {num}
                  </div>

                  <div className="text-sm text-[#637089]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#00e5a0]">06.</span>

            <h2 className="text-3xl font-bold">Contact</h2>

            <div className="h-[1px] flex-1 bg-[#1e2d45]" />
          </div>

          <div className="bg-[#151e2e] border border-[#1e2d45] rounded-2xl p-8">
            <p className="text-[#8fa3c1] mb-7 text-lg">
              Interested in working together or hiring me for IT Support roles?
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:geofanyarrizki@gmail.com"
                className="font-mono text-[12px] tracking-wide px-6 py-3 rounded bg-[#00e5a0] text-[#0a0e17] font-bold hover:bg-[#00ffb3] transition"
              >
                Email Me
              </a>

              <a
                href="https://linkedin.com/in/geofany-arrizki"
                target="_blank"
                className="font-mono text-[12px] tracking-wide px-6 py-3 rounded border border-[#00e5a0] text-[#00e5a0] hover:bg-[#00e5a0]/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}