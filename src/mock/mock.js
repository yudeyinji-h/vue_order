import Mock from 'mockjs';
Mock.mock("/footer", "post", {
    "result": [
        {
            "id": 1,
            "name": "首页",
            "img": "../../src/assets/icon/h2.png",
            "ckimg": "../../src/assets/icon/h1.png",
            "action": "/home",
            "isck": true
        },
        {
            "id": 2,
            "name": "发现",
            "img": "../../src/assets/icon/f2.png",
            "ckimg": "../../src/assets/icon/f1.png",
            "action": "/find",
            "isck": false
        },
        {
            "id": 3,
            "name": "订单",
            "img": "../../src/assets/icon/d2.png",
            "ckimg": "../../src/assets/icon/d1.png",
            "action": "/order",
            "isck": false
        },
        {
            "id": 4,
            "name": "我的",
            "img": "../../src/assets/icon/m2.png",
            "ckimg": "../../src/assets/icon/m1.png",
            "action": "/my",
            "isck": false
        }
    ]
});
Mock.mock("/useradd", "post", {
    'result': [
        {
            'name': "吕先生",
            "tel": "18789469941",
            "address": "西安市长安区西安邮件大学1号楼"
        },
        {
            'name': "吕先生",
            "tel": "18789469941",
            "address": "西安市长安区西安邮件大学1号楼"
        },
        {
            'name': "吕先生",
            "tel": "18789469941",
            "address": "西安市长安区西安邮件大学1号楼"
        }
    ]
});
Mock.mock("/fadd", "post", {
    'result': [
        {
            "name": "政法大学"
        },
        {
            "name": "陕西师大"
        },
        {
            "name": "西北大学"
        },
        {
            "name": "外国语大学"
        },
        {
            "name": "政法大学"
        },
        {
            "name": "陕西师大"
        },
        {
            "name": "西北大学"
        },
        {
            "name": "外国语大学"
        },
        {
            "name": "政法大学"
        },
        {
            "name": "陕西师大"
        },
        {
            "name": "西北大学"
        },
        {
            "name": "外国语大学"
        }
    ]
});
Mock.mock("/searchome", "post", {
    "result|1": ["谢家鱼庄  满35减20", "麻辣小龙虾  满55减50", "老李家泡沫  满25减10"]
});
Mock.mock("/find", "post", {
    "result": [
        {
            "name": "饺子"
        },
        {
            "name": "包子"
        },
        {
            "name": "麻辣烫"
        },
        {
            "name": "鱼香肉丝"
        },
        {
            "name": "土豆片回锅肉"
        },
        {
            "name": "酸辣粉"
        },
        {
            "name": "西红柿炒鸡蛋"
        },
        {
            "name": "炒年糕"
        },
        {
            "name": "辣白菜至尊"
        },
        {
            "name": "凉菜"
        },
        {
            "name": "啤酒"
        }
    ]
});
Mock.mock("/ranhis", "post", {
    "result": [
        {
            "name": "鱼香肉丝"
        },
        {
            "name": "土豆片回锅肉"
        },
        {
            "name": "酸辣粉"
        },
        {
            "name": "西红柿炒鸡蛋"
        },
        {
            "name": "炒年糕"
        },
    ]
});
Mock.mock("/banner", "post", {
    "result": [
        {
            "url": "./static/banner/1.jpg",
            "action": "/active"
        },
        {
            "url": "./static/banner/2.jpg",
            "action": "/active"
        },
        {
            "url": "./static/banner/3.jpg",
            "action": "/active"
        }
    ]
});
Mock.mock("/homemenu", "post", {
    "result": [
        {
            "name": "美食",
            "src": "./static/menu/6.png"
        },
        {
            "name": "甜点饮品",
            "src": "./static/menu/7.png"
        }
        ,
        {
            "name": "超市便利",
            "src": "./static/menu/8.png"
        }
        ,
        {
            "name": "蔬菜水果",
            "src":"./static/menu/9.png"
        }
        ,
        {
            "name": "送药上门",
            "src": "./static/menu/10.png"
        }
        ,
        {
            "name": "品质晚餐",
            "src": "./static/menu/1.png"
        }
        ,
        {
            "name": "家常菜",
            "src": "./static/menu/2.png"
        }
        ,
        {
            "name": "小吃馆",
            "src": "./static/menu/3.png"
        }
        ,
        {
            "name": "川湘菜",
            "src": "./static/menu/4.png"
        }
        ,
        {
            "name": "快食简餐",
            "src": "./static/menu/5.png"
        }
        ,
        {
            "name": "减免配送费",
            "src": "./static/menu/1.png"
        }
        ,
        {
            "name": "津贴联盟",
            "src": "./static/menu/2.png"
        }
        ,
        {
            "name": "美团专送",
            "src": "./static/menu/3.png"
        }
        ,
        {
            "name": "跑腿代购",
            "src": "./static/menu/4.png"
        }
        ,
        {
            "name": "全部分类",
            "src": "./static/menu/5.png"
        }
    ]
});
Mock.mock("/home_you","post",{
    "result":[
        {
            "url":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3434877466,3290512024&fm=26&gp=0.jpg",
            "action":""
        },
        {
            "url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3010873700,297278466&fm=26&gp=0.jpg",
            "action":""
        },
        {
            "url":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2617132445,1776955325&fm=26&gp=0.jpg",
            "action":""
        },
        {
            "url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2546378422,179415909&fm=26&gp=0.jpg",
            "action":""
        },
        {
            "url":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=22958318,1217628447&fm=26&gp=0.jpg",
            "action":""
        },
        {
            "url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2727608795,3715359522&fm=26&gp=0.jpg",
            "action":""
        }
    ]
});