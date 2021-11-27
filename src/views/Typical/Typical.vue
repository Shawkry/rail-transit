<template>
	<div class="com-container">
		<div class="top" >
		     <div class="top_title">站点进出站时刻客流分析</div> 
		   <div class="btn"><input id="selectall1" type="button" v-model="value"  /></div>
		</div>
		
		<div class="com-chart" ref="typical_ref">
		</div>
	</div>
</template>

<script>
	export default {

    data() {
    	return {
    		id: 0,
    		value: "全不选",
    
    	}
    },
		mounted() {
			this.drawChart();
		},
		methods: {
			
			drawChart() {
				//各站点的折线图
				var mychart = this.$echarts.init(this.$refs.typical_ref);
				var jsonData = require('../../assets/js/data/typical.js');
				var res=jsonData.typical;
					var list =
						JSON.parse(JSON.stringify(res).replace(/进站名称/g, 'name').replace(/进站时间/g, 'time'));
					var hash = {};
					var i = 0;
					var newdata = [];

					list.forEach(function(item) {
						var name = item.name;
						// var data = {time:item.time,count:item.count};
						var count = [item.time, item.count];
						hash[name] ? newdata[hash[name] - 1].count.push(count) : hash[name] = ++i && newdata.push({

							name: name,

							// data:[data],
							count: [count]
						})
					});
				var jsonData1 = require('../../assets/js/data/outstation.js');
				var rep=jsonData1.outstation;
					var outdata=rep;
					var hash1 = {};
					var y = 0;
					var newdata1 = [];
					
					outdata.forEach(function(item) {
						var name = item.outName;
						// var data = {time:item.time,count:item.count};
						var count = [item.outtime, -item.count];
						hash1[name] ? newdata1[hash1[name] - 1].count.push(count) : hash1[name] = ++i && newdata1.push({
					
							name: name,
					
							// data:[data],
							count: [count]
						})
					});
					
					var series = [];
					newdata.forEach((item) => {
						series.push({
							name: item.name,
							type: 'line',
						
							data: item.count
						},
					
						);

					});
					newdata1.forEach((item)=>{
						series.push({
							name: item.name,
							type: 'line',
							
							data: item.count
						},			
						);
					})

					var option = {
						title: {
							// text: '站点时刻客流',

							textStyle: {
								align: 'center',
								color: '#fff',
								fontSize: 20,
							},

							left: 'center',
							subtextStyle: {
								"color": "#ffffff",
								fontSize: 12,

							},

						},
						tooltip: {
							trigger: 'item',
							"axisPointer": {
							   type: 'shadow',
							   label: {
							   	backgroundColor: '#eee'
							   }
							},
						},
						legend: {
							type: 'scroll', //就这一个属性 设置legend滚动轴的出现
							show: true,
							pageIconSize:12,
							bottom:10,
							top:'10%',
							right: 10,
							itemWidth: 14,
							itemHeight: 10,
							itemGap: 20,
							height: 250,
							align: 'auto',
							textStyle: {
								color: '#fff',
								fontSize: 12,
							},
							orient: 'vertical',
							 pageIconColor:'#ffffff',
							 inactiveColor:'#b4b4b4',
							 pageTextStyle:{
								 color:'#fff'
							 } ,
							data: newdata.map(item => item.name),
						},
						grid: {
							height:"80%",
							width:"84%",
							left: '3%',
							right: '10%',
							top:"10%",
							bottom: '10%',
							containLabel: true
						},
						dataZoom: [{
								type: 'inside',
								xAxisIndex: [0],
								// filterMode: 'filter', 
								start: 0,
								end: 100
							},
							{
								type: 'inside',
								yAxisIndex: [0],
								filterMode: 'empty',
								start: 0,
								end: 100
							}
						],
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
							top:0,
							x2: '13%',

						},
						xAxis: {
							type: 'value',
							min: 5,
							max: 24,

							axisLabel: {
								show: true,
								 interval:0,
							
									color: '#ffffff', //更改坐标轴文字颜色
									fontSize: 10 //更改坐标轴文字大小
								
							},
							axisTick: {
								show: false
							},
							axisLine: {
								lineStyle: {
									color: '#ffffff' //更改坐标轴颜色
								},
							}
						},
						yAxis: {
							type: 'value',
							
							axisLabel: {
								show: true,
								textStyle: {
									color: '#ffffff', //更改坐标轴文字颜色
									fontSize: 10 //更改坐标轴文字大小
								}
							},
							axisTick: {
								show: false
							},
							axisLine: {
								lineStyle: {
									color: '#ffffff' //更改坐标轴颜色
								},
							}
						},
						series: series
					};
				 mychart.setOption(option, true);
				 
				 var selectArr = newdata.map(item => item.name);
				$('#selectall1').click(function() {
				
					var val = false;
					var obj = {};
					var flag = $(this).attr('value');
					if (flag == '全不选') {
						val = false;
						// $(this).attr('flag', 0);
						for (var key in selectArr) {
							obj[selectArr[key]] = val;
						}
						this.value = '全选中';
					} else {
						val = true;
						// $(this).attr('flag', 1);
						this.value = '全不选';
						for (var key in selectArr) {
							obj[selectArr[key]] = val;
						}
						// $(this).val('全不选');
					}
				
				
					option.legend.selected = obj;
					mychart.setOption(option, true);
				
		
				});
				window.addEventListener("resize", function() {
					mychart.resize();

				});
			}
		},
	}
</script>

<style scoped="">
#selectall1{
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #13111147;
    border: 1px solid #DCDFE6;
    color: #dcdfe6;
        padding: 7px 15px;
            font-size: 12px;
    border-radius: 3px;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
}
	.top{
		width: 100%;
		height: 10%;
		float: left;
	}
	.top_title{
		width: 80%;
		margin-left: 40%;
		margin-top: 4%;
		font-size: 17px;
		font-family: '黑体';
	}
	.btn{

		margin-left: 88%;
		z-index: 2;
		top:8%;
		position: absolute;
	}
	.com-chart{
		height: 90%;
		width: 100%;
			z-index: 0;
	}
</style>
