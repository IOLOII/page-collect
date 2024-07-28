import Home from './views/Home.svelte'
import About from './views/About.svelte'
import { wrap } from 'svelte-spa-router/wrap'
import type { RouteDefinition } from 'svelte-spa-router'


// const files = __HTML_FILES__ || []
// let routes = files.map((filePath, index) => {
//   // routes[`/${index}`] =
//   return wrap({
//     asyncComponent: () => import(`../${encodeURIComponent(filePath.split(".html")[0])}`)
//   })
// })



const routes = {
  '/': Home,
  '/home': Home,
  '/about/*': About,
}



console.log(routes)



export default routes
