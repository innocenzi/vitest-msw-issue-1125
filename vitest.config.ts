import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		isolate: false,
		restoreMocks: true,
		threads: false,
		environment: 'happy-dom',
	},
})
