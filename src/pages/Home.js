import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaClock } from "react-icons/fa";
dayjs.extend(relativeTime);

const Home = () => {
  const { data, error, loading } = useFetch("http://localhost:1337/api/posts");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div className="flex flex-col gap-20">
      {data.map((post, index) => (
        <div data-aos="fade-right" data-aos-delay={
          index * 150
        } key={post.id}>
          <Link className="inline-flex hover:text-rose-500 active:text-rose-600 dark:text-rose-500 dark:hover:text-violet-500 dark:active:text-blue-500 transition-all" to={`/post/${post.id}`}>
            <h2 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-1 lg:mb-5  pb-2">
              {post.attributes.title}
            </h2>
          </Link>

          <p className="line-clamp-3 text-lg mb-4">{post.attributes.body}</p>
          <div className="opacity-60 text-sm flex items-center gap-1.5">
            <FaClock className="text-xs" />
            {dayjs().to(post.attributes.createdAt)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
