"use client";
import Image from "next/image";
import MyImgLight from "@/public/avatar/me-light.png";
import MyImgDark from "@/public/avatar/me-dark.png";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";
import { TextEffect } from "@/components/text/text-effect";
import ClientOnly from "@/components/client-only";
import { MagneticNested } from "@/components/core/magnetic";
import { SpinningTextBasic } from "@/components/text/spinning-text";
import { Download } from "lucide-react";
import { Tilt } from "@/components/core/tilt";
import TextType from "@/components/text/typing";

export default function Hero() {
   const isMobile = useIsMobile();
   const { theme } = useTheme();

   return (
      <div className='bg-gray-200 flex flex-col my-5 mx-0 md:flex-row md:justify-around dark:bg-zinc-800 relative overflow-hidden'>
         <div className='flex flex-col gap-3 items-start pl-4 pt-5'>
            <h1 className='text-center text-4xl md:text-5xl font-black md:text-start'>
               <TextType
                  text={["Amanuel Antenh", "Aman dev"]}
                  cursorCharacter='_'
               />
            </h1>
            <TextEffectWithCustomVariants className='text-1xl text-muted-foreground'>
               Full Stack Web Developer
            </TextEffectWithCustomVariants>
            <a href='/public/document/aman_cv_v5.pdf' download='MyFile.pdf'>
               <MagneticNested>
                  <span>Download CV</span>
                  <Download />
               </MagneticNested>
            </a>
         </div>
         <div className='flex items-center justify-center md:items-end'>
            <ClientOnly>
               <Tilt rotationFactor={10} isRevese>
                  <Image
                     src={theme == "light" ? MyImgLight : MyImgDark}
                     width={300}
                     height={300}
                     alt='Amanuel Anteneh image'
                     className='w-[500] md:w-[300]'
                     placeholder='empty'
                     priority
                  />
               </Tilt>
            </ClientOnly>
         </div>
         <SpinningTextBasic className='left-10 bottom-10 mix-blend-difference text-white'>
            Fast • Responsive • Cool •
         </SpinningTextBasic>
         <SpinningTextBasic className='right-10 top-12'>
            Design • build • deploy •
         </SpinningTextBasic>
      </div>
   );
}

export function TextEffectWithCustomVariants({ children }) {
   const fancyVariants = {
      container: {
         hidden: { opacity: 0 },
         visible: {
            opacity: 1,
            transition: {
               staggerChildren: 0.05
            }
         }
      },
      item: {
         hidden: () => ({
            opacity: 0,
            y: 0,
            rotate: 45,
            scale: 0.3
         }),
         visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
               type: "spring",
               damping: 12,
               stiffness: 200
            }
         }
      }
   };

   return (
      <TextEffect per='word' variants={fancyVariants}>
         {children}
      </TextEffect>
   );
}
