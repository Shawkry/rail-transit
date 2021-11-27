<template>
	<div class="com-container">
		<div class="com-chart" ref="lines_ref"></div>
	</div>
</template>

<script >
	import {walden} from "../../assets/js/walden.js"
	export default {
		mounted() {
			this.drawChart();
		},
		methods: {
			drawChart() {
				var mychart = this.$echarts.init(this.$refs.lines_ref,'walden');
				var data=[
{"line":"10号线","SumCount":"26136"},
{"line":"11号线","SumCount":"73442"},
{"line":"12号线","SumCount":"13348"},
{"line":"1号线","SumCount":"66677"},
{"line":"2号线","SumCount":"42170"},
{"line":"3号线","SumCount":"105267"},
{"line":"4号线","SumCount":"785"},
{"line":"5号线","SumCount":"7444"}

]
					
					var option = {
						title:{
							text:"线路客流",
							textStyle:{
								color:'white',
								fontFamily: '黑体'
							},
							left:'center',
							y:'6%'
						},	
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid: {
							top:'20%',
							width:'95%',
							height:'78%',
							left: '1%',
							y:30,
							
							// right: '4%',
							// bottom: '3%',
							containLabel: true
						},
						xAxis: [{
							min:0,
							max:7,
							type: 'category',
							
							data: data.map(item => item.line),
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
							      show: true,
								  interval:0,
							       textStyle: {
							         color: '#ffffff',  //更改坐标轴文字颜色
							         fontSize : 10      //更改坐标轴文字大小
							       }
							    },
							    axisTick: {
							        show: false
							    },
							    axisLine:{
							        lineStyle:{
							           color:'#ffffff' //更改坐标轴颜色
							        },
															 }
						}],
						yAxis: [{
							type: 'value',
							axisLabel: {
							      show: true,
							       textStyle: {
							         color: '#ffffff',  //更改坐标轴文字颜色
							         fontSize : 10      //更改坐标轴文字大小
							       }
							    },
							    axisTick: {
							        show: false
							    },
							    axisLine:{
							        lineStyle:{
							           color:'#ffffff' //更改坐标轴颜色
							        },
															 }
						}],
						series: [{
							name: '线路客流',
							type: 'bar',
							barWidth: '60%',
							data: data.map(item => item.SumCount)
						}]
					};
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
