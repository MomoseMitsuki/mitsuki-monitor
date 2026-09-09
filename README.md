## 基础业务需求

- **SDK监控(性能/异常)**
- **数据处理**
- **前端展示**

## 技术需求

- **多框架SDK支持**: 参考Sentry设计, SDK应该提供多种前端框架的支持(JS, React, Vue)
- **数据服务后端**: 后端使用Nest.js搭建框架, 数据应该能够高效的接受前端数据上报请求
- **数据可视化平台**: 展示各种数据流, 各种数据图表等等

## 技术选型

- 主要参考Sentry设计, 项目整体采用**pnpm monorepo**进行管理
- TS提供类型支持
- SDK适配不同的框架, 主要实现监控采集数据, 主要是性能指标和异常数据指标

## 监控内容

- 性能监控: 通过谷歌web-vitals和Performance API收集Web性能指标
- 错误异常监控
- 埋点上报

## 数据采集和后端服务

- 后端框架: Nest.js构建后端框架
- 数据处理与存储: 使用列式数据库clickhouse进行数据存储
- 数据上报

## 数据看板(前端展示)

使用React + tailwind + shadcn/ui进行数据展示

## 项目工程架构

```
.
├─apps
│  ├─backend
│  │  ├─dsn-server
│  │  └─monitor-server
│  └─frontend
│      └─monitor
├─demos
│  ├─react
│  ├─vanilla
│  └─vue
└─packages
    ├─browser
    ├─browser-utils
    ├─core
    ├─react
    ├─utils
    └─vue
```
