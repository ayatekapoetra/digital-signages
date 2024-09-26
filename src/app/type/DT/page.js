import Image from "next/image";
import { assets } from "../../../../public/assets/images/";
import ListRendersDT from "@/components/ListRenderDT";
import BarCountType from "@/components/BarCountType";

const uriapi = process.env.URIAPI
// console.log("uriapi---", uriapi);

export default function TypeDT() {
  return (
    <main className="flex min-h-screen space-y-3 flex-col justify-start p-3">
      <BarCountType apiuri={uriapi} kategori={'DT'}/>
      <div className="flex flex-1 bg-slate-300">
        <ListRendersDT apiuri={uriapi}/>
      </div>
    </main>
  );
}

