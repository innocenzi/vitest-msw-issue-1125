import { it, beforeAll, afterAll, afterEach, expect } from 'vitest'
import { server } from './server'
import { rest } from 'msw'
import { callAxios, callFetch } from './index'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

it('calls fetch', async () => {
	server.use(rest.get('http://localhost/fetch', (req, res, ctx) => res(
		ctx.status(200),
		ctx.set('x-sleightful', 'true'),
		ctx.json({
			data: 'ok'
		}),
	)))

	const response = await callFetch('http://localhost/fetch')
	expect(response.data).toBe('ok')
})

it('calls axios', async () => {
	server.use(rest.get('http://localhost/axios', (req, res, ctx) => res(
		ctx.status(200),
		ctx.set('x-sleightful', 'true'),
		ctx.json({
			data: 'ok'
		}),
	)))

	const response = await callAxios('http://localhost/axios')
	expect(response.data).not.toBeUndefined()
})
