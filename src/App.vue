<template>
  <!-- start: main page -->
  <main class="prose prose-lg py-16 text-justify
    max-w-3xl mx-auto text-gray-800"
  >
    <article>
      <h1>Welcome to Tetikus Playground!</h1>
      <h3>A custom cursor component for Vue 3 👀</h3>
      <p>
        So uh... What is this you ask? It's a playground for
        Tetikus, a custom cursor component for Vue 3 made by Namchee.
        Nah, it won't work with Vue 2 even if you forced to install it.
        Yeah, you have been warned ⚠️
      </p>
      <p>
        Currently, this playground consist of barebone state transition test
        for Tetikus. Fortunately, it's also useful for demo purposes.
      </p>
    </article>

    <hr />

    <article>
      <p>
        Noticed why your usual boring cursor is gone and the weird circle
        thingy that acts like your usual cursor? Don't worry, your browser
        is fine! It's just Tetikus in action!
      </p>
      <p>
        If you hover over this paragraph, you'll see that the circle is now
        magically smaller ✨. It's not a bug, it's a feature! Tetikus
        can respond to any hover events and customize the custom cursor element!
      </p>
      <div class="p-12 rounded bg-gray-900 text-white">
        <p>
          You can also hover over me and see that Tetikus can adapt to your
          background color and produce beautiful contrast 👀. This is achieved
          with a powerful CSS property called
          <var class="font-mono bg-gray-700 text-red-500 rounded">
            `mix-blend-mode`
          </var>
        </p>
      </div>
      <p>
        Now, try clicking on these cool buttons below ⬇️️
      </p>
      <div class="flex mt-8 mb-16 justify-start">
        <button class="bg-indigo-700 py-2 px-4 mr-4 text-sm
          font-medium leading-5 rounded-md text-white shadow
          border border-transparent
          hover:bg-indigo-600 focus:outline-none
          focus:border-indigo-700 focus:shadow-outline-indigo
          active:bg-indigo-800 transition ease-in-out duration-200">
          Cool Button Bro
        </button>
        <button class="bg-red-700 py-2 px-4 mx-4 text-sm
          font-medium leading-5 rounded-md text-white shadow
          border border-transparent
          hover:bg-red-600 focus:outline-none
          focus:border-red-700 focus:shadow-outline-red
          active:bg-red-800 transition ease-in-out duration-200">
          Cool Button Bro
        </button>
        <button class="bg-blue-700 py-2 px-4 ml-4 text-sm
          font-medium leading-5 rounded-md text-white shadow
          border border-transparent
          hover:bg-blue-600 focus:outline-none
          focus:border-blue-700 focus:shadow-outline-blue
          active:bg-blue-800 transition ease-in-out duration-200">
          Cool Button Bro
        </button>
      </div>
      <p>
        Say 'Wut'? The circle has multiple style changes! Tetikus can also
        alter the cursor styles on click events! All of these features
        are accomplished with pure JS and CSS without any external
        dependencies!
      </p>
    </article>

    <article>
      <p>Awesome right? Now head over to
        <a target="_blank" href="https://github.com/Namchee/tetikus" rel="noreferrer">
          the main repository
        </a>
        to grab your Tetikus copy and start using it in your favorite
        Vue app. Happy developing!
      </p>
    </article>

    <hr />

    <section>
      <p>
        This project is made by
        <a target="_blank" href="https://namchee.netlify.app" rel="noreferrer">
          Namchee
        </a>
        in 2020. Pls ignore his usual nonsense and biased rants.
      </p>
    </section>

    <tetikus />
  </main>
  <!-- end: main page -->
</template>

<script>
export default {
  name: 'App',
};
</script>
