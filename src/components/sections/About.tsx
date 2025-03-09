import { motion } from "framer-motion";
import ProfileImage from "@/assets/profileImage.jpg";

export const About = () => {
 // Motion Variants
 const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 };

 const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
   opacity: 1,
   y: 0,
   transition: { duration: 0.3, delay: index * 0.1 },
  }),
 };

 const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
 };

 return (
  <motion.section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
   <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div className="flex items-center mb-12" variants={sectionVariants}>
     <h2 className="text-2xl md:text-3xl font-bold">
      <span className="text-emerald-500 font-mono mr-2">01.</span>
      About Me
     </h2>
     <div className="h-px bg-zinc-300 dark:bg-zinc-700 flex-grow ml-4"></div>
    </motion.div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-5 gap-12">
     {/* Text Content */}
     <motion.div className="md:col-span-3" variants={textVariants}>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
       I’m a <b>Front-End Engineer</b> based in <b>Larvik, Norway</b>, with a passion for building modern, high-performance, and user-friendly web applications. I specialize in{" "}
       <b>React, TypeScript, and UI/UX development</b>, and I enjoy crafting intuitive and scalable digital experiences.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
       With a strong background in <b>JavaScript frameworks</b>, state management tools like <b>Zustand and Redux</b>, and experience with <b>web performance optimization</b>, I aim to deliver clean,
       maintainable, and efficient code.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
       Currently, I'm working at <b>Gjensidige Mobility Group</b> as a <b>Front-End Developer</b>, contributing to building and maintaining scalable React-based applications.
      </p>

      {/* Tech Stack */}
      <h3 className="text-xl font-semibold mt-6 mb-4">Tech Stack</h3>
      <motion.ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
       {["React", "TypeScript", "JavaScript", "Zustand", "Redux", "Vite", "Vue", "SCSS", "Git", "Web Performance Optimization", "REST APIs", "Testing (Vitest, RTL)"].map((tech, index) => (
        <motion.li
         key={index}
         custom={index}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={itemVariants}
         className="flex items-center text-sm text-zinc-600 dark:text-zinc-400"
        >
         <span className="text-emerald-500 mr-2">▹</span> {tech}
        </motion.li>
       ))}
      </motion.ul>

      {/* Work Experience */}
      <h3 className="text-xl font-semibold mt-6 mb-4">Work Experience</h3>
      <div className="mb-4">
       <p className="text-emerald-500 font-medium">Front-End Developer | Gjensidige Mobility Group</p>
       <p className="text-sm text-zinc-500">June 2024 – Present</p>
       <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 text-sm mt-2">
        <li>
         Developing interactive <b>React-based</b> web applications.
        </li>
        <li>
         Using <b>TypeScript & Zustand</b> to improve maintainability.
        </li>
        <li>
         Implementing CI/CD pipelines with <b>Azure DevOps / GitHub Actions</b>.
        </li>
        <li>
         Collaborating in an <b>Agile team</b>, contributing to sprints and code reviews.
        </li>
       </ul>
      </div>
      <div className="mb-4">
       <p className="text-emerald-500 font-medium">Frontend Instructor | Noroff</p>
       <p className="text-sm text-zinc-500">Feb 2024 – May 2024</p>
       <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 text-sm mt-2">
        <li>
         Taught <b>React, JavaScript, and UI/UX design principles</b>.
        </li>
        <li>Mentored students in project development and debugging.</li>
       </ul>
      </div>

      {/* Fun Fact */}
      <h3 className="text-xl font-semibold mt-6 mb-4">Fun Fact</h3>
      <p className="text-zinc-600 dark:text-zinc-400">
       Before transitioning into web development, I spent years as a <b>Sous Chef</b>, honing skills in teamwork, organization, and attention to detail—qualities that now help me build structured and
       efficient code.
      </p>
     </motion.div>

     {/* Profile Image */}
     <motion.div className="md:col-span-2 relative" variants={imageVariants}>
      <div className="relative group">
       <div className="absolute -inset-2 rounded-lg bg-emerald-500/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
       <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
        <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
       </div>
      </div>
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};
