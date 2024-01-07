const hashtagStyle = (rank: number) => {
  const fontSize = `${10 + (10 - rank)}px`;
  const fontWeight = rank < 3 ? "bold" : "normal";

  return { fontSize, fontWeight };
};

export default hashtagStyle;
