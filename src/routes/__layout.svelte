<script>
  import NProgress from 'nprogress'
  import { navigating } from '$app/stores'

  import { onMount } from 'svelte'
  import authStore from '../store.js'

  // NProgress css
  import 'nprogress/nprogress.css'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
  })

  $: {
    if ($navigating) {
      NProgress.start()
    }
    if (!$navigating) {
      NProgress.done()
    }
  }
</script>

<slot />

<style>
  :global(html) {
    font-size: 62.5%;
    box-sizing: inherit;
  }

  :global(body) {
    background-color: #111;
    color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
</style>
