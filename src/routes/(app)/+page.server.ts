/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		cards: [
			{
				name: 'Total Members',
				icon: 'fa6-solid:users',
				value: '80,730',
				colors: {
					text: 'text-emerald-700',
					background: 'bg-emerald-100'
				}
			},
			{
				name: 'Account Balance',
				icon: 'ic:round-account-balance-wallet',
				value: 'Rp. 1,5M',
				colors: {
					text: 'text-sky-700',
					background: 'bg-sky-100'
				}
			},
			{
				name: 'Live Events',
				icon: 'material-symbols:event-note',
				value: 50,
				colors: {
					text: 'text-red-700',
					background: 'bg-red-100'
				}
			},
			{
				name: 'Total Packages',
				icon: 'fa-solid:boxes',
				value: 120,
				colors: {
					text: 'text-indigo-700',
					background: 'bg-indigo-100'
				}
			}
		]
	};
}
