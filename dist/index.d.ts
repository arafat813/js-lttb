import { DataPoint } from './types';
/**
 * LTTB (Largest Triangle Three Buckets) 降采样算法
 * @param data 输入数据，包含时间和值字段以及其他可选字段
 * @param targetPoints 目标点数
 * @param xKey X 轴字段名（默认 'time'）
 * @param yKey Y 轴字段名（默认 'value'）
 * @returns 降采样后的数据点，保留所有原始字段
 */
declare function lttb<T extends DataPoint>(data: T[], targetPoints: number, xKey?: keyof T, yKey?: keyof T): T[];
export { lttb };
