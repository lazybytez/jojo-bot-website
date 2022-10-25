/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            textColor: {
                DEFAULT: 'var(--color-text)',
                subtext: {
                    1: 'var(--color-subtext1)',
                    0: 'var(--color-subtext0)'
                }
            }
        },
        colors: {
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            rosewater: 'var(--color-rosewater)',
            flamingo: 'var(--color-flamingo)',
            pink: 'var(--color-pink)',
            mauve: 'var(--color-mauve)',
            red: 'var(--color-red)',
            maroon: 'var(--color-maroon)',
            peach: 'var(--color-peach)',
            yellow: 'var(--color-yellow)',
            green: 'var(--color-green)',
            teal: 'var(--color-teal)',
            sky: 'var(--color-sky)',
            sapphire: 'var(--color-sapphire)',
            blue: 'var(--color-blue)',
            lavender: 'var(--color-lavender)',
            overlay: {
                2: 'var(--color-overlay2)',
                1: 'var(--color-overlay1)',
                0: 'var(--color-overlay0)'
            },
            surface: {
                2: 'var(--color-surface2)',
                1: 'var(--color-surface1)',
                0: 'var(--color-surface0)'
            },
            base: 'var(--color-base)',
            mantle: 'var(--color-mantle)',
            crust: 'var(--color-crust)'
        }
    },
    plugins: []
};
