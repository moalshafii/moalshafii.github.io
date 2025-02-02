<script>
	import { ContactLinks } from '$lib/data/';
</script>

<svelte:head>
	<title>Mo Alshafii</title>
	<meta name="description" content="Mo Alshafii - Software Engineer,Full stack developer" />
	<meta name="keywords" content="Mo Alshafii,Software Engineer,Full stack developer,@moalshafii" />
	<meta name="author" content="Mo Alshafii" />
	<meta property="og:title" content="Mo Alshafii" />
	<meta property="og:description" content="Mo Alshafii - Software Engineer, Full stack developer" />
	<meta name="twitter:title" content="Mo Alshafii" />
	<meta
		name="twitter:description"
		content="Mo Alshafii - Software Engineer, Full stack developer"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@moalshafii" />
</svelte:head>

<div class="page">
	<h1 class="hidden">Mo Alshafii</h1>

	<strong class="text-lg">
		<span>I'm a </span>
		<h2 style="display: inline;">Software Engineer</h2>
	</strong>
	<p>
		I specialize in building custom web, mobile, PWA, and desktop apps with tailored APIs. With
		expertise in automation, SEO, and CMS, I optimize workflows and deliver scalable,
		high-performance solutions. I excel at solving complex problems and improving systems for speed
		and reliability. Let’s bring your ideas to life <br />
	</p>
	<section id="contact">
		<span class="text-lg">contact me today!</span>
		<ul class="menu menu-horizontal menu-sm">
			{#each ContactLinks as { title, href, icon }}
				<li>
					<a
						{href}
						{title}
						target="_blank"
						rel="noopener noreferrer"
						class={`${title == 'Telegram' ? 'disabled pointer-events-none' : ''}`}
					>
						<span class={`${icon} icon`}></span>
						<span class="hidden">{title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style lang="postcss">
	.page {
		@apply flex h-full w-full flex-1 flex-col items-center justify-center gap-4;
	}

	p {
		@apply max-w-xl text-sm;
	}

	#contact {
		@apply flex flex-col;
	}

	.icon {
		@apply size-6;
	}
</style>
