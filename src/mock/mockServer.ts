// 引入数据
import banners from "./banner.json"
import floors from "./floors.json"

// 使用 Mock
import Mock from "mockjs"

Mock.mock('/mock/banners', {
  code: 200,
  data: banners
})

Mock.mock('/mock/floors', {
  code: 200,
  data: floors
})

console.log('mock');
