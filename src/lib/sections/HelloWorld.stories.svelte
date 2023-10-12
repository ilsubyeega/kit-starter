<script context="module">
  import HelloWorld from './HelloWorld.svelte';

  export const meta = {
    title: "Sections/Hello World",
    component: HelloWorld
  }
</script>

<script>
    import '../../app.css'; // TODO: this should be imported in preview.js
	import { Story } from '@storybook/addon-svelte-csf';
</script>

<Story name="Default">
	<HelloWorld />
</Story>
