export const FunCustomDate = (value) => {
  const currentDate = new Date();
  const setDate = currentDate.getDate();
  const setMonth = currentDate.getMonth();
  const setYear = currentDate.getFullYear();

  const getDate = setDate - value;
  const getMonth = setMonth - value;
  const expression = /^[1-9]$/;

  return `${getDate <= 0 ? '01' : getDate}/
  ${getMonth <= 0 ? (expression.test(getMonth) ? '01' : '0' + Math.abs(getMonth)) : expression.test(getMonth) ? '0' + Math.abs(getMonth) : Math.abs(getMonth)}/
  ${setYear}`;
};
