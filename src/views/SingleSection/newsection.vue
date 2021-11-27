<template>
	<div class="com-container">
		<div style="width:60% height: 100%; margin-left: 240px;margin-top: 2.8%;">
        <!--<font style="font-size: large; font-weight: 700">线路断面客流</font>-->
<!--         <el-dropdown size="mini">
          <span class="el-dropdown-link"> -->
            <font class="txt1" style="font-family: '黑体'">线路截断面客流分析 </font>
            	<el-select v-model="value" @change="changeline(value)" size="mini">
				    <el-option
				      v-for="item in lineList"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
				  </el-select>
      </div>
		<!-- <select v-model="one" @change="changeline()">
			<option v-for="item in lineList" :value="item" :key="item">{{item}}</option>
		</select> -->
		<div class="com-chart" ref="section_ref"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lineList: [],
				value: "5号线",
				id: 0
			}
		},
		mounted() {
			this.drawChart(this.id);
		},
		created() {
			var jsonData = require('../../assets/js/data/singlesection.js');
			var res=jsonData.singlesection;
				var Line = res.map(item => item.line)
				Line = [...new Set(Line)];
				this.lineList = Line;
			
		},
		methods: {
			changeline(item) {
      this.one = item;
      for (var i = 0; i < this.lineList.length; i++) {
        if (item == this.lineList[i]) {
          this.drawChart(i);
        }
      }
    },
			drawChart(id) {
				var mychart = this.$echarts.init(this.$refs.section_ref);
				var jsonData = require('../../assets/js/data/singlesection.js');
				var res=jsonData.singlesection;
					var Line = res.map(item => item.line)

					Line = [...new Set(Line)];

					var hours = res.filter(item => item.line == Line[id]).map(item => item.time);
					hours = [...new Set(hours)];

					var station = res.filter(item => item.line == Line[id]).map(item => item.Station);
					station = [...new Set(station)];
					var data1 = [];
					var data2 = [];
					var index = 0;
					var max;
					var min;
					res.filter(item => item.line == Line[id]).map(item => item).forEach((item) => {


						data1[index++] = [item.Station, parseInt(item.time), parseInt(item.incount)];

						data2[index++] = [item.Station, parseInt(item.time), -parseInt(item.outcount)];

					})

					var arr1 = res.filter(item => item.line == Line[id]).map(item => parseInt(item.incount));
					var arr2 = res.filter(item => item.line == Line[id]).map(item => -item.outcount);
					max = arr1.reduce(function(a, b) {
						return b > a ? b : a;
					});
					min = arr2.reduce(function(a, b) {
						return b < a ? b : a;
					});
					var indata = [];
					var outdata = [];
					indata = data1.sort(function(a, b) {
						return a[1] - b[1];
					});
					outdata = data2.sort(function(a, b) {
						return a[1] - b[1];
					});
					var option = {
						/* title: {
							text: '线路截断面客流分析',
							textStyle: {
								color: 'white',
								fontSize: 20
							},
							x: 'center',

						}, */
						
						 toolbox: {
						        show: true,
								x2:30,
								y:30,
						        feature: {
						           
						            restore: {},
						            
						        },
								iconStyle:{
									borderColor:"rgba(207, 207, 207, 1.0)"
								
								}
								 
						    },
						tooltip: {
							trigger: "item"
						},
						visualMap: {
							max: 300,
							inRange: {
								color: ['#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#fdae61', '#f46d43', '#d73027', '#a50026']
							},
							textStyle:{
								color:'white'
							},
							x:15,
							y2:10
							
						},
						xAxis3D: {
							name: "时段",
							type: 'category',
							// data: hours,
							itemStyle: {
								color: 'white'
							},
							axisLabel: {
								interval: 0,
								inside: true,
								textStyle: {
									color: '#fff'
								}
							},

						},
						yAxis3D: {
							name: "站点",

							type: 'category',
							itemStyle: {
								opacity: 0.4
							},
							// data: station,
							axisLabel: {
								interval: 0,
								inside: true,
								textStyle: {
									color: '#fff'
								}
							},

						},
						zAxis3D: {
							name: "人数",
							type: 'value',
							min: min,
							max: max,
							itemStyle: {
								opacity: 0.4
							},
							axisLabel: {
								inside: true,
								textStyle: {
									color: '#fff'
								}
							},

						},
						grid3D: {
							boxWidth: 300,
							boxDepth: 100,
							 viewControl: {
							            beta:10,
							            alpha:10
							        },
							axisLine: {
								lineStyle: {
									color: '#fff'
								}
							},
							axisPointer: {
								lineStyle: {
									color: '#fff'
								}
							},
							
							light: {
								main: {
									shadow: true,
									quality: 'ultra',
									intensity: 1.5
								}
							}
						},
						light: {
							main: {
								intensity: 1.2
							},
							ambient: {
								intensity: 0.3
							}

						},
						series: [{
								type: 'bar3D',
								data: indata.map(function(item) {
									return {
										value: [item[1], item[0], item[2]],
									}
								}),
								shading: 'color',
								stack: 'bar',
								emphasis: {
									label: {
										fontSize: 20,
										color: '#ffffff'
									},
									itemStyle: {
										color: '#63ffa4'
									}
								}
							},
							{
								type: 'bar3D',
								data: outdata.map(function(item) {
									return {
										value: [item[1], item[0], item[2]],
									}
								}),
								shading: 'color',
								stack: 'bar',

								// label: {
								// 	show: true,
								// 	fontSize: 16,
								// 	borderWidth: 1,
								// 	color:'white'
								// },

								// itemStyle: {
								//     opacity: 0.4
								// },

								emphasis: {
									label: {
										fontSize: 20,
										color: '#ffffff'
									},
									itemStyle: {
										color: '#63ffa4'
									}
								}
							}
						]
					}
					mychart.setOption(option);
					
					
				window.addEventListener("resize", function() {

					mychart.resize();
				});
			}
		}
	}
</script>

<style scoped>

	.el-input__inner {
	  
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
<style>
	.el-button {
	    display: inline-block;
	    line-height: 1;
	    white-space: nowrap;
	    cursor: pointer;
	    background: #13111147;
	    border: 1px solid #DCDFE6;
	    color: #dcdfe6;
	}
	.el-button:hover{
		background-color: #27395c
	}
</style>
