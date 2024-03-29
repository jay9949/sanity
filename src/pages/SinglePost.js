import { useState, useEffect } from "react";
import client from "../client";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage{
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide text-center mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <button className="mt-8">
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            >
              Back
            </Link>
          </button>
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 mt-5 md:text-6xl lg:text-8xl text-center ">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__img rounded-t"
            />
          )}
          <p className="flex justify-end text-xl">By Jay Suthar</p>

          <div className="block__content pb-7">
            <BlockContent
              blocks={singlePost.body}
              projectId="hvdtmo58"
              dataset="production"
            />
          </div>

          <button>
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            >
              Read more articles
            </Link>
          </button>
        </section>
      )}
    </>
  );
};

export default SinglePost;
