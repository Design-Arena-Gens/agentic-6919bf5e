'use client';

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useCallback, useEffect } from "react";

const navItems = [
  { label: "Research", href: "#research" },
  { label: "Works", href: "#works" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const researchVectors = [
  {
    title: "Cortical Flow Synthesis",
    description:
      "Designing differentiable simulators that capture mesoscale dynamics across layered cortex, translating wave-like activity into interpretable maps.",
    signal: "DiffGeo + MEG",
    tone: "from-sky-300/20 via-cyan-200/20 to-transparent",
  },
  {
    title: "Embodied Neurointerfaces",
    description:
      "Building calm, low-friction neural interfaces that close the loop between sensorimotor intention and adaptive prosthetic feedback.",
    signal: "BCI + Haptics",
    tone: "from-violet-300/20 via-purple-300/20 to-transparent",
  },
  {
    title: "Intelligent Neuroaesthetics",
    description:
      "Quantifying aesthetic resonance and cognitive restoration through slow, contemplative neural rhythms and immersive multi-sensory design.",
    signal: "EEG + Perception",
    tone: "from-emerald-300/20 via-teal-200/15 to-transparent",
  },
];

const timelines = [
  {
    year: "2024",
    heading: "Neural Lace: Adaptive cortical lattices for embodied cognition",
    location: "Nature Neuroscience",
    description:
      "Introduced a reinforcement-aligned, self-calibrating interface that weaves proprioceptive feedback with cortical intention in under 42 ms.",
  },
  {
    year: "2023",
    heading: "Harmonics of quiet attention in contemplative states",
    location: "MIT Center for Brains, Minds + Machines",
    description:
      "Mapped alpha-burst topographies into immersive, cross-modal environments that induce measurable improvements in cognitive restoration.",
  },
  {
    year: "2022",
    heading: "Flow Fields for multi-scale MEG",
    location: "NeurIPS Spotlight",
    description:
      "Presented a physics-inspired latent space that captures cortex-level wave fronts, enabling downstream decoding with 27% fewer parameters.",
  },
  {
    year: "2021",
    heading: "Calm-BCI: Tactile language for prosthetic intuition",
    location: "IEEE Transactions on Neural Systems",
    description:
      "Developed a tactile micro-language that softens agency hand-offs in neuroprosthetics, resulting in a 35% increase in user trust.",
  },
];

const journalGlances = [
  {
    title: "Liquid manifolds rehearsing sleep spindles",
    caption: "Sketching how thalamic loops rehearse creativity during non-REM μ-sleep windows.",
    hue: "from-cyan-300/40 to-teal-300/20",
  },
  {
    title: "Somatic choreography in VR ambulation",
    caption: "Translating vestibular uncertainty into luminous cues that stabilize embodied navigation.",
    hue: "from-violet-300/35 to-indigo-300/20",
  },
  {
    title: "Quiet signals for neural empathy",
    caption: "Designing collective biofeedback rituals that synchronize gentle respiratory arcs.",
    hue: "from-emerald-300/35 to-sky-300/25",
  },
  {
    title: "Microgravity cognition",
    caption: "Prototyping slow neural cinematic experiences for orbit-driven research residencies.",
    hue: "from-amber-200/35 to-rose-200/15",
  },
];

const stats = [
  { label: "Publications", value: "38", footnote: "Peer-reviewed across neuroscience & ML" },
  { label: "Datasets", value: "11", footnote: "Open-source, multi-modal neural archives" },
  { label: "Collaborations", value: "24", footnote: "Studios, hospitals, orbital labs" },
];

export default function Home() {
  const cursorX = useMotionValue(50);
  const cursorY = useMotionValue(50);
  const glowGradient = useMotionTemplate`radial-gradient(circle at ${cursorX}% ${cursorY}%, rgba(122, 232, 255, 0.20), transparent 60%)`;

  const progressSpring = useSpring(0, { stiffness: 120, damping: 25, mass: 0.7 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      progressSpring.set(latest);
    });
    return () => unsubscribe();
  }, [progressSpring, scrollYProgress]);

  useEffect(() => {
    cursorX.set(50);
    cursorY.set(50);
  }, [cursorX, cursorY]);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      cursorX.set(x);
      cursorY.set(y);
    },
    [cursorX, cursorY],
  );

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-transparent pb-24"
      onPointerMove={handlePointerMove}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1] opacity-70"
        style={{ backgroundImage: glowGradient }}
      />
      <ScrollProgress track={progressSpring} />
      <NeuralBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pt-12 sm:px-10 sm:pt-16 lg:px-16">
        <Navigation />
        <HeroSection />
        <ResearchSection />
        <WorksSection />
        <JournalSection />
        <ContactSection />
      </div>
      <footer className="relative z-10 mx-auto flex w-full max-w-6xl justify-between px-6 pb-12 pt-6 text-xs tracking-[0.3em] text-slate-400 sm:px-10 lg:px-16">
        <span>© {new Date().getFullYear()} Mira Calder</span>
        <span>Computation x Neuroscience x Aesthetics</span>
      </footer>
    </main>
  );
}

