<script>
	import src from '$lib/assets/images/moalshafii-400x400.webp';
</script>

<section>
	<p id="banner">
		<span> Why do programmers prefer dark mode ?</span>
		<span class="motion-preset-typewriter-[33] motion-duration-[10000ms]">
			Because the light attracts bugs !
		</span>
	</p>
	<main>
		<input type="checkbox" hidden name="avatarcheckbox" id="avatarcheckbox" />
		<div id="user">
			<label id="avatar" for="avatarcheckbox">
				<img {src} alt="Mo Alshafii" />
			</label>
			<p id="info">
				<span>
					<span id="name">Mo Alshafii</span>
					<span class="icon icon-[mage--verified-check-fill]"></span>
				</span>
				<span id="username">@moalshafii</span>
			</p>
		</div>
	</main>
</section>

<style lang="postcss">
	* {
		@apply transition-all duration-300 ease-out;
	}

	section {
		@apply relative flex h-40 w-full max-w-2xl flex-col justify-end p-[2px];
		@apply rounded-2xl bg-primary/50;
	}

	#banner {
		@apply flex h-full w-full flex-col items-center justify-center p-4;
		@apply rounded-2xl bg-base-100;
		@apply text-center text-xs md:text-sm lg:text-base;
	}

	main {
		@apply absolute flex w-full translate-y-14 items-end justify-between px-4;
	}

	p {
		@apply flex flex-col items-start justify-end;
	}

	#name {
		@apply text-lg md:text-xl;
	}
	#username {
		@apply text-xs md:text-sm;
	}

	#user {
		@apply relative flex w-full items-end;
		@apply gap-2 md:gap-3;
	}

	#avatar {
		@apply flex w-auto items-center justify-center;
	}

	img {
		@apply rounded-full bg-primary/50 p-[2px];
		@apply size-24 md:size-28 lg:size-32;
	}

	#avatarcheckbox:checked + #user #avatar img {
		@apply size-48 rotate-[360deg];
	}

	#avatarcheckbox:not(:checked) + #user #avatar img {
		@apply skeleton rounded-full bg-primary/50;
	}

	#avatarcheckbox:checked + #user #avatar {
		@apply absolute right-0 z-10 w-full;
	}
</style>
