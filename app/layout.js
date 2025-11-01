import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "next-themes";
import { mainFont } from "@/components/font";
export const metadata = {
   title: "Aman Portfolio",
   description: "",
   keywords: "",
   author: "Amanuel Antenh"
};

export default function RootLayout({ children }) {
   return (
      <html lang='en' suppressHydrationWarning>
         <body className={`${mainFont.className} flex flex-col`}>
            <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
               <Nav />
               <main className='mt-16 flex-1'>{children}</main>
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
