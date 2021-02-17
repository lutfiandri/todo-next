export default function TodoItem({ title, desc }) {
  return (
    <div className="rounded px-3 py-3 border border-gray-300 space-y-2 hover:shadow-md transition cursor-default w-full">
      <div className="font-medium">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  )
}