export const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

export const calcPosition: (...args: number[]) => number = (x, x1, y1, x2, y2) => {
  // 计算斜率
  const slope = (y2 - y1) / (x2 - x1);
  // 计算y值
  return y1 + slope * (x - x1);
};
