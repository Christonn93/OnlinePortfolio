import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export const SocialLinks = () => {
 return (
  <div className="flex space-x-4">
   <Link to="https://github.com/Christonn93" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
    <Github className="h-5 w-5" />
    <span className="sr-only">GitHub</span>
   </Link>
   <Link to="https://www.linkedin.com/in/christopher-t%C3%B8nnesland/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
    <Linkedin className="h-5 w-5" />
    <span className="sr-only">LinkedIn</span>
   </Link>
   <Link to="mailto:christopher.tonnesland@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
    <Mail className="h-5 w-5" />
    <span className="sr-only">Email</span>
   </Link>
   <Link to="https://codepen.io/christonn93" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
    <Code className="h-5 w-5" />
    <span className="sr-only">CodePen</span>
   </Link>
  </div>
 );
};
