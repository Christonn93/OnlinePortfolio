import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
 const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
   projectsSection.scrollIntoView({ behavior: "smooth" });
  }
 };

 // Function to handle resume download
 const handleDownloadResume = () => {
  const resumeUrl = "src/assets/cv/CV_christopher_tonnesland.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.setAttribute("download", "Christopher_Tonnesland_CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

 return (
  <section className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
   <div className="container mx-auto px-4">
    <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-emerald-500 font-mono mb-4">
     Hi, I&apos;m
    </motion.p>

    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
     Christopher Tønnesland
    </motion.h1>

    <motion.h2
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1.2 }}
     className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-600 dark:text-zinc-400 mb-6"
    >
     <Typewriter
      words={["Front-End Engineer.", "Building high-performance UIs.", "Optimizing digital experiences.", "React | TypeScript | Zustand."]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={2000}
     />
    </motion.h2>

    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
     I'm a <b>Front-End Engineer</b> based in <b>Larvik, Norway</b>, passionate about building <b>modern, high-performance, and accessible</b> web applications. Currently working at{" "}
     <b>Gjensidige Mobility Group</b>, where I specialize in <b>React, TypeScript, and UI/UX</b> to craft intuitive digital experiences.
    </motion.p>

    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} className="flex flex-wrap gap-4">
     <Button className="bg-emerald-500 hover:bg-emerald-600 text-white" onClick={scrollToProjects}>
      See My Work
      <ArrowRight className="ml-2 h-4 w-4" />
     </Button>

     <Button variant="outline" className="border-zinc-300 dark:border-zinc-700" onClick={handleDownloadResume}>
      Download CV
     </Button>
    </motion.div>
   </div>
  </section>
 );
};
