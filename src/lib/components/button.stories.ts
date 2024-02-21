import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button.svelte';

const meta: Meta<Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		href: { control: 'text' },
		color: { control: 'color' }
	}
};
export default meta;

type Story = StoryObj<Button>;

export const Default: Story = {
	args: {
		href: 'https://google.com/',
		color: 'pink'
	}
};

export const Primary: Story = {
    args: {
        href: 'https://google.com/',
        color: 'blue'
    }
};
