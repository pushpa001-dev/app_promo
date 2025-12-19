import Features from "@/components/features";
import Hero from "@/components/hero";
import Next from "@/components/next";
import Problem from "@/components/problem";
import File from "@/components/file";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Problem />
      <Features />
      <File />
      <Next />
      <Footer />
    </div>
  );
}
