## 第一章，入门
### 1. 创建工程
#### 使用脚手架`vue-cli`创建
##### 安装脚手架`vue-cli`
- Node 版本要求
Vue CLI 4.x 需要 [Node.js](https://nodejs.org/) v8.9 或更高版本 (推荐 v10 以上)。你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
```sh
npm install -g @vue/cli
# 或者下面这行
yarn global add @vue/cli
```
-  升级
如需升级全局的 Vue CLI 包，请运行：
```
npm update -g @vue/cli
# 或者
yarn global upgrade --latest @vue/cli
```
- 查看本地脚手架版本
`vue -V`/`vue --version`
版本应大于5.1.0 可以创建vue3项目--具体没试过
- 坑：
```
vue : 无法加载文件 xxxxx\nodejs\vue.ps1。未对文件 xxxxx\nodejs\vue.ps1 进行数字签名。无法在当前系统上运行该脚本。有关运行脚本和设置执行策略的详细信息，请参阅 https:/go.microsoft.com/fwlin
k/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ vue --version
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
- 原因：
**由于使用的是powershell，存在powershell不能或禁止执行脚本**
powershell无疑是对安全充分考虑，把脚本的执行分成几种策略
**4种常见的策略：**
- `Restricted`： （默认策略）禁止运行任何脚本和配置文件。
- `AllSigned` ：可以运行脚本，但要求所有脚本和配置文件由可信发布者签名，包括在本地计算机上编写的脚本。
- `RemoteSigned` ：可以运行脚本，但要求从网络上下载的脚本和配置文件由可信发布者签名； 不要求对已经运行和已在本地计算机编写的脚本进行数字签名。
- `Unrestricted` ：可以运行未签名脚本。（危险！）
**解决办法：**
获取当前的执行策略`Get-ExecutionPolicy`命令不区分大小写
在命令框输入`set-ExecutionPolicy RemoteSigned`
在`PowerShell`中输入会出现如下图，选择`y`或者`a`即可
- **创建工程**
```sh
vue create hello-world
```
#### - 使用`Vite`创建
`Vite`新一代前端构建工具-老的是`webpak`
优势：
- 开发环境中，无需打包，快速冷启动
- 轻量，快速的热重载（HMR）
- 按需编译，不再等待整个应用编译完成
- **创建工程**
```sh
npm init vite-app project-name
```

```log
PS C:\Users\admin> npm init vite-app vue3_study_vite
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Need to install the following packages:
  create-vite-app
Ok to proceed? (y) y
npm WARN deprecated create-vite-app@1.21.0: create-vite-app has been deprecated. run `npm init @vitejs/app` or `yarn create @vitejs/app` instead.
Scaffolding project in C:\Users\admin\vue3_study_vite...

Done. Now run:

  cd vue3_study_vite
  npm install (or `yarn`)
  npm run dev (or `yarn dev`)
```

```sh
cd <project-name>
npm install
```