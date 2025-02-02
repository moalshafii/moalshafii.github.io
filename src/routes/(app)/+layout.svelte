<script>
	import { UserHeader } from '$lib/components/sections';
	import '$lib/css/app.css';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let { children, data } = $props();
</script>

<div id="app">
	<div id="container">
		<header>
			<UserHeader />
		</header>
		{#key data.pathname}
			<main in:fly={{ duration: 400, easing: backOut, x: 0, y: 500 }}>
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
	}

	header {
		@apply flex w-full flex-col items-center gap-4 p-4;
	}
</style>
