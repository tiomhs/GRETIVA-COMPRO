<template>
  <nav class="navbar bg-transparent shadow-sm max-w-7xl mx-auto text-black px-4 shadow-md border mt-4 rounded-full">
    
    <!-- Left Section -->
    <div class="navbar-start">
      <!-- Mobile Menu -->
      <div class="dropdown">
        <button
          tabindex="0"
          class="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 shadow rounded-box w-52 mt-3 z-[1]"
        >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      <!-- Brand -->
      <a class="btn btn-ghost text-xl font-bold">Gretiva</a>
    </div>

    <!-- Center Menu (Desktop) -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal gap-2">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>

    <!-- Right Section -->
    <div class="navbar-end">
      <a href="#" class="text-orange-800 bg-orange-200 text-lg p-2 rounded-full mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
      </a>
      <a href="#" class="text-orange-800 bg-orange-200 text-lg p-2 rounded-full mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <button class="btn btn-base bg-orange-500 text-sm text-white p-6 rounded-full">Get in Touch</button>
    </div>

  </nav>
</template>

<script setup></script>
