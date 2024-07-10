import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-10 *:text-white *:flex *:gap-4 *:items-center *:justify-center *:border *:p-8 *:rounded-md *:duration-500 *:h-[150px]">
      <div className=" bg-[#07332F] hover:bg-[#F7A582]">
        <TfiTimer className="text-[30px]"></TfiTimer>
        <div>
          <h1 className="font-Source_Sans font-semibold text-[25px]">Opening Hours</h1>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      <div className=" bg-[#07332F] hover:bg-[#F7A582]">
        <IoLocationOutline className="text-[30px]"></IoLocationOutline>
        <div>
          <h1 className="font-Source_Sans font-semibold text-[25px]">Our Location</h1>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      <div className=" bg-[#07332F] hover:bg-[#F7A582]">
        <MdOutlineAddIcCall className="text-[30px]"></MdOutlineAddIcCall>
        <div>
          <h1 className="font-Source_Sans font-semibold text-[25px]">Contact Us</h1>
          <p>
            +88 01750 00 00 00 <br />
            +88 01750 00 00 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
