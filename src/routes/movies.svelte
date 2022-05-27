<script>
  import Movies from '../component/Movies.svelte'
  import { browser } from '$app/env'
  // App.svelte
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'

  const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
  <Movies />
</QueryClientProvider>
