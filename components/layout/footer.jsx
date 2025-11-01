import Link from "next/link";
import { Mail, Twitter, Github, Send, Linkedin } from "lucide-react";
import {
   Tooltip,
   TooltipTrigger,
   TooltipContent
} from "@/components/ui/tooltip";
import Bg from "@/components/bg";
const footerLinks = [
   { name: "Telegram", icon: <Send />, href: "https://t.me/aman_a_dev" },
   { name: "Email", icon: <Mail />, href: "mailto:amanuelantenha@gmail.com" },
   { name: "Github", icon: <Github />, href: "https://github.com/aman-a-dev" },
   { name: "Twitter", icon: <Twitter />, href: "https://x.com/Aman_A_Dev" },
   {
      name: "Linkedin",
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/amanuel-antenh-20657436a"
   }
];
export default function Footer() {
   return (
      <Bg>
         <footer className=''>
            <div className='ml-5'>
               <h3>
                  About me{" "}
                  <small className='text-muted-foreground'>(in short)</small>
               </h3>
               <p className='text-muted-foreground w-[75%]'>
                  I am a FSD developers who creat high-quality digital Full
                  Stack websites.
               </p>
            </div>
            <div className='flex p-5 gap-5 justify-evenly md:justify-start'>
               {footerLinks.map((item, i) => (
                  <a href={item.href} key={i}>
                     <Tooltip>
                        <TooltipContent>{item.name}</TooltipContent>
                        <TooltipTrigger className=''>
                           {item.icon}
                        </TooltipTrigger>
                     </Tooltip>
                  </a>
               ))}
            </div>
         </footer>
      </Bg>
   );
}
