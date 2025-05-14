import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen">
<Header/>
    
    <section className="relative w-full">
       <div className="absolute inset-0 bg-[rgba(109,117,102,0.4)] z-10"></div>
      <Image src="/banner.jpeg"
      width={600}
      height={600}
       alt="fundo imagem"/>
    
    </section>
    </main>
  );
}
