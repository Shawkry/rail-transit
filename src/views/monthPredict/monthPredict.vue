<template>
	<div class="monthpredict">
	<div class="monthp" ref='monthp_ref'></div>
	</div>
</template>

<script>
	export default {


		mounted() {
			this.drawChart();
		},
		methods: {
			drawChart() {
				var mychart = this.$echarts.init(this.$refs.monthp_ref);
				var jsonData = require('../../assets/js/data/monthpredict.js');
				var res=jsonData.monthpredict;
				
				
					var futuredata = [{
							"month": "2020年7月",
							"day": "17",
							"predict": "7077"
						},
						{
							"month": "2020年7月",
							"day": "18",
							"predict": "7553"
						},
						{
							"month": "2020年7月",
							"day": "19",
							"predict": "7038"
						},
						{
							"month": "2020年7月",
							"day": "20",
							"predict": "7620"
						},
						{
							"month": "2020年7月",
							"day": "21",
							"predict": "7822"
						},
						{
							"month": "2020年7月",
							"day": "22",
							"predict": "7291"
						},
						{
							"month": "2020年7月",
							"day": "23",
							"predict": "7789"
						},
						{
							"month": "2020年7月",
							"day": "24",
							"predict": "7227"
						},
						{
							"month": "2020年7月",
							"day": "25",
							"predict": "7757"
						},
						{
							"month": "2020年7月",
							"day": "26",
							"predict": "7486"
						},
						{
							"month": "2020年7月",
							"day": "27",
							"predict": "7902"
						},
						{
							"month": "2020年7月",
							"day": "28",
							"predict": "7163"
						},
						{
							"month": "2020年7月",
							"day": "29",
							"predict": "7227"
						},
						{
							"month": "2020年7月",
							"day": "30",
							"predict": "6727"
						},
						{
							"month": "2020年7月",
							"day": "31",
							"predict": "7822"
						},

					]
					var month = [];
					month = res.map(item => item.month + item.day + '日');
					var real = [];
					var predict = [];
					
					real = res.map(item => item.real);
					predict = res.map(item => +item.predict);
					var fday = futuredata.map(item => item.month + item.day + '日');
					fday.forEach((item) => {
						month.push(item);
					})

					var fpredict = [];
					var tmp = futuredata.map(item => item.predict);
					for (var i = 0; i < predict.length - 1; i++) {
						fpredict.push('')
					}
					fpredict.push(predict[predict.length - 1])
					tmp.forEach((item) => {
						fpredict.push(item);
					})
					
					
					var max =  predict.reduce(function(a , b){ return b > a ? b : a; });
					max=max-10;
					var markdata=[];
					res.forEach((item)=>{
						if(item.real>=max){
							markdata.push({
								name:item.month + item.day + '日',
								value:item.real,
								coord:[item.month + item.day + '日',item.real]
							});
						}
						if(item.predict>=max){
							markdata.push({
								name:item.month + item.day + '日',
								value:item.predict,
								coord:[item.month + item.day + '日',item.predict]
							});
						}
						
					})
					
					futuredata.forEach((item)=>{
						if(item.predict>=max){
							markdata.push({
								name:item.month + item.day + '日',
								value:item.predict,
								coord:[item.month + item.day + '日',item.predict]
							});
						}
					})
					
					
				
					var setmonth = [];
					var setreal = [];
					var setfpredict = [];
					var setpredict = [];
					
					setmonth = month;
					setreal = real;
					setfpredict = fpredict;
					setpredict = predict;
	var option = {
					 title: {
            text: "每月的客流预测分析",
            x: "center",
            y: "2%",
            textStyle: {
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "normal",
              fontFamily: "黑体",
            },
          },
				    "textStyle": {
				        "fontFamily": "Din-Light"
				    },
				    "color": ['#ff999a','#09bcb7','#00ff7f',  "#123dac", "#73e2e2", "#ff7e85","#fac524", "#9b52ff",  "#46caff", "#a1e867", "#10b2b2", "#ec87f7", "#f4905a", "#00baba", "#facf24", "#e89d67", "#23c6c6", "#fa8699", "#40b7fc", "#006d75", "#595959", "#f4764f", "#a640fc", "#fda23f", "#2d7ae4", "#5092ff", "#9351ed", "#8a89fe", "#df89e8", "#2797ff", "#6ad089", "#7c92e8 "],
				    
				    "legend": {
				        "data": [{
				            "name": "实际人数",
				            // "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
				        },{
				            "name": "实际预测",
				            // "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
				        }, {
				            "name": "未来预测",
				            // "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
				        }, ],
				        "left": "left",
				        "selected": {
				            "实际人数": true,
				            "未来预测": true,
				            "实际预测": true
				        },
				        "itemWidth": 8,
				        "itemHeight": 8,
				        "itemGap": 8,
				        "textStyle": {
				            "color": '#cfcfcf',
				            "lineHeight": 15
				        },
				        "type": "scroll",
top: "10%",
            right: "4%",
				    },
					visualMap: [
						{
							top: 50,
							right: 10,
							show: false,
							pieces: [{
								min: max,
								max: 100000,
								color: '#d90b27',
							}, ],
							
							seriesIndex: 1,
							textStyle: {
								color: '#dfdfdf'
							},
							outOfRange: {
								color: '#ff999a'
							}
						},
						{
							top: 50,
							right: 10,
							show: false,
							
							pieces: [{
								min: max,
								max: 100000,
								color: '#d90b27',
							}, ],
					
							seriesIndex: 2,
							textStyle: {
								color: '#dfdfdf'
							},
							outOfRange: {
								color: '#00ff7f'
							}
						},
						{
								top: 50,
								right: 10,
								show: false,
								pieces: [{
									min: max,
									max: 100000,
									color: '#d90b27',
								}, ],
								
								seriesIndex: 0,
								textStyle: {
									color: '#dfdfdf'
								},
								outOfRange: {
									color: '#09bcb7',
								}
							},
					],
							 dataZoom: [
					     {
					         show: false,
					         realtime: true,
					z:100,
					height:20,
					width:650,
					bottom:5,
					left:'center',
					containLabel: true,
					         start: 0,
					         end: 100
					     },
					     {
					         type: 'inside',
					         realtime: true,
					
					
					         start: 0,
					         end: 100
					     }
					 ],
				    "tooltip": {
				        "backgroundColor": "#fff",
				        "trigger": "axis",
				        "axisPointer": {
				           type: 'shadow',
				           label: {
				           	backgroundColor: '#eee'
				           }
				        },
				        "textStyle": {
				            "color": "#565656",
				            "lineHeight": 28
				        },
				        "confine": true,
				        "padding": 12,
				        "extraCssText": "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
				        "formatter": {
				            "_custom": {
				                "type": "function",
				                "display": "<span>ƒ</span> (params)"
				            }
				        }
				    },
				    "grid": {
            width: "92%",
            height: "73%",
            top: "18%",
            left: "4%",
            right: "4%",
            bottom: "8%",
            containLabel: true,
          },
				    "xAxis": {
				        "type": "category",
				        "boundaryGap": true,
				        "data": setmonth,
						z:10,
				        "axisLabel": {
				            "color":'#cfcfcf',
				            //X轴标签 label 做了特殊处理，防止左右溢出
				           formatter: (value, index) => {
				              if (index === 0 || index === setmonth.length - 1) {
				                return "";
				              }
				              return value;
				            }
				        },
				        "axisLine": {
				            "show": false
				        },
				        "axisTick": {
				            "show": false
				        }
				    },
				    "yAxis": {
				        "name": "",
				        "nameTextStyle": {
				            "color": "gray"
				        },
				        "type": "value",
				        axisLabel: {
				        	textStyle: {
				        		color: '#cfcfcf'
				        	}
				        },
				        "splitLine": {
				            "lineStyle": {
				                "type": "dashed"
				            }
				        },
				        // "minInterval": 1,
				        "axisLine": {
				            "show": false
				        },
				        "axisTick": {
				            "show": false
				        }
				    },
				    "series": [{
				        "name": "实际预测",
				        "data": setpredict,
						z:5,
						markLine: {
							containLabel: true,
							silent: true,
							lineStyle: {
								color: '#c7240e'
							},
							data: [{
								yAxis: max
							}],
							
						}, markPoint: {
							      data:markdata,
							      symbol: "pin",
								  itemStyle: {
											color: '#ff0000', //标志颜色
										},
								  label: {
								  	
								  		show: true,
								  		textStyle: {
								  			color: '#fff',
								  			fontSize: 8,
								  		},
								  		formatter: function(params) {
								  			return '超额预警'+ '\n人数' + params.value;
								  		},
										
								  	
								  },
							    },
				        "type": "line",
				        "smooth": true,
				        "smoothMonotone": "x",
				        "cursor": "pointer",
				        "showSymbol": false,
				        "lineStyle": {
				            "shadowColor": "rgba(255,126,133,0.5)",
				            "shadowBlur": 10
				        },
						areaStyle: {
							color: new this.$echarts.graphic.LinearGradient(
								0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(255, 189, 156, 0.7)'
									},
									{
										offset: 0.8,
										color: 'rgba(9,188,183,0.01)'
									}
								], false
							),
							shadowColor: 'rgba(0,0,0,0.01)',
							shadowBlur: 10
						
						},
				    },
					{
					    "name": "实际人数",
					    "data": setreal,
						z:5,
						
					    "type": "line",
					    "smooth": true,
					    "smoothMonotone": "x",
					    "cursor": "pointer",
					    "showSymbol": false,
					    "lineStyle": {
					        "shadowColor": "rgba(18,61,172,0.5)",
					        "shadowBlur": 10
					    },
						areaStyle: {
							color: new this.$echarts.graphic.LinearGradient(
								0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(5, 201, 211, 0.7)'
									},
									{
										offset: 0.8,
										color: 'rgba(9,188,183,0.01)'
									}
								], false
							),
							shadowColor: 'rgba(0,0,0,0.01)',
							shadowBlur: 10
						
						},
					},
					 {
					     "name": "未来预测",
					     "data":fpredict,
					 	z:5,
						
					     "type": "line",
					     "smooth": true,
					     "smoothMonotone": "x",
					     "cursor": "pointer",
					     "showSymbol": false,
					     "lineStyle": {
					         "shadowColor": "rgba(115,226,226,0.5)",
					         "shadowBlur": 10
					     },
					 	areaStyle: {
					 		color: new this.$echarts.graphic.LinearGradient(
					 			0, 0, 0, 1, [{
					 					offset: 0,
					 					color: 'rgba(151, 227, 227, 0.7)'
					 				},
					 				{
					 					offset: 0.8,
					 					color: 'rgba(9,188,183,0.01)'
					 				}
					 			], false
					 		),
					 		shadowColor: 'rgba(0,0,0,0.01)',
					 		shadowBlur: 10
					 	
					 	},
					 }, 
					 ]
				}
				mychart.setOption(option);




					/* var option = {
						title: {
							text: '每月的客流预测分析',
							x: 'center',
							y: 10,
							textStyle: {
								color: '#ffffff',
								fontSize: 20,
								fontWeight: 'normal',
							},
						},
						color: ['#09bcb7', '#ff999a', '#00ff7f'],
						grid: {
							width: "92%",
							height: "75%",
							top: '15%',
							left: '4%',
							right: '4%',
							bottom: '10%',
							containLabel: true
						},
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'shadow',
								label: {
									backgroundColor: '#eee'
								}
							}
						},
						legend: {
							show: true,
							icon: 'circle',
							top: 15,
							right: 80,
							itemWidth: 8,
							itemHeight: 8,
							textStyle: {
								color: '#cfcfcf'
							},
							data: ['历史预测', '实际值', '未来预测']
						},
						dataZoom: [
						     {
						        show: false,
						      height:20,
						      width:650,  
						z:100,
						bottom:10,
						         start: 80,
						         end: 100
						     },
						     {
						         type: 'inside',
						         realtime: true,


						         start: 80,
						         end: 100
						     }
						 ],
						visualMap: [{
								top: 50,
								right: 10,
								show: false,
								pieces: [{
									min: 7500,
									max: 100000,
									color: '#d90b27',
								}, ],
								
								seriesIndex: 0,
								textStyle: {
									color: '#dfdfdf'
								},
								outOfRange: {
									color: '#09bcb7'
								}
							},
							{
								top: 50,
								right: 10,
								show: false,
								pieces: [{
									min: 7500,
									max: 100000,
									color: '#d90b27',
								}, ],
								
								seriesIndex: 1,
								textStyle: {
									color: '#dfdfdf'
								},
								outOfRange: {
									color: '#ff999a'
								}
							},
							{
								top: 50,
								right: 10,
								show: false,
								
								pieces: [{
									min: 7500,
									max: 100000,
									color: '#d90b27',
								}, ],

								seriesIndex: 2,
								textStyle: {
									color: '#dfdfdf'
								},
								outOfRange: {
									color: '#00ff7f'
								}
							}
						],
						calculable: true,
						xAxis: {
							type: 'category',
							axisLine: {
								show: false,
								axisLine: {
									lineStyle: {
										color: '#cfcfcf'
									}
								},
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								textStyle: {
									color: '#cfcfcf'
								}
							},
							data: setmonth
						},
						yAxis: {
							type: 'value',
							axistick: {
								show: false
							},
							axisLine: {
								show: false,
								axisLine: {
									lineStyle: {
										color: '#cfcfcf'
									}
								},
							},

							axisLabel: {
								textStyle: {
									color: '#cfcfcf'
								}
							},
							splitLine: {
								lineStyle: {
									type: 'dashed',
									color: ['#afafaf']
								}
							}
						},
						series: [{
								type: 'line',
								name: '历史预测',
								markLine: {
									containLabel: true,
									silent: true,
									lineStyle: {
										color: '#c7240e'
									},
									data: [{
										yAxis: 7500
									}]
								},
								"smoothMonotone": "x",
								"cursor": "pointer",
								"showSymbol": false,
								areaStyle: {
									color: new this.$echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(0, 141, 211, 0.7)'
											},
											{
												offset: 0.8,
												color: 'rgba(9,188,183,0.01)'
											}
										], false
									),
									shadowColor: 'rgba(0,0,0,0.01)',
									shadowBlur: 10

								},
								smooth: true,
								// lineStyle: {
								// 	color: '#09bcb7'
								// },
								data: setpredict
							}, {
								type: 'line',
								name: '实际值',
								areaStyle: {
									color: new this.$echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(255,153,154,0.7)'
											},
											{
												offset: 0.8,
												color: 'rgba(255,153,154,0.01)'
											}
										], false
									),
									shadowColor: 'rgba(0,0,0,0.01)',
									shadowBlur: 10

								},
								smooth: true,
								// lineStyle: {
								// 	color: '#ff999a'
								// },
								data: setreal
							},
							{
								type: 'line',
								name: '未来预测',
								areaStyle: {
									color: new this.$echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(0, 255, 127, 0.7)'
											},
											{
												offset: 0.8,
												color: 'rgba(9,188,183,0.01)'
											}
										], false
									),
									shadowColor: 'rgba(0,0,0,0.01)',
									shadowBlur: 10

								},
								smooth: true,
								// lineStyle: {
								// 	color: '#00ff7f'
								// },
								data: setfpredict
							},
						]
					};
					mychart.setOption(option); */
					// //定时器，每秒调用sd函数，使横轴向左移一位，并且纵轴数据跟着动，实现动态效果
					// setInterval(() => {
					// 	var index = 30;
					// 	if (index == month.length - 1) {
					// 		index = 0;
					// 	}

					// 	for (var i = 0; i < 5; i++) {
					// 		option.series[0].data.shift();
					// 		option.series[0].data.push(predict[index++]);
					// 		option.series[1].data.shift();
					// 		option.series[1].data.push(real[index++]);
					// 		option.series[2].data.shift();
					// 		option.series[2].data.push(fpredict[index++]);
					// 	}
					// 	this.setmonth.shift();
					// 	this.setmonth.push(month[index++]);
					// 	mychart.setOption(option);
					// }, 1000);



					window.addEventListener("resize", function() {
						mychart.resize();

					});
				


			}
		},
	}
</script>

<style scoped="scoped">
	.monthpredict{
		width: 100%;
		height: 100%;
	}
	.monthp {
		width: 100%;
		height: 100%;
	
	}
</style>
