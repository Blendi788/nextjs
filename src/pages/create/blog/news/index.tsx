import { News } from "@/api/models/News";
import useFetch from "hooks/useFetch";
import router from "next/router";
import { useState } from "react";

export default function CreateNews() {
  const [newNews, setNewNews] = useState<{ title: string; body: string }>({
    title: "",
    body: "",
  });
  const post = useFetch<News[]>("/api/news");

  const handleCreate = async () => {
    if (!newNews.title || !newNews.body) return;
    await post.post(newNews);
    setNewNews({ title: "", body: "" });
    router.push("/news");
  };

  return (
    <div className="pt-12">
      <div className="flex flex-col items-center justify-center min-h-screen gap-y-20">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-black text-2xl font-semibold mb-4">Shto News të Ri</h2>
          <input
            type="text"
            placeholder="Titulli"
            value={newNews.title}
            onChange={(e) =>
              setNewNews({ ...newNews, title: e.target.value })
            }
            className="w-full px-4 py-2 mb-4 border rounded placeholder-gray-400 text-black"
          />
          <textarea
            placeholder="Përmbajtja"
            value={newNews.body}
            onChange={(e) =>
              setNewNews({ ...newNews, body: e.target.value })
            }
            className="w-full px-4 py-2 mb-4 border rounded placeholder-gray-400 text-black"
          />
          <button
            onClick={handleCreate}
            className="w-full bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800 transition"
          >
            Shto
          </button>
        </div>
      </div>
    </div>
  );
}

CreateNews.displayName = "Create News | My Application";