import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { backendSkill, languageSkill, otherSkill, toolsSkill } from "@/data/skillsData";
import { motion } from "framer-motion";

export const Skills = () => {
 // Animation variants
 const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 };

 const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
 };

 const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (index: number) => ({
   opacity: 1,
   y: 0,
   transition: { duration: 0.5, delay: index * 0.1 },
  }),
 };

 return (
  <motion.section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
   <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div className="flex items-center mb-12" variants={sectionVariants}>
     <h2 className="text-2xl md:text-3xl font-bold">
      <span className="text-emerald-500 font-mono mr-2">03.</span>
      Skills & Technologies
     </h2>
     <div className="h-px bg-zinc-300 dark:bg-zinc-700 flex-grow ml-4"></div>
    </motion.div>

    {/* Tabs */}
    <Tabs defaultValue="frontend" className="w-full">
     <motion.div variants={tabVariants} className="grid grid-cols-4 mb-8">
      <TabsList>
       <TabsTrigger value="frontend">Frontend</TabsTrigger>
       <TabsTrigger value="backend">Backend</TabsTrigger>
       <TabsTrigger value="tools">Tools</TabsTrigger>
       <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
     </motion.div>

     {/* Tabs Content */}
     <TabsContent value="frontend" className="space-y-4">
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {languageSkill.map((skill, index) => (
        <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
         <Card className="border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-4">
           <p className="font-medium mb-2">{skill.name}</p>
           <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1 }} />
           </div>
          </CardContent>
         </Card>
        </motion.div>
       ))}
      </motion.div>
     </TabsContent>

     <TabsContent value="backend" className="space-y-4">
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {backendSkill.map((skill, index) => (
        <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
         <Card className="border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-4">
           <p className="font-medium mb-2">{skill.name}</p>
           <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1 }} />
           </div>
          </CardContent>
         </Card>
        </motion.div>
       ))}
      </motion.div>
     </TabsContent>

     <TabsContent value="tools" className="space-y-4">
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {toolsSkill.map((skill, index) => (
        <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
         <Card className="border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-4">
           <p className="font-medium mb-2">{skill.name}</p>
           <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1 }} />
           </div>
          </CardContent>
         </Card>
        </motion.div>
       ))}
      </motion.div>
     </TabsContent>

     <TabsContent value="other" className="space-y-4">
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {otherSkill.map((skill, index) => (
        <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
         <Card className="border-zinc-200 dark:border-zinc-800">
          <CardContent className="p-4">
           <p className="font-medium mb-2">{skill.name}</p>
           <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1 }} />
           </div>
          </CardContent>
         </Card>
        </motion.div>
       ))}
      </motion.div>
     </TabsContent>
    </Tabs>
   </div>
  </motion.section>
 );
};
