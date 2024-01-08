const getHashtags = async () => {
  const hashtags = await fetch("http://localhost:8123/v1/search/hashtags");

  if (!hashtags.ok) {
    throw new Error("Failed to fetch data");
  }
  return hashtags.json();
};

export default getHashtags;
