<script>
  import DividerLine from './DividerLine.svelte'
</script>

<div class="container">
  <div class="text-wrapper_1">
    <div>
      <h2 class="title">Watch everywhere.</h2>
      <p>
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and
        TV.
      </p>
    </div>

    <div>&nbsp;</div>
  </div>

  <DividerLine />
</div>

<style>
  .container {
    background: #000;
    overflow: hidden;
    position: relative;
  }

  .text-wrapper_1 {
    display: flex;
    justify-content: space-around;
    padding: 7rem 4rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  .title {
    font-size: 4rem;
    letter-spacing: 0.15rem;
    width: 80%;
    text-transform: capitalize;
  }

  p {
    font-size: 1.85rem;
    letter-spacing: 0.12rem;
    width: 70%;
    line-height: 3rem;
    font-family: 'Oswald', sans-serif;
  }

  @media screen and (max-width: 50em) {
    .text-wrapper_1 {
      justify-content: center;
      align-items: center;
      padding: 2rem 0rem;
      flex-direction: column;
    }
    .title,
    p {
      margin: 0 auto;
      width: 100%;
      font-size: 1rem;
      margin-top: 1rem;
      font-weight: normal;
    }
    .title {
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: 0.12rem;
      line-height: 3rem;
    }
    p {
      font-size: 1.7rem;
      margin-top: 2rem;
      line-height: 3rem;
    }
  }

  @media screen and (max-width: 20em) {
    .title {
      width: 90%;
    }
  }
</style>
