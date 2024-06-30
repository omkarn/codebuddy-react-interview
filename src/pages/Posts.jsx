import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch("https://codebuddy.review/posts");
    const json = await data.json();
    setPosts(json.data);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid gap-10 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.length &&
        posts.map((post) => (
          <div
            key={post.id}
            className="erounded-md flex h-[430px] w-[330px] flex-col justify-between bg-white p-5"
          >
            <div className="flex items-center justify-center gap-5">
              <img
                src={post.avatar}
                className="h-[75px] w-[75px] rounded-[50%] border-2 border-[#633BBC]"
              />
              <p className="font-bold">{post.firstName + " " + post.lastName}</p>
            </div>
            <p className="from-neutral-500">{post.writeup}</p>
            <img className="h-[180px] w-[280px] rounded-md" src={post.image} />
          </div>
        ))}
    </div>
  );
};

export default Posts;
