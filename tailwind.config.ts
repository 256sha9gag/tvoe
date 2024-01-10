import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                mainBlack: '#09090C',
                white: '#FFF'
            },
            fontSize: {
                'h1': ['40px', {
                    lineHeight: 'normal',
                    fontWeight: '700',
                }],
                'h5': ['28px', {
                    lineHeight: 'normal',
                    fontWeight: '500',
                }]
            },
            backgroundImage: {
                'gradient-accent': 'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)',
              },
        },
    },
    plugins: [],
}
export default config
