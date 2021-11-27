<template>
	<div class="screen-container">
		<header class="screen-header">
			<div>
				<img src="~assets/img/header_border_dark.png" alt="" />
			</div>
			<span class="title">轨道交通大数据分析平台</span>
			<div class="title-left">
				<el-button-group>
					<router-link to="/Home/MapPage"><el-button type="primary" size="mini">主页</el-button></router-link>
					<router-link to="/Analysis"><el-button type="primary" size="mini">客流空间分析</el-button></router-link>
					<router-link to="/HeatMap"><el-button type="primary" size="mini">客流时间分析</el-button></router-link>
				</el-button-group>
			</div>
			<div class="title-right">
				<span class="datetime">
					<istime></istime>
				</span>
			</div>
		</header>
		<div class="screen-body">
			<section class="screen-left">
				<div id="left-top">
				<month-predict></month-predict>
				</div>
				<div id="left-bottom">
					<all-view></all-view>
				</div>
			</section>

			<section class="screen-right">
				<div id="right-top">
					<station-predict></station-predict>
				</div>
				<div id="right-bottom">
					<line-predict></line-predict>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import istime from "components/common/istime";
	import monthPredict from "../monthPredict/monthPredict.vue"
	import linePredict from "../linePredict/linPredict.vue"
	import stationPredict from "../stationPredict/stationPredict.vue"
	import allView from "../Allview/allView.vue"
	export default {
		data() {
			return {
				
			};
		},

		methods: {},
		components: {
			istime,
			monthPredict,
			linePredict,
			stationPredict,
			allView
			
		},
	};
</script>
<style lang="less" scoped>
.title-left {
		display: flex;
		align-items: center;
		position: absolute;
		left: 0px;
		top: 60%;
		width: 40%;
		transform: translateY(-80%);
	}

	.screen-container {
		width: 100%;
		height: 100%;
		padding: 0 20px;
		background-color: #1c1a2c;
		color: #fff;
		box-sizing: border-box;
		// background: url(../../assets/img/background.jpg);
		// background-size: 100% 100%;

	}

	.screen-header {
		width: 100%;
		height: 8%;
		font-size: 20px;
		position: relative;

		>div {
			img {
				width: 100%;
			}
		}

		.title {
			position: absolute;
			left: 50%;
			top: 50%;
			font-size: 20px;
			transform: translate(-50%, -50%);
			font-family: '黑体';
		}

		.title-right {
			display: flex;
			align-items: center;
			position: absolute;
			right: 0px;
			top: 50%;
			transform: translateY(-80%);
		}

		.qiehuan {
			width: 28px;
			height: 21px;
			cursor: pointer;
		}

		.datetime {
			font-size: 15px;
			margin-left: 10px;
		}

		.logo {
			position: absolute;
			left: 0px;
			top: 50%;
			transform: translateY(-80%);

			img {
				height: 35px;
				width: 128px;
			}
		}
	}

	.screen-body {
		width: 100%;
		height: 90%;
		display: flex;

		// margin-top: 10px;
		.screen-left {
			height: 100%;
			width: 50%;

			#left-top {
				height: 50%;
				position: relative;
				background-image: url(../../assets/img/26.png);
				background-size: 100% 100%;
			}

			#left-bottom {
				height: 50%;
				position: relative;
				background-image: url(../../assets/img/26.png);
				background-size: 100% 100%;
			}
		}

		.screen-right {
			height: 100%;
			width: 50%;

			#right-top {
				height: 50%;
				position: relative;
				background-image: url(../../assets/img/27.png);
				background-size: 100% 100%;
				
			}

			#right-bottom {
				// margin-top: 2%;
				height: 50%;
				position: relative;
				background-image: url(../../assets/img/27.png);
				background-size: 100% 100%;
		
			}
		}
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