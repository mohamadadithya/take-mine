<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import { isOpenSidebar } from '$lib/stores/dashboardStore';
	import ButtonDropdown from './ButtonDropdown.svelte';
	import Icon from '@iconify/svelte';
	import type { Link } from '$lib/data/links';

	const links: Link[] = [
		{
			name: 'Profile',
			path: '/profile',
			icon: {
				inactive: 'bx:user',
				active: 'bxs:user'
			}
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: {
				inactive: 'basil:settings-outline',
				active: 'basil:settings'
			}
		}
	];

	let isOpenNotifications = false;
	let isOpenDropdown = false;

	const handleState = (el: 'dropdown' | 'notifications') => {
		if (el == 'dropdown') {
			isOpenDropdown = !isOpenDropdown;
			isOpenNotifications = false;
		} else {
			isOpenNotifications = !isOpenNotifications;
			isOpenDropdown = false;
		}
	};
</script>

<header class="z-10 p-4 md:px-6 bg-white shadow-sm border-b">
	<nav class="flex justify-between items-center">
		<button
			type="button"
			on:click|stopPropagation={() => isOpenSidebar.set(true)}
			class="text-2xl block md:hidden text-primary-700 rounded-lg"
		>
			<i class="fas fa-bars" />
		</button>
		<div
			class="ring-2 w-48 md:w-auto mx-2 md:mr-4 md:ml-0 ring-transparent focus-within:bg-transparent bg-gray-100 rounded-md py-1.5 flex items-center px-3"
		>
			<Icon icon="fe:search" class="text-primary-700 text-2xl" />
			<input
				type="text"
				class="w-full outline-none bg-transparent px-2 placeholder:text-black"
				placeholder="Search..."
			/>
		</div>
		<div class="flex items-center text-primary-700">
			<div class="relative">
				<button
					type="button"
					on:click|stopPropagation={() => handleState('notifications')}
					class="text-xl mr-2 md:mr-5 relative"
				>
					<div class="absolute bg-red-700 h-3 w-3 right-0.5 rounded-full border border-white" />
					<Icon icon="fa-solid:bell" class="text-3xl" />
				</button>
				<div
					use:clickoutside
					on:clickoutside={() => (isOpenNotifications = false)}
					id="notifications"
					class="absolute {isOpenNotifications
						? ''
						: 'hidden'} right-0 w-72 md:w-80 bg-white py-5 shadow-lg rounded-xl text-black"
				>
					<div class="flex justify-between items-center px-5">
						<p class="font-medium">Notifications</p>
						<button class="text-sky-600 text-sm">Mark all as read</button>
					</div>
					<ul class="mt-5">
						<li>
							<!-- Is not read add background -->
							<a href="/" class="flex items-start notification not-read px-5 py-3">
								<img src="/images/profile.svg" class="w-10 mr-3" alt="Username" />
								<div class="overflow-hidden">
									<p class="font-medium text-primary-700">John Doe</p>
									<p class="text-sm text-gray-500 truncate">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, saepe.
									</p>
									<small class="text-gray-600">a day ago</small>
								</div>
							</a>
						</li>
						<li>
							<a href="/" class="flex items-start hover:bg-gray-100 px-5 py-3">
								<img src="/images/profile.svg" class="w-10 mr-3" alt="Username" />
								<div class="overflow-hidden">
									<p class="font-medium text-primary-700">John Doe</p>
									<p class="text-sm text-gray-500 truncate">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, saepe.
									</p>
									<small class="text-gray-600">a day ago</small>
								</div>
							</a>
						</li>
					</ul>
					<a href="/" class="block text-center pt-3 text-sm border-t text-sky-600">Read More</a>
				</div>
			</div>
			<ButtonDropdown on:click={() => handleState('dropdown')} {links} bind:isOpen={isOpenDropdown}>
				<img src="/images/profile.svg" class="w-9" alt="Username" />
			</ButtonDropdown>
		</div>
	</nav>
</header>
