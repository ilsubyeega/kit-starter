<script context="module">
    import Button from './Button.svelte';
  
    export const meta = {
      title: "Componenets/Button",
      component: Button
    }
  </script>

<script>
    import '../../app.css'; // TODO: this should be imported in preview.js
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let count = 0;
</script>

<Template let:args>
	<Button {...args} on:click={() => (count += 1)}>
		Button ({count})
	</Button>
</Template>

<Story name="Default" />
