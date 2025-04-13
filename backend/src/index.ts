import { Elysia, t as T } from 'elysia'

import { initTRPC } from '@trpc/server'
import { compile as c, trpc } from '@elysiajs/trpc'

const t = initTRPC.create()
const p = t.procedure

const router = t.router({
	greet: p
		// 💡 Using Zod
		//.input(z.string())
		// 💡 Using Elysia's T
		.input(c(T.String()))
		.query(({ input }) => input)
})

export type Router = typeof router

const app = new Elysia().get("/", () => "Hello Elysia").use(trpc(router)).listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);