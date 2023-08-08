<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let interval: ReturnType<typeof setInterval>;
	let text: string = new Date().toString();

	onMount(() => {
		interval = setInterval(() => {
			text = new Date().toString();
		}, 100);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<h1>Welcome to kit-starter by ilsubyeega!</h1>
<p>Current Time: {text}</p>
