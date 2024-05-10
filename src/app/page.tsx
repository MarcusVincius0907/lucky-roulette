import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex justify-center w-full ">
      <div className=" w-3/4 relative">
        <Header></Header>
        <Footer></Footer>
      </div>
    </main>
  );
}
