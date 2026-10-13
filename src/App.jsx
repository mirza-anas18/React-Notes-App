
import Navbar from './components/Navbar'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // Load saved notes from localStorage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')

    if (savedNotes) {
      return JSON.parse(savedNotes)
    } else {
      return []
    }
  })

  // Save notes whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function handleSubmit(e) {
    e.preventDefault()

    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    }

    setNotes([...notes, newNote])

    setTitle('')
    setContent('')
  }

  return (
    <>
      <Navbar />

      <main className="container">
        <h1>My Notes</h1>

        <p className="subtitle">
          Capture your thoughts and ideas.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Note Title</label>

            <input
              type="text"
              id="title"
              placeholder="Enter your note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Note Content</label>

            <textarea
              id="content"
              placeholder="Write your note here..."
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <button type="submit">Save Note</button>
        </form>

        <section className="notes-section">
          <h2>Your Notes</h2>

          {notes.map((note, index) => (
            <article className="note-card" key={note.id}>
              <h3>
                {index + 1}. {note.title}
              </h3>

              <p>{note.content}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
