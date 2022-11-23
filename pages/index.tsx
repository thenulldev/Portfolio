import Head from "next/head";
import Image from "next/image";
import avatar from "../public/avatar.png";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faMastodon,
  faPaypal,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-slate-900">
      <Head>
        <title>Stephen Freerking | The Null Dev</title>
        <meta name="description" content="30 - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="mt-32">
          <figure className="p-8 md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
            <Image
              className="h-24 mx-auto w-52 rounded-xl md:h-auto md:w-48"
              src={avatar}
              alt=""
            />
            <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
              <blockquote>
                <p className="text-lg font-medium">
                  I like waffles and making software
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Stephen Freerking
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Software Engineer
                </div>
              </figcaption>
              <div className="flex justify-between w-2/4">
                <Link href="#">
                  <FontAwesomeIcon className="" icon={faDiscord} />
                </Link>
                <Link href="https://github.com/snipey">
                  <FontAwesomeIcon className="" icon={faGithub} />
                </Link>
                <Link href="https://linkedin.com/in/stephenfdev">
                  <FontAwesomeIcon className="" icon={faLinkedin} />
                </Link>
                <Link href="https://twitter.com/snipeydev">
                  <FontAwesomeIcon className="" icon={faTwitter} />
                </Link>
                <Link href="https://fosstodon.org/@StephenDev">
                  <FontAwesomeIcon className="" icon={faMastodon} />
                </Link>
                <Link href="https://paypal.me/snipeydev">
                  <FontAwesomeIcon className="" icon={faPaypal} />
                </Link>
              </div>
            </div>
          </figure>
        </div>
      </main>
    </div>
  );
}
