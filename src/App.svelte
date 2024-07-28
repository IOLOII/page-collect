<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  // import Github from './assets/github.svg'
  import Github from '/github.svg'

  const files = __HTML_FILES__
</script>

<main class="mx-20">
  <!-- <Router {routes} /> -->
  <div
    class="flex w-full justify-center text-2xl relative m-10"
    style="
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 50px auto 25px;
      max-width: 500px;
    "
  >
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://github.com/IOLOII/page-collect" target="_blank" rel="noreferrer">
      <img src={Github} class="logo github" alt="github Logo" />
    </a>
    <span class="absolute text-sm italic text-slate-700 top-0 left-10">powered by:</span>
  </div>
  <ul
    class="min-w-fit shrink overflow-hidden hover:overflow-y-auto scroll-smooth text-wrap rounded-lg bg-transpatnet items-start flex flex-col gap-2
		"
    style="height:calc(100vh - 275px);scrollbar-gutter: stable;"
  >
    <!-- scrollbar-gutter-stable 貌似无用 -->
    {#each __HTML_FILES__ as filename}
      <li class="my-2 rounded-md hover:bg-slate-700 p-2 w-full hover:text-white">
        <a href={'./' + filename} class="text-wrap text-justify flex" target="_blank">{filename}</a>
      </li>
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
    height: 6em;
    min-height: 6rem;
    padding: 1.5rem;
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
    filter: drop-shadow(0 0 2em #f3f3f3aa);
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
