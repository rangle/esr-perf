import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./articles.json";
import { contentfullFetch } from "./utils";
const query = `
{
  articleCollection {
    items {
      slug
      title
    }
  }
}
`;
export default function Articles() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    contentfullFetch(query).then((data) =>
      setArticles(data.articleCollection.items)
    );
  }, []);

  if (!articles) {
    return;
  }
  return (
    <main>
      <h2>Articles list</h2>
      {!articles && "Loading..."}
      {articles && (
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
