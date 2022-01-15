<script lang="ts">
	import '../app.css';
</script>

<!-- <link rel="stylesheet" href="https://unpkg.com/mvp.css"> -->

<nav class="container-fluid">
	<ul>
		<li>Lumphammer</li>
	</ul>
	<ul>
		<li>
			<a href="http://github.com/n3dst4">GitHub</a>
		</li>
		<li>
			<a href="http://gitlab.com/n3dst4">GitLab</a>
		</li>
		<li>
			<a href="http://twitter.com/n3dst4">Twitter</a>
		</li>
	</ul>
	<!-- <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li> -->
</nav>

<main class="container" >
	<slot />
</main>

<footer>
</footer>

