<!-- src/routes/+error.svelte -->
<script>
	import { tick } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let countdown = 5;

	async function startCountdown() {
		while (countdown > 0) {
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 1000));
			countdown--;
		}
		if (browser) goto('/');
	}

	if (browser) startCountdown();
</script>

<svelte:head>
	<title>Error 404 Page - Mo Alshafii</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex h-full w-full flex-1 flex-col items-center justify-center">
	<h1 class="text-xl">404 - page not found</h1>
	<p>Redirecting to <a href="/">Home</a> in {countdown} seconds...</p>
</div>
