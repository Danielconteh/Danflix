<script>
  import Movies from '../component/Movies.svelte'
  // App.svelte
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'

  const queryClient = new QueryClient()
</script>

<svelte:head>
  <title>Movies</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
  <Movies />
</QueryClientProvider>
