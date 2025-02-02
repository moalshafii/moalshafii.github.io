import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import * as tailwindcssMotion from 'tailwindcss-motion';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: { extend: {} },
	plugins: [daisyui, tailwindcssMotion, addDynamicIconSelectors()],
	daisyui: {
		logs: false,
		themes: [
			{
				default: {
					primary: '#058082',
					secondary: '#373737',
					accent: '#373737',
					'base-100': '#000000',
					'base-200': '#141414',
					'base-300': '#262626',
					'base-content': '#d6d6d6',
					neutral: '#373737',
					info: '#0000ff',
					success: '#00ff00',
					warning: '#ffff00',
					error: '#ff0000'
				}
			}
		]
	}
} satisfies Config;
