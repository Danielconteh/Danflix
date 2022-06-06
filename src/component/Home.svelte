<script>
  import StoryCard1 from './StoryCard1.svelte'

  import StoryCard2 from './StoryCard2.svelte'
  import StoryCard3 from './storyCard3.svelte'
  import StoryCard4 from './storyCard4.svelte'
  import StoryCard5 from './storyCard5.svelte'

  import DividerLine from './DividerLine.svelte'
  import authStore from '../store'

  import { goto } from '$app/navigation'

  async function logout() {
    if (firebase) {
      try {
        await firebase.auth().signOut()
      } catch (e) {
        alert(e?.message)
      }
    }
  }
</script>

<header>
  <div class="banner_wrapper">
    <div class="banner_hearder">
      <!-- <img src="netflix_log.jpg" alt="logo" width="200"> -->
      <svg
        viewBox="0 0 111 30"
        class="svg-icon svg-icon-netflix-logo"
        focusable="false"
        ><g id="netflix-logo"
          ><path
            d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
            id="Fill-14"
          /></g
        ></svg
      >

      {#if !$authStore?.isLoggedIn}
        <!-- <a href="/login">sign in</a> -->
        <span
          on:click={() => {
            console.log('login')
            goto('/login')
          }}>sign in</span
        >
      {:else}
        <span on:click={logout}>logout</span>
      {/if}
    </div>

    <div class="story_card">
      <div class="story_card__text">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>enjoy the best hollywood, nollywood, bollywood and much more.</p>
      </div>

      <span
        on:click={!$authStore?.isLoggedIn ? goto('/login') : goto('/movies')}
      >
        {#if !$authStore?.isLoggedIn}
          <span> sign in to continue</span>
        {:else}
          <span>continue watch</span>
        {/if}
      </span>
    </div>
  </div>
  <DividerLine />
</header>

<StoryCard1 />
<StoryCard2 />
<StoryCard3 />
<StoryCard4 />
<StoryCard5 />

<style>
  header {
    height: 95vh;
    position: relative;
  }

  @media screen and (max-width: 50em) {
    header {
      height: 70vh;
    }
  }
  @media screen and (max-width: 20em) {
    header {
      height: 80vh;
    }
  }

  .banner_wrapper {
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5) 0,
        rgba(0, 0, 0, 0.5) 40%,
        rgba(0, 0, 0, 0.5) 75%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url('/Netflix-Background.jpg');
    background-position: center center;
    background-size: cover;
    height: 100%;
    width: 100vw;
    /* box-shadow: inset 120px 100px 250px #000000,
      inset -120px -100px 250px #000000; */
  }
  .banner_hearder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0rem;
    font-family: Roboto;
  }
  .banner_hearder span {
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
    font-size: 1.35rem;
    background-color: #e50914;
    padding: 0.7rem 1.35rem;
    border-radius: 0.3rem;
    font-weight: 400;
    margin-right: 5rem;
    cursor: pointer;
    letter-spacing: 0.19rem;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }
  .svg-icon {
    width: 15.67rem;
    fill: red;
    margin-left: 3rem;
    padding-top: 1rem;
  }

  .story_card {
    margin-top: -5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.65rem;
    letter-spacing: 0.12rem;
    font-weight: normal;
    font-family: Oswald;
  }
  .story_card__text {
    max-width: 80rem;
    text-align: center;
  }
  .story_card__text h1 {
    font-size: 4rem;
    text-align: center;
    padding: 0rem 1rem;
    font-family: Roboto;
  }
  .story_card__text p {
    text-transform: capitalize;
  }
  @media screen and (max-width: 50em) {
    .banner_hearder span {
      margin-right: 2rem;
    }
    .svg-icon {
      width: 7rem;
      margin-left: 1rem;
    }
    .story_card__text h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .story_card__text h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .story_card span {
      font-size: 1.2rem;
    }
    .story_card__text p {
      line-height: 3rem;
      padding: 0.7rem 1.2rem;
    }
  }

  @media screen and (max-width: 20em) {
    /* 320px */
    .story_card__text h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .story_card__text h2 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    .story_card span {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
    .story_card__text p {
      line-height: 3rem;
      padding: 0.5rem 1rem;
      font-size: 1.7rem;
    }

    .banner_hearder span {
      padding: 0.5rem 1rem;
      margin-right: 1rem;
    }
  }
  .story_card span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #e50914;
    font-size: 1.7rem;
    padding: 0.7rem 1.2rem;
    border-radius: 0.2rem;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    color: #fff;
    cursor: pointer;
  }
  .story_card button span {
    display: block;
    text-transform: capitalize;
  }
</style>
