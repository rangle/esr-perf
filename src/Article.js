import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { contentfullFetch } from "./utils";

const query = (slug) => `
{
  articleCollection(where: { slug: "${slug}" }) {
    items {
      slug
      content
      title
    }
  }
}
`;
export default function Article() {
  const [article, setArticle] = useState(null);
  const params = useParams();
  console.log(process.env);
  useEffect(() => {
    contentfullFetch(query(params.slug)).then((data) =>
      setArticle(data.articleCollection.items[0])
    );
  }, [params]);

  return (
    <main>
      {!article && "Loading..."}
      {article && (
        <>
          <h1>{article.title}</h1>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </>
      )}
    </main>
  );
}
