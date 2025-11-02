import Card from "@/components/core/card";
import { workList } from "@/components/works-list";
export const metadata = {
   title: "Projects",
   description:
      "Selected real-world projects I’ve built — from web apps to complex full-stack systems.",
   openGraph: {
      images: "/og-main.png"
   }
};
export default function Projects() {
   return (
      <div className='my-4'>
         <h1 className='section_heading mb-5'>Previous works</h1>
         <div className='flex flex-col gap-1 lg:gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] lg:mx-auto items-start'>
            {workList.map((work, index) => (
               <Card
                  key={index}
                  alt={work.alt}
                  src={work.src}
                  title={work.title}
                  desc={work.desc}
                  demo={work.demo}
                  git={work.git}
                  teck={work.teck}
               />
            ))}
         </div>
      </div>
   );
}
