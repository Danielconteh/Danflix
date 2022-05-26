<script>
  import { dataset_dev } from 'svelte/internal'
</script>

<footer>
  <div class="created">created by Daniel conteh</div>
  <div class="copy">Copyright © {new Date().getFullYear()}</div>
  <div class="build">built with sveltkit <a href="/">danico.com</a></div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 1rem;
    font-size: 1.85rem;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
  .created,
  .copy,
  .build {
    margin: 1rem 0rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    line-height: 2.7rem;
  }

  a {
    text-decoration: none;
    color: #555;
  }

  @media screen and (max-width: 50em) {
    footer {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 20em) {
    footer {
      font-size: 1.35rem;
    }
  }
</style>
