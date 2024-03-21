<svelte:options runes={true} />

<script lang="ts">
    interface ButtonProps {
        href: string;
        color: string;
    }

    let { href = '', color = 'white' }: ButtonProps = $props();

    const elementType = $derived(href ? 'a' : 'button');
    const role = $derived(href ? undefined : 'button');
</script>

<svelte:element
    this={elementType}
    class="button"
    {href}
    {...$props}
    {role}
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
    border: none

    &:hover
        filter: brightness(1.2)
    
    &:active
        filter: brightness(0.8)
    
    div
        transform: skewX(12deg)
        color: white
</style>
