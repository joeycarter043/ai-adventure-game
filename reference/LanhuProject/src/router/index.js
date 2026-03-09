import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_12gerenzhongxingerenziliao from '../views/lanhu_12gerenzhongxingerenziliao/index.vue'
import lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiuban from '../views/lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiuban/index.vue'
import lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu2guanlianjuben from '../views/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu2guanlianjuben/index.vue'
import lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu1jibenxinxi from '../views/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu1jibenxinxi/index.vue'
import lanhu_2jiaoshiduanzhishikuguanli from '../views/lanhu_2jiaoshiduanzhishikuguanli/index.vue'
import lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengzudui from '../views/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengzudui/index.vue'
import lanhu_13gerenzhongxinxuexijindu from '../views/lanhu_13gerenzhongxinxuexijindu/index.vue'
import lanhu_6jubenshicaorenwukaxiangqingtidanmuban from '../views/lanhu_6jubenshicaorenwukaxiangqingtidanmuban/index.vue'
import lanhu_7jubenshicaorenwukaxiangqingshuyucidian from '../views/lanhu_7jubenshicaorenwukaxiangqingshuyucidian/index.vue'
import lanhu_21jiaoshiduanzhishikuguanlixinjian from '../views/lanhu_21jiaoshiduanzhishikuguanlixinjian/index.vue'
import lanhu_34jiaoshiduanjubenguanlifenjijuqing from '../views/lanhu_34jiaoshiduanjubenguanlifenjijuqing/index.vue'
import lanhu_4jiaoshiduanbanjiguanli from '../views/lanhu_4jiaoshiduanbanjiguanli/index.vue'
import lanhu_14gerenzhongxinxuexibaogao from '../views/lanhu_14gerenzhongxinxuexibaogao/index.vue'
import lanhu_33jiaoshiduanjubenguanlijubenxiangqing from '../views/lanhu_33jiaoshiduanjubenguanlijubenxiangqing/index.vue'
import lanhu_12gerenzhongxinbianjigerenziliao from '../views/lanhu_12gerenzhongxinbianjigerenziliao/index.vue'
import lanhu_32jiaoshiduanjubenguanlixinjian2 from '../views/lanhu_32jiaoshiduanjubenguanlixinjian2/index.vue'
import lanhu_36jiaoshiduanjubenguanliyichangchuli from '../views/lanhu_36jiaoshiduanjubenguanliyichangchuli/index.vue'
import lanhu_41jiaoshiduanxueqingfenxixiangqing from '../views/lanhu_41jiaoshiduanxueqingfenxixiangqing/index.vue'
import lanhu_12jiaoshiduanxiangmuguanlibianjixiangmujiuban from '../views/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmujiuban/index.vue'
import lanhu_10zhishixuexiliebiao from '../views/lanhu_10zhishixuexiliebiao/index.vue'
import lanhu_3jiaoshiduanjubenguanli from '../views/lanhu_3jiaoshiduanjubenguanli/index.vue'
import lanhu_42jiaoshiduanbanjiguanlixinjian from '../views/lanhu_42jiaoshiduanbanjiguanlixinjian/index.vue'
import lanhu_5jubenshicaorenwukaxiangqing from '../views/lanhu_5jubenshicaorenwukaxiangqing/index.vue'
import lanhu_42jiaoshiduanxueqingfenxigetixuexixingweizhuizong from '../views/lanhu_42jiaoshiduanxueqingfenxigetixuexixingweizhuizong/index.vue'
import lanhu_15gerenzhongxinwodedaoju from '../views/lanhu_15gerenzhongxinwodedaoju/index.vue'
import lanhu_31jiaoshiduanjubenguanlixinjian from '../views/lanhu_31jiaoshiduanjubenguanlixinjian/index.vue'
import lanhu_1jiaoshiduanxiangmuguanli from '../views/lanhu_1jiaoshiduanxiangmuguanli/index.vue'
import lanhu_3xiangmuxuanzejubenxuanze from '../views/lanhu_3xiangmuxuanzejubenxuanze/index.vue'
import lanhu_6jiaoshiduanxueshengguanli from '../views/lanhu_6jiaoshiduanxueshengguanli/index.vue'
import lanhu_16gerenzhongxinwodechengjiu from '../views/lanhu_16gerenzhongxinwodechengjiu/index.vue'
import lanhu_63jiaoshiduanxueshengguanlipiliangdaoru from '../views/lanhu_63jiaoshiduanxueshengguanlipiliangdaoru/index.vue'
import lanhu_61jiaoshiduanxueshengguanlixiangqing from '../views/lanhu_61jiaoshiduanxueshengguanlixiangqing/index.vue'
import lanhu_11jiaoshiduanxiangmuguanlixiangqing from '../views/lanhu_11jiaoshiduanxiangmuguanlixiangqing/index.vue'
import lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu2qiehuanxiugai from '../views/lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu2qiehuanxiugai/index.vue'
import lanhu_8jubenshicaorenwukaxiangqingguileishouce from '../views/lanhu_8jubenshicaorenwukaxiangqingguileishouce/index.vue'
import lanhu_37jiaoshiduanjubenguanligangweiguanli from '../views/lanhu_37jiaoshiduanjubenguanligangweiguanli/index.vue'
import lanhu_41jiaoshiduanbanjiguanlixiangqing from '../views/lanhu_41jiaoshiduanbanjiguanlixiangqing/index.vue'
import lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu1xuanzhongxiugai from '../views/lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu1xuanzhongxiugai/index.vue'
import lanhu_11zhishixuexixiangqing from '../views/lanhu_11zhishixuexixiangqing/index.vue'
import lanhu_4jiaoshiduanxueqingfenxi from '../views/lanhu_4jiaoshiduanxueqingfenxi/index.vue'
import lanhu_62jiaoshiduanxueshengguanlixinjian from '../views/lanhu_62jiaoshiduanxueshengguanlixinjian/index.vue'
import lanhu_9jubenshicaorenwukaxiangqinghangxianditu from '../views/lanhu_9jubenshicaorenwukaxiangqinghangxianditu/index.vue'
import lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengdanren from '../views/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengdanren/index.vue'
import lanhu_35jiaoshiduanjubenguanlixiansuoguanli from '../views/lanhu_35jiaoshiduanjubenguanlixiansuoguanli/index.vue'
import lanhu_1shouye from '../views/lanhu_1shouye/index.vue'
import lanhu_4jubenshicaorenwuka from '../views/lanhu_4jubenshicaorenwuka/index.vue'
import lanhu_dengluye from '../views/lanhu_dengluye/index.vue'
import lanhu_2xiangmuxuanzexiangmuxuanze from '../views/lanhu_2xiangmuxuanzexiangmuxuanze/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_12gerenzhongxingerenziliao"
  },
  {
    path: '/lanhu_12gerenzhongxingerenziliao',
    name: 'lanhu_12gerenzhongxingerenziliao',
    component: lanhu_12gerenzhongxingerenziliao
  },
  {
    path: '/lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiuban',
    name: 'lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiuban',
    component: lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiuban
  },
  {
    path: '/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu2guanlianjuben',
    name: 'lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu2guanlianjuben',
    component: lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu2guanlianjuben
  },
  {
    path: '/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu1jibenxinxi',
    name: 'lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu1jibenxinxi',
    component: lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu1jibenxinxi
  },
  {
    path: '/lanhu_2jiaoshiduanzhishikuguanli',
    name: 'lanhu_2jiaoshiduanzhishikuguanli',
    component: lanhu_2jiaoshiduanzhishikuguanli
  },
  {
    path: '/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengzudui',
    name: 'lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengzudui',
    component: lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengzudui
  },
  {
    path: '/lanhu_13gerenzhongxinxuexijindu',
    name: 'lanhu_13gerenzhongxinxuexijindu',
    component: lanhu_13gerenzhongxinxuexijindu
  },
  {
    path: '/lanhu_6jubenshicaorenwukaxiangqingtidanmuban',
    name: 'lanhu_6jubenshicaorenwukaxiangqingtidanmuban',
    component: lanhu_6jubenshicaorenwukaxiangqingtidanmuban
  },
  {
    path: '/lanhu_7jubenshicaorenwukaxiangqingshuyucidian',
    name: 'lanhu_7jubenshicaorenwukaxiangqingshuyucidian',
    component: lanhu_7jubenshicaorenwukaxiangqingshuyucidian
  },
  {
    path: '/lanhu_21jiaoshiduanzhishikuguanlixinjian',
    name: 'lanhu_21jiaoshiduanzhishikuguanlixinjian',
    component: lanhu_21jiaoshiduanzhishikuguanlixinjian
  },
  {
    path: '/lanhu_34jiaoshiduanjubenguanlifenjijuqing',
    name: 'lanhu_34jiaoshiduanjubenguanlifenjijuqing',
    component: lanhu_34jiaoshiduanjubenguanlifenjijuqing
  },
  {
    path: '/lanhu_4jiaoshiduanbanjiguanli',
    name: 'lanhu_4jiaoshiduanbanjiguanli',
    component: lanhu_4jiaoshiduanbanjiguanli
  },
  {
    path: '/lanhu_14gerenzhongxinxuexibaogao',
    name: 'lanhu_14gerenzhongxinxuexibaogao',
    component: lanhu_14gerenzhongxinxuexibaogao
  },
  {
    path: '/lanhu_33jiaoshiduanjubenguanlijubenxiangqing',
    name: 'lanhu_33jiaoshiduanjubenguanlijubenxiangqing',
    component: lanhu_33jiaoshiduanjubenguanlijubenxiangqing
  },
  {
    path: '/lanhu_12gerenzhongxinbianjigerenziliao',
    name: 'lanhu_12gerenzhongxinbianjigerenziliao',
    component: lanhu_12gerenzhongxinbianjigerenziliao
  },
  {
    path: '/lanhu_32jiaoshiduanjubenguanlixinjian2',
    name: 'lanhu_32jiaoshiduanjubenguanlixinjian2',
    component: lanhu_32jiaoshiduanjubenguanlixinjian2
  },
  {
    path: '/lanhu_36jiaoshiduanjubenguanliyichangchuli',
    name: 'lanhu_36jiaoshiduanjubenguanliyichangchuli',
    component: lanhu_36jiaoshiduanjubenguanliyichangchuli
  },
  {
    path: '/lanhu_41jiaoshiduanxueqingfenxixiangqing',
    name: 'lanhu_41jiaoshiduanxueqingfenxixiangqing',
    component: lanhu_41jiaoshiduanxueqingfenxixiangqing
  },
  {
    path: '/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmujiuban',
    name: 'lanhu_12jiaoshiduanxiangmuguanlibianjixiangmujiuban',
    component: lanhu_12jiaoshiduanxiangmuguanlibianjixiangmujiuban
  },
  {
    path: '/lanhu_10zhishixuexiliebiao',
    name: 'lanhu_10zhishixuexiliebiao',
    component: lanhu_10zhishixuexiliebiao
  },
  {
    path: '/lanhu_3jiaoshiduanjubenguanli',
    name: 'lanhu_3jiaoshiduanjubenguanli',
    component: lanhu_3jiaoshiduanjubenguanli
  },
  {
    path: '/lanhu_42jiaoshiduanbanjiguanlixinjian',
    name: 'lanhu_42jiaoshiduanbanjiguanlixinjian',
    component: lanhu_42jiaoshiduanbanjiguanlixinjian
  },
  {
    path: '/lanhu_5jubenshicaorenwukaxiangqing',
    name: 'lanhu_5jubenshicaorenwukaxiangqing',
    component: lanhu_5jubenshicaorenwukaxiangqing
  },
  {
    path: '/lanhu_42jiaoshiduanxueqingfenxigetixuexixingweizhuizong',
    name: 'lanhu_42jiaoshiduanxueqingfenxigetixuexixingweizhuizong',
    component: lanhu_42jiaoshiduanxueqingfenxigetixuexixingweizhuizong
  },
  {
    path: '/lanhu_15gerenzhongxinwodedaoju',
    name: 'lanhu_15gerenzhongxinwodedaoju',
    component: lanhu_15gerenzhongxinwodedaoju
  },
  {
    path: '/lanhu_31jiaoshiduanjubenguanlixinjian',
    name: 'lanhu_31jiaoshiduanjubenguanlixinjian',
    component: lanhu_31jiaoshiduanjubenguanlixinjian
  },
  {
    path: '/lanhu_1jiaoshiduanxiangmuguanli',
    name: 'lanhu_1jiaoshiduanxiangmuguanli',
    component: lanhu_1jiaoshiduanxiangmuguanli
  },
  {
    path: '/lanhu_3xiangmuxuanzejubenxuanze',
    name: 'lanhu_3xiangmuxuanzejubenxuanze',
    component: lanhu_3xiangmuxuanzejubenxuanze
  },
  {
    path: '/lanhu_6jiaoshiduanxueshengguanli',
    name: 'lanhu_6jiaoshiduanxueshengguanli',
    component: lanhu_6jiaoshiduanxueshengguanli
  },
  {
    path: '/lanhu_16gerenzhongxinwodechengjiu',
    name: 'lanhu_16gerenzhongxinwodechengjiu',
    component: lanhu_16gerenzhongxinwodechengjiu
  },
  {
    path: '/lanhu_63jiaoshiduanxueshengguanlipiliangdaoru',
    name: 'lanhu_63jiaoshiduanxueshengguanlipiliangdaoru',
    component: lanhu_63jiaoshiduanxueshengguanlipiliangdaoru
  },
  {
    path: '/lanhu_61jiaoshiduanxueshengguanlixiangqing',
    name: 'lanhu_61jiaoshiduanxueshengguanlixiangqing',
    component: lanhu_61jiaoshiduanxueshengguanlixiangqing
  },
  {
    path: '/lanhu_11jiaoshiduanxiangmuguanlixiangqing',
    name: 'lanhu_11jiaoshiduanxiangmuguanlixiangqing',
    component: lanhu_11jiaoshiduanxiangmuguanlixiangqing
  },
  {
    path: '/lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu2qiehuanxiugai',
    name: 'lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu2qiehuanxiugai',
    component: lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu2qiehuanxiugai
  },
  {
    path: '/lanhu_8jubenshicaorenwukaxiangqingguileishouce',
    name: 'lanhu_8jubenshicaorenwukaxiangqingguileishouce',
    component: lanhu_8jubenshicaorenwukaxiangqingguileishouce
  },
  {
    path: '/lanhu_37jiaoshiduanjubenguanligangweiguanli',
    name: 'lanhu_37jiaoshiduanjubenguanligangweiguanli',
    component: lanhu_37jiaoshiduanjubenguanligangweiguanli
  },
  {
    path: '/lanhu_41jiaoshiduanbanjiguanlixiangqing',
    name: 'lanhu_41jiaoshiduanbanjiguanlixiangqing',
    component: lanhu_41jiaoshiduanbanjiguanlixiangqing
  },
  {
    path: '/lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu1xuanzhongxiugai',
    name: 'lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu1xuanzhongxiugai',
    component: lanhu_34jiaoshiduanjubenguanlifenjijuqingshengchengjuqingkajiaohu1xuanzhongxiugai
  },
  {
    path: '/lanhu_11zhishixuexixiangqing',
    name: 'lanhu_11zhishixuexixiangqing',
    component: lanhu_11zhishixuexixiangqing
  },
  {
    path: '/lanhu_4jiaoshiduanxueqingfenxi',
    name: 'lanhu_4jiaoshiduanxueqingfenxi',
    component: lanhu_4jiaoshiduanxueqingfenxi
  },
  {
    path: '/lanhu_62jiaoshiduanxueshengguanlixinjian',
    name: 'lanhu_62jiaoshiduanxueshengguanlixinjian',
    component: lanhu_62jiaoshiduanxueshengguanlixinjian
  },
  {
    path: '/lanhu_9jubenshicaorenwukaxiangqinghangxianditu',
    name: 'lanhu_9jubenshicaorenwukaxiangqinghangxianditu',
    component: lanhu_9jubenshicaorenwukaxiangqinghangxianditu
  },
  {
    path: '/lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengdanren',
    name: 'lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengdanren',
    component: lanhu_12jiaoshiduanxiangmuguanlibianjixiangmu3canyuxueshengdanren
  },
  {
    path: '/lanhu_35jiaoshiduanjubenguanlixiansuoguanli',
    name: 'lanhu_35jiaoshiduanjubenguanlixiansuoguanli',
    component: lanhu_35jiaoshiduanjubenguanlixiansuoguanli
  },
  {
    path: '/lanhu_1shouye',
    name: 'lanhu_1shouye',
    component: lanhu_1shouye
  },
  {
    path: '/lanhu_4jubenshicaorenwuka',
    name: 'lanhu_4jubenshicaorenwuka',
    component: lanhu_4jubenshicaorenwuka
  },
  {
    path: '/lanhu_dengluye',
    name: 'lanhu_dengluye',
    component: lanhu_dengluye
  },
  {
    path: '/lanhu_2xiangmuxuanzexiangmuxuanze',
    name: 'lanhu_2xiangmuxuanzexiangmuxuanze',
    component: lanhu_2xiangmuxuanzexiangmuxuanze
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
