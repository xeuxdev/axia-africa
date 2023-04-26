<template>
  <div
    class="bg-[#0006] fixed top-0 left-0 z-50 w-screen min-h-full flex items-center justify-center transition-all"
  >
    <section
      class="bg-white px-10 md:px-20 py-12 max-w-[74.5rem] w-full relative cursor-pointer animate-show"
    >
      <!-- close icon -->
      <div class="absolute right-5 top-5" @click="toggleCommunityPopUp">
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
        <header class="text-xl font-bold">Join Our Community</header>
        <p class="mt-3 text-sm max-w-[21.25rem] mx-auto">
          Join over 2000 plus tech personnel with a common goal of building
          thier tech career to the top.
        </p>
      </div>

      <!--  -->
      <div
        class="flex items-center justify-between flex-col md:flex-row gap-16 py-12"
      >
        <!-- socials -->

        <div class="space-y-14 w-full">
          <!-- slack -->
          <div
            class="relative bg-brown flex items-center justify-between z-10 p-5 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3 w-full"
          >
            <img src="/images/slack.png" alt="slack" />
            <!-- info -->

            <p class="community-name text-sm sm:text-base font-semibold">
              Slack Community
            </p>
            <!-- cta -->
            <button
              class="grid place-items-center bg-primary text-lighestgrey text-sm sm:text-base font-semibold h-14 w-28 cursor-pointer"
            >
              <a
                href="https://join.slack.com/share/enQtNDYzNDcwNjA5MzQ1Ni02Mjk1NjZhZDc3NmRjYjkyZGEzYTQxYmYyMGY2MmUyYjFmMzY2YWIzZmQ3MzlhNjYzZThkYzVmYWY0ZmU2MDRk"
                >Join Now</a
              >
            </button>
          </div>
          <!-- whatsapp -->
          <div
            class="relative bg-brown flex items-center justify-between z-10 p-5 before:absolute before:-z-10 before:border-[3px] before:border-darkish before:border-r-0 before:border-t-0 before:h-[90%] before:w-[90%] before:-bottom-4 before:-left-3 w-full"
          >
            <img src="/images/whatsapp.png" alt="whatsapp" />
            <!-- info -->

            <p class="community-name text-sm sm:text-base font-semibold">
              Whatsapp Community
            </p>
            <!-- cta -->
            <button
              class="grid place-items-center bg-primary text-lighestgrey text-sm sm:text-base font-semibold h-14 w-28 cursor-pointer"
            >
              <a href="https://chat.whatsapp.com/LIldyILqlDi2NJyoPq3vz6"
                >Join Now</a
              >
            </button>
          </div>

          <p class="text-center">Lets Network 🎉</p>
        </div>

        <!-- img -->
        <img src="/images/community.webp" alt="community" class="w-2/4" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["toggleCommunityPopUp"],
}
</script>
