import Image from "next/image";
import { assets } from "../../../../public/assets/images/";
import BarCount from "@/components/BarCount";
import ListRenders from "@/components/ListRenderHE";
import BarCountType from "@/components/BarCountType";

const uriapi = process.env.URIAPI
// console.log("uriapi---", uriapi);

export default function TypeDT() {
  return (
    <main className="flex min-h-screen space-y-3 flex-col justify-start p-3">
      <BarCountType apiuri={uriapi} kategori={'HE'}/>
      <div className="flex flex-1 bg-slate-300">
        <ListRenders apiuri={uriapi}/>
      </div>
    </main>
  );
}

