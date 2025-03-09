import { useTheme } from "../../theme/useTheme";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
 const { theme, setTheme } = useTheme();

 const isDarkMode = theme === "dark";

 return (
  <Button variant="ghost" size="icon" onClick={() => setTheme(isDarkMode ? "light" : "dark")} aria-label="Toggle dark mode">
   {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
  </Button>
 );
}
