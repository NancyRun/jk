<template>
  <div class="aboutProduct">
    <!-- 综合指数 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <el-container class="grid-content display_flex justify-content_flex-justify align-items_center">
          <div class="grid-content-left">
            <p class="larger-num">{{controlProductNum}}</p>
            <p class="gird-content-name">已监控产品数</p>
          </div>
          <img src="../../assets/images/hexagon-blue.png" alt="">
        </el-container>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <el-container class="grid-content display_flex justify-content_flex-justify align-items_center">
          <div class="grid-content-left">
            <p class="larger-num">{{fishPrecent}}</p>
            <p class="gird-content-name">绿鱼率</p>
          </div>
          <img src="../../assets/images/hexagon-green.png" alt="">
        </el-container>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <el-container class="grid-content display_flex justify-content_flex-justify align-items_center">
          <div class="grid-content-left">
            <p class="larger-num">{{averageScore}}</p>
            <p class="gird-content-name">综合评分</p>
          </div>
          <img src="../../assets/images/hexagon-yellow.png" alt="">
          <div class="grid-detaill">您的产品线在XX环节的XX产品存在安全风险</div>
        </el-container>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <el-container class="grid-content display_flex justify-content_flex-justify align-items_center">
          <div class="grid-content-left">
            <p class="larger-num">{{rankInPeer}}</p>
            <p class="gird-content-name">已监控产品数</p>
          </div>
          <img src="../../assets/images/hexagon-red.png" alt="">
          <div class="grid-detaill">安全等级超越了57%的竞争对手</div>
        </el-container>
      </el-col>
    </el-row>

    <!-- 产品对比图 -->
    <div class="common-box" style="margin-top:0;">
      <el-container>
        <div class="compare-left flex_1">
          <div class="compare-left-top">
            <h1 class="common-title">产品对比图</h1>
            
          </div>
          <div class="hello">
            <chart style="width:100%;" ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
          </div>
        </div>
        <div class="compare-right prod-mesg-panel"></div>
      </el-container>
    </div>

    <!-- 近期提测动态 -->
    <div class="common-box">
      <h1 class="common-title">近期提测动态</h1>
      <el-table
        :data="tableData"
        :header-cell-style="tableCell" 
        :cell-style="setCellStyle" 
        style="width: 100%">
        <el-table-column
          label="检测日期" 
          prop="date"
          width="100">
        </el-table-column>
        <el-table-column
          label="提测产品数" 
          prop="testProdNum"
          width="120">
        </el-table-column>
        <el-table-column
          label="所属行业" 
          prop="prodType" 
          width="150">
        </el-table-column>
        <el-table-column
          label="所属环节" 
          prop="testStage" 
          width="150">
        </el-table-column>
        <el-table-column
          label="关联产品" 
          prop="associateProd" 
          width="140">
        </el-table-column>
        <el-table-column
          prop="name"
          label="绿鱼"
          width="90">
          <template slot-scope="scope">
            <i v-if="scope.row.fishColor=='green'" class="el-icon-circle-check green-check"></i>
            <i v-else>-</i>
          </template>
        </el-table-column>
        <el-table-column
          label="黄鱼"
          width="90">
          <template slot-scope="scope">
            <i v-if="scope.row.fishColor=='yellow'" class="el-icon-circle-check yellow-check"></i>
            <i v-else>-</i>
          </template>
        </el-table-column>
        <el-table-column
          label="红鱼"
          width="90">
          <template slot-scope="scope">
            <i v-if="scope.row.fishColor=='red'" class="el-icon-circle-check red-check"></i>
            <i v-else>-</i>
          </template>
        </el-table-column>
        <el-table-column
          label="紧／限用成分数" 
          prop="limitIngredient" 
          width="120">
        </el-table-column>
        <el-table-column
          label="具体报告"
          width="100">
          <template>
            <el-button class='check-btn' type="primary" size="small" round>查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutProduct',
  data () {
    let dataitem = {
      date: '9月11日',
      testProdNum: 23,
      prodType:'面膜',                //所属行业
      testStage: '原材料',            //所属环节
      associateProd: '产品产品A',     //关联产品
      fishColor: 'green',
      limitIngredient: 5,            //紧／限用成分数
      reportId: 45,
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      msg: 'Welcome to Your Vue.js App',
      controlProductNum: 11,    //已监控产品数
      fishPrecent: '70%',       //绿鱼率
      averageScore: 60,         //综合评分
      rankInPeer: 7,            //在该行业排名

      tableCell: {
        'text-align':'center'
      },
      tableData: Array(5).fill(dataitem),

      orgOptions: {},

    }
  },
  methods:{
    setCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex==5 || columnIndex==6 || columnIndex==7){
        return {'text-align': 'center','font-size':'24px'}
      }else{
        return {'text-align': 'center'}
      }
    }
  },
  mounted() {
    // this.orgOptions = {
    //     color: [
    //         '#dd4444', '#fec42c', '#80F1BE'
    //     ],
    //     legend: {
    //         y: 'top',
    //         data: ['北京', '上海', '广州'],
    //         textStyle: {
    //             color: '#fff',
    //             fontSize: 16
    //         }
    //     },
    //     xAxis: {
    //       splitLine:{show: false},//去除网格线
    //       name: 'EEQ值',
    //       splitNumber: 3,
    //       axisLine:{
    //         symbol:['none', 'arrow']
    //       },
    //       axisTick:{
    //         show:false
    //       }
    //     },
    //     yAxis: {
    //       name: 'AT值',
    //       axisLine:{
    //         symbol:['none', 'arrow']
    //       },
    //       axisTick:{
    //         show:false
    //       }
          
    //     },
    //     series: [{
    //         symbolSize: 20,
    //         data: [
    //             [10, 120],
    //             [3, 276],
    //             [13, 90],
    //             [9, 200],
    //             [11, 155],
    //             [4, 120],
    //             [6, 40]
    //         ],
    //         type: 'scatter'
    //     }]
    // }

var dataBJ = [
    [1,55,9,56,0.46,18,6,"良"],
    [2,25,11,21,0.65,34,9,"优"],
    [3,56,7,63,0.3,14,5,"良"],
    [4,33,7,29,0.33,16,6,"优"],
    [5,42,24,44,0.76,40,16,"优"],
    [6,82,58,90,1.77,68,33,"良"],
    [7,74,49,77,1.46,48,27,"良"],
    [8,78,55,80,1.29,59,29,"良"],
    [9,267,216,280,4.8,108,64,"重度污染"],
    [10,185,127,216,2.52,61,27,"中度污染"],
    [11,39,19,38,0.57,31,15,"优"],
    [12,41,11,40,0.43,21,7,"优"],
    [13,64,38,74,1.04,46,22,"良"],
    [14,108,79,120,1.7,75,41,"轻度污染"]
];

var dataGZ = [
    [1,26,37,27,1.163,27,13,"优"],
    [2,85,62,71,1.195,60,8,"良"],
    [3,78,38,74,1.363,37,7,"良"],
    [4,21,21,36,0.634,40,9,"优"],
    [5,41,42,46,0.915,81,13,"优"],
    [6,56,52,69,1.067,92,16,"良"],
    [7,64,30,28,0.924,51,2,"良"],
    [8,55,48,74,1.236,75,26,"良"],
    [9,76,85,113,1.237,114,27,"良"],
    [10,91,81,104,1.041,56,40,"良"],
    [11,84,39,60,0.964,25,11,"良"],
    [12,64,51,101,0.862,58,23,"良"],
    [13,70,69,120,1.198,65,36,"良"],
    [14,77,105,178,2.549,64,16,"良"],
    [15,109,68,87,0.996,74,29,"轻度污染"]
];

var dataSH = [
    [1,91,45,125,0.82,34,23,"良"],
    [2,65,27,78,0.86,45,29,"良"],
    [3,83,60,84,1.09,73,27,"良"],
    [4,109,81,121,1.28,68,51,"轻度污染"],
    [5,106,77,114,1.07,55,51,"轻度污染"],
    [6,109,81,121,1.28,68,51,"轻度污染"],
    [7,106,77,114,1.07,55,51,"轻度污染"],
    [8,89,65,78,0.86,51,26,"良"],
    [9,53,33,47,0.64,50,17,"良"],
    [10,80,55,80,1.01,75,24,"良"],
    [11,117,81,124,1.03,45,24,"轻度污染"],
    [12,99,71,142,1.1,62,42,"良"],
    [13,95,69,130,1.28,74,50,"良"],
    [14,116,87,131,1.47,84,40,"轻度污染"],
    [15,108,80,121,1.3,85,37,"轻度污染"]
];

var schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: 'AQI指数'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];


