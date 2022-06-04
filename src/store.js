import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const banner = writable(
  (browser && JSON.parse(localStorage.getItem('banner'))) || null
)

banner.subscribe(
  (val) => browser && localStorage.setItem('banner', JSON.stringify(val))
)

const authStore = writable({
  isLoggedIn: false,
  firebaseControlled: false,
})

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
}
