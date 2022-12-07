import Image from "next/image";
import avatar from "@images/avatar.png";
import Social from "@components/social";
export default function Profile() {
  return (
    <figure className="object-left mt-8 md:flex bg-slate-100 rounded-xl md:p-0">
      <Image
        className="object-cover w-full h-56 mx-auto rounded-xl md:h-auto md:w-56"
        src={avatar}
        alt=""
      />
      <div className="flex flex-col p-8 pt-6 space-y-4 text-center md:text-left">
        <blockquote className="flex-grow">
          <p className="font-medium text-md text-slate-800">
            I like waffles and making software
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Stephen Freerking
          </div>
          <div className="text-xs text-slate-700">Software Engineer</div>
        </figcaption>
        <Social />
      </div>
    </figure>
  );
}
