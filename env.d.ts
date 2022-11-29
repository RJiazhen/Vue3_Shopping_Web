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

// 用户信息数据类型
interface userInfo {
  birthday: null | string,
  createTime: string,
  email: null | string,
  gender: null | string,
  headImg: string,
  id: number,
  loginName: string,
  name: string,
  nickName: string,
  openId: null | number,
  operateTime: null | string,
  passwd: string
  phoneNum: string
  status: number
  userLevel: null | number
}

// 用户地址数据类型
interface address {
  consignee: string
  fullAddress: string
  id: number
  isDefault: "0" | "1"
  phoneNum: string
  provinceId: number
  regionId: number
  userAddress: string
  userId: number
}

// 订单信息类型
interface orderInfo {
  activityReduceAmount: number
  couponInfoList: Array<any>
  detailArrayList: Array<{
    activityRule: any
    couponInfoList: any
    createTime: any
    hasStock: any
    id: any
    imgUrl: string
    orderId: any
    orderPrice: number
    refundStatus: string
    refundStatusString: string
    skuId: number
    skuName: string
    skuNum: number
    sourceId: number
    sourceType: string
    splitActivityAmount: any
    splitCouponAmount: any
    splitTotalAmount: any
  }>,
  orderDetailVoList: Array<object>
  originalTotalAmount: number
  totalAmount: number
  totalNum: number
  tradeNo: string
  userAddressList: Array<address>
}

// 支付信息
interface payInfo {
  codeUrl: string,
  orderId: number,
  resultCode: string,
  totalFee: number,
}

// 订单数据
interface myOrder {
  current: number
  pages: number
  records: Array<{
    activityReduceAmount: any
    consignee: string
    consigneeTel: string
    couponAmount: any
    couponInfo: any
    createTime: string
    deliveryAddress: string
    expireTime: string
    feightFee: any
    feightFeeReduce: any
    id: 16885
    imgUrl: any
    operateTime: any
    orderComment: string
    orderDetailList: Array<{
      activityRule: any
      couponInfoList: any
      createTime: string
      hasStock: any
      id: number
      imgUrl: string
      orderId: number
      orderPrice: number
      refundStatus: string
      refundStatusString: string
      skuId: number
      skuName: string
      skuNum: number
      sourceId: number
      sourceType: string
      splitActivityAmount: number
      splitCouponAmount: number
      splitTotalAmount: number
    }>
    orderDetailVoList: any
    orderStatus: string
    orderStatusName: string
    originalTotalAmount: any
    outTradeNo: string
    parentOrderId: any
    paymentWay: string
    processStatus: string
    provinceId: any
    refundableTime: any
    totalAmount: number
    trackingNo: any
    tradeBody: string
    userId: number
    wareId: any
  }>
  searchCount: true
  size: number
  total: number
}
