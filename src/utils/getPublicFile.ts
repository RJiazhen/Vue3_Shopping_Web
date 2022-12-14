// 获取public静态资源，传入一个url字符串，然后将其转换为被完整解析的静态资源 URL
// 用来解决无法打包mockjs返回地址的本地图片
export const getPublicFile = (url: string) => {
  return new URL(url, import.meta.url).href
}
