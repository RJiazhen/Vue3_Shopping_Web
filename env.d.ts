/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,
  @typescript-eslint / ban - types
  const component: DefineComponent<{},
    {},
    any>
  export default component
}
// 请求返回数据类型
interface result {
  code: number,
  data: unknown,
  message: string,
  ok: boolean
}

// 轮播图数据类型
interface carouselItem {
  id: string,
  imgUrl: string,
  url: string
}

// 商品信息变量的相关接口
interface goodsInfo {
  categoryView: {
    category1Id?: number
    category1Name?: string
    category2Id?: number
    category2Name?: string
    category3Id?: number
    category3Name?: string
    id: number
  },
  skuInfo: {
    category3Id?: number
    createTime: string
    id: number
    isSale: number
    price: number
    skuAttrValueList: Array<{
      attrId: number
      attrName: string
      id: number
      skuId: number
      valueId: number
      valueName: string
    }>
    skuDefaultImg: string
    skuDesc: string
    skuImageList: Array<{
      id: number
      imgName: string
      imgUrl: string
      isDefault: string
      skuId: number
      spuImgId: number
    }>
    skuName: string
    skuSaleAttrValueList: Array<{
      id: number
      saleAttrId: number
      saleAttrName: string
      saleAttrValueId: number
      saleAttrValueName: string
      skuId: number
      spuId: number
    }>
    spuId: number
    tmId: number
    weight: string
    spuSaleAttrList: Array<goodsInfo["spuSaleAttrList"]>
    valuesSkuJson: string
  },
  spuSaleAttrList: Array<{
    baseSaleAttrId: number
    id: number
    saleAttrName: string
    spuId: number
    spuSaleAttrValueList: Array<
      {
        baseSaleAttrId: number
        id: number
        isChecked: string
        saleAttrName: string
        saleAttrValueName: string
        spuId: number
      }
    >
  }>,
  price: number,
  valuesSkuJson: string,
}

// 购物车列表数据类型
interface cartListResult {
  code: number,
  message: string,
  data: Array<{
    cartInfoList: Array<{
      id: number,
      userId: string,
      skuId: number,
      cartPrice: number,
      skuNum: number,
      imgUrl: string,
      skuName: string,
      isChecked: number,
      createTime: string,
      operateTime: string,
      isOrdered: number,
      orderTime: any,
      sourceType: string,
      sourceId: number,
      skuPrice: number,
      couponInfoList: any
    }>,
    activityRuleList: any,
    createTime: string
  }>,
  ok: true
}
