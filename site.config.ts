import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 1. 你的 Notion 主页 ID（最关键的修改！）
  rootNotionPageId: '2c7f30ab39d88310b46f01ed239f175d',

  // 不限制工作区，保持 null 即可
  rootNotionSpaceId: null,

  // 2. 网站基本信息
  name: 'Archives of Alkhaios', // 网站名称（阿尔凯奥斯档案馆）
  domain: 'alkhaios.cn', // 填入你在阿里云买的域名（如果没有确定，可以先填 'archives-of-alkhaios'）
  author: '凛虚Unravel', // 你的作者名/笔名

  // 3. 网站分享简介（在微信/社交软件分享时显示的摘要）
  description: '阿尔卡伊档案库',

  // 4. 社交账号（把原作者的账号全改成 null，防止页面底部显示别人的社交链接）
  twitter: null,
  github: null,
  linkedin: null,
  // newsletter: '#', 
  // youtube: '#', 

  // 默认图标和封面
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // 预览图片支持
  isPreviewImageSupportEnabled: true,

  // Redis 缓存（免费版 Vercel 保持 false 即可）
  isRedisEnabled: false,

  // 自定义 URL 别名（暂时不需要，保持 null）
  pageUrlOverrides: null,

  // 导航栏样式
  navigationStyle: 'default'
})
