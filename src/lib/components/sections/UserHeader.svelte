<script>
	import src from '$lib/assets/images/moalshafii-200x200.webp';
	let checked = $state(false);
</script>

<section>
	<p id="banner">
		<span> Why do programmers prefer dark mode ?</span>
		<span class="motion-preset-typewriter-[33] motion-duration-[10000ms]">
			Because the light attracts bugs !
		</span>
	</p>
	<main>
		<!-- {#key checked} -->
		<input type="checkbox" {checked} hidden name="avatarcheckbox" id="avatarcheckbox" />
		<!-- {/key} -->
		<div id="user">
			<label id="avatar" for="avatarcheckbox">
				<img {src} alt="Mo Alshafii" />
			</label>
			<p id="info">
				<span id="namecon">
					<span id="name">Mo Alshafii</span>
					<span id="verify" class="icon icon-[mage--verified-check-fill]"></span>
				</span>
				<span id="username">@moalshafii</span>
			</p>
		</div>
		<menu></menu>
	</main>
</section>

<style lang="postcss">
	* {
		@apply transition-all duration-300 ease-out;
	}

	section {
		@apply relative flex h-40 w-full max-w-2xl flex-col justify-end p-[2px];
		@apply mb-14 rounded-2xl bg-primary;
	}

	#banner {
		@apply flex h-full w-full flex-col items-center justify-center p-4;
		@apply select-none rounded-2xl bg-base-100;
		@apply text-center text-xs md:text-sm lg:text-base;
	}

	main {
		@apply absolute flex w-full translate-y-14 items-end justify-between px-4;
	}

	menu {
		@apply hidden items-center justify-end pb-2 md:flex;
	}

	p {
		@apply flex flex-col items-start justify-end;
	}

	#verify {
		@apply text-primary md:size-5;
	}

	#namecon {
		@apply flex w-44 flex-none items-center gap-2 md:w-52;
	}

	#avatarcheckbox:checked + #user #info {
		@apply motion-preset-slide-left-lg motion-blur-in-[10px] motion-opacity-in-[33%] motion-duration-[0.15s]/blur motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-delay-[0.10s]/scale motion-delay-[0.60s]/blur motion-ease-spring-bouncier;
	}

	#name {
		@apply text-lg md:text-xl;
	}

	#username {
		@apply text-xs md:text-sm;
	}

	#user {
		@apply flex w-full items-end;
		@apply gap-2 md:gap-3;
	}

	#avatar {
		@apply flex w-auto items-center justify-center;
	}

	img {
		@apply cursor-pointer rounded-full bg-primary p-[2px];
		@apply size-24 md:size-28 lg:size-32;
	}

	#avatarcheckbox:checked + #user #avatar img {
		@apply size-48;
		@apply motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-opacity-in-[33%] motion-duration-[0.15s]/blur motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-delay-[0.10s]/scale motion-delay-[0.60s]/blur motion-ease-spring-bouncier;
	}

	#avatarcheckbox:not(:checked) + #user #avatar img {
		@apply skeleton rotate-[-360deg] rounded-full bg-primary;
	}

	#avatarcheckbox:checked + #user #avatar {
		@apply absolute right-0 z-10 w-full;
	}
</style>
