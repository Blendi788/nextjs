import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { News } from "@/api/models/News";
import useFetch from "hooks/useFetch";

export default function UpdateNews() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState<News>({ title: "", body: "" });

  const {
    data: existingNews,
    loading,
    put,
  } = useFetch<News>(`/api/news/${id}`);

  useEffect(() => {
    if (existingNews) {
      setNews({
        title: existingNews.title,
        body: existingNews.body,
      });
    }
  }, [existingNews]);

  const handleUpdate = async () => {
    if (!news.title || !news.body || !id) return;
    await put(news); // uses PUT method from custom hook
    router.push("/news");
  };
  
  if (loading) return <p className="text-center mt-10">Duke u ngarkuar...</p>;
  
  return (
    <div className="pt-12">
      <div className="flex flex-col items-center justify-center min-h-screen gap-y-20">
        <div className="max-w-md px-10 mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-black text-2xl font-semibold mb-4">Përditëso News</h2>
          
          <input
            type="text"
            placeholder="Titulli"
            value={news.title}
            onChange={(e) => setNews({ ...news, title: e.target.value })}
            className="w-full px-4 py-2 mb-4 border rounded border-gray-400 text-black"
          />
          
          <textarea
            placeholder="Përmbajtja"
            value={news.body}
            onChange={(e) => setNews({ ...news, body: e.target.value })}
            className="w-full px-4 py-2 mb-4 border rounded border-gray-400 text-black"
          />
          
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Përditëso
          </button>
        </div>
      </div>
    </div>
  );
}

UpdateNews.displayName = "Update News | My Application";