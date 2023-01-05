<script lang="ts">
import { fullscreenStore } from "../stores";

export default {
	data() {
		return {
			store: fullscreenStore
		}
	}
}
</script>

<template>
<main>
	<button @click="store.toggle()">
		<font-awesome-icon :icon="store.fullscreen ? 'fa-solid fa-compress' : 'fa-solid fa-expand'" />
	</button>
</main>
</template>

<style scoped lang="scss">
main {
	flex: 2;

	position: relative;

	background-color: var(--bg-light-color);
	border-radius: 1rem;
}

button {
	background: none;
	border: none;

	position: absolute;
	bottom: 1rem;
	right: 1rem;

	padding: 0.5rem;

	background-color: var(--bg-lighter-color);

	aspect-ratio: 1/1;
	display: grid;
	place-items: center;

	opacity: 0.5;
	transition: opacity 300ms ease-in-out;

	border-radius: 0.5rem;
}

button:hover {
	opacity: 1;
}

button > svg {
	aspect-ratio: 1/1;
}
</style>
