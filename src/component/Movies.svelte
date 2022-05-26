<script>
  import axios from 'axios'
  import { useQueries } from '@sveltestack/svelte-query'
  import { browser } from '$app/env'
  import { banner } from '../store'
  import Banner from './movies/Banner.svelte'
  import Home from './movies/Home.svelte'

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
        queryFn: () => axios.get(el),
      }
    }),
    {
      retry: 10,
    }
  )

  export let base_data =
    $userQueries[0]?.data?.data?.results[
      Math.floor(
        Math.random() * $userQueries[0]?.data?.data?.results.length - 1
      )
    ]

  const banner_img_backdrop = (banner_data) =>
    ($banner = (browser && banner_data) || base_data)

  $: if (!$banner) {
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

<Banner {base_data} />

<!-- {#if error}
  <div class="error">
    <p>something went wrong!</p>

    <a href="/">please try again</a>
  </div>
{:else} -->
<!-- MOVIES COMPONENT -->

<!-- svelte-ignore component-name-lowercase -->
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
<!-- {/if} -->
