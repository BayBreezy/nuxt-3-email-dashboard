<template>
  <NuxtScrollbar
    tag="aside"
    class="fixed h-screen hidden md:block md:w-72 border-r border-gray-700 bg-zinc-900 shrink-0">
    <!-- Links -->
    <nav class="flex flex-col gap-2 px-4 mt-10">
      <NuxtLink
        class="flex group items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-primary-50 hover:bg-primary transition"
        :to="ml.link"
        v-for="ml in mainLinks">
        <div class="flex items-center gap-3">
          <Icon :name="ml.icon" size="18" />
          <span class="text-sm">{{ ml.title }}</span>
        </div>
        <span
          v-if="ml.count"
          class="ml-auto text-xs opacity-70 group-hover:opacity-100"
          >{{ ml.count }}</span
        >
      </NuxtLink>
    </nav>

    <!-- Divider -->
    <Divider class="mt-10" />

    <!-- Labels -->
    <div class="px-4 my-10">
      <button @click="showLabels = !showLabels" class="flex items-center gap-3 w-full">
        <Icon
          :class="[showLabels ? 'transform rotate-180' : '']"
          class="transition duration-300"
          name="solar:alt-arrow-down-bold-duotone"
          size="18" />
        <span class="text-sm">Labels</span>
      </button>
      <Transition name="labels">
        <nav v-if="showLabels" class="flex flex-col gap-1 mt-5">
          <NuxtLink
            to="#"
            v-for="l in labels"
            :key="l.title"
            class="flex items-center justify-between rounded-lg p-2 hover:bg-zinc-700 transition">
            <div class="flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full" :class="[l.color]"></span>
              <span class="text-sm">{{ l.title }}</span>
            </div>

            <span
              v-if="l.count"
              class="ml-auto text-xs opacity-70 group-hover:opacity-100"
              >{{ l.count }}</span
            >
          </NuxtLink>
        </nav>
      </Transition>
    </div>
  </NuxtScrollbar>
</template>

<script setup lang="ts">
  // Sidebar main links
  const mainLinks = [
    { title: "Inbox", icon: "solar:inbox-bold-duotone", link: "#", count: 518 },
    { title: "Starred", icon: "solar:star-bold-duotone", link: "#", count: 10 },
    { title: "Sent", icon: "solar:plain-bold-duotone", link: "#", count: 213 },
    { title: "Draft", icon: "solar:file-bold-duotone", link: "#", count: 16 },
    { title: "Attachment", icon: "solar:paperclip-bold-duotone", link: "#", count: 105 },
    { title: "Spam", icon: "solar:shield-warning-bold-duotone", link: "#" },
    {
      title: "Deleted",
      icon: "solar:trash-bin-minimalistic-bold-duotone",
      link: "#",
      count: 55,
    },
    { title: "Archived", icon: "solar:archive-bold-duotone", link: "#", count: 518 },
  ];

  // Sidebar labels
  const labels = [
    { title: "Work", color: "bg-primary", count: 15 },
    { title: "Personal", color: "bg-amber-500", count: 5 },
    { title: "Important", color: "bg-red-600", count: 2 },
    { title: "Urgent", color: "bg-red-500" },
    { title: "To Do", color: "bg-yellow-500", count: 45 },
    { title: "Later", color: "bg-green-500", count: 65 },
  ];

  // show labels
  const showLabels = ref(true);
</script>
