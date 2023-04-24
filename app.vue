<template>
  <div class="flex">
    <!-- Side bar -->
    <Sidebar />
    <!-- Message list area -->
    <InboxMessage :class="[msgOpen && isMobileOrTablet ? 'hidden' : '']" />

    <!-- Message details -->
    <div
      v-if="msgOpen"
      class="h-screen relative md:w-full w-screen transition border-l border-zinc-800">
      <!-- Heading of details -->
      <InboxDetailsHeading />
      <div class="px-10 py-7 border-b border-zinc-800">
        <!-- Sender details -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-3">
          <div class="flex items-center gap-5">
            <img
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              alt="User"
              class="object-cover rounded-full w-10 h-10 ring-1 ring-zinc-700/10" />
            <div>
              <p class="text-sm -mb-1">John Doe</p>
              <a class="text-xs text-zinc-500" href="mailto:johnathandoe@gmail.com"
                >johnathandoe@gmail.com</a
              >
            </div>
          </div>
          <div>
            <span class="text-xs text-zinc-500 font-medium"
              >Today, 10:17 PM (2hr ago)</span
            >
          </div>
        </div>
        <!-- Message body -->
        <h2 class="mt-10 font-medium">Interview - Plato Agency</h2>
        <div class="text-zinc-400 text-sm mt-5 space-y-3">
          <p>Hello John, we hope you are doing well!</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsa
            repellendus dolores, iure quisquam a, autem cupiditate hic accusantium
            ratione, enim mollitia iste amet error obcaecati rerum. In, sed corporis?
          </p>
        </div>

        <div class="flex items-center justify-between text-sm text-zinc-200 mt-10">
          <p>Plato Agency HR</p>
          <a href="#" class="underline underline-offset-2">platowork.com</a>
        </div>
      </div>

      <!-- Fixed bottom bar -->
      <div
        class="absolute bottom-0 left-0 w-full bg-zinc-900/50 px-7 h-12 flex items-center justify-between">
        <div class="flex items-center gap-5">
          <button class="text-sm flex items-center gap-2">
            <Icon size="20" name="solar:reply-bold-duotone" /> <span>Reply</span>
          </button>
          <button class="text-sm flex items-center gap-2">
            <Icon size="20" name="solar:forward-bold-duotone" /> <span>Forward</span>
          </button>
        </div>
        <button class="text-sm text-amber-400 flex items-center gap-2">
          <Icon size="22" name="solar:stars-bold-duotone" />
          <span class="sr-only">Favorite</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "bg-zinc-950 text-zinc-50 min-h-screen",
    },
  });

  const { isMobileOrTablet } = useDevice();

  // state of selected message
  const msgOpen = useState("msgOpen", () => false);
</script>
