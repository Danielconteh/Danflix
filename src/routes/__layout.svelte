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

  onMount(async () => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGE_ID,
      appId: import.meta.env.VITE_APP_ID,
    }

    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      authStore.set({
        isLoggedIn: user !== null,
        user,
        firebaseControlled: true,
      })
      if ($page?.url?.pathname.split('/')[1] === 'movies') {
        if (!user) return goto('/')
      }
    })
  })
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
