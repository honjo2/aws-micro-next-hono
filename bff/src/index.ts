import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { fetch as http } from 'undici';

const USERS_ORIGIN = process.env.USERS_ORIGIN ?? 'http://localhost:4001';

const app = new Hono();

app.get('/api/users', async (c) => {
  const res = await http(`${USERS_ORIGIN}/users`);
  return c.json(await res.json());
});

serve({ fetch: app.fetch, port: 5100 });
