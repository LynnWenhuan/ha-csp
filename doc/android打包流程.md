# Android 打包流程

## 执行脚本使主题设置生效

```bash
npm run native-theme
```

## 编写 .env 环境配置文件

* .env 为默认读取文件
* .env.uat 为测试环境
* .env.production 为生产环境

## 执行打包命令

* Windows

```bash
# 用户测试包，不可调试，bundle打包进apk
# ENVFILE 注意替换成实际使用的环境文件
在android目录下执行：
set ENVFILE=.env.uat && gradlew assembleRelease
# 开发调试包，bundle不打包进apk
gradlew assembleDebug
```

最后输出apk目录为

{ProjectRoot}/android/app/build/outputs/apk