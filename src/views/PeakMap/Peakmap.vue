<template>
	<div class="com-container" >

		<div style="width: 100%; height: 100%;  " ref="PeakMap_ref"></div>
	</div>
</template>

<script>
	import {
		Oldhotdata
	} from "../../assets/js/heatmap.js"
	import {
		links
	} from "../../assets/js/Linelink.js"
	import {
		station
	} from "../../assets/js/staion.js"
	export default {
		name: "Peakmap",
		data() {
			return {

			}
		},
		mounted() {
			// 调用这个函数  在节点创建完成之后
			this.drawBarChart();
		},
		methods: {
			drawBarChart() {


				var data = station;
				data.push({
					name: "地铁1号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [0, 1070],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#35c2ff",
						position: 'bottom',
						fontSize: 5,
						fontSize: 18,
						show: true,
						fontWeight: 1000
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁2号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [280, 250],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#e21111",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁3号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [1180, 250],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#ff15ea",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁11号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [-50, 1200],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#48D1CC",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁5号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [380, 340],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#20B2AA",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁10号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [200, 1280],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#0055ff",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁4号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [1250, 1000],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#aa00ff",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, {
					name: "地铁12号线",
					tooltip: {
						formatter: "{b}: 19999<br />"
					},
					symbolSize: 0.1,
					value: [200, 450],
					x: 800,
					y: 400,
					fixed: true,
					// draggable: false,
					category: 1,
					label: {
						color: "#55ff7f",
						position: 'bottom',
						fontSize: 8,
						fontSize: 18,
						show: true,
						fontWeight: 1000,
						show: true
					},
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: "#157eff"
								},
								{
									offset: 1,
									color: "#35c2ff"
								}
							])
						}
					}
				}, )
				var mychart = this.$echarts.init(this.$refs.PeakMap_ref, this.theme);
				var jsonData = require('../../assets/js/data/peeksum.js');
				var res=jsonData.peaksum;
					// console.log("res"+res);
					var alldata = [];
					var earlydata = [];
					var noondata = [];
					var afternoondata = [];
					var nightdata = [];
					// var d=res.map(item=>item.Name);
					// console.log(d);

					res.forEach((item) => {
						alldata.push({
							name: item.Name,
							value: parseInt(item.earlySum) + parseInt(item.zhongsum) + parseInt(item.xiasum) + parseInt(item.nightSum)
						})
						earlydata.push({
							name: item.Name,
							value: parseInt(item.earlySum)
						})
						noondata.push({
							name: item.Name,
							value: parseInt(item.zhongsum)
						})
						afternoondata.push({
							name: item.Name,
							value: parseInt(item.xiasum)
						})
						nightdata.push({
							name: item.Name,
							value: parseInt(item.nightSum)
						})
					})
					var hotall = [];
					var hote = [];
					var hotn = [];
					var hota = [];
					var hotnight = [];
					hotall = JSON.parse(JSON.stringify(Oldhotdata));
					hote = JSON.parse(JSON.stringify(Oldhotdata));
					hotn = JSON.parse(JSON.stringify(Oldhotdata));
					hota = JSON.parse(JSON.stringify(Oldhotdata));
					hotnight = JSON.parse(JSON.stringify(Oldhotdata));
					for (var i = 0; i < earlydata.length; i++) {

						hotall.filter(item => item.name == alldata[i].name).map(item => item.value = [item.value[0], item.value[1],
							alldata[i].value
						])

						hote.filter(item => item.name == earlydata[i].name).map(item => item.value = [item.value[0], item.value[1],
							earlydata[i].value
						])


						hotn.filter(item => item.name == noondata[i].name).map(item => item.value = [item.value[0], item.value[1],
							noondata[i].value
						])

						hota.filter(item => item.name == afternoondata[i].name).map(item => item.value = [item.value[0], item.value[1],
							afternoondata[i].value
						])

						hotnight.filter(item => item.name == nightdata[i].name).map(item => item.value = [item.value[0], item.value[1],
							nightdata[i].value
						])



					}
					var top5all = [];
					var topall = [];
					topall = hotall.sort(function(a, b) {
						return b.value[2] - a.value[2];
					});
					for (var i = 0; i < 5; i++) {
						top5all[i] = topall[i];
					}
					
					var top5zao = [];
					var topzao = [];
					topzao = hote.sort(function(a, b) {
						return b.value[2] - a.value[2];
					});
					for (var i = 0; i < 5; i++) {
						top5zao[i] = topzao[i];
					}
					
					var top5zhong = [];
					var topzhong = [];
					topzhong = hotn.sort(function(a, b) {
						return b.value[2] - a.value[2];
					});
					for (var i = 0; i < 5; i++) {
						top5zhong[i] = topzhong[i];
					}
					
					var top5xia = [];
					var topxia = [];
					topxia = hota.sort(function(a, b) {
						return b.value[2] - a.value[2];
					});
					for (var i = 0; i < 5; i++) {
						top5xia[i] = topxia[i];
					}
					
					
					var top5wan = [];
					var topwan = [];
					topwan = hotnight.sort(function(a, b) {
						return b.value[2] - a.value[2];
					});
					for (var i = 0; i < 5; i++) {
						top5wan[i] = topwan[i];
					}
					
					
					
					
					
					
					
					
					var dom = [];
					var hotdata = [];
					var t5 = [];
					
					
					
					
					for (var i = 0; i < 5; i++) {


						var txt;
						if (i == 0) {
							hotdata = hotall;
							// top5=top51;
							txt = "整体热力图";
							t5 = top5all;
						}
						if (i == 1) {
							hotdata = hote;
							// top5=top51;
							txt = "早高峰热点分布图";
							t5 = top5zao;
						} else if (i == 2) {
							hotdata = hotn;
							// top5=top52;
							txt = "中午热点分布图";
							t5 = top5zhong;
						} else if (i == 3) {
							hotdata = hota;
							// top5=top53;
							txt = "下午热点分布图";
							t5 = top5xia;
						} else if (i == 4) {
							hotdata = hotnight;
							// top5=top54;
							txt = "晚高峰热点分布图"
							t5 = top5wan;
						}
						dom.push({
							title: {
								text: txt,
								textStyle: {
									color: 'white',
									fontSize: 20,
								},
								

							},
							series: [

								{
									type: "graph",
									z: 1,
									draggable: false,
									coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）
									symbolSize: 0,
									tooltip: {
										show: false
									},
									data: data,
									label: {
										
											show: false
										
									},
									links: links,
									lineStyle: {
										normal: {
											opacity: 0.6, //线条透明度
											color: "#53B5EA",
											curveness: 0, //站点间连线曲度，0表示直线
											width: 6 //线条宽度
										}
									}
								},
								{
									// name: '散点图',
									type: 'scatter',
									z: 5,
									coordinateSystem: 'cartesian2d',
									data: hotdata,
									symbolSize: function(val) {
										return (5 + Math.log2(val[2]));
									},
									// symbolSize: 15,
									label: {
										
											formatter: '{b}',
											position: 'right',
											show: false,
										
										emphasis: {
											show: true
										}
									},
									itemStyle: {
										normal: {
											color: '#ffffff'
										}
									},
									tooltip: {
										trigger: 'item',
										formatter: function(params) {
											return params.name + ' : ' + params.value[2];
										}
									},
								},
								{
									name: 'all',
									type: 'effectScatter',
									coordinateSystem: 'cartesian2d',
									data: hotdata,
									showEffectOn: 'render',
									rippleEffect: {
										brushType: 'stroke',
										scale: 2,
										period: 6
									},
									symbolSize: function(val) {
										return (5 + Math.log2(val[2]));
									},
									hoverAnimation: true,

									itemStyle: {
										normal: {
											color: '#f4e925',
											shadowBlur: 20,
											shadowColor: '#333'
										}
									},
									tooltip: {
										show: false
									},
									z: 2
								},
								{
									name: '点',
									type: 'scatter',
									coordinateSystem: 'cartesian2d',
									symbol: 'pin', //气泡
									symbolSize: 80,
									label: {
										
											show: true,
											textStyle: {
												color: '#fff',
												fontSize: 12,
											},
											formatter: function(params) {
												return params.name + '\n人数' + params.value[2];
											}
										
									},
									itemStyle: {
										color: '#00ff7f', //标志颜色
									},
									tooltip: {
										show: false
									},
									z: 6,
									data: t5
								},


							]
						})

					};

					var option = {
						baseOption: {
							backgroundColor:'#111e36',
							title: {
								text: '',
								textStyle: {
									color: 'white',
									fontSize: 20,
									fontFamily: '黑体'
								},
								x: 'center',
								top: 5,

							},
							grid: {
								//x2: '20%',
								bottom: '1%',

								containLabel: true
							},

							tooltip: {
								trigger: 'item'
							},
							dataZoom: [{
									type: 'inside',
									xAxisIndex: [0],
									start: 1,
									end: 100
								},
								{
									type: 'inside',
									yAxisIndex: [0],
									start: 1,
									end: 100
								}
							],
							xAxis: {
								show: false,
								min: -40,
								max: 1250,
								// type: "value",
								// //开启x轴坐标
								// axisPointer: {
								// 	show: true
								// },
							},
							yAxis: {
								show: false,
								min: -10,
								max: 1300,
								// //   type: "value",
								// //开启y轴坐标
								// axisPointer: {
								// 	show: true
								// },
							},
							timeline: {
								axisType: 'category',
								// realtime: false,
								// loop: false,
								autoPlay: true,
								// currentIndex: 2,
								playInterval: 3000,
								// controlStyle: {
								//     position: 'left'
								// },
								label: {
									interval:0,
									rotate:20,
									position:20,
									textStyle: {
										color: 'white',
									}
									/* normal: {
										textStyle: {

											color: 'white',
										}
									},
									emphasis: {
										textStyle: {
											color: 'red'
										}
									} */
								},
								color: 'white',
								data: ['整体', '6:00~9:00', '10:00~13:00', '14:00~15:00', '16:00~19:00'],
								bottom: '5%',
							},
							visualMap: {
								min: 0,
								max: 40000,
								// splitNumber: 5,
								dicension: 2,
								seriesindex: [1],
								opacity: 10,
								inRange: { // 选中范围中的视觉配置
									color: ['#50a3ba', '#f5d038', '#d90b27'], // 定义了图形颜色映射的颜色列表，
									// 数据最小值映射到'blue'上，
									// 最大值映射到'red'上，
									// 其余自动线性计算。
									// symbolSize: [200, 60000] // 定义了图形尺寸的映射范围，
									// 数据最小值映射到30上，
									// 最大值映射到100上，
									// 其余自动线性计算。'#50a3ba',
								},
								bottom: "10%",
								left:"1%",
								pieces: [{
										min: 13000
									},
									{
										min: 8000,
										max: 13000

									},
									{
										min: 4000,
										max: 8000
									},
									{
										min: 2000,
										max: 4000
									},
									{
										min: 1000,
										max: 2000
									},
									{
										min: 500,
										max: 1000
									},
									{
										max: 500
									}
								],
								textStyle: {
									color: '#fff'
								}
							},

						},
						options: dom
					};
					mychart.setOption(option,true);




			
				window.addEventListener("resize", function() {

					mychart.resize();
				});
			}
		},
	}
</script>

<style scoped>
	.com-container {
		width: 100%;
		height: 100%;
	}
</style>
