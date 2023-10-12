<script lang="ts">
	export let href: string = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{...$$restProps}
	role={href ? undefined : 'button'}
    class="bg-slate-500 text-white py-2 px-4 rounded-lg -skew-x-12 m-6 hover:bg-slate-700 transition duration-200 ease-in-out"
	on:click
	on:keypress
	on:keyup
	on:keydown
	on:blur
	on:focus
	on:mouseenter
	on:mouseleave
>
    <div class="skew-x-12">
        <slot>Button</slot>
    </div>
	
</svelte:element>
