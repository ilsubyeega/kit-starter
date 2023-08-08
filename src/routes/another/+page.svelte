<script>
	import Button from '$lib/components/Button.svelte';
	let count = 0;
</script>

<a href="/">Go to index page</a>
<p><Button on:click={() => (count += 1)}>{count}</Button></p>