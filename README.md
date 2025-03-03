# js-lttb

[English](#english) | [中文](#中文)

---

## English

### Introduction
`lttb` is a TypeScript implementation of the **Largest Triangle Three Buckets (LTTB)** downsampling algorithm. It reduces the number of data points while preserving the visual shape of the data, making it ideal for time-series visualization or large dataset processing.

### Features
- Efficiently downsamples large datasets.
- Preserves the visual characteristics of the original data.
- Written in TypeScript for type safety and better development experience.
- Easy to integrate into existing projects.

### Installation
```bash
npm install js-lttb
```
### Usage
```bash
import lttb from 'js-lttb';

const originalData = [
  [0, 1],
  [1, 5],
  [2, 3],
  // ... more data points
];

const downsampledData = lttb(originalData, 100); // Downsample to 100 points
console.log(downsampledData);
```

### Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## 中文 

### 简介 
lttb 是 最大三角形三桶（Largest Triangle Three Buckets, LTTB） 下采样算法的 TypeScript 实现。它可以在减少数据点数量的同时保留数据的视觉形状，非常适合用于时间序列可视化或大数据集处理。

### 特性
 - 高效地对大数据集进行下采样。
 - 保留原始数据的视觉特征。
 - 使用 TypeScript 编写，提供类型安全和更好的开发体验。
 - 易于集成到现有项目中。

### 安装
```bash
npm install js-lttb
```

### 使用方法
```bash
import lttb from 'js-lttb';

const originalData = [
  [0, 1],
  [1, 5],
  [2, 3],
  // ... 更多数据点
];

const downsampledData = lttb(originalData, 100); // 下采样至 100 个点
console.log(downsampledData);
```

### 贡献
欢迎贡献！如果你有任何建议或改进，请提交问题或拉取请求。