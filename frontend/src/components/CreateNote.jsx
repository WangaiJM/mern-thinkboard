import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import "./CreateNote.css";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      toast.error("Both title and content are required.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:8000/api/notes", {
        title: trimmedTitle,
        content: trimmedContent,
      });

      toast.success("Note Saved successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("Error saving note", error);
      toast.error("Failed to save Note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="notes">
      <form className="note__form" onSubmit={handleSubmit}>
        <h2>Create Note</h2>
        <div className="note__control">
          <label htmlFor="title" className="note__label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="note__input"
            value={title}
            disabled={loading}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="note__control">
          <label htmlFor="content" className="note__label">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="note__textarea"
            value={content}
            disabled={loading}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="note__control">
          <input
            type="submit"
            id="note__submit"
            className="note__submit"
            value={loading ? `Saving Note... ` : "Save Note"}
            disabled={loading || !title.trim() || !content.trim()}
          />
        </div>
      </form>
    </div>
  );
};
export default CreateNote;
