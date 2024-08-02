<script lang="ts">
  import svelteLogo from '/svelte.svg'
  import viteLogo from '/vite.svg'
  import avator from '/34856171.jpeg'
  // import Counter from './lib/Counter.svelte'
  // import Github from './assets/github.svg'
  import Github from '/github.svg'

  const files = __HTML_FILES__
</script>

<main class="w-full h-dvh md:w-auto flex flex-col items-center justify-start md:h-full md:px-5">
  <!-- <Router {routes} /> -->
  <div
    class="flex w-full justify-around md:justify-between items-center text-2xl relative text-center mx-10 my-2 px-0 md:p-5"
    style="
      display: flex;
      align-items: center;
      flex-direction: row;
    "
  >
    <!-- <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo aspect-square" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo aspect-square svelte" alt="Svelte Logo" />
    </a>
    <a href="https://github.com/IOLOII/page-collect" target="_blank" rel="noreferrer">
      <img src={Github} class="logo aspect-square github" alt="github Logo" />
    </a> -->
    <div class="text-2xl md:text-4xl">Page Collect</div>

    <div class="flex -space-x-0 items-center">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo aspect-square" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo aspect-square svelte" alt="Svelte Logo" />
      </a>
      <a href="https://github.com/IOLOII/page-collect" target="_blank" rel="noreferrer">
        <img src={Github} class="logo aspect-square github" alt="github Logo" />
      </a>
      <a href="https://github.com/IOLOII" target="_blank" rel="noreferrer">
        <img src={avator} class="inline-block h-12 w-12 rounded-full ring-2 mx-4 aspect-square" alt="github user avator" />
      </a>
    </div>
    <!-- <span class="absolute text-sm italic text-slate-700 top-[-20px] left-4 dark:text-[#dc2626]">powered:</span> -->
  </div>
  <!-- <div class="text-sm md:text-m color-slate-100 dark:color-slate-700 text-left relative left-0 top-0">日常随手收录不错的文章或解决方案</div> -->

  <ul
    class="min-w-fit shrink overflow-y-auto md:overflow-hidden hover:overflow-y-auto scroll-smooth text-wrap rounded-lg bg-transpatnet items-start flex flex-col gap-2 w-full md:w-full p-2 sm:p-4 md:p-0 h-[calc(100dvh-45px-42px-10px)] md:h-[calc(100dvh-45px-77px-30px)]
		"
    style="scrollbar-gutter: stable;"
  >
    <!-- scrollbar-gutter-stable 貌似无用 -->
    {#each __HTML_FILES__ as filename}
      <li
        class="my-2 rounded-md bg-slate-100 dark:bg-slate-700 p-4 w-full hover:text-red-600 dark:md:hover:bg-slate-700 dark:hover:text-white cursor-pointer"
      >
        <a href={'./' + filename} class="text-wrap text-justify flex" target="_blank">{filename}</a>
      </li>
      <!-- hover:bg-slate-700 -->
    {/each}
  </ul>

  <footer
    class="flex w-full justify-center items-center text-[#171717] dark:text-white bg-slate-200 dark:bg-black p- text-center absolute bottom-0"
  >
    <p class="text-inherit">visit <a href="https://github.com/IOLOII/" target="_blank">IOLOII</a> on GitHub</p>
  </footer>
</main>

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
