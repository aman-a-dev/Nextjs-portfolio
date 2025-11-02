"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import { Menu, X, Home, Info, Phone, Banknote, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/icon";

const ThemeToggle = dynamic(() => import("@/components/global/theme-toggle"), {
   ssr: false
});

const menuItems = [
   { name: "Home", href: "/", icon: <Home /> },
   /*{ name: "About", href: "/about", icon: <Info /> },*/
   { name: "Contact", href: "/contact", icon: <Phone /> },
   { name: "Offer", href: "/offer", icon: <Banknote /> },
   { name: "Projects", href: "/projects", icon: <Book /> }
];
export default function Nav() {
   const [menuState, setMenuState] = React.useState(false);
   return (
      <header>
         <nav
            data-state={menuState && "active"}
            className='fixed z-20 w-full top-0'
         >
            <div className='mx-auto max-w-6xl px-6 transition-all duration-300'>
               <div className='relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
                  <div className='flex w-full items-center justify-between lg:w-auto'>
                     <div className='flex gap-3 rounded mr-5'>
                        <Link
                           href='/'
                           aria-label='home'
                           className='flex items-center space-x-2'
                        >
                           <Icon />
                        </Link>
                        <ThemeToggle />
                     </div>
                     <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={
                           menuState == true ? "Close Menu" : "Open Menu"
                        }
                        className='relative z-20 -m-2.5  block cursor-pointer p-2.5 lg:hidden backdrop-blur-sm rounded flex justify-center items-center'
                     >
                        <Menu className='in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200' />
                        <X className='in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200' />
                     </button>

                     <div className='hidden lg:block lg:rounded p-3'>
                        <ul className='flex gap-8 text-sm'>
                           {menuItems.map((item, index) => (
                              <li key={index}>
                                 <Link
                                    href={item.href}
                                    className='text-muted-foreground hover:text-accent-foreground block duration-150'
                                 >
                                    <span>{item.name}</span>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  <div className='bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent'>
                     <div className='lg:hidden'>
                        <ul className='space-y-6 text-base'>
                           {menuItems.map((item, index) => (
                              <li
                                 key={index}
                                 onClick={() => setMenuState(!menuState)}
                              >
                                 <Link
                                    href={item.href}
                                    className='text-muted-foreground hover:text-accent-foreground block duration-150 flex justify-between items-center'
                                 >
                                    <span>{item.name}</span>
                                    <span>{item.icon}</span>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className='flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit'>
                        <Button
                           asChild
                           size='sm'
                           onClick={() => setMenuState(!menuState)}
                        >
                           <Link href='/contact'>
                              <span>Let's Talk</span>
                           </Link>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
}
