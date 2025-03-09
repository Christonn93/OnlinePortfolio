import { motion } from "framer-motion";
import ProfileImage from "@/assets/profileImage.jpg";

export const About = () => {
 return (
  <section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
     <div className="flex items-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold">
       <span className="text-emerald-500 font-mono mr-2">01.</span>
       About Me
      </h2>
      <div className="h-px bg-zinc-300 dark:bg-zinc-700 flex-grow ml-4"></div>
     </div>
     <div className="grid md:grid-cols-5 gap-12">
      <div className="md:col-span-3">
       <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I am a passionate Full-Stack Developer specializing in building scalable and high-performance applications. With a strong background in React, Node.js, and cloud-based solutions, I thrive in
        developing robust backend services and seamless frontend experiences.
       </p>
       <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Over the years, I have worked on various projects, from web platforms to enterprise-level solutions, implementing modern technologies like TypeScript, Zustand, and PostgreSQL. I enjoy solving
        complex problems and optimizing application performance.
       </p>
       <h3 className="text-xl font-semibold mt-6 mb-4">Tech Stack</h3>
       <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
        {["React", "TypeScript", "Zustand", "Node.js", "Axios", "PostgreSQL"].map((tech, index) => (
         <li key={index} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
          <span className="text-emerald-500 mr-2">▹</span> {tech}
         </li>
        ))}
       </ul>
       <h3 className="text-xl font-semibold mt-6 mb-4">Fun Fact</h3>
       <p className="text-zinc-600 dark:text-zinc-400">
        When I’m not coding, you’ll find me exploring new hiking trails, experimenting with coffee brewing techniques, or playing strategic board games!
       </p>
      </div>
      <div className="md:col-span-2 relative">
       <div className="relative group">
        <div className="absolute -inset-2 rounded-lg bg-emerald-500/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
        <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
         <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
       </div>
      </div>
     </div>
    </motion.div>
   </div>
  </section>
 );
};
