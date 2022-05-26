<script>
  import DividerLine from './DividerLine.svelte'
</script>

<!-- HTML SECTION -->

<div class="storyCard2">
  <div class="storyCard2_container">
    <div class="storyCard2_img">
      <img
        src="/cartoon.png"
        alt=""
        width="100%"
        height="100%"
        style="object-fit: cover;"
      />
    </div>
    <div class="storyCard2_text">
      <div class="storyCard2_text-heading">
        <div class="storyCard2_text-heading-txt">Create profiles for kids.</div>
      </div>

      <div class="storyCard2_text-par">
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </div>
  </div>

  <DividerLine />
</div>

<style>
  .storyCard2 {
    background: #000;
    overflow: hidden;
    position: relative;
  }
  .storyCard2_container {
    padding: 7rem 4.5rem;
    display: flex;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 50em) {
    .storyCard2_container {
      padding: 4rem 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .storyCard2_img {
    position: relative;
  }

  /* \SECOND ONE */
  .storyCard2_text {
    text-align: center;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding-right: 7rem;
  }

  .storyCard2_text-heading-txt {
    font-size: 4rem;
    font-weight: bold;
    width: 90%;
    margin: 0 auto;
    line-height: 5rem;
    font-family: 'Roboto', sans-serif;
  }

  .storyCard2_text-par {
    font-size: 2rem;
    width: 90%;
    margin: 0 auto;
    line-height: 3rem;
    font-family: 'Oswald', sans-serif;
  }

  @media screen and (max-width: 50em) {
    .storyCard2_text {
      padding: 2rem;
      margin-top: 2.5rem;
    }

    .storyCard2_text-heading-txt {
      font-size: 2.25rem;
      margin-bottom: 0.5rem;
      width: 90%;
      letter-spacing: 0.15rem;
    }

    .storyCard2_text-par {
      font-size: 2rem;
      width: 85%;
      line-height: 3rem;
    }
  }

  @media screen and (max-width: 20em) {
    .storyCard2_text {
      padding: 1rem;
    }

    .storyCard2_text-heading-txt {
      font-size: 2rem;
      width: 100%;
    }
    .storyCard2_text-par {
      font-size: 1.7rem;
      width: 95%;
    }
  }
</style>
