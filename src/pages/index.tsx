import Image from "next/image";
import localFont from "next/font/local";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  useEffect(()=>{
   fetch("/api/user").then((response)=>{
    response.json()
    .then((data)=>console.log("data is ",data))
   })
   .catch((err)=>console.log(err))
  },[])
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
     <h1>this is / route</h1>
    </div>
  );
}
