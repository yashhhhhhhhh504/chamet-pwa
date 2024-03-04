import { Button } from '@/components/ui/button';

export function ProfileScreenDetailed() {
  return (
    <main className="h-full w-full">
      <div className="h-full w-full">
        <header className="flex flex-wrap items-center p-4 md:py-8">
          <div className="md:ml-16 md:w-3/12">
            {/* profile image */}
            <img
              className="h-20 w-20 rounded-full border-2 border-red-600 object-cover
               p-1 md:h-32 md:w-32"
              src="/images/woman-profile.png"
              alt="profile"
            />
          </div>
          {/* profile meta */}
          <div className="ml-4 w-8/12 md:w-7/12">
            <div className="mb-4 md:flex md:flex-wrap md:items-center">
              <h2 className="mb-2 inline-block text-3xl font-light sm:mb-0 md:mr-2">
                Username
              </h2>
              {/* badge */}
              <span
                className="fas fa-certificate fa-lg relative mr-6
                         inline-block -translate-y-2  transform text-xl text-blue-500"
                aria-hidden="true">
                <i
                  className="fas fa-check absolute inset-x-0 ml-1 mt-px
                         text-xs text-white"
                />
              </span>
              {/* follow button */}
              <Button>Follow</Button>
            </div>
            {/* post, following, followers list for medium screens */}
            <ul className="mb-4 hidden space-x-8 text-black md:flex md:items-center">
              <li>
                <span className="mr-1 font-semibold">6</span>
                posts
              </li>
              <li>
                <span className="mr-1 font-semibold">0</span>
                followers
              </li>
              <li>
                <span className="mr-1 font-semibold">0</span>
                following
              </li>
            </ul>
            {/* user meta form medium screens */}
            <div className="hidden md:block">
              <h1 className="font-semibold">User Name</h1>
              <span className="bioclass">User Headline</span>
              <p className="text-black">
                Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga delectus excepturi, ipsa iusto facere deleniti
                corporis porro molestiae debitis tempora eatae dicta.
              </p>
            </div>
          </div>
          {/* user meta form small screens */}
          <div className="my-2 text-sm md:hidden">
            <h1 className="font-semibold">User Name</h1>
            <span className="bioclass">User Headline</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </header>
        {/* posts */}
        <div className="px-px md:px-3">
          {/* user following for mobile only */}
          <ul
            className="flex justify-around space-x-8 border-t p-2
          text-center text-sm leading-snug text-gray-600 md:hidden">
            <li>
              <span className="mr-1 block font-semibold text-gray-800">6</span>
              posts
            </li>
            <li>
              <span className="mr-1 block font-semibold text-gray-800">0</span>
              followers
            </li>
            <li>
              <span className="mr-1 block font-semibold text-gray-800">0</span>
              following
            </li>
          </ul>
          <br />
          <br />
          {/* flexbox grid */}
          <div className="-mx-px flex flex-wrap border-t-2 md:-mx-3">
            {/* column */}
            <div className="w-1/3 p-px md:p-3">
              {/* post 1 */}

              {/* post images */}
              <img
                className="h-[15vh] w-full object-cover md:h-[25vh]"
                src="/images/scenery-1.png"
                alt="scenery-1"
              />
            </div>
            <div className="w-1/3 p-px md:p-3">
              <img
                className="h-[15vh] w-full object-cover md:h-[25vh]"
                src="/images/woman-post.png"
                alt="woman-post"
              />
              {/* overlay */}
            </div>
            <div className="w-1/3 p-px md:p-3">
              <img
                className="h-[15vh] w-full object-cover md:h-[25vh]"
                src="/images/man-profile.png"
                alt="man-profile"
              />
              {/* overlay */}
            </div>
            <div className="w-1/3 p-px md:p-3">
              <img
                className="h-[15vh] w-full object-cover md:h-[25vh]"
                src="/images/scenery-3.png"
                alt="scenery-3"
              />
            </div>
            <div className="w-1/3 p-px md:p-3">
              <img
                className="h-[15vh] w-full object-cover md:h-[25vh]"
                src="/images/scenery-2.png"
                alt="/scenery-2"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
