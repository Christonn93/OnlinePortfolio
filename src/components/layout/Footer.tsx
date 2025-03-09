import { Code, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
 return (
  <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
     <div className="flex space-x-6 mb-4">
      <Link to="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
       <Github className="h-5 w-5" />
       <span className="sr-only">GitHub</span>
      </Link>
      <Link to="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
       <Linkedin className="h-5 w-5" />
       <span className="sr-only">LinkedIn</span>
      </Link>
      <Link to="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
       <Mail className="h-5 w-5" />
       <span className="sr-only">Email</span>
      </Link>
      <Link to="#" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
       <Code className="h-5 w-5" />
       <span className="sr-only">CodePen</span>
      </Link>
     </div>
     <p className="text-xs text-zinc-600 dark:text-zinc-400">Designed & Built by John Doe © {new Date().getFullYear()}</p>
    </div>
   </div>
  </footer>
 );
};
