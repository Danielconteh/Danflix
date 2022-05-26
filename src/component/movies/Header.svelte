<script>
  import { goto } from '$app/navigation'

  // @ts-nocheck

  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  let background_show = false

  onMount(() => {
    const scroll_transition = () => {
      if (window.scrollY > 10) return (background_show = true)
      return (background_show = false)
    }

    window.addEventListener('scroll', scroll_transition)

    return () => {
      window.removeEventListener('scroll', scroll_transition)
    }
  })
</script>

<div class={`nav ${background_show && 'nav_background'}`}>
  <span class="nav_log" on:click={() => goto('/')}>
    <Icon icon="logos:netflix" width="100" />
  </span>
  <div class="logout">
    <img src="/netflix_avater.png" alt="netflix_avater.png" srcset="" />
  </div>
</div>

<style>
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 2rem;
    transition: ease-in all 0.5s;
    overflow: hidden;
    z-index: 1;
  }
  .nav_background {
    background-color: #111;
  }
  .nav_log,
  img {
    width: 8rem;
    object-fit: contain;
    position: fixed;
    cursor: pointer;
  }
  .logout {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 4rem;
    font-size: 1.7rem;
    right: 0;
    display: block;
    padding: 1rem 1.4rem;
    border-radius: 3px;
    margin-right: 3rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
  }
</style>
