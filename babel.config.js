module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置 babel-plugin-import 自动引入样式
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
    ]
  ]
}
