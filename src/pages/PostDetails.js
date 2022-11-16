import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaClock } from "react-icons/fa";
dayjs.extend(relativeTime);

const PostDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:1337/api/posts/${id}`);

  if (data) {
    return (
      <div key={data.id}>
        <div data-aos="fade-left" className="inline-flex" to={`/post/${data.id}`}>
          <h2 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-6 text-rose-500 transition pb-2">
            {data.attributes.title}
          </h2>
        </div>

        <p data-aos="fade-left" data-aos-delay="150" className="text-lg mb-4">
          {data.attributes.body}
        </p>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="opacity-60 text-sm flex items-center gap-1.5"
        >
          <FaClock className="text-xs" />
          {dayjs().to(data.attributes.createdAt)}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PostDetails;
