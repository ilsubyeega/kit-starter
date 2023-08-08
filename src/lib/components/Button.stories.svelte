<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	let count = 0;
</script>

<Meta title="Componenets/Button" component={Button} />

<Template let:args>
	<Button {...args} on:click={() => (count += 1)}>
		Button ({count})
	</Button>
</Template>

<Story name="Default" />
