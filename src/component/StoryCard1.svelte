<script>
  import DividerLine from './DividerLine.svelte'
</script>

<div class="storyCard1">
  <div class="storyCard1__card-container">
    <!-- item 1 -->
    <div class="storyCard1__card-text">
      <h1>Enjoy on your TV.</h1>
      <h2>
        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
        players, and more.
      </h2>
    </div>

    <!-- item 2 -->

    <div class="storyCard1-img-Container">
      <div class="storyCard1-animation-Container">
        <img alt="" src="/tv.png" />

        <div class="storyCard1-animation">
          <video
            class="storyCard1-animation-video"
            autoplay
            muted
            loop
            playsinline
          >
            <source src="video.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>

  <DividerLine />
</div>

<style>
  .storyCard1 {
    background: #000;
    overflow: hidden;
    position: relative;
  }
  .storyCard1__card-container {
    padding: 7rem 4.5rem;
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 50em) {
    .storyCard1__card-container {
      padding: 2rem 0rem;
      display: flex;
      flex-direction: column;
    }
  }

  .storyCard1-img-Container {
    position: relative;
  }

  .storyCard1__card-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: 'Oswald', sans-serif;
  }

  .storyCard1__card-text h1 {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    font-family: 'Roboto', sans-serif;
  }
  .storyCard1__card-text h2 {
    font-size: 1.625rem;
    font-weight: 400;
    width: 70%;
    margin: 0 auto;
    line-height: 3rem;
  }

  @media screen and (max-width: 50em) {
    /*800px*/
    .storyCard1__card-text h1 {
      font-size: 2.5rem;
      margin-bottom: 1.2rem;
    }

    .storyCard1__card-text h2 {
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
      letter-spacing: 0.2rem;
      line-height: 3.5rem;
      width: 85%;
    }
  }

  @media screen and (max-width: 20em) {
    .storyCard1__card-text h1 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
      width: 90%;
    }

    .storyCard1__card-text h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      letter-spacing: 0.2rem;
      line-height: 3rem;
      width: 90%;
    }
  }

  /* animation part */
  .storyCard1-animation-Container {
    position: relative;
    overflow: hidden;
  }
  .storyCard1-animation-Container img {
    width: 100%;
    height: auto;
    position: relative;
  }
  .storyCard1-animation {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 73%;
    max-height: 54%;
    top: 48%;
    left: 49.5%;
    transform: translate(-50%, -50%);
  }

  .storyCard1-animation-video {
    width: 100%;
    height: 100%;
  }
</style>
