import { SocialLinks } from "../SocialLinks";

export const Footer = () => {
 return (
  <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
     <div className="flex space-x-6 mb-4">
      <SocialLinks />
     </div>
     <p className="text-xs text-zinc-600 dark:text-zinc-400">Designed & Built by Christopher Tønnesland © {new Date().getFullYear()}</p>
    </div>
   </div>
  </footer>
 );
};
