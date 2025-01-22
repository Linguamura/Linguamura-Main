import React from "react";

const LandingPage = () => {
  return (
    <div>
      {/* hero section */}
      <div className="bg-[url('/src/assets/images/hero_image.png')] bg-cover h-screen">
        <header className="flex justify-between bg-white p-4 items-center">
          <div className="flex space-x-32">
            {/* header logo */}
            <div>
              <img src="/src/assets/images/logo and icon 1.png" alt="" />
            </div>

            <div className="flex space-x-16">
              <a href="#">How it works</a>
              <div className="flex items-center space-x-2">
                <a href="#">Our services</a>
                <img
                  src="/src/assets/images/akar-icons_chevron-down.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-16 items-center">
            <div className="flex items-center space-x-2">
              <img src="/src/assets/images/Vector.png" alt="" />
              <a href="#">English</a>
              <img
                src="/src/assets/images/akar-icons_chevron-down.png"
                alt=""
              />
            </div>
            {/* login/signup */}
            <div className="flex space-x-4 items-center">
              <a href="/login"><img className="w-[100px]" src="/src/assets/images/CTA Buttons (7).png" alt="" /></a>
              <a href="/register"><img className="w-[100px]" src="/src/assets/images/CTA Buttons (8).png" alt="" /></a>
            </div>
          </div>
        </header>
        {/* Hero content */}
        <div className="relative">
          <a href="/register">
            <img
              className="absolute w-[10.8rem] top-[70.5%] z-10 left-[43.8%]"
              src="/src/assets/images/CTA Buttons.png"
              alt=""
            />
          </a>
          <img
            className="relative top-8 w-9/12 h-1/4 m-auto"
            src="/src/assets/images/Hero Section.png"
            alt=""
          />
        </div>
        {/* playstore/apple store */}
        <div className="flex space-x-4 justify-center">
          <a className="w-48 cursor-pointer" href="#">
            <img src="/src/assets/images/Frame625606.png" alt="" />
          </a>
          <a className="w-48 cursor-pointer" href="#">
            <img src="/src/assets/images/Frame625607.png" alt="" />
          </a>
        </div>
      </div>

      {/* second section */}
      <div>
        <section className="px-20 pt-8">
          <h1 className="font-bold text-xl">What’s LinguaMura?</h1>
          <p className="text-sm text-gray-300">
            Linguamura simplifies your life by providing a wide range of
            features and services in one place.
          </p>

          {/* education line */}
          <div className="flex space-x-2 items-center">
            <img src="/src/assets/images/Group 12 (1).png" alt="" />
            <h1 className="text-2xl font-bold">Education</h1>
          </div>

          {/* first sect */}
          <div className="flex space-x-12 items-center mb-20">
            <img
              className="w-[18%] ml-28 rounded"
              src="/src/assets/images/2149215444 1.png"
              alt=""
            />
            <div className="mt-48 flex flex-col gap-4">
              <h1 className="text-xl font-bold">Mastering Your Life</h1>
              <p className="text-sm w-[71%] text-gray-300">
                With Linguamura, you can learn new languages and expand your
                knowledge with our educational resources.{" "}
              </p>
              <a href="#">
                <img
                  className="w-[10rem]"
                  src="/src/assets/images/CTA Buttons (1).png"
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* heath line */}
          <div className="flex space-x-2 items-center">
            <h1 className="text-2xl font-bold">Health</h1>
            <img src="/src/assets/images/Group 12.png" alt="" />
          </div>

          {/* second sect */}
          <div className="flex items-center mb-20">
            <div className="mt-48 flex flex-col gap-4 ml-28">
              <h1 className="text-xl font-bold">Unlocking New Opportunities</h1>
              <p className="text-sm w-[65%] text-gray-300">
                With Linguamura, you can take control of your health and
                wellness with personalized advice and tools.{" "}
              </p>
              <a href="#">
                <img
                  className="w-[10rem]"
                  src="/src/assets/images/CTA Buttons (2).png"
                  alt=""
                />
              </a>
            </div>
            <img
              className="w-[18%] ml-[-9rem] rounded"
              src="/src/assets/images/front-view-doctor-working-clinic 1.png"
              alt=""
            />
          </div>

          {/* marketplace line */}
          <div className="flex space-x-2 items-center">
            <img src="/src/assets/images/Group 12 (1).png" alt="" />
            <h1 className="text-2xl font-bold">Marketplace</h1>
          </div>

          {/* third sect */}
          <div className="flex space-x-12 items-center mb-20">
            <img
              className="w-[18%] ml-28 rounded"
              src="/src/assets/images/cyber-monday-shopping-sales 1.png"
              alt=""
            />
            <div className="mt-48 flex flex-col gap-4">
              <h1 className="text-xl font-bold">Redefining Your Experiences</h1>
              <p className="text-sm w-[82%] text-gray-300">
                With Linguamura, discover new products and services in our
                marketplace.{" "}
              </p>
              <a href="#">
                <img
                  className="w-[10rem]"
                  src="/src/assets/images/CTA Buttons (3).png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <h1 className="font-bold text-xl">LinguaMura is so much MORE...</h1>
          <p className="text-sm text-gray-300">
            Our goal is to empower you with the tools and resources you need to
            succeed in various aspects of your life.{" "}
          </p>

          <img
            className="w-[100%] mt-4"
            src="/src/assets/images/Frame 1000008102.png"
            alt=""
          />
        </section>

        {/* third sectiom */}
        <section>
          <div>
            <h1 className="font-bold text-xl text-center mt-8">
              What LinguaMura Offers You
            </h1>
            <p className="text-sm text-gray-300 text-center mt-2">
              Choose the plan that suits you best. Want to adjust it? Tailor
              your subscription for a perfect match!
            </p>
          </div>

          {/* toggle monthly/annually */}
          <div className="flex justify-center items-center mt-4 mb-8">
            <button className="relative z-10 left-8 text-xs bg-teal-500 text-white px-12 py-2 rounded-3xl">
              monthly
            </button>
            <button className="text-xs bg-slate-300 text-white px-12 py-2 rounded-3xl">
              Annually(save 40%)
            </button>
          </div>

          {/* plan cards */}

          <div className="flex gap-4 justify-center items-center mb-8">
            <div className="w-full max-w-sm p-2 bg-white border border-stone-200 rounded-xl">
              <button className="mb-4 text-sm w-16 p-2 text-white rounded-2xl font-medium bg-teal-500">
                Free
              </button>
              <p className="text-xs mb-8">Just for trying things out</p>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-3xl font-extrabold tracking-tight">
                  0
                </span>
                <span className="ms-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <img src="/src/assets/images/CTA Buttons (4).png" alt="" />
              <hr className="text-stone-200 mt-4" />
              <h1 className="text-xs mt-4">FEATURES</h1>
              <ul role="list" className="space-y-5 my-4">
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Ads
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Limited lesson resources
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full max-w-sm p-2 bg-white border border-stone-200 rounded-xl">
              <button className="mb-4 text-sm w-20 p-2 text-white rounded-2xl font-medium bg-teal-500">
                premium
              </button>
              <p className="text-xs mb-8">
                Ideal if you want to get all features readily at your fingertips
              </p>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-3xl font-extrabold tracking-tight">
                  250
                </span>
                <span className="ms-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <img src="/src/assets/images/CTA Buttons (4).png" alt="" />
              <hr className="text-stone-200 mt-4" />
              <h1 className="text-xs mt-4">FEATURES</h1>
              <ul role="list" className="space-y-5 my-4">
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Ads
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Limited lesson resources
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
                <li className="flex items-center">
                  <img src="/src/assets/images/Radio Button.png" alt="" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to all educators
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-full max-w-sm p-2 bg-teal-400 border border-stone-200 rounded-xl">
                <button className="mb-4 text-sm w-16 p-2 text-teal-400 rounded-2xl font-medium bg-white">
                  custom
                </button>
                <p className="text-xs mb-12">
                  If Premium isn't quite right, let's craft a plan that works
                  for you. Adjust your subscription to fit your needs, whether
                  it's more or less!r
                </p>
                <img src="/src/assets/images/CTA Buttons (5).png" alt="" />
                <hr className="text-stone-200 mt-4" />
                <h1 className="text-xs mt-4">FEATURES</h1>
                <ul role="list" className="space-y-5 my-4">
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Ads
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Limited lesson resources
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Access to all educators
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Access to all educators
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Access to all educators
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Access to all educators
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Access to all educators
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img src="/src/assets/images/Radio Button (1).png" alt="" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Access to all educators
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* fouth section */}
        <section className="bg-[url('/src/assets/images/testimonial_background.png')] bg-cover h-[1050px]">
          <h1 className="font-bold text-2xl text-center pt-8">
            What Our Subscribers are Saying
          </h1>
          <p className="text-xs text-gray-300 text-center mt-2">
            Hear what our subscribed users are saying about our products
          </p>

          {/* picture card */}
          <div className="flex gap-4 items-center pl-24 mt-8">
            <img
              className="w-[270px]"
              src="/src/assets/images/Group 804.png"
              alt=""
            />
            <img
              className="w-[270px]"
              src="/src/assets/images/Group 805.png"
              alt=""
            />
            <img
              className="w-[270px]"
              src="/src/assets/images/Group 806.png"
              alt=""
            />
            <img
              className="w-[270px]"
              src="/src/assets/images/Group 807.png"
              alt=""
            />
            <img
              className="w-[135px]"
              src="/src/assets/images/Group 808.png"
              alt=""
            />
          </div>

          <h1 className="pl-24 font-bold mt-16 text-3xl">More Reviews...</h1>

          {/* comment card */}
          <div className="flex items-center pl-24 mt-8 gap-4">
            <div className="border w-[325px] justify-center p-4 rounded-xl border-white ">
              <p className="text-sm text-white">
                As someone who’s tried various language learning platforms,
                LinguaMura stands out for its comprehensive approach to
                mastering French. The lessons are perfectly structured, guiding
                you from the basics to advanced levels with ease. I especially
                love the customizable subscription options—they make it easy to
                find a plan that fits my learning pace. The vocabulary-building
                tools are incredibly intuitive, and the platform’s design is
                sleek and user-friendly.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <img src="/src/assets/images/Ellipse 88.png" alt="" />
                <div>
                  <h1 className="text-xs">Prince</h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs text-white">Calabar, Nigeria</p>
                    <img src="/src/assets/images/Frame 625362.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border w-[325px] justify-center p-4 rounded-xl border-white ">
              <p className="text-sm text-white">
                As someone who’s tried various language learning platforms,
                LinguaMura stands out for its comprehensive approach to
                mastering French. The lessons are perfectly structured, guiding
                you from the basics to advanced levels with ease. I especially
                love the customizable subscription options—they make it easy to
                find a plan that fits my learning pace. The vocabulary-building
                tools are incredibly intuitive, and the platform’s design is
                sleek and user-friendly.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <img src="/src/assets/images/Ellipse 88.png" alt="" />
                <div>
                  <h1 className="text-xs">Prince</h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs text-white">Calabar, Nigeria</p>
                    <img src="/src/assets/images/Frame 625362.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border w-[325px] justify-center p-4 rounded-xl border-white ">
              <p className="text-sm text-white">
                As someone who’s tried various language learning platforms,
                LinguaMura stands out for its comprehensive approach to
                mastering French. The lessons are perfectly structured, guiding
                you from the basics to advanced levels with ease. I especially
                love the customizable subscription options—they make it easy to
                find a plan that fits my learning pace. The vocabulary-building
                tools are incredibly intuitive, and the platform’s design is
                sleek and user-friendly.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <img src="/src/assets/images/Ellipse 88.png" alt="" />
                <div>
                  <h1 className="text-xs">Prince</h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs text-white">Calabar, Nigeria</p>
                    <img src="/src/assets/images/Frame 625362.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border w-[325px] justify-center p-4 rounded-xl border-white ">
              <p className="text-sm text-white">
                As someone who’s tried various language learning platforms,
                LinguaMura stands out for its comprehensive approach to
                mastering French. The lessons are perfectly structured, guiding
                you from the basics to advanced levels with ease. I especially
                love the customizable subscription options—they make it easy to
                find a plan that fits my learning pace. The vocabulary-building
                tools are incredibly intuitive, and the platform’s design is
                sleek and user-friendly.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <img src="/src/assets/images/Ellipse 88.png" alt="" />
                <div>
                  <h1 className="text-xs">Prince</h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs text-white">Calabar, Nigeria</p>
                    <img src="/src/assets/images/Frame 625362.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* fifth section */}

        <section>
          <h1 className="text-2xl text-center font-bold mt-8">FAQs</h1>
          <p className="text-sm text-center ">
            Quick answers to questions you may have about{" "}
            <span className="text-teal-400 font-bold">LinguaMura</span> and
            billing. Can’t find <br />
            what you're looking?{" "}
            <u>
              <a href="#">Chat us up</a>
            </u>
          </p>

          <div className="flex items-center gap-16 mt-16 justify-center">
            {/* RHS */}
            <div className="relative">
              <img
                className="w-[260px] relative"
                src="/src/assets/images/Mask group (2).png"
                alt=""
              />
              <a href="#">
                <img
                  className="absolute bottom-2 right-48 w-[150px]"
                  src="/src/assets/images/Frame 625687.png"
                  alt=""
                />
              </a>
            </div>

            {/* LHS */}
            <div className="space-y-6">
              <button className="flex justify-between items-center text-xs bg-teal-100 font-medium p-4 rounded-xl w-[410px]">
                <p>What languages does LinguaMura offer for learning?</p>
                <img
                  className="w-6"
                  src="/src/assets/images/arrow-down.png"
                  alt=""
                />
              </button>

              <button className="flex justify-between items-center text-xs bg-teal-100 font-medium p-4 rounded-xl w-[410px]">
                <p>Can I customize my learning plan on LinguaMura?</p>
                <img
                  className="w-6"
                  src="/src/assets/images/arrow-down.png"
                  alt=""
                />
              </button>

              <button className="flex justify-between items-center text-xs bg-teal-100 font-medium p-4 rounded-xl w-[410px]">
                <p>What support is available if I need help with my lessons?</p>
                <img
                  className="w-6"
                  src="/src/assets/images/arrow-down.png"
                  alt=""
                />
              </button>

              <button className="flex justify-between items-center text-xs bg-teal-100 font-medium p-4 rounded-xl w-[410px]">
                <p>How does the scholarship program work?</p>
                <img
                  className="w-6"
                  src="/src/assets/images/arrow-down.png"
                  alt=""
                />
              </button>

              <button className="flex justify-between items-center text-xs bg-teal-100 font-medium p-4 rounded-xl w-[410px]">
                <p>Can I access LinguaMura on mobile devices?</p>
                <img
                  className="w-6"
                  src="/src/assets/images/arrow-down.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <footer className="bg-[url('/src/assets/images/Footer.png')] bg-cover h-[400px]">
          <section className="mt-20 flex gap-20 items-center">
            <div className="pl-24 space-y-4">
              <h1 className="font-semibold mt-20">linguamura</h1>
              <p className="text-xs w-[240px]">
                Whether you're a beginner or advanced learner, customize your
                learning journey and take advantage of scholarship opportunities
                to make language education accessible for everyone. Start your
                linguistic adventure with LinguaMura today!
              </p>
              <a href="#">
                <img
                  className="w-[180px] mt-4"
                  src="/src/assets/images/CTA Buttons (6).png"
                  alt=""
                />
              </a>
            </div>

            <div>
              <h1 className="font-semibold mt-[90px]">Our Services</h1>
              <ul className="space-y-2">
                <li className="text-xs mt-2">Education</li>
                <li className="text-xs">Health</li>
                <li className="text-xs">Housing</li>
                <li className="text-xs">Marketplace</li>
                <li className="text-xs">Travel</li>
                <li className="text-xs">Entertainment</li>
                <li className="text-xs">Communities</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mt-[40px]">Company</h1>
              <ul className="space-y-2">
                <li className="text-xs mt-2">About us</li>
                <li className="text-xs">Blog</li>
                <li className="text-xs">Careers</li>
                <li className="text-xs">Reviews</li>
                <li className="text-xs">Privacy</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold">Support</h1>
              <ul className="space-y-2">
                <li className="text-xs mt-2">FAQs</li>
                <li className="text-xs">Contact supports</li>
                <li className="text-xs">Affiliates</li>
              </ul>
            </div>
          </section>
          <div className="mt-22 flex justify-evenly pl-[300px]">
            <p className="text-xs">Copyright 2024 Peace Chinonye All Rights Reserved</p>
            <div className="flex gap-4 items-center">
              <a href="#"><img className="w-[15px]"
                src="/src/assets/images/akar-icons_linkedin-fill.png"
                alt=""
              /></a>
              <a href=""><img className="w-[15px]" src="/src/assets/images/prime_twitter.png" alt="" /></a>
              <a href=""><img className="w-[15px]" src="/src/assets/images/mdi_youtube.png" alt="" /></a>
              <a href=""><img className="w-[15px]" src="/src/assets/images/ri_facebook-fill.png" alt="" /></a>
              <a href=""><img className="w-[15px]" src="/src/assets/images/uil_instagram.png" alt="" /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
