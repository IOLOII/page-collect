<script lang="ts">
  import svelteLogo from '/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  // import Github from './assets/github.svg'
  import Github from '/github.svg'

  const files = __HTML_FILES__
</script>

<main class="w-full md:w-auto flex flex-col items-center justify-start">
  <!-- <Router {routes} /> -->
  <div
    class="flex w-full justify-around text-2xl relative xl:w-1/2 md:w-2/3 text-center mx-10 my-5"
    style="
      display: flex;
      align-items: center;
      flex-direction: row;
      text-align: center;
    "
  >
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo aspect-square" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo aspect-square svelte" alt="Svelte Logo" />
    </a>
    <a href="https://github.com/IOLOII/page-collect" target="_blank" rel="noreferrer">
      <img src={Github} class="logo aspect-square github" alt="github Logo" />
    </a>
    <span class="absolute text-sm italic text-slate-700 top-5 left-0">powered:</span>
  </div>
  <ul
    class="min-w-fit shrink md:overflow-hidden hover:overflow-y-auto scroll-smooth text-wrap rounded-lg bg-transpatnet items-start flex flex-col gap-2 w-full md:w-full sm:p-4 md:p-10 p-2 overflow-y-auto
		"
    style="height:calc(100vh - 275px);scrollbar-gutter: stable;"
  >
    <!-- scrollbar-gutter-stable 貌似无用 -->
    {#each __HTML_FILES__ as filename}
      <li
        class="my-2 rounded-md bg-slate-100 dark:bg-slate-700 p-4 w-full hover:text-red-600 dark:md:hover:bg-slate-700 dark:hover:text-white"
      >
        <a href={'./' + filename} class="text-wrap text-justify flex" target="_blank">{filename}</a>
      </li>
      <!-- hover:bg-slate-700 -->
    {/each}
  </ul>
</main>

<footer>
  <p>visit <a href="https://github.com/IOLOII/">IOLOII</a> on GitHub</p>
</footer>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .logo {
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.github:hover {
    /* filter: drop-shadow(0 0 2em #353535); */
    filter: drop-shadow(0 0 2em #3b82f6);
  }
  @media (prefers-color-scheme: dark) {
    .logo.github:hover {
      filter: drop-shadow(0 0 2em #f3f3f3aa);
    }
  }
  .read-the-docs {
    color: #888;
  }
  a {
    color: #646cff;
  }
  li:hover > a {
    color: inherit;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
