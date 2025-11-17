import { useState } from "react";

const CommentSection = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  return (
    <div className="mt-12 space-y-6 min-w-1/2 max-w-3/4 bg-white shadow-sm rounded-xl p-6">
      <div className="flex gap-3">
        <textarea
          className="w-full p-3 border rounded-lg h-13 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
        />
        <button
          className="px-4 py-2 h-13 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 whitespace-nowrap"
          onClick={() => {
            if (!text.trim()) return;
            onSubmit?.(text);
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
            className="bg-white p-5 shadow-sm rounded-xl border space-y-2"
          >
            <div className="flex items-center gap-3">
              {c.user?.avatar && (
                <img
                  src={c.user.avatar}
                  alt={c.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-gray-800">{c.user?.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(c.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-gray-700">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
