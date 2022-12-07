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
export function Social() {
  let socials = [
    {
      link: "https://github.com/snipey",
      icon: faGithub,
    },
    {
      link: "https://linkedin.com/in/stephenfdev",
      icon: faLinkedin,
    },
    {
      link: "https://twitter.com/snipeydev",
      icon: faTwitter,
    },
    {
      link: "https://fosstodon.org/@StephenDev",
      icon: faMastodon,
    },
    {
      link: "https://paypal.me/snipeydev",
      icon: faPaypal,
    },
  ];

  return (
    <div className="flex justify-between w-full">
      {socials.map((social, index) => (
        <Link key={index} href={social.link}>
          <FontAwesomeIcon
            className="hover:fill-blue-600"
            icon={social.icon}
            size="2x"
          />
        </Link>
      ))}
    </div>
  );
}
