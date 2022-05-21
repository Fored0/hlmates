const mockData = {
  recommend: ["IPhone 12 全新", "Ipad Air 95新", "Nike AF1电玩像素 未拆封"],
  roomLittleThing: {
    itemName: "宿舍小物件",
    icon: "",
    itemList: [{
        url: "https://img.alicdn.com/imgextra/i1/2645168508/O1CN01vSbZ8k2CiiTwBPfSw_!!2645168508.jpg", //图片地址
        description: "好物家居用品用具居家生活小百货家用大全小物件神器宿舍日用网红",
        price: "29.80",
        id: "1",
      },
      {
        url: "https://img.alicdn.com/imgextra/i4/4199603786/O1CN01NRwyLJ1dq2F9FK0Xx_!!0-item_pic.jpg_60x60q90.jpg", //图片地址
        description: "复古老式电话机座机宿舍装饰小摆件老上海民国怀旧古董老物件道具",
        price: "153.68",
        id: "2",
      },
      {
        url: "https://gd2.alicdn.com/imgextra/i3/2209860791115/O1CN01zVTEGx1K6iL2ykM2C_!!2209860791115.jpg_50x50.jpg_.webp", //图片地址
        description: "可爱少女心小物件治愈增加提升幸福感家用居家女朋友礼物好物宿舍",
        price: "56.62",
        id: "3",
      },
      {
        url: "https://gd1.alicdn.com/imgextra/i2/2212132530323/O1CN01GHTZGP1EFyeGtVXQh_!!2212132530323.jpg_50x50.jpg_.webp", //图片地址
        description: "亚克力板激励学习宿舍桌面书桌布置装饰摆件ins风幸福感小物件女",
        price: "18.60",
        id: "4",
      },

    ],
  },
  digital: {
    itemName: "数码产品",
    icon: "",
    itemList: [{
        url: "https://img2.baidu.com/it/u=2397694729,1921989363&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=356", //图片地址
        description: "SONY A99",
        price: "3997.23",
        id: "6",
      },
      {
        url: "https://img1.baidu.com/it/u=2117544579,4003352421&fm=253&fmt=auto&app=138&f=JPEG?w=636&h=500", //图片地址
        description: "数码照相机-z600(红色)",
        price: "4728.55",
        id: "7",
      },
      {
        url: "https://img.alicdn.com/imgextra/i2/2256022143/O1CN01LgdG8d1RhXVMM0yWH_!!2256022143.jpg_60x60q90.jpg", //图片地址
        description: "一加10Pro",
        price: "4199",
        id: "44",
      },
      {
        url: "https://img.alicdn.com/imgextra/i3/1776456424/O1CN01985x8w1xKF241wO7M_!!1776456424.jpg_60x60q90.jpg", //图片地址
        description: "iphone13 ProMax",
        price: "8800.00",
        id: "55",
      }
    ],
  },
  clothes: {
    itemName: "鞋服产品",
    icon: "",
    itemList: [{
        url: "https://img.alicdn.com/imgextra/i4/4256425224/O1CN01Jr4woA1oSdnuAXTSL_!!0-item_pic.jpg_60x60q90.jpg", //图片地址
        description: "VALENTINO华伦天奴 女士 ROCKSTUD铆钉高跟鞋凉鞋",
        price: "7900",
        id: "8",
      },
      {
        url: "https://gd4.alicdn.com/imgextra/i4/1935918269/O1CN01tAikG72AxFouBQdcR_!!1935918269.jpg_50x50.jpg_.webp", //图片地址
        description: "Air Jordan 11 Low AJ11黑色大魔王复古篮球鞋AV2187-001",
        price: "1399",
        id: "9",
      },
      {
        url: "https://img.alicdn.com/imgextra/i2/3327042818/O1CN01Sp6CDU1Wggs7yagjv_!!3327042818.jpg_60x60q90.jpg", //图片地址
        description: "乔丹AJ36郭艾伦球员配色男子篮球鞋DM0796",
        price: "1499.00",
        id: "6",
      },
      {
        url: "https://gd3.alicdn.com/imgextra/i2/0/O1CN01TinuFk2AxFpEs9Qtm_!!0-item_pic.jpg_50x50.jpg_.webp", //图片地址
        description: "良辰美景",
        price: "1629.00",
        id: "6",
      },
    ],
  },
  book: {
    itemName: "书籍推荐",
    icon: "",
    itemList: [{
        url: "https://img.alicdn.com/imgextra/i4/2765587779/O1CN013HGi4j27KphBSVU1t_!!0-item_pic.jpg_60x60q90.jpg", //图片地址
        description: "资治通鉴 精装全集原著正版书 原文+译文+注解 文白对照 白话版青少年版 历史书籍 畅销书排行榜 中国古典文学 资质通鉴",
        price: "18.50",
        id: "10",
      },
      {
        url: "https://img.alicdn.com/imgextra/i1/101450072/O1CN01KCsAgk1CP1G0nhXq2-101450072.jpg_60x60q90.jpg", //图片地址
        description: "JavaScript权威指南第7版+JavaScript高级程序设计第4版 共2册 JS入门到精通前端网页开发工程师书JavaScript实战正版书籍",
        price: "176.90",
        id: "11",
      },
      {
        url: "https://img.alicdn.com/imgextra/i2/6000000005245/O1CN01YXxOmF1ocG76QS9CP_!!6000000005245-0-picassoopen.jpg_60x60q90.jpg", //图片地址
        description: "挪威的森林软精装 正版包邮 村上春树经典文学代表作",
        price: "25.90",
        id: "6",
      },
      {
        url: "https://img.alicdn.com/imgextra/i1/1049653664/TB1H4o.KVXXXXXBaXXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg", //图片地址
        description: "MySQL技术内幕：InnoDB存储引擎（第2版）（畅销书全新升级，版广获好评，专家撰写，国内外数",
        price: "59.20",
        id: "6",
      },
    ],
  },
  swiperList: [{
      url: 'https://gw.alicdn.com/bao/uploaded/i1/2145487409/O1CN015ZB6Vk24bN4Xs1eN5_!!0-item_pic.jpg_300x300q90.jpg_.webp'
    },
    {
      url: 'https://gw.alicdn.com/bao/uploaded/i4/2135860027/O1CN01oeBMPP1C4PPUyH83M_!!0-saturn_solar.jpg_300x300q90.jpg_.webp'
    }, {
      url: 'https://gw.alicdn.com/bao/uploaded/i3/1740501542/O1CN01wlGibE1NGHSpLiuYf_!!1740501542.jpg_300x300q90.jpg_.webp'
    }, {
      url: 'https://gw.alicdn.com/bao/uploaded/i1/681825890/TB1m_xQdloHL1JjSZFwYXH6vpXa_M2.SS2_300x300q90.jpg_.webp'
    },
    {
      url: 'https://gw.alicdn.com/bao/uploaded/i1/35203596/O1CN01hvkFsf1cR0wt9Dxnz_!!0-saturn_solar.jpg_300x300q90.jpg_.webp'
    }
  ]


};

export default mockData;