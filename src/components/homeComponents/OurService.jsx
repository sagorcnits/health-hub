import Image from "next/image";
import serviceImg from "../../images/ourService.png";
import TabsHome from "./TabsHome";

const OurService = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 *:flex-1 px-3 md:px-0">
      <div>
        <Image   placeholder="blur" src={serviceImg} alt="service"></Image>
      </div>
      <div>
        <h1 className="text-[40px] font-Source_Sans font-semibold">Our Services</h1>
        <p className="text-paragraph font-Source_Sans">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="flex w-full flex-col mt-10">
          <TabsHome></TabsHome>
        </div>
        <div className="*:font-Source_Sans">
          <h1 className="text-[30px] font-semibold">Electro Gastrology Therapy</h1>
          <p className="text-paragraph py-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error{" "}
          </p>
          <p className="text-paragraph">
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <button className="button-2 font-semibold text-[20px] mt-10">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default OurService;
