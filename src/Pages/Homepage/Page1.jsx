import React from "react";
import Food1 from "./Food1";

const Page1 = () => {
  const page1src =
    "https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D";

  const burger =
    "  https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D";

  const sandwich =
    "https://plus.unsplash.com/premium_photo-1671403964047-f2dd6b9e281a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D";

  const pastries =
    "https://images.unsplash.com/photo-1617026061250-62b474264442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhc3RyaWVzfGVufDB8fDB8fHww";

  const icecream =
    "https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D";
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        blur: 0.5,
      }}
    >
      <div className="flex flex-wrap flex-col  gap-2 p-3 lg:justify-center lg:gap-7 lg:flex-row lg:p-4">
        <Food1 imagesrc={sandwich} imagename={"SANDWICH"} />

        <Food1 imagesrc={page1src} imagename={"PIZZA"} />
        <Food1 imagesrc={icecream} imagename={"ICE CREAM"} />

        <Food1 imagesrc={burger} imagename={"BURGER"} />
        <Food1 imagesrc={pastries} imagename={"PASTRIES"} />
      </div>
    </div>
  );
};

export default Page1;
