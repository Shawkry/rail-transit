var data = [

	{
		name: "地铁1号线",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbolSize: 0.1,
		value: [5, 750],
		x: 800,
		y: 400,
		fixed: true,
		// draggable: false,
		category: 1,
		label: {
			color: "#35c2ff",
			position: 'bottom',
			fontSize: 8,
			fontSize: 18,
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
		value: [790, 1150],
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
		name: "地铁3号线",
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
			color: "#ff15ea",
			position: 'bottom',
			fontSize: 8,
			fontSize: 18,
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
		name: "地铁11号线",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbolSize: 0.1,
		value: [1040, 140],
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
		name: "地铁5号线",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbolSize: 0.1,
		value: [20, 1050],
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
		name: "地铁10号线",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbolSize: 0.1,
		value: [330, 20],
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
		name: "地铁4号线",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbolSize: 0.1,
		value: [45, 340],
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
		name: "地铁12号线",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbolSize: 0.1,
		value: [1220, 770],
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
	//地铁一号线，站点间X轴坐标相差50，Y轴坐标相同
	{
		name: "Sta104",
		tooltip: {
			formatter: "{b}: 19999<br />"
		},
		symbol: 'circle',
		symbolSize: [18, 18],
		value: [5, 600],
		x: 800,
		y: 400,
		fixed: true,
		// draggable: false,
		category: 1,
		label: {
			color: "#FFF",
			position: 'bottom',
			fontSize: 8,
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
		name: "Sta65",
		x: 400,
		y: 400,
		value: [80, 600],
		fixed: true,
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#FFF",
			position: 'top',
			fontSize: 8,
		},
		category: 1,
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
		name: "Sta49",
		x: 1000,
		y: 1000,
		value: [130, 600],
		fixed: true,
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#fff",
			position: 'bottom',
			fontSize: 8,
		},
		category: 1,
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
		name: "Sta149",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [180, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta74",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [230, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta128",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [280, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta34",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [330, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta106",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [380, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta110",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [430, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta97",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [480, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta80",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [530, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta89",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [580, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta64",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [630, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta150",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [680, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta154",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [730, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta107",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [780, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta83",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [830, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta108",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [880, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta159",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [930, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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
		name: "Sta1",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [980, 600],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
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

	//地铁二号线，垂直线路，站点间X轴坐标相同，Y轴坐标相差50
	{
		name: "Sta48",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 490],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta151",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 450],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta68",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 400],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta52",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta76",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 300],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta57",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 250],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta71",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 200],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta139",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 150],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta24",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 100],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta105",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 50],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta51",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 0],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta27",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 530],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta81",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 660],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta127",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 700],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta123",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 750],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta47",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 800],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta18",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,

		},
		value: [680, 850],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta79",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 900],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta78",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 950],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta53",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 1000],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},

	{
		name: "Sta163",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 1050],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta9",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 1100],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	{
		name: "Sta129",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [680, 1150],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "red"
					},
					{
						offset: 1,
						color: "red"
					}
				])
			}
		}
	},
	//地铁三号线
	{
		name: "Sta161",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [620, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta12",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [590, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta66",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [560, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta119",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [520, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta50",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [470, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta61",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [420, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta156",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [380, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta143",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [330, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta155",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [280, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},

	{
		name: "Sta21",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [730, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta133",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [770, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 1, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta22",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [800, 350],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta138",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [825, 360],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},

	{
		name: "Sta41",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [850, 370],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta30",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [880, 400],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta67",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [880, 450],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta144",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [880, 500],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta5",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [880, 550],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta98",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [880, 670],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta29",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [880, 710],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta126",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [900, 750],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta40",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [930, 750],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta131",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [960, 755],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta39",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1000, 757],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta100",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 780],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta167",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta113",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 880],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta141",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 930],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta142",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 980],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta158",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 1030],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta44",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 1080],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta117",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1040, 1130],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta147",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [1040, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta42",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1080, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta35",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [1120, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta109",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1150, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta33",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [1180, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta112",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1210, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta153",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1240, 1180],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta125",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1240, 1130],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta121",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1240, 1080],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	{
		name: "Sta11",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [1240, 1030],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#FF00FF"
					},
					{
						offset: 1,
						color: "#FF00FF"
					}
				])
			}
		}
	},
	//地铁11号线
	{
		name: "Sta20",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 400],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta23",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 450],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta56",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 500],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta118",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 550],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta115",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 660],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta162",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 695],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta15",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 735],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta86",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 770],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta46",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 805],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta63",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 835],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta3",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 865],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta25",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [710, 890],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta146",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [550, 900],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta130",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [530, 930],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta120",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [530, 970],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta82",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [530, 1010],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta164",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [560, 1040],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta152",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [590, 1070],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta45",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [610, 1100],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta55",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 300],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta70",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 250],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta13",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 200],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta111",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 150],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta140",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 100],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta77",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [730, 50],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta122",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [800, 30],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta36",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [840, 30],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta166",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [880, 30],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta99",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [920, 30],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},

	{
		name: "Sta124",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
			fontSize: 8,
		},
		value: [960, 30],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},
	{
		name: "Sta28",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [1020, 30],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#48D1CC"
					},
					{
						offset: 1,
						color: "#48D1CC"
					}
				])
			}
		}
	},

	//地铁5号线

	{
		name: "Sta43",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [450, 1145],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta10",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [380, 1105],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta96",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [310, 1080],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta132",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [230, 1070],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta37",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [170, 1100],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta16",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [120, 1150],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta69",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [80, 1190],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	{
		name: "Sta54",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [20, 1130],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#20B2AA"
					},
					{
						offset: 1,
						color: "#20B2AA"
					}
				])
			}
		}
	},
	//地铁10号线
	{
		name: "Sta102",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [352, 950],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta75",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [352, 900],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta8",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [352, 850],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta6",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [352, 800],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta7",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [352, 750],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta160",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [352, 700],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta94",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [440, 700],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta87",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [500, 700],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta88",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [500, 650],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta145",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 530],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta103",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 470],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta4",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 420],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta2",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 290],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta85",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 240],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta134",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 190],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta135",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 140],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta168",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 90],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta114",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, 40],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	{
		name: "Sta157",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'left',
			fontSize: 8,
		},
		value: [500, -10],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0055ff"
					},
					{
						offset: 1,
						color: "#0055ff"
					}
				])
			}
		}
	},
	//地铁12号线
	{
		name: "Sta14",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [280, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta73",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [330, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta148",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [440, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta60",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [490, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta91",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [550, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta32",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [600, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta116",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [650, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta92",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [700, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta31",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [800, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta93",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'bottom',
			fontSize: 8,
		},
		value: [830, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta72",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [860, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta95",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [900, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta90",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [950, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta26",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1000, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta17",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1110, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta101",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1160, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta136",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1210, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	{
		name: "Sta137",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'top',
			fontSize: 8,
		},
		value: [1270, 830],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#55ff7f"
					},
					{
						offset: 1,
						color: "#55ff7f"
					}
				])
			}
		}
	},
	//地铁4号线
	{
		name: "Sta84",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 360],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},
	{
		name: "Sta59",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 450],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},
	{
		name: "Sta19",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 510],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},
	{
		name: "Sta62",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 670],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},
	{
		name: "Sta165",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 730],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},
	{
		name: "Sta58",
		symbol: 'circle',
		symbolSize: [10, 10],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 800],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},
	{
		name: "Sta38",
		symbol: 'circle',
		symbolSize: [18, 18],
		label: {
			color: "#efefef",
			position: 'right',
			fontSize: 8,
		},
		value: [135, 870],
		x: 1000,
		y: 1000,
		fixed: true,
		category: 2,
		itemStyle: {
			normal: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#aa00ff"
					},
					{
						offset: 1,
						color: "#aa00ff"
					}
				])
			}
		}
	},

];

