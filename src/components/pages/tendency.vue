<template>
  <div class="tendency">
    <div class="select-box">
      当前行业：    
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label" 
          size="mini"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="common-box">
      <el-button class="radio-btn" @click="selectRadio(1)" :class="{'active':radio==1}" type="primary" round>同类产品安全趋势</el-button>
      <el-button class="radio-btn" @click="selectRadio(2)" :class="{'active':radio==2}" type="primary" round>同类产品安全对比</el-button>
      <div class="prod-mesg">
        <span>同类产品安全对比图</span>
        <span class="my-prod-block"></span>
        <span>我的产品</span>
        <span class="others-prod-block"></span>
        <span>竞品</span>
      </div>
      <div class="dark-box">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tendency',
  data () {
    return {
      options: [{
          value: '1',
          label: '面膜'
        }, {
          value: '2',
          label: '防晒隔离'
        }, {
          value: '3',
          label: '眼霜'
        }, {
          value: '4',
          label: '化妆水'
        }],
        value: '1',

        radio: '1',
    }
  },
  methods:{
    selectRadio(value){
      this.radio = value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tendency{
  color:#354154;
}
.select-box{
  color: #354154;
}
.radio-btn{
  background: #f6f9f9;
  border-color: #f6f9f9;
  color: #354154;
}
.radio-btn.active{
  background: #76e2d2;
  border-color: #76e2d2;
  color: #ffffff;
}
.prod-mesg{
  float: right;
  line-height: 40px;
}
.my-prod-block,.others-prod-block{
  margin: 0 8px 0 30px;
  display: inline-block;
  background:#9c9af2;
  width:60px;
  height:8px;
  border-radius: 100px 0 0 100px;
}
.others-prod-block{
  opacity:0.5;
  background:#a2b9cb;
}
.dark-box{
  margin-top: 24px;
  background:#f6f9f9;
  border-radius:8px;
  width:100%;
  min-height:354px;
}
</style>