function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-panel neural-noise relative flex items-center justify-between overflow-hidden rounded-full px-6 py-4 text-xs uppercase tracking-[0.35em]"
    >
      <div className="relative flex items-center gap-4">
        <span className="text-[0.65rem] text-slate-400">Dr.</span>
        <span className="text-sm font-semibold text-slate-100 tracking-[0.4em]">
          Mira&nbsp;Calder
        </span>
      </div>
      <div className="relative flex items-center gap-6 text-[0.62rem] text-slate-300">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="group relative">
            <span className="transition-colors group-hover:text-slate-100">{item.label}</span>
            <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-slate-200/70 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col gap-16">
      <NeuralSignal />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-12 lg:grid-cols-[1.25fr,0.9fr]"
      >
        <div className="relative flex flex-col gap-8">
          <div className="inline-flex max-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs uppercase tracking-[0.35em] text-slate-300">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_15px_rgba(122,232,255,0.6)]" />
            Computational Neuroscientist
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-balance text-4xl font-light leading-[1.25] text-slate-100 sm:text-5xl sm:leading-tight lg:text-6xl"
          >
            Mapping the poetry of cortical waves into intuitive, human-centered neurotechnology.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: "easeOut" }}
            className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            Dr. Mira Calder designs intelligent systems that translate neural rhythm into meaningful
            aesthetic and embodied experiences. Her research listens to micro-signals, choreographs
            subtle feedback, and builds technology that feels as calm as thought itself.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#works">Explore Works</MagneticButton>
            <MagneticButton href="mailto:contact@miracalder.ai" variant="ghost">
              Arrange a conversation
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel neural-noise relative overflow-hidden rounded-3xl px-8 py-10 backdrop-blur"
        >
          <div className="grid-overlay" />
          <div className="relative flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300">Philosophy</p>
            <p className="text-pretty text-sm leading-7 text-slate-200">
              I choreograph brain signals as living material — weaving sensory calm, embodied
              intelligence, and ethical neurointerfaces for future habitats on Earth and beyond.
            </p>
            <div className="flex flex-col gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-200" />
                Director, Cortical Flow Lab — MIT Media Lab
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Affiliate Artist, Ars Electronica Futurelab
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-300" />
                Lead Scientist, Luna Neuroscience Residency
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
        className="grid gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-10"
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-slate-400">{item.label}</span>
            <span className="text-4xl font-light text-slate-100">{item.value}</span>
            <p className="text-xs text-slate-400">{item.footnote}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="relative mt-6 flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col gap-4"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Research vectors</span>
        <h2 className="text-balance text-3xl font-light text-slate-100 sm:text-4xl">
          Soft, intelligent motion inspired by brains at rest and in discovery.
        </h2>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-3">
        {researchVectors.map((vector, index) => (
          <motion.article
            key={vector.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${vector.tone} opacity-0 transition-opacity duration-500 hover:opacity-60`}
            />
            <div className="relative z-10 flex h-full flex-col gap-6">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-400">
                {vector.signal}
              </span>
              <h3 className="text-lg font-medium text-slate-100">{vector.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{vector.description}</p>
              <motion.div
                className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-200"
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <span>View neural notes</span>
                <ArrowIcon className="h-3 w-3" />
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works" className="relative flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col gap-4"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Selected publications & residencies
        </span>
        <h2 className="text-balance text-3xl font-light text-slate-100 sm:text-4xl">
          Quiet breakthroughs staged across labs, studios, and orbital habitats.
        </h2>
      </motion.div>
      <div className="relative grid gap-10 lg:grid-cols-[0.4fr,1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel neural-noise relative overflow-hidden rounded-3xl p-8"
        >
          <div className="grid-overlay" />
          <div className="relative flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300">Laboratory pulse</p>
            <p className="text-sm leading-7 text-slate-200">
              Cortical Flow Lab orchestrates interdisciplinary expeditions: climatologists, dancers,
              astronomers and chronic pain clinics co-design sensory rituals that soften technology
              into breathable companions.
            </p>
            <div className="relative mt-2 flex flex-col gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/80 to-transparent" />
                <span className="text-[0.65rem] uppercase tracking-[0.5em]">
                  Residency Signals
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-slate-500/70 to-transparent" />
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between text-[0.7rem] uppercase tracking-[0.32em] text-slate-300">
                  2024  ·  Luna Orbit Research Habitat
                </li>
                <li className="flex justify-between text-[0.7rem] uppercase tracking-[0.32em] text-slate-300">
                  2023  ·  Serpentine Neural Architecture
                </li>
                <li className="flex justify-between text-[0.7rem] uppercase tracking-[0.32em] text-slate-300">
                  2022  ·  Ars Electronica Futurelab
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="relative flex flex-col gap-8">
          <span className="absolute -left-10 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-200/60 via-white/20 to-transparent lg:block" />
          {timelines.map((item, idx) => (
            <motion.article
              key={item.heading}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.06] to-transparent" />
                <motion.div
                  className="absolute inset-y-0 left-0 w-[1.5px] bg-gradient-to-b from-cyan-300 via-purple-400 to-transparent"
                  layoutId="timeline-glow"
                />
              </div>
              <div className="relative flex flex-col gap-4">
                <span className="text-[0.7rem] uppercase tracking-[0.4em] text-slate-400">
                  {item.year}
                </span>
                <h3 className="text-lg font-medium text-slate-100">{item.heading}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {item.location}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalSection() {
  return (
    <section id="journal" className="relative flex flex-col gap-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col gap-4"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Studio journal & experiments
        </span>
        <h2 className="text-balance text-3xl font-light text-slate-100 sm:text-4xl">
          Neural sketches, sensory experiments, and cinematic notebooks in progress.
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {journalGlances.map((entry, idx) => (
          <motion.article
            key={entry.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-6"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${entry.hue} opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>Notefield</span>
                <span>Live signal</span>
              </div>
              <h3 className="text-lg text-slate-100">{entry.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{entry.caption}</p>
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-200"
              >
                Read field notes <ArrowIcon className="h-3 w-3" />
              </motion.span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="glass-panel neural-noise relative overflow-hidden rounded-3xl px-8 py-12 text-center md:px-16 md:py-16"
    >
      <div className="grid-overlay" />
      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.4em] text-slate-300">
          Collaborations · Invitations
        </span>
        <h2 className="max-w-2xl text-balance text-3xl font-light text-slate-100 sm:text-4xl">
          Crafting spaces where neuroscience feels soft, poetic, and deeply human.
        </h2>
        <p className="max-w-xl text-sm leading-7 text-slate-300">
          I welcome collaborations with collectives, medical teams, research labs, and design
          studios. Let us sculpt thoughtful, minimal technologies that honor both data and feeling.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton href="mailto:contact@miracalder.ai">Send a signal</MagneticButton>
          <MagneticButton href="https://cal.com/miracalder" target="_blank" rel="noreferrer" variant="ghost">
            Schedule a session
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  target?: "_blank" | "_self";
  rel?: string;
};

function MagneticButton({
  href,
  children,
  variant = "solid",
  target,
  rel = target === "_blank" ? "noreferrer" : undefined,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.6 });

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLAnchorElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - bounds.left - bounds.width / 2;
      const offsetY = event.clientY - bounds.top - bounds.height / 2;
      x.set(offsetX * 0.4);
      y.set(offsetY * 0.4);
    },
    [x, y],
  );

  const handlePointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const base =
    "relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3 text-xs uppercase tracking-[0.35em] transition-colors duration-500";
  const solid =
    "bg-white/95 text-slate-800 shadow-[0_14px_40px_rgba(122,232,255,0.25)] hover:bg-white";
  const ghost =
    "border border-white/20 bg-white/[0.08] text-slate-100 backdrop-blur hover:border-white/35 hover:bg-white/[0.12]";

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`${base} ${variant === "solid" ? solid : ghost}`}
      style={{
        translateX: springX,
        translateY: springY,
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.6 }}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowIcon className="h-3 w-3" />
      </span>
      <span className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-40">
        <span className="absolute inset-0 animate-[shimmer_2.4s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </span>
    </motion.a>
  );
}

function NeuralBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-40 left-[15%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/25 blur-[160px]"
        animate={{ rotate: [0, 25, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-10%] right-[12%] h-[32rem] w-[32rem] rounded-full bg-purple-400/25 blur-[200px]"
        animate={{ rotate: [0, -30, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/3 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[140px]"
        animate={{ y: ["-6%", "6%", "-6%"], x: ["-4%", "6%", "-4%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="neural-noise absolute inset-0 mix-blend-screen opacity-90" />
    </div>
  );
}

function NeuralSignal() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 1200 200"
      className="absolute left-1/2 top-[-160px] w-[160%] -translate-x-1/2 fill-none stroke-white/12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <motion.path
        d="M0 120 C 80 110, 160 40, 240 80 S 400 160, 480 120 640 40, 720 80 880 160, 960 110 1120 20, 1200 60"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, pathOffset: 0.25 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 150 C 100 130, 180 90, 260 110 S 420 170, 510 120 680 20, 780 70 960 170, 1020 120 1120 60, 1200 90"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, pathOffset: 0.8 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function ScrollProgress({ track }: { track: ReturnType<typeof useSpring> }) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-40 h-[2px] w-full origin-left bg-gradient-to-r from-cyan-300 via-purple-300 to-transparent"
      style={{ scaleX: track }}
    />
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 10L9.5 2.5M9.5 2.5H3.2M9.5 2.5V8.7"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
