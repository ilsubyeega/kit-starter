<script lang="ts">
	export let href: string = '';
    export let color: string = 'white';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
    class="button"
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

    style:--color={color}
>
    <div>
        <slot>Button</slot>
    </div>
	
</svelte:element>

<style lang="sass">
.button
    display: flex
    padding: 10px
    border-radius: 10px
    background-color: var(--color)
    color: black

    transform: skewX(-12deg)
    transition: all 0.3s ease-in-out

    text-decoration: none
    width: fit-content

    &:hover
        filter: brightness(1.2)
    
    div
        transform: skewX(12deg)
        color: white
</style>