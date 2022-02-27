import { it, beforeAll, afterAll, afterEach, expect } from 'vitest'
import { server } from './server'
import { rest } from 'msw'
import { callAxios } from './index'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


it('calls axios', async () => {
	server.use(rest.get('http://localhost/visit', (req, res, ctx) => res(
		ctx.status(200),
		ctx.set('x-sleightful', 'true'),
		ctx.json({
			view: {
				name: 'target.view',
				properties: {
					foo: 'bar',
				},
			},
		}),
	)))

	const response = await callAxios('http://localhost/visit')

	expect(response).toMatchInlineSnapshot({})
})
