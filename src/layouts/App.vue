<template>
  <div>
    <nav class="p-4 flex gap-6 bg-black text-white">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
