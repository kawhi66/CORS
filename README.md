# CORS

CORS 是一个 W3C 标准，全称是 “跨域资源共享”（Cross-Origin resource sharing）。这是一个 CORS 的测试项目，服务由 Express 提供，客户端是一个简单的页面，包含几个点击之后会发送请求的按钮。

# Usage

执行下面的命令将代码拷贝到本地：

```JavaScript
git clone git@github.com:kawhi66/CORS.git
```

执行下面的命令进行依赖安装：

```JavaScript
cd CORS
yarn --registry=http://registry.npm.taobao.org
```

执行下面的命令启动服务：

```JavaScript
yarn server
```

新开一个命令行界面，执行下面的命令启动客户端：

```JavaScript
yarn client
```