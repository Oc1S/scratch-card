type Point = Record<'x' | 'y', number>;

export const getDistance = (p1: Point, p2: Point) => {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};

export const calcPosition = (x: number, p1: Point, p2: Point) => {
  // 斜率
  const slope = (p1.y - p2.y) / (p1.x - p2.x);
  console.log(slope, p1.y - p2.y, p1.x - p2.x, p1.y + slope * (x - p1.x));
  // y值
  return p1.y + slope * (x - p1.x);
};
