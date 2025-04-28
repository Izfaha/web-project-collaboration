import type { Config } from 'tailwindcss'

const config: Config = {
    theme : {
        extend: {
            fontFamily: {
                courier: ['var(--font-courier-prime)', 'monospace'],
            },
        },
    },
    plugins: [],
}

export default config;