import HomeBanner from "@/components/HomeBanner";
import OurService from "@/components/homeComponents/OurService";

export default function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <section className="max-w-7xl mx-auto mt-10">
        <OurService></OurService>
      </section>
    </>
  );
}
