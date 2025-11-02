import { Button } from "@/components/ui/button";
// home components
import Hero from "@/components/layout/hero";
import Bio from "@/components/layout/bio";
import Works from "@/components/layout/works";
import Skills from "@/components/layout/skills";
import Offer from "@/components/layout/offer";
import Certificate from "@/components/layout/certificate";
export const metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. I build modern full-stack apps using Next.js, React, and Node.js.",
  openGraph: {
    images: "/og-main.png",
  },
};
export default function Home() {
   return (
      <div className='flex flex-col gap-2 mb-5'>
         <Hero />
         <Bio />
         <Works />
         <Skills />
         <Offer />
         <Certificate />
      </div>
   );
}
