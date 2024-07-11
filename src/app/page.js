import HomeBanner from "@/components/HomeBanner";
import DoctorCard from "@/components/homeComponents/DoctorCard";
import OurService from "@/components/homeComponents/OurService";
import ReviewSlider from "@/components/homeComponents/ReviewSlider";
import ServiceCard from "@/components/homeComponents/ServiceCard";
import SectionIntro from "@/components/SectionIntro";
import dotctor1 from "../images/doctor-1.png";
import dotctor2 from "../images/doctor-2.png";
import dotctor3 from "../images/doctor-3.png";
export default function Home() {
  const doctorInfo = [
    {
      image: dotctor1,
      name: "Karyen Anderson",
      proffesion: "BTP -  Senior Physiotherapist",
      address: "Dhanmondi, Dhaka, Bangladesh",
      available: "Available On Mon, 22 December",
      fee: 15,
    },
    {
      image: dotctor2,
      name: "Karyen Anderson",
      proffesion: "BTP -  Senior Physiotherapist",
      address: "Dhanmondi, Dhaka, Bangladesh",
      available: "Available On Mon, 22 December",
      fee: 25,
    },
    {
      image: dotctor3,
      name: "Karyen Anderson",
      proffesion: "BTP -  Senior Physiotherapist",
      address: "Dhanmondi, Dhaka, Bangladesh",
      available: "Available On Mon, 22 December",
      fee: 15,
    },
  ];

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
      <section className="mt-16 max-w-7xl mx-auto">
        <SectionIntro
          info={{
            header: "Our Expert Doctors",
            title:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          }}
        ></SectionIntro>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10">
          {doctorInfo?.map((doctor, id) => (
            <DoctorCard doctorInfo={doctor}></DoctorCard>
          ))}
        </div>
      </section>
    </>
  );
}
