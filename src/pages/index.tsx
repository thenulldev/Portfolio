import Head from "next/head";

import { getUsersPinnedRepositories } from "./api/gql";
import { InferGetStaticPropsType } from "next/types";
import Profile from "@components/profile";
// import Repos from "@components/repos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home({
  pinned,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Stephen Freerking | The Null Dev</title>
        <meta name="description" content="30 - Software Engineer" />
      </Head>
      <div>
        <div className="container mx-auto md:p-8 md:text-left">
          <div className="flex justify-center">
            <Profile />
          </div>
          <Repos pinned={pinned} />
        </div>
        <footer className="w-full p-4 font-bold text-center text-white">
          Made with <span className="text-red-600">♥️</span> by Stephen F 2022
        </footer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let pinned = await getUsersPinnedRepositories("Snipey");
  return {
    props: {
      pinned,
    },
  };
}

export function Repos({
  pinned,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <section className="my-8 text-gray-600 body-font">
      <div className="px-5 py-0 mx-auto">
        <h1 className="pb-8 pl-5 text-2xl font-light text-left text-white -pt-8">
          Projects
        </h1>
        <div className="flex flex-wrap -m-4">
          {/* {JSON.stringify(pinned)} */}
          {pinned &&
            pinned.map((repo, index) => (
              <div
                key={index}
                className="w-full p-4 lg:w-1/3 md:w-1/2 xl:w-1/4"
              >
                <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg bg-slate-100 border-opacity-60">
                  <div className="flex flex-col justify-between h-full p-6 ">
                    <div>
                      <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                        {repo.primaryLanguage.name}
                      </h2>
                      <h1 className="mb-3 text-lg font-medium title-font text-slate-800">
                        <Link href={repo.url}>{repo.name}</Link>
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
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
