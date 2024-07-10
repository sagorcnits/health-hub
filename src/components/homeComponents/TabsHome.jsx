"use client";
import { Card, CardBody } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import tabimg1 from "../../images/tab-img1.png";
import tabimg2 from "../../images/tab-img2.jpg";
import tabimg3 from "../../images/tab-img3.jpg";
const TabsHome = () => {
  return (
    <Tabs
      key="primary"
      color="primary"
      aria-label="Tabs colors"
      fullWidth={true}
      variant="bordered"
      className=" flex *:flex-col md:*:flex-row"
    >
      <Tab
        key="Cavity Protection"
        title="Cavity Protection"
        className="py-10 text-[18px] font-semibold"
      >
        <Card>
          <CardBody>
            <Image
              src={tabimg1}
              alt="tab image"
              className="block w-full"
            ></Image>
          </CardBody>
        </Card>
      </Tab>
      <Tab
        key="Cosmetic Dentisty"
        title="Cosmetic Dentisty"
        className="py-10 text-[18px] font-semibold"
      >
        <Card>
          <CardBody>
            <Image
              src={tabimg2}
              alt="tab image"
              className="block w-full"
            ></Image>
          </CardBody>
        </Card>
      </Tab>
      <Tab
        key="Oral Surgery"
        title="Oral Surgery"
        className="py-10 text-[18px] font-semibold"
      >
        <Card>
          <CardBody>
            <Image
              src={tabimg3}
              alt="tab image"
              className="block w-full"
            ></Image>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
};

export default TabsHome;
