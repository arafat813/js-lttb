// 通用的数据点类型，允许额外字段
export interface DataPoint {
  [key: string]: any;
}

// 内部使用的标准化点类型，仅用于计算
export interface NormalizedPoint<T> {
  x: number;
  y: number;
  original: T;
}

// 函数声明
export declare function lttb<T extends DataPoint>(
  data: T[],
  targetPoints: number,
  xKey?: keyof T,
  yKey?: keyof T
): T[];
