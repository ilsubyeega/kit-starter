import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@chromatic-com/storybook'
    ],
    framework: {
        name: '@storybook/sveltekit',
        options: {}
    },
    docs: {},
    core: {
        disableTelemetry: true
    }
};
export default config;