var itemStyle = {
    normal: {
        // opacity: 0.8,
        // shadowBlur: 10,
        // shadowOffsetX: 0,
        // shadowOffsetY: 0,
        // shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};


    this.orgOptions = {
      // backgroundColor: '#404a59',
      color: [
          '#76e2da', '#f8df8c', '#f78d7c'
      ],
      legend: {
          y: 'top',
          data: ['北京', '上海', '广州'],
          textStyle: {
              // color: '#fff',
              // fontSize: 16
          }
      },
      grid: {
          x: '10%',
          x2: 150,
          y: '18%',
          y2: '10%'
      },
      tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
              var value = obj.value;
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                  + obj.seriesName + ' ' + value[0] + '日：'
                  + value[7]
                  + '</div>'
                  + schema[1].text + '：' + value[1] + '<br>'
                  + schema[2].text + '：' + value[2] + '<br>'
                  + schema[3].text + '：' + value[3] + '<br>'
                  + schema[4].text + '：' + value[4] + '<br>'
                  + schema[5].text + '：' + value[5] + '<br>'
                  + schema[6].text + '：' + value[6] + '<br>';
          }
      },
      xAxis: {
          type: 'value',
          name: '日期',
          nameGap: 16,
          max: 15,
          splitLine: {
              show: false
          },
          axisLine: {
          }
      },
      yAxis: {
          type: 'value',
          name: 'AT值',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
              // color: '#fff',
              // fontSize: 16
          },
          axisLine: {
          },
          splitLine: {
              show: false
          }
      },
      visualMap: [
          {
              left: 'right',
              top: '10%',
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                  color: '#fff'
              },
              inRange: {
                  symbolSize: [10, 70]
              },
              outOfRange: {
                  symbolSize: [10, 70],
                  color: ['rgba(255,255,255,.2)']
              },
              controller: {
                  inRange: {
                      color: ['#c23531']
                  },
                  outOfRange: {
                      color: ['#444']
                  }
              }
          },
          // {
          //     left: 'right',
          //     bottom: '5%',
          //     dimension: 6,
          //     min: 0,
          //     max: 50,
          //     itemHeight: 120,
          //     calculable: true,
          //     precision: 0.1,
          //     text: ['明暗：二氧化硫'],
          //     textGap: 30,
          //     textStyle: {
          //         color: '#fff'
          //     },
          //     inRange: {
          //         colorLightness: [1, 0.5]
          //     },
          //     outOfRange: {
          //         color: ['rgba(255,255,255,.2)']
          //     },
          //     controller: {
          //         inRange: {
          //             color: ['#c23531']
          //         },
          //         outOfRange: {
          //             color: ['#444']
          //         }
          //     }
          // }
      ],
      series: [
          {
              name: '绿鱼',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataBJ
          },
          {
              name: '黄鱼',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataSH
          },
          {
              name: '绿鱼',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataGZ
          }
      ]
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content{
  height: 180px;
  border-radius: 8px;
  background:#ffffff;
  box-shadow:0 0 10px 0 rgba(216,216,216,0.50);
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  margin-bottom: 24px;
}
.larger-num{
  font-family:'Arial-Black';
  font-weight: bold;
  font-size:50px;
  line-height: 50px;
  color:#344052;
}
.gird-content-name{
  font-size: 18px;
  line-height: 18px;
  padding-top: 10px;
}
.grid-detaill{
  padding: 24px;
  position: absolute;
  font-size:12px;
  line-height: 14px;
  color:#999999;
  text-align:left;
  left: 0;
  bottom: 0;
}

.common-title{
  margin-bottom: 20px;
  font-size:24px;
  /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; */
  color:#374053;
  font-weight: 600;
}
.prod-mesg-panel{
  width:264px;
  min-height:366px;
  background:#354154;
  box-shadow:0 0 10px 0 rgba(216,216,216,0.50);
  border-radius:8px;
}

.check-btn{
  cursor: pointer;
  background: #76e2d2;
  border-color: #76e2d2;
}
.green-check{
  color: #64c8bc;
}
.yellow-check{
  color: #f8df8c;
}
.red-check{
  color: #f78d7c;
}
</style>
