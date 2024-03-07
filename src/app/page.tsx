import { Metadata } from "next"
import Image from "next/image";
import Header from "./components/Header";
export const metadata: Metadata = {
  title: "Facebook"
}

export default function Home() {
  return (

    <div>

      <Header />
      <main >


        {/* sidebar */}
        {/* feed */}
        {/* widget */}
      </main>
    </div>

  );
}
