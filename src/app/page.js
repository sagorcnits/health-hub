import HomeBanner from "@/components/HomeBanner";
import OurService from "@/components/homeComponents/OurService";
import ReviewSlider from "@/components/homeComponents/ReviewSlider";
import ServiceCard from "@/components/homeComponents/ServiceCard";
import SectionIntro from "@/components/SectionIntro";

export default function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <section className="max-w-7xl mx-auto mt-10">
        <OurService></OurService>
        <ServiceCard></ServiceCard>
      </section>
      <section className="mt-16">
        <SectionIntro
          info={{
            header: "What Our Patients Says",
            title:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          }}
        ></SectionIntro>
        <div className="max-w-7xl mx-auto mt-16">
          <ReviewSlider></ReviewSlider>
        </div>
      </section>
    </>
  );
}
