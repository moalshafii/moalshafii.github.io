<script>
	import Menu from '$lib/components/menu/';
	import { UserHeader } from '$lib/components/sections/';
	import '$lib/css/app.css';
	let { children } = $props();
</script>

<div id="app">
	<Menu />
	<div id="container">
		<header>
			<UserHeader />
		</header>
		<main>
			{@render children()}
		</main>
	</div>
</div>

<style lang="postcss">
	* {
		@apply ease-linear;
	}

	#app {
		@apply sticky bottom-4 flex min-h-screen w-full items-start;
	}

	#container {
		@apply flex h-full min-h-screen w-full flex-1 grow flex-col items-center gap-4;
	}

	main {
		@apply flex h-full w-full flex-1 flex-col items-center gap-4 p-4 text-center;
	}

	header {
		@apply flex w-full flex-col items-center p-4;
	}
</style>
