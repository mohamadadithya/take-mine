interface Link {
	name: string;
	path?: string;
	icon: string;
	nested_links?: Link[];
}

export const links: Link[] = [
	{
		name: 'Dashboard',
		path: '/',
		icon: 'fa-house'
	},
	{
		name: 'Forms',
		path: '/forms',
		icon: 'fa-clipboard-list-check'
	},
	{
		name: 'Cards',
		path: '/cards',
		icon: 'fa-credit-card-blank'
	},
	{
		name: 'Pages',
		icon: 'fa-copy',
		nested_links: [
			{
				name: 'Login',
				path: '/login',
				icon: 'fa-sign-in'
			},
			{
				name: 'Register',
				path: '/register',
				icon: 'fa-user'
			}
		]
	}
];

export type { Link };
