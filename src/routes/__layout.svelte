<script>
  import NProgress from 'nprogress'
  import { navigating } from '$app/stores'
  import firebase from 'firebase'
  import 'firebase/auth'
  import { onMount } from 'svelte'
  import authStore from '../store.js'

  // NProgress css
  import 'nprogress/nprogress.css'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

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

  onMount(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDTR5SBMKmDAzLcI_6SjkBAbCoSkF2zNGA',
      authDomain: 'danflix-4b096.firebaseapp.com',
      projectId: 'danflix-4b096',
      storageBucket: 'danflix-4b096.appspot.com',
      messagingSenderId: '139233559084',
      appId: '1:139233559084:web:3d459a5c69409c08f8c789',
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
