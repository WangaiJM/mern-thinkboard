import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import FormatDate from "../utils/FormatDate";
import Spinner from "./Spinner";

import { MdDeleteOutline } from "react-icons/md";

const FetchNote = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState([]);

  console.log();

  useEffect(() => {
    setLoading(true);
    const singleNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/notes/${id}`
        );
        const note = await response.data;
        setNote(note);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    singleNote();
  }, [id]);

  return (
    <div>
      {loading && <Spinner />}
      <main className="notes">
        <div className="notes__card">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <span>
            {note.createdAt && <FormatDate createDate={note.createdAt} />}

            <MdDeleteOutline />
          </span>
        </div>
      </main>
    </div>
  );
};
export default FetchNote;
