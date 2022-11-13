/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
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
    skuAttrValueList: Array<any>
    skuDefaultImg: string
    skuDesc: string
    skuImageList: Array<any>
    skuName: string
    skuSaleAttrValueList: Array<any>
    spuId: number
    tmId: number
    weight: string
    spuSaleAttrList: Array<any>
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

