import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

import "./FetchNotes.css";

const FetchNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/notes");
        const notes = await response.data;
        setNotes(notes);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      <main className="notes">
        {notes.map((note) => (
          <div className="notes__card">
            <h3 key={note._id}>
              <a href="">{note.title}</a>
            </h3>
          </div>
        ))}
      </main>
    </div>
  );
};
export default FetchNotes;
