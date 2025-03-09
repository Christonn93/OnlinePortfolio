import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "../form/ContactForm";

interface ContactDialogProps {
 isOpen: boolean;
 setIsOpen: (isOpen: boolean) => void;
}

export const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, setIsOpen }) => {
 return (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
   <DialogContent className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-6 w-full max-w-md border border-zinc-300 dark:border-zinc-700">
    <DialogHeader>
     <DialogTitle className="text-lg font-semibold text-zinc-900 dark:text-white">Contact Me</DialogTitle>
     <DialogDescription className="text-sm text-zinc-600 dark:text-zinc-400">Fill out the form below and I'll get back to you soon.</DialogDescription>
    </DialogHeader>
    <ContactForm setIsOpen={setIsOpen} />
   </DialogContent>
  </Dialog>
 );
};
