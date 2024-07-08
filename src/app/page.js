import Image from "next/image";
import { assets } from "../../public/assets/images/";
import BarCount from "@/components/BarCount";
import ListRenders from "@/components/ListRenders";

const uriapi = process.env.URIAPI
console.log("uriapi---", uriapi);

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-3 flex-col justify-start p-3">
      <BarCount apiuri={uriapi}/>
      <div className="flex flex-1 bg-slate-300">
        <ListRenders apiuri={uriapi}/>
      </div>
    </main>
  );
}

