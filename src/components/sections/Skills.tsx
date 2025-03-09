import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { backendSkill, languageSkill, otherSkill, toolsSkill } from "@/data/skillsData";

export const Skills = () => {
 return (
  <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4">
    <div className="flex items-center mb-12">
     <h2 className="text-2xl md:text-3xl font-bold">
      <span className="text-emerald-500 font-mono mr-2">03.</span>
      Skills & Technologies
     </h2>
     <div className="h-px bg-zinc-300 dark:bg-zinc-700 flex-grow ml-4"></div>
    </div>
    <Tabs defaultValue="frontend" className="w-full">
     <TabsList className="grid grid-cols-4 mb-8">
      <TabsTrigger value="frontend">Frontend</TabsTrigger>
      <TabsTrigger value="backend">Backend</TabsTrigger>
      <TabsTrigger value="tools">Tools</TabsTrigger>
      <TabsTrigger value="other">Other</TabsTrigger>
     </TabsList>
     <TabsContent value="frontend" className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {languageSkill.map((skill, index) => (
        <Card key={index} className="border-zinc-200 dark:border-zinc-800">
         <CardContent className="p-4">
          <p className="font-medium mb-2">{skill.name}</p>
          <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
           <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
         </CardContent>
        </Card>
       ))}
      </div>
     </TabsContent>
     <TabsContent value="backend" className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {backendSkill.map((skill, index) => (
        <Card key={index} className="border-zinc-200 dark:border-zinc-800">
         <CardContent className="p-4">
          <p className="font-medium mb-2">{skill.name}</p>
          <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
           <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
         </CardContent>
        </Card>
       ))}
      </div>
     </TabsContent>
     <TabsContent value="tools" className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {toolsSkill.map((skill, index) => (
        <Card key={index} className="border-zinc-200 dark:border-zinc-800">
         <CardContent className="p-4">
          <p className="font-medium mb-2">{skill.name}</p>
          <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
           <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
         </CardContent>
        </Card>
       ))}
      </div>
     </TabsContent>
     <TabsContent value="other" className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {otherSkill.map((skill, index) => (
        <Card key={index} className="border-zinc-200 dark:border-zinc-800">
         <CardContent className="p-4">
          <p className="font-medium mb-2">{skill.name}</p>
          <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
           <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
         </CardContent>
        </Card>
       ))}
      </div>
     </TabsContent>
    </Tabs>
   </div>
  </section>
 );
};
