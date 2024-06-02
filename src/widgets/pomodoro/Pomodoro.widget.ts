import { BackgroundWidget, WidgetKeyword } from '@widget-js/core'

const PomodoroWidget = new BackgroundWidget({
  name: 'itime.fun.pomodoro',
  title: { 'zh-CN': '番茄钟' },
  description: { 'zh-CN': '' },
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  previewImage: '修改为组件预览图地址',
  backgroundThrottling: false,
  path: '/widget/pomodoro',
  requiredAppVersion: '24.6.2',
  configPagePath: '/widget/config/pomodoro',
  browserWindowOptions: {
    transparent: false,
    frame: false,
    backgroundMaterial: 'acrylic',
    backgroundThrottling: false,
  },
})

export default PomodoroWidget
