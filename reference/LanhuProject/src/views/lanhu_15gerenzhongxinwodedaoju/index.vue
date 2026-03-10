<template>
  <div class="page flex-col">
    <div class="section_1 flex-col"><div class="box_1 flex-col"></div></div>
    <div class="section_2 flex-col">
      <img
        class="image_1"
        referrerpolicy="no-referrer"
        src="./assets/img/ps8dpt4dltiwwl1ucwwqeqekcc6b23t28h5bdb5d7e-4ed5-4eec-a8b0-44f56122c1fe.png"
      />
      <div class="group_1 flex-col">
        <div class="box_2 flex-row justify-between">
          <div class="text-wrapper_1">
            <span class="text_1">个人中心&nbsp;/</span>
            <span class="text_2">我的道具</span>
          </div>
          <div class="box_3 flex-row">
            <img
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="./assets/img/psxtjfjvcihrrmchlzmvg5yspy21pe4plumc50e42af-7a04-4f92-8901-2ed7396ba2b4.png"
            />
            <span class="text_3">返回</span>
          </div>
        </div>
        <div class="box_4 flex-row justify-between">
          <div class="box_5 flex-col justify-between">
            <div class="section_3 flex-col">
              <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="./assets/img/372722c23be14bd38deaf56194e36d4d_mergeImage.png"
              />
              <span class="text_4">张同学</span>
            </div>
            <div class="section_4 flex-col">
              <div class="group_2 flex-row justify-between">
                <img
                  class="thumbnail_2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/ps0gakhhkf81wa6wqkwux44uwd9t6wx5t0sr6c4b8b63-8f49-42bc-8895-fb51f7c7a3f8.png"
                />
                <span class="text_5">个人资料</span>
              </div>
              <div class="group_3 flex-row justify-between">
                <img
                  class="thumbnail_3"
                  referrerpolicy="no-referrer"
                  src="./assets/img/pszdqkz4qzxgkjh3jzl6toefh5kexda0iqbc2188a4-088e-46ed-8eb5-c8cc4914a2f7.png"
                />
                <span class="text_6">学习进度</span>
              </div>
              <div class="group_4 flex-row justify-between">
                <img
                  class="thumbnail_4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/psetmj4s6wwauufq3mk5nsfogzq2j5swkbraba0c538-e52b-4b6d-a57e-5311e198b9b6.png"
                />
                <span class="text_7">学习报告</span>
              </div>
              <div class="group_5 flex-row">
                <div class="group_6 flex-col"></div>
                <img
                  class="thumbnail_5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/psaeskmoe1gjk17oyrvjtgqa4kvmk3xi78d3be2c9-d341-497a-9662-b98992015af4.png"
                />
                <span class="text_8">我的道具</span>
              </div>
              <div class="group_7 flex-row justify-between">
                <img
                  class="thumbnail_6"
                  referrerpolicy="no-referrer"
                  src="./assets/img/psfz2oy34hrej7ubyi5em89c3t5ocys1x1f85a5d8fd-b723-4a91-8dad-5db753c0df0e.png"
                />
                <span class="text_9">我的成就</span>
              </div>
            </div>
          </div>
          <div class="box_6 flex-col">
            <span class="text_10">我的道具</span>
            <div class="grid_1 flex-row">
              <div
                class="list-items_1 flex-row"
                :style="{ background: item.lanhuBg0 }"
                v-for="(item, index) in loopData0"
                :key="index"
              >
                <img class="image_3" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
                <div class="section_5 flex-col justify-between">
                  <div class="text-group_1 flex-col justify-between">
                    <span class="text_11" v-html="item.lanhutext0"></span>
                    <span class="text_12" v-html="item.lanhutext1"></span>
                  </div>
                  <div class="text-wrapper_2">
                    <span class="text_13" v-html="item.lanhutext2"></span>
                    <span class="text_14" v-html="item.lanhutext3"></span>
                  </div>
                </div>
              </div>
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
            'url(https://lanhu-oss-proxy.lanhuapp.com/ps549oralu0auaiv6w3osfjlvpn7o3yh9kbbfd69a0-4aab-425f-af90-ae53ad87403b) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/psjfppyoxn4zhisl9ajcti5q3zzyt9xodo866dad36-c822-42c4-ad3c-4dc803236def',
          lanhutext0: '提示卡',
          lanhutext1: '在游戏中获得提示',
          lanhutext2: '数量:',
          lanhutext3: '3张'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/psk4dvmbdcmmfnnxr4arvdrtcnrl6md2105409116-c9f5-4b87-a355-01d733369370) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/psrgxefvwuurszb4rtz1vbmlbhfb74x2jl9d65075d7-dbd9-4f4e-a637-e4eb8214caac',
          lanhutext0: '延时卡',
          lanhutext1: '延长考核时间',
          lanhutext2: '数量:',
          lanhutext3: '2张'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/psalmvxun9w4qcds2rmzdlba7mq8yr82om73957afe-25f1-461a-be37-b8d5ef30cd1e) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/psu6i7qbtydgc4y5j5rh0p5hoqdgr77tdjk2d3723e0-7065-4061-88b9-0e1fde955595',
          lanhutext0: '免错卡',
          lanhutext1: '允许一次错误',
          lanhutext2: '数量:',
          lanhutext3: '1张'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/pslqoey2d98n82ozszlxeqpc35njnmeao8h476d1256-4143-4481-b546-71817a8c0874) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/psl5d8gkxprugbqwoleyzbc50332gpdmo5kw07a83ab5-08e4-4bba-9c18-7eeace1c6c40',
          lanhutext0: '知识卡',
          lanhutext1: '随时查看知识点',
          lanhutext2: '数量:',
          lanhutext3: '不限'
        },
        {
          lanhuBg0:
            'url(https://lanhu-oss-proxy.lanhuapp.com/ps42mqwn2f7sh5ctzgm8byzahwqa2opgmvk38225a23-4c7b-4f90-803c-069630b495ac) 100% no-repeat',
          lanhuimage0:
            'https://lanhu-oss-proxy.lanhuapp.com/pstnkfehzbdc94hbc2ns2yom2sga7uk555480dd-096f-41ff-aa49-63823dea8f6e',
          lanhutext0: '经验卡',
          lanhutext1: '获得双倍经验值',
          lanhutext2: '数量:',
          lanhutext3: '2张'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.css" />