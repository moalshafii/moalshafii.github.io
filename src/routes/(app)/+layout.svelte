<script>
	import '$lib/css/app.css';
	import { UserHeader } from '$lib/components/sections';
	let { children, data } = $props();
</script>

<div id="app">
	<div id="container">
		<header>
			<UserHeader />
		</header>
		{#key data.pathname}
			<main>
				{@render children()}
			</main>
		{/key}
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
		@apply motion-preset-slide-up-lg motion-preset-pop motion-duration-300 motion-ease-spring-snappy;
	}

	header {
		@apply flex w-full flex-col items-center gap-4 p-4;
	}
</style>
