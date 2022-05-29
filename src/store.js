import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const banner = writable(
  (browser && JSON.parse(localStorage.getItem('banner'))) || null
)

banner.subscribe(
  (val) => browser && localStorage.setItem('banner', JSON.stringify(val))
)

// AUTH 0
export const isAuthenticated = writable(false)
export const user = writable({})
export const popupOpen = writable(false)
export const error = writable()

export const userInfo = writable(
  (browser && JSON.parse(localStorage.getItem('auth_user'))) || null
)
userInfo.subscribe(
  (val) => browser && localStorage.setItem('auth_user', JSON.stringify(val))
)
