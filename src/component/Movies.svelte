<script>
  import axios from 'axios'
  import { useQueries } from '@sveltestack/svelte-query'
  import { browser } from '$app/env'
  import authStore, { banner } from '../store.js'
  import Banner from './movies/Banner.svelte'
  import Home from './movies/Home.svelte'
  import Icon from '@iconify/svelte'

  const key = import.meta.env.VITE_API_KEY
  const base = 'https://api.themoviedb.org/3'
  const urls = [
    `${base}/movie/popular?api_key=${key}&language=en-US&page=1`,
    `${base}/trending/all/week?api_key=${key}&language=en-US`,
    `${base}/movie/top_rated?api_key=${key}&language=en-US`,
    `${base}/discover/movie?api_key=${key}&language=en-US&with_genres=28`,
    `${base}/discover/movie?api_key=${key}&language=en-US&with_genres=35`,
    `${base}/discover/movie?api_key=${key}&language=en-US&with_genres=27`,
    `${base}/discover/movie?api_key=${key}&language=en-US&with_genres=10749`,
    `${base}/discover/movie?api_key=${key}&language=en-US&with_genres=99`,
  ]

  const userQueries = useQueries(
    urls.map((el) => {
      return {
        queryKey: [el],
        queryFn: () => axios(el, { cache: 'force-cache' }),
      }
    }),
    {
      retry: 7,
      cacheTime: 60 * 60 * 24,
      refetchOnWindowFocus: true,
    }
  )

  // export
  let base_data =
    $userQueries[0]?.data?.data?.results[
      Math.floor(
        Math.random() * $userQueries[0]?.data?.data?.results.length - 1
      )
    ]

  const banner_img_backdrop = (banner_data) =>
    ($banner = (browser && banner_data) || base_data)

  $: if (!!!$banner) {
    const random_results = Math.floor(
      Math.random() * $userQueries[0]?.data?.data?.results.length - 1
    )
    const random_query = Math.floor(Math.random() * $userQueries?.length - 1)
    $banner = $userQueries[random_query]?.data?.data?.results[random_results]
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

{#if $authStore?.isLoggedIn}
  <Banner {base_data} />
  <Home
    title="netflixOriginal"
    netflixOriginal={$userQueries[0]?.data?.data?.results}
    {banner_img_backdrop}
    isLargeRow
  />
  <Home
    title="trending now"
    netflixOriginal={$userQueries[1]?.data?.data?.results}
    {banner_img_backdrop}
  />
  <Home
    title="top rated"
    netflixOriginal={$userQueries[2]?.data?.data?.results}
    {banner_img_backdrop}
  />
  <Home
    title="action movies"
    netflixOriginal={$userQueries[3]?.data?.data?.results}
    {banner_img_backdrop}
  />
  <Home
    title="commedy movies"
    netflixOriginal={$userQueries[4]?.data?.data?.results}
    {banner_img_backdrop}
  />
  <Home
    title="horror movies"
    netflixOriginal={$userQueries[5]?.data?.data?.results}
    {banner_img_backdrop}
  />
  <Home
    title="romance movies"
    netflixOriginal={$userQueries[6]?.data?.data?.results}
    {banner_img_backdrop}
  />
  <Home
    title="documentaries movies"
    netflixOriginal={$userQueries[7]?.data?.data?.results}
    {banner_img_backdrop}
  />
{:else}
  <div class="spiiner_container">
    <div class="spiner">
      <Icon icon="ei:spinner" width="70" height="70" />
    </div>
  </div>
{/if}

<style>
  .spiiner_container {
    overflow: hidden !important;
  }
  .spiner {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spinner 700ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
    height: 100vh;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
