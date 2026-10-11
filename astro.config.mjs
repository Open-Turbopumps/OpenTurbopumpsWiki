// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OpenTurbopumps',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Open-Turbopumps' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/open-turbopumps'}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			logo: {
				light: "./src/assets/light_logo.svg",
				dark: "./src/assets/dark_logo.svg",
				replacesTitle: true
			}
		}),
	],
});
