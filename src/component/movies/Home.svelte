<script>
  // @ts-nocheck
  import Image from 'svelte-image'
  import { browser } from '$app/env'

  // @ts-ignore
  import YouTube from 'svelte-youtube'

  export let netflixOriginal, title, banner_img_backdrop, isLargeRow

  let movie = []
  $: if (netflixOriginal) movie = [...netflixOriginal]

  let trailer_url = ''
  // "WgU7P6o-GkM"
  let target = null

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  const video_name = async (movie_name) => {
    console.log(movie_name)
    try {
      let addr = new URL(await movieTrailer(movie_name))
      trailer_url = addr.href.split('=')[1]
    } catch (err) {
      return err && alert('No trailers found for that movie name')
    }
  }

  let options = { height: '390', width: '100%', playerVars: { autoplay: 1 } }

  const close_player = () => {
    trailer_url = ''

    target && target.classList.remove('active')
  }

  let targetFun = (arg) => {
    // console.log(arg?.parentElement.parentElement.parentElement)
    Array.from(arg?.parentElement?.children).forEach((el) =>
      el.classList.remove('active')
    )
    arg.classList.add('active')
    target = arg
  }
</script>

<svelte:head>
  <script
    defer
    type="text/javascript"
    src="https://unpkg.com/movie-trailer"></script>
</svelte:head>

<div
  class="row"
  style={isLargeRow ? ' margin-bottom: 3rem;' : ' margin-bottom: -7rem;'}
>
  <h2 class="row__title">{title.toUpperCase()}</h2>

  <div class={`row__posters`}>
    <div style="display: flex;">
      {#each movie as movie (movie.id)}
        <span
          style={`display: inline-block; margin-right: 1.5rem; overflow: scroll hidden;
    scrollbar-width: none; width:${
      isLargeRow ? `150px` : `175px`
    };   cursor: pointer;`}
          on:click={(e) => {
            console.log(e.target)
            targetFun(e?.target)
            video_name(movie?.name || movie?.title || movie?.name || '')
          }}
          on:mouseenter={{ $: banner_img_backdrop(browser && movie) }}
        >
          <Image
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name || movie?.original_title || ''}
          />
        </span>
      {/each}
    </div>
  </div>

  {#if trailer_url}
    <YouTube videoId={trailer_url} {options} on:end={close_player} />
  {/if}
</div>

<!-- CSS STYLING........... font-family: 'Oswald', sans-serif;-->
<style>
  .row {
    margin-left: 1.5rem;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.3rem;
  }

  .row__posters {
    display: flex;
    overflow: scroll;
    scrollbar-width: none;
    padding: 1rem 0.5rem;
  }

  .row__posters::-webkit-scrollbar {
    display: none;
  }

  /* .row__poster {
    object-fit: contain;
    max-height: 12rem;
    margin-right: 1.5rem;
    transition: transform 500ms;
    cursor: pointer;
  } */
  .row__poster:hover {
    transform: scale(1.05);
    outline: 1px solid gray;
    outline-offset: 3px;
  }
  .active {
    transform: scale(1.05);
    outline: 1px solid gray;
    outline-offset: 3px;
  }

  .row__posterLarge {
    max-height: 25rem;
  }
</style>
