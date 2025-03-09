import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Projects() {
 return (
  <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex items-center mb-12">
     <h2 className="text-2xl md:text-3xl font-bold">
      <span className="text-emerald-500 font-mono mr-2">02.</span>
      Projects I&apos;ve Built
     </h2>
     <div className="h-px bg-zinc-300 dark:bg-zinc-700 flex-grow ml-4"></div>
    </motion.div>

    {/* Project List */}
    <div className="space-y-24">
     {projects.map((project, index) => (
      <motion.div
       key={index}
       className={`relative grid md:grid-cols-12 gap-4 md:gap-8 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: index * 0.2 }}
      >
       {/* Project Image */}
       <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
        <motion.div className="relative rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
         <img src={project.image || "https://placehold.co/600x400/EEE/31343C"} alt={project.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg"></div>
        </motion.div>
       </div>

       {/* Project Details */}
       <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
        <motion.p className="text-emerald-500 font-mono mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}>
         Featured Project
        </motion.p>
        <motion.h3
         className="text-xl md:text-2xl font-bold mb-4"
         initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
         {project.title}
        </motion.h3>
        <motion.div
         className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg mb-4"
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        >
         <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.ul
         className={`flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-400 mb-6 ${index % 2 === 1 ? "md:justify-end" : ""}`}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
        >
         {project.tech.map((tech, techIndex) => (
          <li key={techIndex} className="font-mono">
           {tech}
          </li>
         ))}
        </motion.ul>

        {/* Links (GitHub & Live) */}
        <motion.div
         className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
        >
         {project.links?.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
           <Button variant="ghost" size="icon" className="hover:text-emerald-500">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
           </Button>
          </a>
         )}
         {project.links?.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
           <Button variant="ghost" size="icon" className="hover:text-emerald-500">
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">External Link</span>
           </Button>
          </a>
         )}
        </motion.div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
