import useTest from '@/hooks/useTest'

export default function Home() {
  const data = useTest()

  return (
    <div>
      <main>
        <h1>{data}</h1>
      </main>
    </div>
  )
}
