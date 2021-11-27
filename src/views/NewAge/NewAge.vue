<template>
	<div class="com-container">
		    <div class="box" style="width:60% height: 100%; margin-left: 270px;margin-top: 20px;">
<!--       <el-dropdown size="mini">
        <span class="el-dropdown-link"> -->
          <font class="txt1" style="font-family: '黑体'">目的站点年龄分布 </font>
<el-select v-model="value" @change="changeline(value)" size="mini">
				    <el-option
				      v-for="item in lineList"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
				  </el-select>
    </div>

		
		<div style="width: 770px; height: 86%;" ref="newAge_ref"></div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				lineList: [],
				value: "1号线",
				id: 0,
				
				
			}
		},
		created() {
			var jsonData = require('../../assets/js/data/newage.js');
	var data=jsonData.newage;
				var Line = data.map(item => item.line)
				Line = [...new Set(Line)];
				this.lineList = Line;
		
	
		},
		mounted() {
			this.drawChart(0);
		},
		methods: {
			
			changeline(item) {
				this.one = item;
				for (var i = 0; i < this.lineList.length; i++) {
					//console.log(this.one, this.lineList[i]);
					if (item == this.lineList[i]) {
					this.drawChart(i);
					}
				}
			},
			drawChart(id) {
				var mychart = this.$echarts.init(this.$refs.newAge_ref, this.theme);
				var jsonData = require('../../assets/js/data/newage.js');
				var res=jsonData.newage;
					
					var Line = res.map(item => item.line)
					Line = [...new Set(Line)];
					
					var linedata = res.filter(item => item.line ==Line[id]).map(item => item);
					//console.log(linedata);
					// linedata=[...new Set(linedata)];
					var stationdata = res.map(item => item.station);
					stationdata = [...new Set(stationdata)];
					let lineColor = [
						"#35c2ff", //1
						"#e21111", //2
						"#ff15ea", //3
						"#aa00ff", //4
						"#20B2AA", //5
						"#0055ff", //10
						"#48D1CC", //11
						"#55ff7f", //12


					];
					
					 let Color1 = [
					        "#61FEFF",
					        "#937FE6",
					        "#2B56D3",
					        "#87E7AA",
					        "#937FE6",
					        "#FF9B97",
					        "#8f23f5",
					        "#0576ea",
					        "#2cb8cf",
					        "#8A7EE0",
					        "#2cb8cf",
					        "#4e70f0",
					        "#1fa3de",
					        "#bbc951",
					        "#FFC14B",
					        "#b785a6",
					
					    ]; 
					var index = 0;
					var namedata = [{

						name: '少年7-17岁',
						itemStyle: {
							color: '#27b1bd'
						},
					}, {
						name: '青年18-40岁',
						itemStyle: {
							color: '#5286ff'
						},
					}, {
						name: '中年40-65岁',
						itemStyle: {
							color: '#EC505D'
						},
					}, {
						name: '老年66岁以上',
						itemStyle: {
							color: '#7299b6'
						},
					}];

					namedata.push({
						name: Line[id],
						itemStyle: {
							color: lineColor[id]
						},
					})


					var linkdata = []
					linedata.forEach((item) => {

						namedata.push({
							name: item.station,
							normal: {
								// color: Color[d]
								color: {
									type: "linear",
									x: 0,
									y: 1,
									x2: 0,
									y2: 0,
									colorStops: [{
											offset: 1,
											color: Color1[index++], // 0% 处的颜色
										},
										{
											offset: 0,
											color: Color1[index++], // 100% 处的颜色
										},
									],
									global: false, // 缺省为 false
								},
							}



						})

						linkdata.push({
							source: item.line,
							target: item.station,
							value: parseInt(item.shaoage)+parseInt(item.qingage)+parseInt(item.zhongage)+parseInt(item.laoage),
							lineStyle: {
								color: 'source',
								opacity: 0.6
							}
						})
						if (item.shaoage != 0) {
							linkdata.push({
								source: item.station,
								target: '少年7-17岁',
								value: item.shaoage,
								lineStyle: {
									color: 'target',
									opacity: 0.6
								}
							})
						}
						if (item.qingage != 0) {
							linkdata.push({
								source: item.station,
								target: '青年18-40岁',
								value: item.qingage,
								lineStyle: {
									color: 'target',
									opacity: 0.6
								}
							})
						}
						if (item.zhongage != 0) {
							linkdata.push({
								source: item.station,
								target: '中年40-65岁',
								value: item.zhongage,
								lineStyle: {
									color: 'target',
									opacity: 0.6
								}
							})
						}
						if (item.laoage != 0) {
							linkdata.push({
								source: item.station,
								target: '老年66岁以上',
								value: item.laoage,
								lineStyle: {
									color: 'target',
									opacity: 0.6
								}
							})
						}
					})

					var option = {
						tooltip: {
							trigger: 'item',
							triggerOn: 'mousemove'
						},
						label: {
							normal: {
								color: "#fff",
								fontSize: 14,
							},
						},
						grid:{
							bottom:'20%',
							width:770
						},
						series: {
							type: 'sankey',
							layout: 'none',
							// nodeAlign: 'right',
							focusNodeAdjacency: 'allEdges',
							emphasis: {
								focus: 'adjacency'
							},
							lineStyle: {
								color: 'gradient',
								curveness: 0.5
							},
							label: {
								color: 'white'
							},
							data: namedata,
							links: linkdata
						}
					};

					mychart.setOption(option);
				
				window.addEventListener("resize", function () {
				               	
									mychart.resize();
				  });
			}
		},
	}
</script>

<style scoped>
	.el-button {
	    display: inline-block;
	    line-height: 1;
	    white-space: nowrap;
	    cursor: pointer;
	    background: #13111147;
	    border: 1px solid #DCDFE6;
	    color: #dcdfe6;
	}
	.box>>>.el-input__inner {
	  
	    background-color: #131e35e6;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #DCDFE6;
	    box-sizing: border-box;
	    color: #e4e7ed;

	}
  .el-select{
    width: 90px;
  }
</style>


