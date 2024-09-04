import type { Meta, StoryObj } from '@storybook/svelte';

import HelloWorld from './hello_world.svelte';

const meta: Meta<HelloWorld> = {
    title: 'Sections/Hello World',
    component: HelloWorld,
    argTypes: {}
};
export default meta;

type Story = StoryObj<HelloWorld>;

export const Default: Story = {};
