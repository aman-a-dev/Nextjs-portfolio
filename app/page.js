import { Button } from "@/components/ui/button";
// home components
import Hero from "@/components/layout/hero";
import Bio from "@/components/layout/bio";
import Works from "@/components/layout/works";
import Skills from "@/components/layout/skills";
import Offer from "@/components/layout/offer";
import Certificate from "@/components/layout/certificate";

export const metadata = {
   title: "Home | Aman Portfolio",
   description: "",
   keywords: "",
   author: "Amanuel Antenh"
};

export default function Home() {
   return (
      <div className='flex flex-col gap-2 mb-5'>
         <Hero />
         <Bio />
         <Works />
         <Skills />
         <Offer />
        <Certificate/>
      </div>
   );
}
