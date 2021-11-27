<template>
	<div class="com-container">
<!-- <select v-model="selectItem"  @change="change">
								<option v-for="item in List" :value="item.name" :key="item.name">{{item.name}}</option>
							</select> -->
		<div style="width: 800px; height: 850px; margin-right: 10px; " ref="hotmap_ref"></div>
	</div>
</template>
<!-- v-model="one" -->
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
		name: "HotMap",
		
		data() {
			return {
				// List:[{id:1,name:"热力图"},{id:2,name:"早高峰热点图"},{id:3,name:"晚高峰热点图"}],
				// selectItem: "热力图",
				// id:0
			}
		},
		mounted() {
			// 调用这个函数  在节点创建完成之后
			this.drawChart();
		},
		methods: {
			// change(){
			// 	for (var i = 0; i < this.List.length; i++) {
			// 		if (this.selectItem == this.List[i].name) {
			// 			this.id=i;
			// 			this.drawChart(i);
			// 			console.log("what"+this.selectItem);
			// 		}
			// 	}
					 
			// },
			drawChart() {
				

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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},
					{
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
							fontSize: 18,show:true,
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
					},)
					
					// if(id==0){
						
				var mychart = this.$echarts.init(this.$refs.hotmap_ref, this.theme);
					this.$http.get("http://localhost:1314/res/SingleAllCount.json").then(res => {
					var hotvalue = [];
						res.data.forEach((item) => {
							hotvalue.push({
								name: item.Station,
								value: parseInt(item.sumCount)
							})
						})
						
						
						var hotdata = [];
						
						hotdata = Oldhotdata;
						console.log(hotdata);
					var top5=[];var top=[];
						for (var i = 0; i < hotvalue.length; i++) {
							
							hotdata.filter(item => item.name == hotvalue[i].name).map(item => item.value = [item.value[0], item.value[1],
								hotvalue[i].value
							]);
							
							// name: hotvalue[i].name,
							// value: data.filter(item => item.name == hotvalue[i].name).map(item => item.value)
						}
						top=hotdata.sort(function (a, b) { return  b.value[2]-a.value[2]; });
						for(var i=0;i<5;i++){
							top5[i]=top[i];
						}
					var option = {
						
						backgroundColor:'#1b243b',
							title: {
								text: '热力图',
								textStyle: {
									color: 'white',
									fontSize: 20
								},
								x: 'center',
								top: 10,
								
							},
							grid: {
								x2: '20%'
							},
							tooltip: {
								trigger: 'item'
							},
							dataZoom: [{
									type: 'inside',
									xAxisIndex: [0],
									start: 0,
									end: 100
								},
								{
									type: 'inside',
									yAxisIndex: [0],
									start: 0,
									end: 100
								}
							],
							xAxis: {
								show: false,
								min: -50,
								max: 1300,
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
							visualMap: {
								min: 0,
								max: 20000,
								// splitNumber: 5,
								dicension: 2,
								seriesindex:[1],
								opacity:10,
								 calculable: true,
								        orient: 'vertical',
								inRange: { // 选中范围中的视觉配置
									color: [ '#50a3ba','#f5d038', '#d90b27'], // 定义了图形颜色映射的颜色列表，
									// 数据最小值映射到'blue'上，
									// 最大值映射到'red'上，
									// 其余自动线性计算。
									// symbolSize: [200, 60000] // 定义了图形尺寸的映射范围，
									// 数据最小值映射到30上，
									// 最大值映射到100上，
									// 其余自动线性计算。'#50a3ba',
								},
								bottom:"10%",
								  // pieces: [
								  //               {
								  //                   min: 40000,
								  //                   max: 80000
								  //               },
								  //               {
								  //                   min: 20000,
								  //                   max: 40000
								  //               },
								  //               {
								  //                   min: 10000,
								  //                   max: 20000
								  //               },
								  //               {
								  //                   min: 5000,
								  //                   max: 10000
								  //               },
								  //               {
								  //                   min: 1000,
								  //                   max: 5000
								  //               },
								  //               {
								  //                   min: 200,
								  //                   max: 1000
								  //               },
								  //               {
								  //                   max: 200
								  //               }
								  //           ],
								textStyle: {
									color: '#fff'
								}
							},
							series: [
								// {
								//                 name: '热图',
								//                 type: 'heatmap',
								// 				z: 1,
								//                 coordinateSystem: 'geo',
								//                 data: hotdata
								//             },
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
									data:hotdata,
									 symbolSize: function(val) {
									                    return (5 + Math.log2(val[2]));
									                },
									// symbolSize: 15,
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: false
										},
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
											return params.name + ':' + '人数'+params.value[2];
										}
									},
								},
								 {
								                name: 'Top5',
								                type: 'effectScatter',
								                coordinateSystem: 'cartesian2d',
								                data: hotdata,
								                showEffectOn: 'render',
								                rippleEffect: {
								                    brushType: 'fill',
													scale: 2,
													 period : 6
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
													show:false
													},
								                z: 2
								            },
											{
											            name: '点',
											            type: 'scatter',
											            coordinateSystem: 'cartesian2d',
											            symbol: 'pin', //气泡
											            symbolSize:80,
											            label: {
											                normal: {
											                    show: true,
											                    textStyle: {
											                        color: '#fff',
											                        fontSize: 12,
											                    },
											                    formatter: function(params) {
											                        return params.name + '\n人数'+params.value[2];
											                    }
											                }
											            },
											            itemStyle: {
											                color: '#00ff7f', //标志颜色
											            },
														tooltip: {
															show:false
															},
											            z: 6,
											            data: top5
											        },
								
								
								]
					};
					mychart.setOption(option,true);
				});	
				window.addEventListener("resize", function() {
				
					mychart.resize();
					});
				// }

					/* if(id==1){
						var mychart1 = this.$echarts.init(this.$refs.hotmap_ref, this.theme);
						this.$http.get("http://localhost:1314/res/PeakSum.json").then(res => {
						
							var hotvalue1 = [];
							res.data.forEach((item) => {
								hotvalue1.push({
									name: item.Name,
									value: parseInt(item.earlySum)
								})
							})
							
							
							var hotdata1 = [];
							
							hotdata1 = Oldhotdata;
							console.log(hotdata1);
						var top51=[];var top1=[];
							for (var i = 0; i < hotvalue1.length; i++) {
								
								
								data.filter(item => item.name == hotvalue1[i].name).map(item => item.value = [item.value[0], item.value[1],
									hotvalue1[i].value
								]);
								hotdata1.filter(item => item.name == hotvalue1[i].name).map(item => item.value = [item.value[0], item.value[1],
									hotvalue1[i].value
								]);
								
								// name: hotvalue[i].name,
								// value: data.filter(item => item.name == hotvalue[i].name).map(item => item.value)
							}
							top1=hotdata1.sort(function (a, b) { return  b.value[2]-a.value[2]; });
							for(var i=0;i<5;i++){
								top51[i]=top1[i];
							}
							console.log("前5"+top51);
						
						
							var option1 = {
								
									title: {
										text: '早高峰热点站点分布',
										textStyle: {
											color: 'white',
											fontSize: 20
										},
										x: 'center',
										top: 10,
										
									},
									grid: {
										x2: '20%'
									},
									tooltip: {
										trigger: 'item'
									},
									dataZoom: [{
											type: 'inside',
											xAxisIndex: [0],
											start: 1,
											end: 99
										},
										{
											type: 'inside',
											yAxisIndex: [0],
											start: 1,
											end: 99
										}
									],
									xAxis: {
										show: false,
										min: -60,
										max: 1300,
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
									visualMap: {
										min: 0,
										max: 15000,
										// splitNumber: 5,
										dicension: 2,
										seriesindex:[1],
										opacity:10,
										inRange: { // 选中范围中的视觉配置
											color: [ '#50a3ba','#f5d038', '#d90b27'], // 定义了图形颜色映射的颜色列表，
											// 数据最小值映射到'blue'上，
											// 最大值映射到'red'上，
											// 其余自动线性计算。
											// symbolSize: [200, 60000] // 定义了图形尺寸的映射范围，
											// 数据最小值映射到30上，
											// 最大值映射到100上，
											// 其余自动线性计算。'#50a3ba',
										},
										bottom:"10%",
										  pieces: [
										                
										                {
										                    min: 8000,
										                    
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
									series: [
										// {
										//                 name: '热图',
										//                 type: 'heatmap',
										// 				z: 1,
										//                 coordinateSystem: 'geo',
										//                 data: hotdata
										//             },
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
											data: hotdata1,
											 symbolSize: function(val) {
											                    return (5 + Math.log2(val[2]));
											                },
											// symbolSize: 15,
											label: {
												normal: {
													formatter: '{b}',
													position: 'right',
													show: false
												},
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
										                name: 'Top5',
										                type: 'effectScatter',
										                coordinateSystem: 'cartesian2d',
										                data: top51,
										                showEffectOn: 'render',
										                rippleEffect: {
										                    brushType: 'stroke',
															scale: 5,
															 period : 6
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
															show:false
															},
										                z: 2
										            },
										
										
										]
							};
							mychart1.setOption(option1);
							console.log(hotdata1);
							
							
							
						});window.addEventListener("resize", function() {

					mychart1.resize();
					});
					
			}
					if(id==2){
						var mychart2 = this.$echarts.init(this.$refs.hotmap_ref, this.theme);
				this.$http.get("http://localhost:1314/res/PeakSum.json").then(res => {
				
					var hotvalue2 = [];
					res.data.forEach((item) => {
						hotvalue2.push({
							name: item.Name,
							value: parseInt(item.nightSum)
						})
					})
					
					
					var hotdata2 = [];
					
					hotdata2 = Oldhotdata;
					console.log(hotdata2);
				var top52=[];var top2=[];
					for (var i = 0; i < hotvalue2.length; i++) {
						
						
						data.filter(item => item.name == hotvalue2[i].name).map(item => item.value = [item.value[0], item.value[1],
							hotvalue2[i].value
						]);
						hotdata2.filter(item => item.name == hotvalue2[i].name).map(item => item.value = [item.value[0], item.value[1],
							hotvalue2[i].value
						]);
						
						// name: hotvalue[i].name,
						// value: data.filter(item => item.name == hotvalue[i].name).map(item => item.value)
					}
					top2=hotdata2.sort(function (a, b) { return  b.value[2]-a.value[2]; });
					for(var i=0;i<5;i++){
						top52[i]=top2[i];
					}
					console.log("前5"+top52);
				
				
					var option2 = {
						
							title: {
								text: '晚高峰热点站点分布',
								textStyle: {
									color: 'white',
									fontSize: 20
								},
								x: 'center',
								top: 10,
								
							},
							grid: {
								x2: '20%'
							},
							tooltip: {
								trigger: 'item'
							},
							dataZoom: [{
									type: 'inside',
									xAxisIndex: [0],
									start: 1,
									end: 99
								},
								{
									type: 'inside',
									yAxisIndex: [0],
									start: 1,
									end: 99
								}
							],
							xAxis: {
								show: false,
								min: -60,
								max: 1300,
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
							visualMap: {
								min: 0,
								max: 30000,
								// splitNumber: 5,
								dicension: 2,
								seriesindex:[1],
								opacity:10,
								inRange: { // 选中范围中的视觉配置
									color: [ '#50a3ba','#f5d038', '#d90b27'], // 定义了图形颜色映射的颜色列表，
									// 数据最小值映射到'blue'上，
									// 最大值映射到'red'上，
									// 其余自动线性计算。
									// symbolSize: [200, 60000] // 定义了图形尺寸的映射范围，
									// 数据最小值映射到30上，
									// 最大值映射到100上，
									// 其余自动线性计算。'#50a3ba',
								},
								bottom:"10%",
								  pieces: [
								                
								                {
								                    min: 10000,
								                    
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
							series: [
								// {
								//                 name: '热图',
								//                 type: 'heatmap',
								// 				z: 1,
								//                 coordinateSystem: 'geo',
								//                 data: hotdata
								//             },
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
									data: hotdata2,
									 symbolSize: function(val) {
									                    return (5 + Math.log2(val[2]));
									                },
									// symbolSize: 15,
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: false
										},
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
								                name: 'Top5',
								                type: 'effectScatter',
								                coordinateSystem: 'cartesian2d',
								                data: top52,
								                showEffectOn: 'render',
								                rippleEffect: {
								                    brushType: 'stroke',
													scale: 5,
													 period : 6
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
													show:false
													},
								                z: 2
								            },
								
								
								]
					};
					mychart2.setOption(option2);
					console.log(hotdata2);
					
					
					
				});
				window.addEventListener("resize", function() {
					
						mychart2.resize();
						});
					
					} */
					// console.log(id+"option");
							
				// window.addEventListener("resize", function() {

				// 	mychart.resize();
				// 	});
					
					
					
				
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
