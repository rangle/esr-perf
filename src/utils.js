export const contentfullFetch = async (query) => {
  const response = await window.fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFULL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFULL_SECRET_KEY}`,
      },
      // send the GraphQL query
      body: JSON.stringify({ query }),
    }
  );
  const { data, errors } = await response.json();

  if (errors || data.articleCollection.items.length === 0) {
    console.error(errors);
    return null;
  }

  return data;
};
