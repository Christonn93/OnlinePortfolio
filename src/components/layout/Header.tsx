import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme/useTheme";
import { ThemeToggle } from "../buttons/ThemeToggle";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
 const { theme, setTheme } = useTheme();
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
  setIsMounted(true);
 }, []);

 const isDarkMode = isMounted && theme === "dark";

 return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <Link to="#" className="text-xl font-mono font-bold">
     <span className="text-emerald-500">chris</span>
     <span className="dark:text-zinc-100">Dev</span>
     <span className="animate-blink">_</span>
    </Link>
    <nav className="hidden md:flex items-center space-x-8">
     <Link to="#about" className="text-sm hover:text-emerald-500 transition-colors">
      <span className="text-emerald-500 font-mono">01.</span> About
     </Link>
     <Link to="#projects" className="text-sm hover:text-emerald-500 transition-colors">
      <span className="text-emerald-500 font-mono">02.</span> Projects
     </Link>
     <Link to="#skills" className="text-sm hover:text-emerald-500 transition-colors">
      <span className="text-emerald-500 font-mono">03.</span> Skills
     </Link>
     <Link to="#contact" className="text-sm hover:text-emerald-500 transition-colors">
      <span className="text-emerald-500 font-mono">04.</span> Contact
     </Link>
     <ThemeToggle />
    </nav>
    <div className="flex items-center md:hidden">
     <Button variant="ghost" size="icon" onClick={() => setTheme(isDarkMode ? "light" : "dark")} className="mr-2" aria-label="Toggle dark mode">
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
     </Button>
     <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
     </Button>
    </div>
   </div>
   {isMenuOpen && (
    <div className="md:hidden absolute w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
     <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
      <Link to="#about" className="text-sm hover:text-emerald-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
       <span className="text-emerald-500 font-mono">01.</span> About
      </Link>
      <Link to="#projects" className="text-sm hover:text-emerald-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
       <span className="text-emerald-500 font-mono">02.</span> Projects
      </Link>
      <Link to="#skills" className="text-sm hover:text-emerald-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
       <span className="text-emerald-500 font-mono">03.</span> Skills
      </Link>
      <Link to="#contact" className="text-sm hover:text-emerald-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
       <span className="text-emerald-500 font-mono">04.</span> Contact
      </Link>
     </div>
    </div>
   )}
  </header>
 );
}
