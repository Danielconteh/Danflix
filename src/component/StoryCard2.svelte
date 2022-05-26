<script>
  import DividerLine from './DividerLine.svelte'
</script>

<!-- HTML SECTION -->

<div class="storyCard2">
  <div class="storyCard2_container">
    <div class="storyCard2_img">
      <img
        src="/mobile.jpg"
        alt=""
        width="100%"
        height="100%"
        style="object-fit: cover;"
      />
      <div class="storyCard2_img_sub">
        <img
          src="/boxshot.png"
          alt=""
          width="50px"
          style=" margin:.1rem;
          border-bottom-left-radius: 0.75em;;
          border-top-left-radius: 0.75em;;
          "
        />
        <div class="storyCard2_img_sub_container-sub">
          <div class="storyCard-text__downloading">Downloading...</div>
          <img src="/download-icon.gif" alt="downloading..." width="50px" />
        </div>
      </div>
    </div>
    <div class="storyCard2_text">
      <div class="storyCard2_text-heading">
        <div class="storyCard2_text-heading-txt">
          Download your shows to watch offline.
        </div>
      </div>

      <div class="storyCard2_text-par">
        <p>Save your favorites easily and always have something to watch.</p>
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
    overflow: hidden;
  }
  .storyCard2_container {
    padding: 7rem 4.5rem;
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 50em) {
    .storyCard2_container {
      padding: 2rem 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .storyCard2_img {
    position: relative;
  }

  .storyCard2_img_sub {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left: 0rem;
    bottom: 5%;
    right: 0rem;
    width: 25rem;
    margin: 0 auto;
    border: 2px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 2em 0 #000;
    -webkit-border-radius: 0.75em;
    -moz-border-radius: 0.75em;
    border-radius: 0.75em;
    background: #000;
  }

  @media screen and (max-width: 50em) {
    .storyCard2_img_sub {
      left: 0rem;
      bottom: 0%;
      right: 0rem;
      width: 30rem;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 31.25em) {
    .storyCard2_img_sub {
      width: 25rem;
    }
  }

  @media screen and (max-width: 20em) {
  }

  .storyCard2_img_sub_container-sub {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .storyCard-text__downloading {
    font-size: 1.7rem;
    letter-spacing: 0.1rem;
    margin-left: 1.5rem;
    font-family: 'Oswald', sans-serif;
  }
  /* \SECOND ONE */
  .storyCard2_text {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 7rem;
    line-height: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  .storyCard2_text-heading-txt {
    font-size: 4rem;
    font-weight: bold;
    width: 100%;
    margin: 0 auto;
    line-height: 5rem;
    letter-spacing: 0.15rem;
  }

  .storyCard2_text-par {
    font-size: 2rem;
    width: 80%;
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
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .storyCard2_text-par {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  @media screen and (max-width: 20em) {
    .storyCard2_text {
      padding: 1rem;
      margin-top: 2.5rem;
      letter-spacing: 0.12rem;
    }

    .storyCard2_text-par {
      font-size: 1.75rem;
      width: 90%;
    }
  }
</style>
