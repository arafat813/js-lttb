"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lttb = lttb;
/**
 * LTTB (Largest Triangle Three Buckets) 降采样算法
 * @param data 输入数据，包含时间和值字段以及其他可选字段
 * @param targetPoints 目标点数
 * @param xKey X 轴字段名（默认 'time'）
 * @param yKey Y 轴字段名（默认 'value'）
 * @returns 降采样后的数据点，保留所有原始字段
 */
function lttb(data, targetPoints, xKey = 'time', yKey = 'value') {
    if (!Array.isArray(data) || data.length <= 2 || targetPoints >= data.length) {
        return data.slice();
    }
    if (targetPoints < 2) {
        return [data[0], data[data.length - 1]];
    }
    const normalizedData = data.map((point) => {
        const x = Number(point[xKey]);
        const y = Number(point[yKey]);
        if (isNaN(x) || isNaN(y)) {
            throw new Error(`Invalid number for ${String(xKey)} or ${String(yKey)}`);
        }
        return { x, y, original: point };
    });
    const bucketCount = targetPoints - 2;
    const bucketSize = (data.length - 2) / bucketCount;
    const sampled = [normalizedData[0]];
    const triangleArea = (p1, p2, p3) => Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
    for (let i = 0; i < bucketCount; i++) {
        const startIdx = Math.floor(1 + i * bucketSize);
        const endIdx = Math.min(Math.floor(1 + (i + 1) * bucketSize), data.length - 1);
        const nextStart = endIdx;
        const nextEnd = Math.min(Math.floor(1 + (i + 2) * bucketSize), data.length - 1);
        const nextCount = Math.max(nextEnd - nextStart, 1);
        const nextAvg = normalizedData.slice(nextStart, nextEnd).reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
        const nextAvgX = nextAvg.x / nextCount;
        const nextAvgY = nextAvg.y / nextCount;
        let maxArea = -1;
        let selectedPoint = null;
        const prevPoint = sampled[sampled.length - 1];
        for (let j = startIdx; j < endIdx; j++) {
            const area = triangleArea(prevPoint, normalizedData[j], {
                x: nextAvgX,
                y: nextAvgY,
                original: {},
            });
            if (area > maxArea) {
                maxArea = area;
                selectedPoint = normalizedData[j];
            }
        }
        if (selectedPoint)
            sampled.push(selectedPoint);
    }
    sampled.push(normalizedData[data.length - 1]);
    return sampled.map((point) => point.original);
}
