import { reactive } from "vue";

export const store = reactive({
	fullscreen: true, // will get toggled off
	toggle() {
		this.fullscreen = !this.fullscreen;
	}
});
