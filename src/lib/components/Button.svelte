<script lang="ts">
	export let href: string = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{...$$restProps}
	role={href ? undefined : 'button'}
	on:click
	on:keypress
	on:keyup
	on:keydown
	on:blur
	on:focus
	on:mouseenter
	on:mouseleave
>
	<slot>Button</slot>
</svelte:element>
