<script>
  import NProgress from 'nprogress'
  import { navigating } from '$app/stores'

  // NProgress css
  import 'nprogress/nprogress.css'

  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
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

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Roboto:ital,wght@0,100;0,300;1,100&display=swap"
    rel="stylesheet"
  />
</svelte:head>

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
