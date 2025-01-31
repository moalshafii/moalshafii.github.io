<input hidden type="checkbox" name="menucheckbox" id="menucheckbox" />
<label id="menuoverlay" for="menucheckbox"></label>

<label id="menulabel" title="open menu" for="menucheckbox">
	<span class="hidden">open menu</span>
	<span class="icon-[mage--compass-fill] size-10"></span>
</label>

<aside>
	<header>
		<a id="alshafii" href="/">Mo&nbsp;Alshafii</a>
	</header>

	<main></main>
</aside>

<style lang="postcss">
	* {
		@apply flex-none flex-nowrap transition-all duration-300 ease-out;
		@apply overflow-x-hidden overflow-y-scroll;
	}

	#menuoverlay {
		@apply fixed right-0 top-0 z-10 h-screen lg:hidden;
		@apply rounded-l-xl border-primary backdrop-blur-sm;
		@apply pointer-events-none w-0;
	}

	/* When checkbox is checked */
	#menucheckbox:checked + #menuoverlay {
		@apply pointer-events-auto w-full border-l-2;
	}

	/* When checkbox is not checked */
	#menucheckbox:not(:checked) + #menuoverlay {
		@apply pointer-events-none w-0 delay-300;
	}

	aside {
		@apply fixed left-0 top-0 z-20 flex flex-col justify-between gap-4;
		@apply h-screen overflow-hidden rounded-r-2xl lg:sticky;
		@apply rounded-r-xl border-primary bg-base-100;
		@apply pointer-events-none w-0;
	}

	/* When checkbox is checked */
	#menucheckbox:checked ~ aside {
		@apply pointer-events-auto w-72 border-r p-4 delay-300;
	}

	/* When checkbox is not checked */
	#menucheckbox:not(:checked) ~ aside {
		@apply pointer-events-none w-0;
		@apply lg:pointer-events-auto lg:w-72 lg:border-r lg:p-4 lg:delay-0;
	}

	#menulabel {
		@apply fixed bottom-4 right-4 flex items-center justify-center rounded-full delay-500 lg:hidden;
	}

	/* When checkbox is checked */
	#menucheckbox:checked ~ #menulabel {
		@apply translate-x-20 rotate-[360deg] animate-pulse delay-0;
	}
</style>