var option = ({
	title: {
		text: '地铁线路图',
		textStyle: {
			color: 'white',
			fontSize: 20
		},
		x: 'center',
		top: 10
	},
	//不设置背景颜色就是透明色
	// backgroundColor: '#41403f',

	xAxis: {
		show: false,
		min: 15,
		max: 1270,
		// type: "value",
		//开启x轴坐标
		axisPointer: {
			show: true
		},
	},
	yAxis: {
		show: false,
		min: -10,
		max: 1200,
		//   type: "value",
		//开启y轴坐标
		axisPointer: {
			show: true
		},
	},
	tooltip: {},
	//  legend: {
	//     show: false
	//  },
	series: [{
			type: "graph",
			zlevel: 5,
			draggable: false,
			coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）

			// edgeSymbolSize: [0, 8], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
			// edgeLabel: {
			//   normal: {
			//     textStyle: {
			//       fontSize: 60
			//     }
			//   }
			// },
			symbol: "rect",
			symbolOffset: ["15%", 0],

			label: {
				normal: {
					show: true
				}
			},
			data: data,
			links: [
				//地铁1号线
				{
					source: "Sta104",
					target: "Sta65"
					// lineStyle: {
					//   normal: {
					//     color: "#12b5d0",
					//
					//   }
					// }
				},
				{
					source: "Sta65",
					target: "Sta49",
					lineStyle: {
						normal: {
							//color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta49",
					target: "Sta149",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta149",
					target: "Sta74",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},

				{
					source: "Sta74",
					target: "Sta128",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},

				{
					source: "Sta128",
					target: "Sta34",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},

				{
					source: "Sta34",
					target: "Sta106"
					// lineStyle: {
					//   normal: {
					//     color: "#12b5d0",
					//
					//   }
					// }
				},
				{
					source: "Sta106",
					target: "Sta110",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta110",
					target: "Sta97",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta97",
					target: "Sta80",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta80",
					target: "Sta89",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta89",
					target: "Sta64",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta64",
					target: "Sta150",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta150",
					target: "Sta154",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta154",
					target: "Sta107",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta107",
					target: "Sta83",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta83",
					target: "Sta108",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta108",
					target: "Sta159",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},
				{
					source: "Sta159",
					target: "Sta1",
					lineStyle: {
						normal: {
							// color: "#12b5d0",
						}
					}
				},

				//地铁二号线连接
				{
					source: "Sta51",
					target: "Sta105",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta105",
					target: "Sta24",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta24",
					target: "Sta139",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta139",
					target: "Sta71",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta71",
					target: "Sta57",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta57",
					target: "Sta76",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta76",
					target: "Sta52",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta52",
					target: "Sta68",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta68",
					target: "Sta151",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta151",
					target: "Sta48",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta48",
					target: "Sta27",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta27",
					target: "Sta81",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta81",
					target: "Sta127",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta127",
					target: "Sta123",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta123",
					target: "Sta47",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta47",
					target: "Sta18",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta18",
					target: "Sta79",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta79",
					target: "Sta78",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta78",
					target: "Sta53",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta53",
					target: "Sta163",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta163",
					target: "Sta9",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},
				{
					source: "Sta9",
					target: "Sta129",
					lineStyle: {
						normal: {
							color: "red",
						}
					}
				},

				{
					source: "Sta155",
					target: "Sta143",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta143",
					target: "Sta156",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta156",
					target: "Sta61",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta61",
					target: "Sta50",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta50",
					target: "Sta119",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta119",
					target: "Sta66",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta66",
					target: "Sta12",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta12",
					target: "Sta161",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta161",
					target: "Sta21",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta21",
					target: "Sta133",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta133",
					target: "Sta22",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta22",
					target: "Sta138",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta138",
					target: "Sta41",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta41",
					target: "Sta30",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta30",
					target: "Sta67",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta67",
					target: "Sta144",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta144",
					target: "Sta5",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta5",
					target: "Sta98",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta98",
					target: "Sta29",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta29",
					target: "Sta126",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta126",
					target: "Sta40",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta40",
					target: "Sta131",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta131",
					target: "Sta39",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta39",
					target: "Sta100",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta100",
					target: "Sta167",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta167",
					target: "Sta113",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta113",
					target: "Sta141",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta141",
					target: "Sta142",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta142",
					target: "Sta158",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta158",
					target: "Sta44",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta44",
					target: "Sta117",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta117",
					target: "Sta147",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta147",
					target: "Sta42",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta42",
					target: "Sta35",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta35",
					target: "Sta109",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta109",
					target: "Sta33",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta33",
					target: "Sta112",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta112",
					target: "Sta153",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta153",
					target: "Sta125",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta125",
					target: "Sta121",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				{
					source: "Sta121",
					target: "Sta11",
					lineStyle: {
						normal: {
							color: "#FF00FF",
						}
					}
				},
				//地铁11号线
				{
					source: "Sta28",
					target: "Sta124",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta124",
					target: "Sta99",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta99",
					target: "Sta166",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta166",
					target: "Sta36",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta36",
					target: "Sta122",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta122",
					target: "Sta77",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta77",
					target: "Sta140",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta140",
					target: "Sta111",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta111",
					target: "Sta13",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta13",
					target: "Sta70",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta70",
					target: "Sta55",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta55",
					target: "Sta20",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta20",
					target: "Sta23",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta23",
					target: "Sta56",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta56",
					target: "Sta118",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta118",
					target: "Sta162",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta162",
					target: "Sta15",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta15",
					target: "Sta86",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta86",
					target: "Sta46",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta46",
					target: "Sta63",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta63",
					target: "Sta3",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta3",
					target: "Sta25",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta25",
					target: "Sta146",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta146",
					target: "Sta130",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta130",
					target: "Sta120",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta120",
					target: "Sta82",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta82",
					target: "Sta164",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta164",
					target: "Sta152",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta152",
					target: "Sta45",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},

				//地铁5号线
				{
					source: "Sta54",
					target: "Sta69",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta69",
					target: "Sta16",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta16",
					target: "Sta37",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta37",
					target: "Sta132",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta132",
					target: "Sta96",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta96",
					target: "Sta10",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				{
					source: "Sta10",
					target: "Sta43",
					lineStyle: {
						normal: {
							color: "#48D1CC",
						}
					}
				},
				//4号线
				{
					source: "Sta84",
					target: "Sta59",
					lineStyle: {
						normal: {
							color: "#aa00ff",
						}
					}
				},
				{
					source: "Sta59",
					target: "Sta19",
					lineStyle: {
						normal: {
							color: "#aa00ff",
						}
					}
				},
				{
					source: "Sta19",
					target: "Sta62",
					lineStyle: {
						normal: {
							color: "#aa00ff",
						}
					}
				},
				{
					source: "Sta62",
					target: "Sta165",
					lineStyle: {
						normal: {
							color: "#aa00ff",
						}
					}
				},
				{
					source: "Sta165",
					target: "Sta58",
					lineStyle: {
						normal: {
							color: "#aa00ff",
						}
					}
				},
				{
					source: "Sta58",
					target: "Sta38",
					lineStyle: {
						normal: {
							color: "#aa00ff",
						}
					}
				},
				//12号线
				{
					source: "Sta14",
					target: "Sta73",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta73",
					target: "Sta148",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta148",
					target: "Sta60",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta60",
					target: "Sta91",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta91",
					target: "Sta32",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta32",
					target: "Sta116",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta116",
					target: "Sta92",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta92",
					target: "Sta31",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta31",
					target: "Sta93",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta93",
					target: "Sta72",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta72",
					target: "Sta95",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta95",
					target: "Sta90",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta90",
					target: "Sta26",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta26",
					target: "Sta17",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta17",
					target: "Sta101",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta101",
					target: "Sta136",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				{
					source: "Sta136",
					target: "Sta137",
					lineStyle: {
						normal: {
							color: "#55ff7f",
						}
					}
				},
				//10号线
				{
					source: "Sta157",
					target: "Sta114",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta114",
					target: "Sta168",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta168",
					target: "Sta135",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta135",
					target: "Sta85",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta85",
					target: "Sta2",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta2",
					target: "Sta103",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta103",
					target: "Sta145",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta145",
					target: "Sta88",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta88",
					target: "Sta87",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta87",
					target: "Sta94",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta94",
					target: "Sta160",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta160",
					target: "Sta7",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta7",
					target: "Sta6",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta6",
					target: "Sta8",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta8",
					target: "Sta75",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
				{
					source: "Sta75",
					target: "Sta102",
					lineStyle: {
						normal: {
							color: "#0055ff",
						}
					}
				},
			],
			lineStyle: {
				normal: {
					opacity: 0.6, //线条透明度
					color: "#53B5EA",
					curveness: 0, //站点间连线曲度，0表示直线
					width: 10 //线条宽度
				}
			}
		},
		// {
		// 	type: "lines",
		// 	coordinateSystem: "cartesian2d",
		// 	z: 1,
		// 	zlevel: 7,
		// 	animation: true,
		// 	effect: {
		// 		show: true,
		// 		period: 5,
		// 		trailLength: 0.71,
		// 		symbolSize: 14,
		// 		symbol: "circle",
		// 		loop: true,
		// 		color: 'yellow'
		// 		//   color: "rgba(55,155,255,0.5)"
		// 	},
		// 	polyline: true,
		// 	lineStyle: {
		// 		normal: {
		// 			// color: "green",
		// 			width: 0,
		// 			curveness: 0 //动画线路的曲度
		// 		}
		// 	},

		// 	data: [{ //一号线
		// 			coords: [
		// 				[5, 600],
		// 				[985, 600]
		// 			]
		// 		},
		// 		{ //二号线
		// 			coords: [
		// 				[680, 0],
		// 				[680, 1150],
		// 			]
		// 		},
		// 		{ //三号线
		// 			coords: [
		// 				[280, 350],
		// 				[800, 350],
		// 				[850, 370],
		// 				[880, 400],
		// 				[880, 700],
		// 				[900, 750],
		// 				[1000, 757],
		// 				[1040, 780],
		// 				[1040, 1180],
		// 				[1240, 1180],
		// 				[1240, 1030],

		// 			]
		// 		},
		// 		{ //4号线
		// 			coords: [
		// 				[135, 360],
		// 				[135, 510],
		// 				[135, 730],
		// 				[135, 870],
		// 			]
		// 		},
		// 		{ //5号线
		// 			coords: [
		// 				[20, 1130],
		// 				[80, 1190],
		// 				[170, 1100],
		// 				[230, 1070],
		// 				[310, 1080],
		// 				[380, 1105],
		// 				[450, 1145],
		// 			]
		// 		},
		// 		{ //10号线
		// 			coords: [
		// 				[500, -10],
		// 				[500, 700],
		// 				[352, 700],
		// 				[352, 950]
		// 			]
		// 		},
		// 		{ //11号线
		// 			coords: [
		// 				[1020, 30],
		// 				[800, 30],
		// 				[730, 50],
		// 				[730, 865],
		// 				[710, 890],
		// 				[550, 900],
		// 				[530, 930],
		// 				[530, 1010],
		// 				[610, 1100]
		// 			]
		// 		},
		// 		{ //12号线
		// 			coords: [
		// 				[280, 830],
		// 				[1270, 830],
		// 			]
		// 		},
		// 	]
		// },

	]
});
