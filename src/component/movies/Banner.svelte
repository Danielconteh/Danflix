<script>
  import { browser } from '$app/env'
  import { banner } from '../../store'
  import Header from './Header.svelte'
  import { fade } from 'svelte/transition'

  // @ts-nocheck

  export let base_data
  let data
  let ani = false

  banner.subscribe((val) => {
    data = val
    ani = !ani
  })

  let truncate = (str, n) =>
    str?.length > n ? str?.substr(0, n - 1) + '...' : str || null
</script>

<!-- ,  
url("https://image.tmdb.org/t/p/original/${
      base_data?.backdrop_paths || data?.backdrop_path
    }"); -->

{#key data}
  <header
    class="banner"
    style="
    background: linear-gradient(0deg, rgba(1, 1, 1, 0.25), rgba(1, 1, 1, 0.25)),url('https://image.tmdb.org/t/p/original{base_data?.backdrop_paths ||
      data?.backdrop_path ||
      base_data?.poster_path ||
      data?.poster_path ||
      '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg'}');
    background-size:cover;
    background-position:center;
  "
  >
    <Header />
    <!-- NAVBAR COMPONENT -->

    <div class="banner__contents">
      <h1 in:fade class="banner__title">
        {data
          ? data?.title || data?.name || data?.original_name
          : base_data?.title ||
            base_data?.name ||
            base_data?.original_name ||
            ''}
      </h1>

      <div in:fade class="banner__buttons">
        <button in:fade class="banner__button">play</button>
        <button in:fade class="banner__button">my list</button>

        <h1 in:fade class="banner__description">
          {truncate(
            data ? browser && data?.overview : base_data?.overview,
            150
          ) || ''}
        </h1>
      </div>
    </div>
    <div in:fade class="banner--fadeBottom" />
  </header>
{/key}

<style>
  .banner {
    color: #fff;
    object-fit: contain;
    height: 85vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden !important;
    background-position: center;
    background-size: cover;
    font-family: 'Roboto', sans-serif;
  }

  @media screen and (max-width: 50em) {
    .banner {
      height: 60vh;
    }
  }

  .banner__contents {
    margin-left: 1rem;
  }

  @media screen and (max-width: 50em) {
    .banner__contents {
      margin-top: 3rem;
    }
  }

  @media screen and (max-width: 31.25em) {
    .banner__contents {
      margin-top: 5rem;
    }
  }
  .banner__title {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 0.3rem;
    letter-spacing: 0.2rem;
  }
  @media screen and (max-width: 50em) {
    .banner__title {
      font-size: 1.85rem;
      padding: 0.5rem 0.3rem;
      letter-spacing: 0.1rem;
      margin-top: 1rem;
      width: 90%;
    }
  }

  .banner__description {
    width: 45rem;
    line-height: 1.7;
    font-size: 1.7rem;
    padding: 1rem;
    max-width: 50rem;
    height: 8rem;
    letter-spacing: 0.165rem;
  }
  @media screen and (max-width: 50em) {
    .banner__description {
      font-size: 1.3rem;
      padding: 1rem;
      max-width: 30rem;
      line-height: 1.6;
    }
  }

  /* BUTTON */

  .banner__button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.3vw;
    margin-right: 1rem;
    padding: 0.7rem 2rem;
    background-color: rgba(51, 51, 51, 0.5);
    appearance: none;
    text-transform: capitalize;
  }

  .banner__button:hover {
    color: #000;
    border-radius: 0.3vw;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }

  .banner--fadeBottom {
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    right: 0;
    height: 12.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }
</style>
