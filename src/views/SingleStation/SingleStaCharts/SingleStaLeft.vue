<template>
  <div class="singleStaLeft" ref="singleStaLeft_ref" ></div>
</template>

<style scoped lang="less">
.singleStaLeft {
  height: 100%;
  width: 100%;
}
</style>
<script>
export default {
  data(){
    return {
      staname:''
    }
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(
        this.$refs.singleStaLeft_ref,
        this.theme
      );
      var jsonData = require('../../../assets/js/data/OD.js');
      var res=jsonData.od;
        const inName = res.map(item => item.inName);
        const outName = res.map(item => item.outName);
        const count = res.map(item => item.count);
        var sta=[];
        this.staname=this.$parent.$route.query.name;
        for(let i=0;i<inName.length;i++){
          if(inName[i]==this.staname){
            var j=0;
            while(inName[i+j]==this.staname){
              sta.push([outName[i+j],count[i+j]]);
              j++;
            }
            break;
          }
        }
        
        for(let i=0;i<sta.length;i++){
          for(let j=i+1;j<sta.length;j++){
            if(sta[i][1]<sta[j][1]){
              let temp = sta[i];
              sta[i]=sta[j];
              sta[j]=temp;
            }
          }
        }
        var getname = [sta[0][0], sta[1][0], sta[2][0], sta[3][0], sta[4][0]];
        var getvalue = [sta[0][1], sta[1][1], sta[2][1], sta[3][1], sta[4][1]];
        var getitemstyle = [
          {
            color: "rgba(50,123,250,0.7)",
            borderColor: "rgba(50,123,250,1)",
            borderWidth: 3,
          },
          {
            color: "rgba(244,201,7,0.7)",
            borderColor: "rgba(244,201,7,1)",
            borderWidth: 3,
          },
          {
            color: "rgba(23,216,161,0.7)",
            borderColor: "rgba(23,216,161,1)",
            borderWidth: 3,
          },
          {
            color: "rgba(122,60,235,0.7)",
            borderColor: "rgba(122,60,235,1)",
            borderWidth: 3,
          },
          {
            color: "rgba(15,197,243,0.7)",
            borderColor: "rgba(15,197,243,1)",
            borderWidth: 3,
          },
        ];
        var getdata = [];
        for (let i = 0; i < 5; i++) {
          getdata.push({
            value: getvalue[i],
            name: getname[i],
            itemStyle: getitemstyle[i],
          });
        }
        var option = {
          //backgroundColor: "#0f375f",
          title: {
            text: "去向站点Top5",
            textStyle: {
              color: "#fff",
              fontSize: 18,
              fontFamily: '黑体'
            },
          },
          legend: {
            //orient: 'vertical',
            top: "center",
            top: "10%",
            data: getname,
            textStyle: {
              color: "#fff",
              fontSize: 13,
            },
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          series: [
            {
              name: "站点",
              type: "pie",

              radius: ["20%", "60%"],
              center: ["50%", "60%"],
              roseType: "radius",
              label: {
                show: true,
                normal: {
                  position: "outside",
                  fontSize: 14,
                },
              },
              labelLine: {
                length: 1,
                length2: 12,
                smooth: true,
              },
              data: getdata,
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