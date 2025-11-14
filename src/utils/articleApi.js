export const getArticleById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error fetching article");
  return data;
};
