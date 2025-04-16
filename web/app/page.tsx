const origin = process.env.NEXT_PUBLIC_API_ORIGIN ?? 'http://bff:5100'

export default async function Home() {
  const res = await fetch(`${origin}/api/users`, { cache: 'no-store' })
  const users = await res.json()

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((u: any) => (
          <li key={u.id} className="border p-2 rounded">{u.name}</li>
        ))}
      </ul>
    </main>
  )
}
