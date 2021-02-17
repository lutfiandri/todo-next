import { useState } from 'react'

export default function InputTodo() {
  const [focus, setFocus] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleClose = (e) => {
    e.preventDefault();
    setFocus(false);
    setTitle('');
    setDesc('');
  }

  return (
    <div className={`${ focus && 'shadow-xl' } w-full max-w-2xl mx-auto rounded-md shadow-md hover:shadow-xl transition`}>
      <form 
        className="w-full flex flex-col">
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`${ !focus && 'hidden' } border-none focus:ring-0 font-semibold`} 
        />
        <textarea 
          onFocus={() => setFocus(true)}
          type="text" 
          rows={3}
          placeholder="Take a todo..." 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border-none focus:ring-0 text-sm"
        />
        <div className={`${ !focus && 'hidden' } flex flex-row-reverse px-3 py-1 text-sm`}>
          <input
            type="button" 
            onClick={handleClose} 
            value="Close"
            className="bg-white hover:bg-gray-100 rounded-md px-6 py-2 focus:outline-none cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}