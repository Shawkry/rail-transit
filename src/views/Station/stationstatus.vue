<template>
  <div class="stationstatus">
      <table border="0" cellspacing="0" width="100%" >
          <tr>
              <th>时间段</th>
              <th>站点情况</th>
              <th>标识码</th>
          </tr>
          <tr v-for="item in 18" :key="item">
              <th>{{time[item-1]}}</th>
              <th>{{statusTxt[item-1]}}</th>
              <th><div class="circle" :name='item' :style="{backgroundColor:circleColor[item-1]}"></div></th>
          </tr>
      </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
        name: "" ,
        time:['06~07','07~08','08~09','09~10','10~11','11~12','12~13','13~14','14~15','15~16','16~17','17~18','18~19','19~20','20~21','21~22','22~23','23~24'],
        status:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
        
    };
  },
  methods: {
    getdata(){
      var jsonData = require('../../assets/js/data/peak.js');
      var res=jsonData.peak;
        let allName = res.map(item => item.进站名称);
        let allCount = res.map(item => item.count);
        var nowStatus
        for(let i=0;i<allName.length;i++){
          if(allName[i]==this.$parent.$route.query.name){
            nowStatus=allCount.slice(i,i+18);
            break;
          }
        }
        for(let i=0;i<nowStatus.length;i++){
          if(nowStatus[i]<201){
            nowStatus[i]=0
          }else if((nowStatus[i]>201)&&(nowStatus[i]<451)){
            nowStatus[i]=1
          }else if(nowStatus[i]>450){
            nowStatus[i]=2
          }
        }
        this.status=nowStatus
     
      
    }
  },
  computed: {
    circleColor: {
      get: function () {
          let circleColor = new Array(18).fill('green')
        for (let i = 0; i < this.status.length; i++) {
            if(this.status[i]==1){
                circleColor[i]='yellow'
            }else if(this.status[i]==2){
                circleColor[i]='red'
            }
        }
        return circleColor;
      },
    },
     statusTxt: {
      get: function () {
          let statusTxt = new Array(18).fill('畅通')
          for (let i = 0; i < this.status.length; i++) {
              if(this.status[i]==1){
                  statusTxt[i]='一般'
              }else if(this.status[i]==2){
                  statusTxt[i]='拥堵'
              }
          }
          return statusTxt;
      },
    },
  },
  mounted() {
    this.name = this.$route.query.name;
    this.getdata()
  },
  watch: {
    $route() {
      this.name = this.$route.query.name;
      this.status
    },
  },
};
</script>

<style>
.stationstatus {
  position: relative;
  background-color: #2e7ac733;
  width: 100%;
  height: 100%;
  font-family: '黑体'
}
.circle{
    border-radius: 60px;
    width: 15px;
    height: 15px;
    background-color: green;
    margin: auto;
}
table{
    color: #fff;
}
</style>