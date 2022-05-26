<script>
  import Movies from '../component/Movies.svelte'
  import { browser } from '$app/env'
  // App.svelte
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import { isAuthenticated } from '../store.js'
  import { goto } from '$app/navigation'

  const queryClient = new QueryClient()

  if (!$isAuthenticated) {
    browser && goto('/')
  }
</script>

{#if $isAuthenticated}
  <QueryClientProvider client={queryClient}>
    <Movies />
  </QueryClientProvider>
{/if}
