import React from "react";

import Image from "next/image";
import { IClientLogos } from "@/app/services/3d-video-animation-services/page";

type indexProps = {
  clientList: IClientLogos[];
};

const Clients: React.FC<indexProps> = ({ clientList }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center bg-black">
      <h1 className="font-averta text-4xl font-bold text-white">Clients</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-4 sm:gap-x-8 place-items-center">
        {clientList.map((client: any) => (
          <Image
            className="w-[50vw] sm:w-[15vw]"
            src={client.image}
            alt="portolio-id"
            key={client.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Clients;
