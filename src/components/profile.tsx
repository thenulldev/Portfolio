import Image from "next/image";
import avatar from "@images/avatar.png";
import Social from "@components/social";

import { Poppins, Roboto, Roboto_Mono } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Profile() {
  return (
    <figure
      className={`object-left mt-8 md:flex bg-slate-100 rounded-xl md:p-0 ${poppins.className}`}
    >
      <Image
        className="object-cover w-full h-56 mx-auto rounded-xl md:h-auto md:w-56"
        src={avatar}
        alt=""
      />
      <div className="flex flex-col p-8 pt-6 space-y-4 md:text-left">
        <span className="flex-grow ">
          <p
            className={`font-medium text-md text-slate-800 ${roboto.className}`}
          >
            I like waffles and making software
          </p>
        </span>
        <figcaption className="font-medium">
          <div className="font-bold text-sky-500 dark:text-sky-400">
            Stephen Freerking
          </div>
          <div className="text-xs font-normal text-slate-700">
            Software Engineer
          </div>
        </figcaption>
        <Social />
      </div>
    </figure>
  );
}
