const calcLine = (cardNumbers) => {
  if (cardNumbers.length === 0) return 0;

  const multiply = cardNumbers.filter((card) => card > 10).length + 1;
  const points = cardNumbers.filter((card) => card <= 10);

  return (
    points.reduce((acc, cur) => acc + cur, -20) * multiply +
    (points.length >= 8 ? 20 : 0)
  );
};

export default calcLine;
