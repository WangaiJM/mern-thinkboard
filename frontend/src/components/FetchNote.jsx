import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import FormatDate from "../utils/FormatDate";
import Spinner from "./Spinner";

import { MdDeleteOutline } from "react-icons/md";

const FetchNote = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Delete failed");
    }
  };

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

            <MdDeleteOutline
              onClick={handleDelete}
              style={{ cursor: "pointer", color: "crimson" }}
            />
          </span>
        </div>
      </main>
    </div>
  );
};
export default FetchNote;
