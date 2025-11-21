import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const CommentSection = ({ articleId }) => {
  const { token } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const getComments = useCallback(async () => {
    setError("");
    try {
      const res = await fetch(
        `http://localhost:3000/api/articles/${articleId}/comments`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 403) {
          throw new Error("Login or Signup to see what people are saying!");
        }
        throw new Error("Issue fetching comments. Try again.");
      }
      setComments(data.comments);
    } catch (err) {
      setError(err.message);
    }
  }, [token, setComments, articleId]);

  const postComment = useCallback(async () => {
    if (!text) return;

    try {
      const res = await fetch(
        `http://localhost:3000/api/articles/${articleId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text,
          }),
        }
      );
      if (!res.ok) throw new Error("Issue posting comment");
      await getComments();
    } catch (err) {
      console.error(err.message);
      alert("Issue posting comment. Please try again");
    }
  }, [articleId, text, token, getComments]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <div className="mt-12 space-y-6 min-w-1/2 max-w-3/4 bg-white shadow-sm rounded-xl p-6">
      <h4 className="text-blue-700 font-semibold">Comments:</h4>
      {token && !error ? (
        <>
          <div className="flex gap-3">
            <textarea
              className="w-full p-3 border rounded-lg h-13 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={1}
            />
            <button
              className="px-4 py-2 h-13 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer"
              onClick={() => {
                if (!text.trim()) return;
                postComment();
                setText("");
              }}
            >
              Post
            </button>
          </div>

          <div className="space-y-4">
            {comments.length === 0 && (
              <p className="text-gray-500">No comments yet.</p>
            )}

            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-white p-3 shadow-sm rounded-xl border space-y-2"
              >
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-gray-800">
                    {c.commenter.firstName} {c.commenter.lastName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-gray-700">{c.text}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">{error}</div>
      )}
    </div>
  );
};

export default CommentSection;
