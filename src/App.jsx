
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <h1>My Notes</h1>
        <p className="subtitle">
          Capture your thoughts and ideas.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="title">Note Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter your note title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Note Content</label>
            <textarea
              id="content"
              placeholder="Write your note here..."
              rows="5"
            />
          </div>

          <button type="submit">Save Note</button>
        </form>
      </main>
    </>
  )
}

export default App
