import Image from "next/image";
import { motion } from "framer-motion";
import CustomImage from "../assets/images/image.jpg";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import { Rocket, BarChart, ShieldCheck } from "lucide-react";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export interface Post {
  id: string;
  title: string;
  body: string;
}

export default function Home() {
  const { data: initialPosts, loading } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts);
    }
  }, [initialPosts]);

  const handleDelete = (id: string) => {
    if (posts) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <div className="relative bg-purple-600 min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
          <motion.div
            className="max-w-3xl z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mirë se Vini në Aplikacionin Tonë!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Ndërtoni aplikacione të fuqishme dhe të shpejta me Next.js
            </p>
            <Button text="Mëso Më Shumë" variant="secondary" onClick={() => alert("Redirecting...")} />
          </motion.div>
        </div>

        {/* About Section */}
        <div className="relative bg-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-purple-600 mb-6">
                Rreth Nesh
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Ne krijojmë aplikacione të avancuara duke përdorur teknologjitë më të fundit. Fokusimi ynë kryesor është të ofrojmë produkte të optimizuara dhe SEO-friendly.
              </p>
            </motion.div>

            <motion.div
              className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={CustomImage}
                alt="Mountain landscape with flowers"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-purple-600 mb-8">
                Karakteristikat Kryesore
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <Rocket className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Shpejtësi & Performancë
                </h3>
                <p className="text-gray-600">
                  Aplikacione moderne dhe të shpejta për përdoruesit
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <BarChart className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SEO e Avancuar
                </h3>
                <p className="text-gray-600">
                  Rankim më i mirë në motorët e kërkimit
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Siguri Maksimale
                </h3>
                <p className="text-gray-600">
                  Mbrojtje e avancuar e të dhënave të përdoruesit
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-purple-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-purple-600 mb-6">
                Shërbimet Tona
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Ofrojmë një gamë të gjerë shërbimesh duke përfshirë zhvillimin e aplikacioneve web, optimizimin për SEO dhe integrimin me API të jashtme
              </p>
              <Button text="Shikoni Shërbimet" variant="primary" onClick={() => alert("Redirecting...")} />
            </motion.div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-purple-600 mb-6">Blogs</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <div className="col-span-full flex justify-center">
                  <CircularProgress className="text-purple-600" />
                </div>
              ) : (
                posts &&
                posts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold text-purple-900 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.body}</p>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Fshij Postin
                    </button>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-600 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12">
                Kontaktoni Me Ne
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg">Email: contact@mycompany.com</p>
                <p className="text-lg">Tel: +383 123 456 789</p>
                <p className="text-lg">Adresa: Prishtinë, Kosovë</p>
              </div>
              <Button 
                text="Na Kontaktoni" 
                variant="secondary" 
                onClick={() => alert("Opening Contact Form...")} 
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

Home.displayName = "My Application";
