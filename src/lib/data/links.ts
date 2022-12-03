type Link = {
    name: string,
    path?: string,
    icon: string,
    nested_links?: any
}

export const links: Link[] = [
    {
        name: 'Dashboard',
        path: '/',
        icon: 'fa-house',
    },
    {
        name: 'Forms',
        path: '/forms',
        icon: 'fa-clipboard-list-check',
    },
    {
        name: 'Cards',
        path: '/cards',
        icon: 'fa-cards-blank',
    },
    {
        name: 'Charts',
        path: '/charts',
        icon: 'fa-chart-pie',
    },
    {
        name: 'Buttons',
        path: '/buttons',
        icon: 'fa-rectangles-mixed',
    },
    {
        name: 'Pages',
        icon: 'fa-memo',
        nested_links: [
            {
                name: 'Login',
                path: '/login',
                icon: 'fa-sign-in',
            },
            {
                name: 'Register',
                path: '/register',
                icon: 'fa-user',
            }
        ],
    }
]