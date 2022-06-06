<script>
  import { browser } from '$app/env'
  import Icon from '@iconify/svelte'

  async function loginWithGoogle() {
    if (firebase) {
      try {
        console.log('first')
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithPopup(provider)
        browser && window.location.assign('/movies')
      } catch (e) {
        alert(e?.message)
      }
    }
  }

  async function loginWithGithub() {
    if (firebase) {
      try {
        let provider = new firebase.auth.GithubAuthProvider()
        await firebase.auth().signInWithPopup(provider)
        browser && window.location.assign('/movies')
      } catch (e) {
        alert(e?.message)
      }
    }
  }
</script>

<div class="contaner">
  <div class="container_log">
    <span on:click={loginWithGoogle} class="log_wrapper google">
      <span class="icon">
        <Icon icon="ant-design:google-outlined" color="#fff" />
      </span>
      <span class="text">login with google</span>
    </span>
    <span on:click={loginWithGithub} class="log_wrapper github">
      <span class="icon">
        <Icon icon="ant-design:github-filled" color="#fff" />
      </span>
      <span class="text"> login via github </span>
    </span>
  </div>
</div>

<style>
  .contaner {
    color: #fff;
  }
  .container_log {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    font-size: 1.85rem;
  }
  .log_wrapper {
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .icon {
    vertical-align: middle;
    margin-top: 0.5rem;
    margin-right: 0.7rem;
  }

  .text {
    letter-spacing: 0.1rem;
    text-transform: capitalize;
  }

  .google {
    background: dodgerblue;
    margin-bottom: 2rem;
  }
  .github {
    background: orangered;
  }
</style>
