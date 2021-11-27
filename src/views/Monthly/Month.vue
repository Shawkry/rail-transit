<template>
	<div class="com-container">
		<div class="com-chart" ref="Month_ref"></div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.drawChart();
		},
		methods: {
			drawChart() {
				var mychart = this.$echarts.init(this.$refs.Month_ref, this.theme);
				var jsonData = require('../../assets/js/data/month.js');
				var res=jsonData.month;
					var xData = res.map(item => item.month);
					xData = [...new Set(xData)];
					var inData = res.map(item => item.in);

					var yMax = 500;
					var dataShadow = [];

					for (var i = 0; i < inData.length; i++) {
						dataShadow.push(yMax);
					}

					var option = {
						title: {
							text: '单月客流',
				            textStyle: {
				                align: 'center',
				                color: '#fff',
				                fontSize: 20,
								fontFamily: '黑体'
				            },
							x: 'center',
							y:'6%'
						},
						tooltip:{
							trigger: 'item',
						},
						grid:{
							top:'15%',
							height:'80%',
							width:'77%',
							left:'17%',
							bottom:'10%'
						},
						toolbox: {
							show: true,
							color: 'white',
							feature: {
								dataView: {
									show: true,
									readOnly: false
								},
								magicType: {
									show: true,
									type: ['line', 'bar']
								},
								restore: {
									show: true
								},

							},
							right: '20px',
							y:'6%'
						},
						xAxis: {
							data: xData,
							axisLabel: {
								inside: true,
								textStyle: {
									color: '#fff'
								}
							},
							axisTick: {
								show: false
							},
							axisLine: {
								show: false
							},
							z: 10
						},
						yAxis: {
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								textStyle: {
									color: '#ffffff'
								}
							}
						},
						dataZoom: [{
							type: 'inside'
						}],
						series: [{
							type: 'bar',
							showBackground: true,
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: '#83bff6'
										},
										{
											offset: 0.5,
											color: '#188df0'
										},
										{
											offset: 1,
											color: '#188df0'
										}
									]
								)
							},
							emphasis: {
								itemStyle: {
									color: new this.$echarts.graphic.LinearGradient(
										0, 0, 0, 1,
										[{
												offset: 0,
												color: '#2378f7'
											},
											{
												offset: 0.7,
												color: '#2378f7'
											},
											{
												offset: 1,
												color: '#83bff6'
											}
										]
									)
								}
							},
							data: inData
						}]
					};

					// Enable data zoom when user click bar.
					var zoomSize = 6;
					mychart.on('click', function(params) {
						console.log(xData[Math.max(params.dataIndex - zoomSize / 2, 0)]);
						mychart.dispatchAction({
							type: 'dataZoom',
							startValue: xData[Math.max(params.dataIndex - zoomSize / 2, 0)],
							endValue: xData[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
						});
					});
mychart.setOption(option);
				

				window.addEventListener("resize", function() {

					mychart.resize();
				});
			}
		},
	}
</script>



<style>
</style>
