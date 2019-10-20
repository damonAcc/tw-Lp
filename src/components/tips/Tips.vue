<template>
  <div class="tips" :class="[options.class, {'show': tipsShow}]"><span>{{options.txt}}</span></div>
</template>

<script >

export default {
  name: 'tips',
  data: () => ({
    tipsShow: true,
    options: {
      txt: '',
      class: 'center',
      time: 1500
    }
  }),
  mounted() {
    let _self = this
    setTimeout(function () {
      _self.tipsShow = false
    }, this.options.time)
  },
  methods: {
  }
}
</script>

<style scoped>
  .tips {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .6);
    padding: 20px 30px;
    z-index: 20;
    font-size: 28px;
    color: #fff;
    border-radius: 6px;
    word-break: break-all;
    display: none;
    line-height: 30px;
  }
  .tips.show {
    display: block;
  }
  .tips.center{
    text-align: center;
    max-width:40%;
  }
  .tips.left{
    text-align: left;
    width:236px;
  }
</style>

