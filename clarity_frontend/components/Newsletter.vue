<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div
    class="mx-auto max-w-7xl py-8 px-6 lg:flex lg:items-center lg:py-16 lg:px-8 border-t"
  >
    <div class="lg:w-0 lg:flex-1">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Sign up for our newsletter
      </h2>
      <p class="mt-3 max-w-3xl text-lg text-gray-500">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat
        commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </p>
    </div>
    <div class="mt-8 lg:mt-0 lg:ml-8">
      <form class="sm:flex">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          autocomplete="email"
          required="true"
          class="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:max-w-xs"
          placeholder="Enter your email"
        />
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-800 py-3 px-5 text-base font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Notify me
          </button>
        </div>
      </form>
      <p class="mt-3 text-sm text-gray-500">
        We care about the protection of your data. Read our
        {{ " " }}
        <a href="#" class="font-medium underline">Privacy Policy.</a>
      </p>
    </div>
  </div>
</template>
