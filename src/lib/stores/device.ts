import { writable } from 'svelte/store';

type DeviceType = 'mobile' | 'tablet' | 'desktop' | undefined;

// Writable store for app state, initializing device as `undefined`
export const DEVICE = writable<DeviceType>(getDevice());

// Helper function to determine device type based on window width
function getDevice(): DeviceType {
	if (typeof window === 'undefined') return undefined;
	const width = window.innerWidth;
	if (width <= 767) return 'mobile';
	if (width <= 1024) return 'tablet';
	return 'desktop';
}

// Function to update appStore's device type
const updateDeviceType = () => DEVICE.set(getDevice());

// Only add the resize listener if running in the browser
if (typeof window !== 'undefined') {
	window.addEventListener('resize', updateDeviceType);
	DEVICE.subscribe(() => {
		return () => {
			window.removeEventListener('resize', updateDeviceType);
		};
	});
}
