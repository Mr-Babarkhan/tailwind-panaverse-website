"use client"
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"
import { ThemeProvider } from "next-themes";
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ThemeProvider enableSystem={true} attribute="class">
        {/* <Header/> */}
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
    
  )
}
