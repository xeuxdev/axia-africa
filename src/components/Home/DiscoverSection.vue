<template>
  <section
    class="container w-full relative mt-24 mb-40 lg:px-[9.375rem] px-5 space-y-20 md:space-y-28"
  >
    <!-- anmated thingy -->
    <div class="absolute w-56 sm:w-80 right-10 -top-24 animate-bounce sm:mt-12">
      <img src="/images/doddle2.svg" alt="doddle" />
    </div>
    <!-- header -->
    <div class="space-y-5">
      <h5 class="font-medium text-[1.75rem] md:text-4xl text-darkish">
        Discover the right school for your journey
      </h5>
      <p class="text-darkgrey text-base md:text-lg font-medium max-w-3xl">
        Axia Africa offers you the chance to explore schools which has variety
        of courses to learn from, like product design, Front end.
      </p>
    </div>
    <!-- cards -->
    <div class="flex justify-center gap-20 flex-wrap w-full">
      <!-- product design -->
      <article
        class="relative bg-brown z-10 p-5 space-y-6 md:w-[40%] md:space-y-14 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3"
      >
        <header class="font-semibold text-darkish text-lg md:text-2xl">
          School of Product
        </header>
        <!-- info -->
        <p class="text-sm md:text-base text-darkgrey font-medium">
          We offer you Product courses such as Product Design,Product management
          and Product marketing by equipping you with the right trainings and
          guidelines. Become a world class personnel and job-ready candidate in
          the product field.
        </p>

        <!-- cta -->
        <a
          href="/"
          class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200 mt-3"
        >
          <span class="underline">View Courses</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-5"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </article>

      <!-- sys eng -->
      <article
        class="relative bg-brown z-10 p-5 space-y-6 md:w-[40%] md:space-y-14 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3"
      >
        <header class="font-semibold text-darkish text-lg md:text-2xl">
          School of Systems Engineering
        </header>
        <!-- info -->
        <p class="text-sm md:text-base text-darkgrey font-medium">
          Begin your learning process in Front-End Web Development, Back-End Web
          Development and more. Discover career opportunities available for you.
          Speak to professionals and read through materials and the programme
          designed specifically for you.
        </p>

        <!-- cta -->
        <a
          href="/"
          class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200 mt-3"
        >
          <span class="underline">View Courses</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-5"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </article>

      <!-- data -->
      <article
        class="relative bg-brown z-10 p-5 space-y-6 md:w-[40%] md:space-y-14 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3"
      >
        <header class="font-semibold text-darkish text-lg md:text-2xl">
          School of Data
        </header>
        <!-- info -->
        <p class="text-sm md:text-base text-darkgrey font-medium">
          Even as a newbie in the data analysis space, you can jumpstart your
          journey and hone your skills by kicking it off with the Axia Africa
          School of Data Analysis.
        </p>

        <!-- cta -->
        <a
          href="/"
          class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200 mt-3"
        >
          <span class="underline">View Courses</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-5"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </article>
    </div>
  </section>
</template>
