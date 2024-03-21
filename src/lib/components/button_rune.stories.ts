import type { Meta, StoryObj } from '@storybook/svelte';

import ButtonRune from './button_rune.svelte';

const meta: Meta<ButtonRune> = {
    title: 'Components/Button (Rune)',
    component: ButtonRune,
    argTypes: {
        href: { control: 'text' },
        color: { control: 'color' }
    }
};
export default meta;

type Story = StoryObj<ButtonRune>;

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
