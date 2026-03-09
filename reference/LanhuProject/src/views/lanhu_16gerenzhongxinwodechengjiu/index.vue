<template>
  <div class="page flex-col">
    <div class="box_1 flex-col"><div class="group_1 flex-col"></div></div>
    <div class="box_2 flex-col">
      <img
        class="image_1"
        referrerpolicy="no-referrer"
        src="./assets/img/psccmeo06zs17ww1k6339ktnuooctcj7bn3d991671-8c12-40a5-85a8-d80dbe6b5385.png"
      />
      <div class="group_2 flex-col">
        <div class="box_3 flex-row justify-between">
          <div class="text-wrapper_1">
            <span class="text_1">个人中心&nbsp;/</span>
            <span class="text_2">我的成就</span>
          </div>
          <div class="group_3 flex-row">
            <img
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="./assets/img/psnn8llo1vy86amrck2urrgil7ilg0pp89277cc2-61a4-4111-8206-5c4d4ff0481a.png"
            />
            <span class="text_3">返回</span>
          </div>
        </div>
        <div class="box_4 flex-col">
          <div class="block_1 flex-row justify-between">
            <div class="box_5 flex-col">
              <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="./assets/img/78a213064c5548e291368a66754fcd78_mergeImage.png"
              />
              <span class="text_4">张同学</span>
              <div class="box_6 flex-row justify-between">
                <img
                  class="thumbnail_2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/psulz5dn5ojrodxplndj3ghs7pfdy90p6838e5177-4438-4343-8fcd-853ad5969951.png"
                />
                <span class="text_5">个人资料</span>
              </div>
              <div class="box_7 flex-row justify-between">
                <img
                  class="thumbnail_3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/ps237nba6gekcifmoib786ppo70u5n4rxrzdc172b62f-76fa-4c45-bf9f-63f853d93c0b.png"
                />
                <span class="text_6">学习进度</span>
              </div>
              <div class="box_8 flex-row justify-between">
                <img
                  class="thumbnail_4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/ps16rg6aks9iki9zsm0rcylfw8bha8zan4ove004867e-6601-4796-924f-807e9247fb09.png"
                />
                <span class="text_7">学习报告</span>
              </div>
            </div>
            <div class="box_9 flex-col justify-between">
              <span class="text_8">我的成就</span>
              <div class="grid_1 flex-row">
                <div
                  class="list-items_1 flex-row"
                  :style="{ background: item.lanhuBg0 }"
                  v-for="(item, index) in loopData0"
                  :key="index"
                >
                  <img class="image_3" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
                  <div class="group_4 flex-col justify-between">
                    <div class="text-group_1 flex-col justify-between">
                      <span class="text_9" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
                      <span class="text_10" v-html="item.lanhutext1"></span>
                    </div>
                    <span class="text_11" v-html="item.lanhutext2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="block_2 flex-row justify-between">
            <img
              class="thumbnail_5"
              referrerpolicy="no-referrer"
              src="./assets/img/pseo020e1f6l9xlleuhw2yhf314clgfq17bc2ce130-3969-4e43-9b5a-5b2fa7183bea.png"
            />
            <span class="text_12">我的道具</span>
          </div>
          <div class="block_3 flex-row">
            <div class="block_4 flex-row">
              <div class="box_10 flex-col"></div>
              <img
                class="thumbnail_6"
                referrerpolicy="no-referrer"
                src="./assets/img/pss3wls6vq56foejk3malj4hmkoqqndone2b2f697b-787b-4079-837f-c578f4aa679e.png"
              />
              <span class="text_13">我的成就</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/ps68r0km9mh14w2ydz060osmz8e9hnlzagpa697dd0a-f596-4ada-a73e-c52e94edd618) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/pscbckb2w6adsb00snnpz1id4zc96y0fih2409de3e5-0c31-42a1-819e-435c106ffec6',
          lanhutext0: '新手入门',
          lanhufontColor0: 'rgba(0,255,252,1)',
          lanhutext1: '完成第一个剧本',
          lanhutext2: '2024年1月16日获得'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/pswkhq82p43b9wmseps3sq9cmcdpyyv8u475f0fe9f-b851-493b-9730-ce35fcf67c19) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/psa2k88hwiorfv6o1dzabx4fg35ocp1a6zi3a8548b2-9936-4c40-b61f-df4e31f355df',
          lanhutext0: '海运专家',
          lanhufontColor0: 'rgba(0,255,252,1)',
          lanhutext1: '海运流程考核90分以上',
          lanhutext2: '2024年1月20日获得'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/psbovsu0nffbt7qawloo8lpk56ee9t0dso1df0cd27-deda-4272-8a4d-96f4e0f66b83) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/ps0nzm7paoldhr26t7pcmo7nbot56ha6a8dee8d66ca-6b17-45f0-a03a-96c21469cd6c',
          lanhutext0: '学习达人',
          lanhufontColor0: 'rgba(0,255,252,1)',
          lanhutext1: '连续学习7天',
          lanhutext2: '2024年1月25日获得'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/pscr1hwwirmrp5jnnpd6ttqrokic5ak3nb5424682-184f-4ae4-a497-2b67f02831cd) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/ps5kvs9px2uajlrxxwwj40lgx3wwlkqj3n635d57ee-c9cb-4061-b24a-ad30670497dd',
          lanhutext0: '完美通关',
          lanhufontColor0: 'rgba(0,255,252,1)',
          lanhutext1: '一个剧本零错误完成',
          lanhutext2: '2024年1月22日获得'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/psjcflla5n4h9dsid93sus96b8ixtr2cipfb8394f9-1147-41e6-b269-5172a5d57881) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/pscp1w4l3zwtl2y6phq5g7iw6pjhcd0ld0i3388b3fe-49c1-4af1-9e53-2e37546fb0d1',
          lanhutext0: '知识大师',
          lanhufontColor0: 'rgba(153,153,153,1)',
          lanhutext1: '掌握50个知识点',
          lanhutext2: '进行中...&nbsp;(42/50)'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/psiyvplb2j3jnjrunfom5uc3ql3f39319s35d540c9-1218-466f-a9f7-9b17cca69c58) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/psgq5e91oqwroprtcx06jllwjcpukcc57h38b47baa-d473-4f6d-b6c0-436f3f75e4ce',
          lanhutext0: '全能选手',
          lanhufontColor0: 'rgba(153,153,153,1)',
          lanhutext1: '所有知识领域考核...',
          lanhutext2: '进行中...&nbsp;(2/4)'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.css" />