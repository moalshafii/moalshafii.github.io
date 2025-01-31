<script>
	import '$lib/css/app.css';
	let { children } = $props();
</script>

<div id="app">
	<div id="container">
		<main>
			{@render children()}
		</main>
	</div>
</div>

<style lang="postcss">
	#app {
		@apply sticky flex min-h-screen w-full items-start;
	}

	#container {
		@apply flex h-full min-h-screen w-full flex-1 grow flex-col items-center gap-4;
	}

	main {
		@apply flex h-full w-full flex-1 flex-col items-center gap-4 p-4 text-center;
	}
</style>
