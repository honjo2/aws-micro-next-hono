import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/users', c => c.json([{ id: 1, name: 'Taro' }]))

serve({ fetch: app.fetch, port: 4001 })
