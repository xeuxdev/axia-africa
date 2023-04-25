<template>
  <section
    class="container relative sm:mt-20 mx-auto px-5 lg:px-[9.375rem] min-h-[43.75rem]"
  >
    <div class="flex items-center justify-between w-full flex-col md:flex-row">
      <!-- text -->
      <div class="max-w-[560px]">
        <h1
          class="headline text-[2rem] text-center font-medium text-darkish md:text-start md:text-[2.8125rem]"
        >
          Accelerate your career with
          <span class="gradient">Job-ready</span>
          tech skills.
        </h1>
        <p
          class="text-darkgrey text-base md:text-lg text-center md:text-left max-w-md mt-8"
        >
          Begin your tech journey and expand your career opportunities in the
          tech space by learning tech skills in demand.
        </p>

        <!-- ctas -->
        <div class="flex items-center gap-10 flex-col md:flex-row mt-10">
          <a class="btn-primary" href="/application">Apply Now</a>
          <a
            href="/"
            class="flex items-center gap-3 hover:gap-5 text-base text-primary font-semibold duration-200"
          >
            <span class="underline">Speak with an Advisor</span>
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
      </div>
      <!-- image -->

      <div
        class="md:absolute md:top-0 md:right-6 md:w-[57vw] w-[90%] mt-10 md:mt-0 max-w-[43.75rem] mx-auto md:mx-0"
      >
        <img src="/images/hero-image.webp" alt="Hero Image" />
      </div>
    </div>
  </section>
</template>
