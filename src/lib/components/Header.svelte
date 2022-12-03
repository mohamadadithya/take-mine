<script lang="ts">
	import { isOpenSidebar } from '$lib/stores/dashboardStore';
	import ButtonDropdown from './ButtonDropdown.svelte';

	const links = [
		{
			name: 'Profile',
			path: '/profile',
			icon: 'fa-user'
		},
		{
			name: 'Settings',
			path: '/settings',
			icon: 'fa-gear'
		},
		{
			name: 'Logout',
			path: '/logout',
			icon: 'fa-sign-out-alt'
		}
	];

	let isOpenNotifications = false;
	let isOpenDropdown = false;

	const handleState = (el: any) => {
		if (el == 'dropdown') {
			isOpenDropdown = !isOpenDropdown;
			isOpenNotifications = false;
		} else {
			isOpenNotifications = !isOpenNotifications;
			isOpenDropdown = false;
		}
	};
</script>

<header class="z-10 border-b p-4 md:px-6">
	<nav class="flex justify-between items-center">
		<button
			type="button"
			on:click={() => isOpenSidebar.set(true)}
			class="text-2xl block md:hidden text-primary rounded-lg"
		>
			<i class="fas fa-bars" />
		</button>
		<div
			class="ring-2 w-48 md:w-auto mx-2 md:mr-4 md:ml-0 ring-transparent focus-within:bg-transparent bg-gray-100 rounded-md py-1.5 flex items-center px-3"
		>
			<i class="fas fa-fw fa-search text-primary" />
			<input
				type="text"
				class="w-full outline-none bg-transparent px-2 placeholder:text-black"
				placeholder="Search..."
			/>
		</div>
		<div class="flex items-center text-primary">
			<button type="button" class="text-xl mr-2 md:mr-4">
				<i class="fas fa-fw fa-moon" />
			</button>
			<div class="relative">
				<button
					type="button"
					on:click={() => handleState('notifications')}
					class="text-xl mr-2 md:mr-5 relative"
				>
					<div class="absolute bg-red-700 h-3 w-3 right-0.5 rounded-full border border-white" />
					<i class="fas fa-fw fa-bell" />
				</button>
				<div
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
							<a href="/" class="flex items-start hover:bg-gray-100 px-5 py-3">
								<img src="/images/profile.svg" class="w-10 mr-3" alt="Username" />
								<div class="overflow-hidden">
									<p class="font-medium">John Doe</p>
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
									<p class="font-medium">John Doe</p>
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
			<ButtonDropdown on:click={() => handleState('dropdown')} {links} isOpen={isOpenDropdown}>
				<img src="/images/profile.svg" class="w-9" alt="Username" />
			</ButtonDropdown>
		</div>
	</nav>
</header>
