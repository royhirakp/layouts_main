import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link target="_blank" href="/layout1">
        layout1
      </Link>
      <br />
      <Link target="_blank" href="/layout2">
        layout2
      </Link>
      <br />
      <Link target="_blank" href="/layout3">
        layout3
      </Link>
      <br />
      <Link target="_blank" href="/layout4">
        layout4
      </Link>
      <br />

      <br />
    </main>
  );
}
