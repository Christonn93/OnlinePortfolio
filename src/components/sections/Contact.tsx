import { Button } from "@/components/ui/button";

export const Contact = () => {
 return (
  <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
   <div className="container mx-auto px-4 text-center">
    <div className="flex items-center justify-center mb-8">
     <div className="h-px bg-zinc-300 dark:bg-zinc-700 w-12"></div>
     <p className="text-emerald-500 font-mono mx-4">04. What&apos;s Next?</p>
     <div className="h-px bg-zinc-300 dark:bg-zinc-700 w-12"></div>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
    <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mb-8">
     I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
    </p>
    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">Say Hello</Button>
   </div>
  </section>
 );
};
