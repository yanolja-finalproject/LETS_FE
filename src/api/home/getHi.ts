const getHi = async () => {
  const result = await fetch("http://localhost:8123/api/hi");

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getHi;
