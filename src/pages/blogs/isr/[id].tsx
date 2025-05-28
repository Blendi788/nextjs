import { GetStaticPaths, GetStaticProps } from "next";

// Krijon rrugët për ISR (nuk japim ID të parapërgatitura)
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // Nuk japim asnjë ID të parapërkthyer
    fallback: "blocking", // Rendohet në kohë reale dhe ruhet për përdorime të ardhshme
  };
};

// Merr të dhënat për një post me ID të caktuar
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await res.json();
  return {
    props: { post }, // I dërgojmë komponentit postin
    revalidate: 10, // Rifreskohet pas 10 sekondash në sfond
  };
};

export default function Blog({ post }: any) {
  return (
    <div className="pt-12 px-20 flex flex-col items-center justify-center min-h-screen gap-y-20">
      <h1 className="text-4xl font-bold pt-20 pb-6 text-black text-center">
        Incremental Static Regeneration (ISR) për Post ID: {post.id}
      </h1>
      <h2 className="text-4xl text-center font-bold mb-6 text-yellow-600 line-clamp-2 uppercase">
        {post.title}
      </h2>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <p className="text-sm text-gray-500 mt-4">
        Rifreskohet automatikisht çdo 10 sekonda në sfond.
      </p>
    </div>
  );
}

Blog.displayName = "Blog | My Application";
