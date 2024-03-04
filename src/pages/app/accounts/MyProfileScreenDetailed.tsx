export function MyProfileScreenDetailed() {
  return (
    <div className="h-full w-full md:pl-10">
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
          <div className="md:7/12 ml-4 w-8/12">
            <div className="mb-1 md:flex md:flex-wrap md:items-center">
              <h2 className="mb-2 inline-block text-3xl font-light sm:mb-0 md:mr-2">
                Username
              </h2>
              {/* badge */}
            </div>
            {/* post, following, followers list for medium screens */}
            <ul className="mb-1 hidden space-x-8 text-black md:flex md:items-center">
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
            className="flex justify-around space-x-8 p-2
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
                alt="mna-profile"
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
                alt="scenery-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
