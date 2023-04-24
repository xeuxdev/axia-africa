<template>
  <section
    class="container mx-auto w-full md:mt-28 mt-12 mb-40 px-5 lg:px-[9.375rem]"
  >
    <h2 class="text-3xl md:text-4xl text-darkish font-medium">
      Courses for you
    </h2>
    <p class="text-base md:text-lg text-darkgrey max-w-md mt-5">
      Here are some courses from our schools that we offer. Enroll and kickstart
      your tech career.
    </p>

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <!-- product design -->
      <article
        class="relative bg-brown z-10 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3"
      >
        <img
          src="/images/course1.png"
          alt="Product Design"
          class="w-full h-36 md:h-60"
        />
        <div class="p-5 space-y-3">
          <header class="font-semibold text-darkish text-lg md:text-2xl">
            Product Design
          </header>
          <!-- info -->
          <p class="text-sm md:text-base text-darkgrey font-medium">
            Design user experiences for products in today&apos;s digital world.
            Build a portfolio that showcases your ability to transform products.
          </p>

          <!-- cta -->
          <a
            href="/"
            class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200"
          >
            <span class="underline">Enroll Now</span>
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
        </div>
      </article>

      <!-- data analytics -->
      <article
        class="relative bg-brown z-10 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3"
      >
        <img
          src="/images/course2.png"
          alt="Data Analytics"
          class="w-full h-36 md:h-60"
        />
        <div class="p-5 space-y-3">
          <header class="font-semibold text-darkish text-lg md:text-2xl">
            Data Analytics
          </header>
          <!-- info -->
          <p class="text-sm md:text-base text-darkgrey font-medium">
            Use Python, SQL, and statistics to uncover insights, communicate
            critical findings, and create data-driven solutions
          </p>

          <!-- cta -->
          <a
            href="/"
            class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200"
          >
            <span class="underline">Enroll Now</span>
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
        </div>
      </article>

      <!-- frontend -->

      <article
        class="relative bg-brown z-10 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3"
      >
        <img
          src="/images/course3.png"
          alt="Front-End Development"
          class="w-full h-36 md:h-60"
        />
        <div class="p-5 space-y-3">
          <header class="font-semibold text-darkish text-lg md:text-2xl">
            Front-End Development
          </header>
          <!-- info -->
          <p class="text-sm md:text-base text-darkgrey font-medium">
            Begin our front-end development program structured to help students
            launch a new career in web development.
          </p>

          <!-- cta -->
          <a
            href="/"
            class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200"
          >
            <span class="underline">Enroll Now</span>
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
        </div>
      </article>
    </div>
  </section>
</template>
