// import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import ExportMainLayout3 from "@/components/layout3/ExportMainLayout3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Link href="/layout1">layout1</Link>
      <br />
      <Link href="/layout2">layout2</Link>
      <br />
      <Link href="/layout3">layout3</Link>
      <br />
    </main>
  );
}
