import Head from 'next/head'
import TodoList from '../components/todoList'
import InputTodo from '../components/inputTodo'

export default function Home() {
  const todos = [
    { title: "Presensi", desc: "lorem ipsum" },
    { title: "Presensi2", desc: "lorem ipsum" },
    { title: "Presensi3", desc: "lorem ipsum" },
    { title: "Presensi4", desc: "lorem ipsumdgdfg sdhfjd dskfhsdjfk dskfhsdjf isudhfsjd sdfhsdjf sdjfsjdf sdjhfjsdf sjhdfbsghgfyae kwuyegryu fuyaegf uehfhe eusgfsdhf sdufjhsadf" },
  ]

  return (
    <>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col py-5 space-y-8">
        <InputTodo />
        <div className="space-y-4">
          <h2 className="text-xs text-gray-700 tracking-wide">PINNED</h2>
          <TodoList todos={todos} />
        </div>
        <div className="space-y-4">
          <h2 className="text-xs text-gray-700 tracking-wide">OTHERS</h2>
          <TodoList todos={todos} />
        </div>
      </main>
    </>
  )
}
