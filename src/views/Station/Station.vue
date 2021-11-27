<template>
  <div class="com-container">
    <div class="com-chart" ref="Station_ref">
      <img src="../../assets/img/title1.png" alt="" width="100%">
      <span class="Listtitle">站点列表</span>
      <div class="stalist">
        <el-collapse accordion>
          <el-collapse-item
            :title="item"
            :name="item"
            v-for="(item, index) in stationNum"
            :key="index"
            @click.native="singleSta(item, index); "
          >
           <template slot="title">
     <div style="    border-radius: 60px;
    width: 12px;
    height: 12px;
    background-color:#9ca8b8 ;
    margin-left: 4%;
    margin-right: 1%;"></div> {{item}}
    </template>
            <div class="stationList">
              <Stationstatus ref="Stationstatus"></Stationstatus>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style>
.el-collapse-item__content {
     padding-bottom: 0%;}
.el-collapse{
background-color: #161522;
border-style:none;
margin-left: 1%;
color: #fff;
}
.el-collapse-item__wrap {
  background-color: transparent;
  border-color: transparent;
  color: #fff;
}
.el-collapse-item__header {
  width: 98%;
  background-color: transparent;
  color: #fff;
  /* border-color: transparent; */
  text-align: center;
  border: outset;
  background-color: #2e7ac733;
  border-color:#2e7ac733;
  border-radius: 2%;
}
.el-collapse-item__arrow {
  color: #fff;
  margin: 0 0px 0 auto;
}

</style>
<style scoped lang="less">
.Listtitle{
font-family: '黑体';
position: relative;
top: -10%;
left: 36%;
font-size: 200%;
text-align: center;
}
~ .com-container {
  background-size: cover;
  width: 100%;
}
.com-chart{
  height: 100%;
}
.stalist {
  position: relative;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  top: -6%;
}
::-webkit-scrollbar {
  width: 0%; /*设置滚动条宽度为6px*/
}
/* /*定义滚动条轨道 内阴影+圆角
::-webkit-scrollbar-track {

}
定义滚动滑块 内阴影+圆角
::-webkit-scrollbar-thumb {

} 

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}*/
</style>

<script>
import Stationstatus from "./stationstatus";
import SingleStation from "../SingleStation/SingleStation";
export default {
  data() {
    return {
      boxStatus: true,
      sta:'',
      num:0
    };
  },
  methods: {
    singleSta(item,index) {
      if(this.num==0){
        this.sta=item;
        this.num=1;
      }
      if (this.boxStatus == true||this.sta!=item) {
        this.sta=item;
        this.boxStatus=false;
        this.$router.push({
          path: "/Home/SingleStation",
          query: {
            name: item,
          },
        });
        this.stationstatus(item, index);
        this.$parent.reload();
      }else{
        this.sta=item;
        this.boxStatus=true;
          this.$router.push({
          path: "/Home/MapPage",
        });
      }

    },
    stationstatus(item, index) {
      this.$refs.Stationstatus[index].getdata();
      this.$router.push({
        path: "/Home/SingleStation/StationStatus",
        query: {
          name: item,
        },
      });
    },
  },
  components: {
    Stationstatus,
    SingleStation,
  },
  computed: {
    stationNum: {
      get: function () {
        let stationNum = new Array(168);
        for (let i = 0; i < 169; i++) {
          stationNum[i] = "Sta" + Number(i + 1);
        }
        return stationNum;
      },
    },
  },
};
</script>