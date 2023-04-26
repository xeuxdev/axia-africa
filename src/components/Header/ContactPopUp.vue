<template>
  <div
    class="bg-[#0006] fixed inset-0 z-50 w-screen min-h-full flex items-center justify-center transition-all"
  >
    <section
      class="bg-white px-10 md:px-20 py-12 w-full max-w-xl relative cursor-pointer animate-show"
    >
      <!-- close icon -->
      <div class="absolute right-5 top-5" @click="toggleContactPopUp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="25"
          height="25"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#000"
          />
        </svg>
      </div>

      <div class="text-center">
        <header class="text-xl font-bold">Contact Us</header>
        <p class="mt-3 text-sm max-w-[21.25rem] mx-auto">
          You can reach out to the Axia Team for any help you may need. We are
          here to assist you
        </p>
      </div>

      <!--  -->
      <div class="flex items-center justify-between flex-col gap-16 py-12">
        <!-- contact -->

        <div class="space-y-10 w-full">
          <!-- call -->
          <div
            class="relative bg-brown flex items-center gap-6 z-10 p-5 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-8"
            >
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            <div>
              <!-- info -->

              <p class="community-name text-sm sm:text-base font-medium">
                Call Us directly on
              </p>
              <!-- cta -->

              <a
                href="tel:09015558035"
                class="text-lg md:text-2xl font-semibold"
                >09015558035</a
              >
            </div>
          </div>
          <!-- email -->
          <div
            class="relative bg-brown flex items-center gap-6 z-10 p-5 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-8"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            <div>
              <!-- info -->

              <p class="community-name text-sm sm:text-base font-medium">
                Email Us
              </p>
              <!-- cta -->

              <a
                href="mailto:axiaafrica@gmail.com"
                class="text-lg md:text-2xl font-semibold"
                >axiaafrica@gmail.com</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["toggleContactPopUp"],
}
</script>
