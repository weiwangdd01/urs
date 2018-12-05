/**
 * 把数据格式化成 千分位  eg:1232,234.99
 */
export const thousandFormat = num => {
  if (!num) {
    return 0;
  }
  const str = typeof num === "string" ? num : num.toString();
  const re = /\d{1,3}(?=(\d{3})+$)/g;
  const n1 = str.replace(/^(\d+)((\.\d+)?)$/, (s, s1, s2) => {
    return s1.replace(re, "$&,") + s2;
  });
  return n1;
};
