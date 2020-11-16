export const calculateColor = (numbers, negoCount) => {
  if (Math.min(...numbers) < 2 || 10 < Math.max(...numbers)) {
    throw Error("카드 숫자는 2 ~ 10 사이로 지정 되어야 합니다.");
  }

  if (!(0 <= negoCount && negoCount <= 3)) {
    throw Error("협상 카드 개수는 0 ~ 3 사이로 지정 되어야 합니다.");
  }

  if (numbers.length === 0 && negoCount === 0) {
    return 0;
  }

  let bonus = 0;
  if (numbers.length >= 8) {
    bonus = 20;
  }

  return (
    (numbers.reduce((acc, cur) => acc + cur, 0) - 20) * (negoCount + 1) + bonus
  );
};
