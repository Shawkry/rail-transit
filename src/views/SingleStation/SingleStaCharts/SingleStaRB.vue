<template>
  <div class="com-container">

        <font class="txt1" style="font-size: 150%;font-family: '黑体';color: white"
          >站点每日客流
        </font>


    </el-dropdown>
             <el-select v-model="one" @change="changeMonth(one)" size="mini">
				    <el-option
				      v-for="item in MonthList"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
				  </el-select>
    <div class="singleStaRB" ref="singleStaRB_ref"></div>
  </div>
</template>



<style scoped lang="less">
.com-container {
  // background-color: cadetblue;
}
.singleStaRB {
  height: 100%;
  width: 100%;
}

</style>
<style>
.el-input__inner{
  width:90px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
	.el-input__inner {
	  
	    background-color: #131e35e6;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #DCDFE6;
	    box-sizing: border-box;
	    color: #e4e7ed;

	}
</style>
<script>
export default {
  data() {
    return {
      staname: "",
      one:'1月',
      MonthList: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      id: 0,
    };
  },
  mounted() {
    this.drawChart(this.id);
  },
  methods: {
    changeMonth(item) {
      for (var i = 0; i < this.MonthList.length; i++) {
        if (item == this.MonthList[i]) {
          this.id = i;
          this.drawChart(i);
        }
      }
    },
    drawChart(id) {
      var myChart = this.$echarts.init(this.$refs.singleStaRB_ref, this.theme);
      //this.$http.get("http://localhost:1314/res/SingleMonthlyday.json").then((res) => {
     var jsonData = require('../../../assets/js/data/tmp.js');
     var res=jsonData.tmp;
        //本地测试temp.json
        var incount = [];
        for (let i = 0; i < 8; i++) {
          if (i == 1) {
            continue;
          }
          incount.push(res.months[i].days.map((item) => item.incount)); //获取每月days中incount值
        }
        var option = {
/*           title: {
            text: id + 1 + "月",
            x: "5%",
            y: "10%",
            textStyle: {
              color: "#fff",
              fontSize: 18,
              fontFamily: '黑体'
            },
          }, */
          grid:{
              top: "5%",
          height: "70%",
          bottom: "3%",
          width:'86%',
          },
        
          color: "white",
          xAxis: {
            type: "category",
            data: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
            ],
          },
          boundaryGap: false,
          tooltip: {
            trigger: "axis",
          },
          yAxis: {
            type: "value",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ccc",
              },
            },
          },
          series: [
            {
              name: "客流量",
              type: "line",
              stack: "总量",
              data: incount[id],
              areaStyle: {},
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        
      });
    },
  },
};
</script>