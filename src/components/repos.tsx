import { faStar, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppProps } from "next/app";
import Link from "next/link";
import { Roboto_Mono } from "@next/font/google";
import { PinnedRepos } from "@api/gql";

const roboto_mono = Roboto_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export function Repos(pinned: PinnedRepos) {
  return (
    <section className="my-8 text-gray-600 body-font">
      <div className="px-5 py-0 mx-auto">
        <h1 className="pb-8 pl-5 text-2xl font-light text-left text-white -pt-8">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center -m-4">
          {pinned &&
            pinned.map((repo: PinnedRepos, index) => (
              <div
                key={index}
                className={`w-full p-4 lg:w-1/3 md:w-1/2 xl:w-1/3 ${roboto_mono.className}`}
              >
                <div className="h-full overflow-hidden transition border-2 border-gray-200 rounded-lg bg-slate-100 hover:bg-white border-opacity-60">
                  <Link href={repo.url}>
                    <div className="flex flex-col justify-between h-full p-6">
                      <div className="flex-grow">
                        <h2 className="mb-1 text-xs font-bold tracking-widest text-gray-400 title-font">
                          {repo.primaryLanguage.name}
                        </h2>
                        <h1 className="mb-3 text-lg font-medium title-font text-slate-800">
                          {repo.name}
                        </h1>
                        <p className="mb-3 leading-relaxed text-slate-800">
                          {repo.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"></a>
                        <span className="inline-flex py-1 pr-3 ml-auto mr-3 text-sm leading-none border-r-2 border-gray-200 text-slate-500 dark:text-gray-400 lg:ml-auto md:ml-0">
                          <FontAwesomeIcon
                            className="pr-1 hover:fill-blue-600"
                            icon={faStar}
                            size="sm"
                          />
                          {repo.stargazerCount}
                        </span>
                        <span className="inline-flex text-sm leading-none text-slate-500 dark:text-gray-400">
                          <FontAwesomeIcon
                            className="pr-1"
                            icon={faCodeFork}
                            size="sm"
                          />
                          {repo.forkCount}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
