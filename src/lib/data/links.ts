interface Link {
	name: string;
	path?: string;
	icon: {
		inactive: string;
		active: string;
	}
	nested_links?: Link[];
}

export const links: Link[] = [
	{
		name: 'Dashboard',
		path: '/',
		icon: {
			inactive: 'ph:house',
			active: 'ph:house-fill',
		}
	},
	{
		name: 'Forms',
		path: '/forms',
		icon: {
			inactive: 'fluent:form-48-regular',
			active: 'fluent:form-48-filled'
		},
	},
	{
		name: 'Cards',
		path: '/cards',
		icon: {
			inactive: 'mdi:cards-outline',
			active: 'mdi:cards'
		}
	},
	{
		name: 'Pages',
		icon: {
			inactive: 'mdi:papers-outline',
			active: 'mdi:papers'
		},
		nested_links: [
			{
				name: 'Login',
				path: '/login',
				icon: {
					inactive: 'solar:login-linear',
					active: 'solar:login-bold'
				}
			},
			{
				name: 'Register',
				path: '/register',
				icon: {
					inactive: 'bx:user',
					active: 'bxs:user'
				}
			}
		]
	}
];

export type { Link };
