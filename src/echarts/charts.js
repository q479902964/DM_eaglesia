import ChartFatherFactory from './chart.js'

class chartFactory extends ChartFatherFactory{
	// 态度比例
	createEmotionChart(dom,data){
		let data1=[
            {value:data[0], name:'赞成'},
            {value:data[1], name:'中立'},
            {value:data[2], name:'反对'}
        ];
        console.log(data1);
		let option = {
			color:['#a0b9e5','#b0b0b0', '#d68592'],
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['赞成','中立','反对']
		    },
		    series: [
		        {
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:data1
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 具体评级对象
	createSpeEmotionChart(dom,data){
		var option = {
			title: {
		        text: data.word,
		        color:"#626b7a",
		        textStyle:{
		            fontSize:21,
		            fontFamily:'宋体',
		            fontWeight:"500"
		        }
		    },
		    tooltip : {
	        trigger: 'item',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        textStyle:{
		          color:"#626b7a",
		          fontSize:13,
		        },
		        backgroundColor:"none",
		        formatter:"{c}",
		        position:  ['4%', '50%'],
		        enterable:true
		    },
		    grid: {
		        left: '10%',
		        right: '4%',
		        top:"90%",
		        containLabel: true
		    },
		    xAxis:  {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type: 'value'
		    },
		    yAxis: {
		        type: 'category',
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        data: ['中国']
		    },
		    color:['#a0b9e5','#b0b0b0', '#d68592'],
		    series: [
		        {
		            type: 'bar',
		            barWidth: 14,
		            barGap:"-100%",
		            itemStyle:{
		                normal: {
		                    color:"#fff",
		                    show: true,
		                    barBorderRadius: [30, 30, 30, 30],
		                    shadowColor: 'rgba(0, 0, 0, 0.3)',
		                    shadowOffsetY:5,
		                    shadowBlur: 30,
		                },
		                emphasis:{
		                }
		                
		            },
		            data: [data.pos+data.neg+data.neu]
		        },
		        {
		            name: '赞成',
		            type: 'bar',
		            stack: data.word,
		            barWidth: 14,
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [190, 0, 0, 190],
		                },
		                emphasis:{
		                    color:'#a0b9e5',
		                    borderWidth:"5", 
		                    borderColor:'#a0b9e5',
		                }
		            },
		            label: {      
		                normal: {
		                    show: true,
		                    fontSize:"12",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [data.pos]
		        },
		        {
		            name: '中立',
		            type: 'bar',
		            stack: data.word,
		            itemStyle:{
		                normal: {
		                    show: true,
		                },
		                emphasis:{
		                    color:'#b0b0b0',
		                    borderWidth:"5", 
		                    borderColor:'#b0b0b0',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    fontSize:"12",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [data.neu]
		        },
		        {
		            name: '反对',
		            type: 'bar',
		            stack: data.word,
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [0, 30, 30, 0],
		                },
		                emphasis:{
		                    color:'#d68592',
		                    borderWidth:"5", 
		                    borderColor:'#d68592',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    fontSize:"12",
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [data.neg]
		        },
		    ]
		};
		this.createChart(dom,option);
	}

	// 态度趋势
	createTrendAttitudeChart(dom,data){
		let date=[],pos=[],neu=[],neg=[];
		data.forEach((d)=>{
			date.push(d.date);
			pos.push(d.pos);
			neu.push(d.neu);
			neg.push(d.neg);
		})
		var option = {
		    tooltip: {
		        trigger: 'item'
		    },
		    color:['#a0b9e5','#b0b0b0', '#d68592'],
		    legend: {
		        data:['赞成','中立','反对'],
		        bottom:0
		    },
		    grid: {
		    	top:"8%",
		        left: '8%',
		        right: '10%',
		        bottom: '8%',
		        containLabel: true
		    },
	        xAxis: {
		        type: 'category',
		        name:"时间",
		        nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		        boundaryGap: false,
		        axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        axisTick: {show:true},
		        axisLabel: {show:true},
		        splitArea: {show:false},
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        data: date
		    },
		    yAxis: {
		    	name:"态度占比",
		    	nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		    	axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        type: 'value'
		    },
		    dataZoom: [
		        {
		            type: 'inside',
		            xAxisIndex: 0,
		            filterMode: 'empty'
		        },
		    ],
		    series: [
		        {
		            name:'赞成',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:pos
		        },
		        {
		            name:'中立',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:neu
		        },
		        {
		            name:'反对',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:neg
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 热度趋势
	createTrendValueChart(dom,data){
		let date=[],
			value=[],
			title=[],
			id=[];
		data.forEach((d)=>{
			date.push(d.date);
			value.push(d.value);
			title.push(d.title);
			id.push(d.id);
		})
		var option = {
		    tooltip: {
		        trigger: 'item'
		    },
		    color:['#d68592'],
		    grid: {
		    	top:"19%",
		        left: '8%',
		        right: '10%',
		        bottom: '8%',
		        containLabel: true
		    },
	        xAxis: {
		        type: 'category',
		        name:"时间",
		        nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		        boundaryGap: false,
		        axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        axisTick: {show:true},
		        axisLabel: {show:true},
		        splitArea: {show:false},
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        data: date
		    },
		    yAxis: {
		    	name:"热度值",
		    	nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		    	axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        type: 'value'
		    },
		    dataZoom: [
		        {
		            type: 'inside',
		            xAxisIndex: 0,
		            filterMode: 'empty'
		        },
		    ],
		    series: [
		        {
		            name:'赞成',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:value
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 全局关键词
	createKeywordChart(dom,data){
		let keywords = [];
		data.forEach((d)=>{
			let x = {};
			x.name = d.word;
			x.value = d.value;
			keywords.push(x);
		})
		var option = {
		    backgroundColor: '#F7F7F7',
		    series: [{
		        name: '搜索指数',
		        type: 'wordCloud',
		        size: ['9%', '99%'],
		        sizeRange: [12, 80],
		        textRotation: [0, 45, 90, -45],
		        rotationRange: [-45, 90],
		        shape: 'circle',
		        textPadding: 0,
		        autoSize: {
		            enable: true,
		            minSize: 6
		        },
		        textStyle: {
		            normal: {
		                color: function() {
		                    return 'rgb(' + [
		                        Math.round(Math.random() * 160),
		                        Math.round(Math.random() * 160),
		                        Math.round(Math.random() * 160)
		                    ].join(',') + ')';
		                }
		            },
		            emphasis: {
		                shadowBlur: 10,
		                shadowColor: '#333'
		            }
		        },
		        data: keywords
		    }]
		};
		this.createChart(dom,option);
	}

	// 正面高频词
	createPoswordsChart(dom,data){
		let word = [],
			value = [];

		data.forEach((d)=>{
			word.push(d.word);
			value.push(d.value);
		})
		var option = {
		    color: ['#d68592'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:true},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'category',
		        data : word,
		        axisTick: {
		            alignWithLabel: true
		        }
		    },
		    yAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'value'
		    },
		    series : [
		        {
		            name:'词频度',
		            type:'bar',
		            barWidth: '60%',
		            data:value
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 负面高频词
	createNegwordsChart(dom,data){
		let word = [],
			value = [];

		data.forEach((d)=>{
			word.push(d.word);
			value.push(d.value);
		})
		var option = {
		    color: ['#a0b9e5'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {
		        	show:true,
		        	textStyle:{
		        		color:"#626b7a"
		        	}
		        },
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'category',
		        data : word,
		        axisTick: {
		            alignWithLabel: true
		        }
		    },
		    yAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'value'
		    },
		    series : [
		        {
		            name:'词频度',
		            type:'bar',
		            barWidth: '60%',
		            data:value
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 态度比例_搜索页面
	searchCreateEmotionChart(dom,data){
		// console.log(data["pos"]);
		var option = {
		    tooltip : {
	        trigger: 'item',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        textStyle:{
		          color:"#626b7a",
		          fontSize:21,
		        },
		        backgroundColor:"none",
		        formatter:"{c}",
		        position:  ['4%', '26%'],
		        enterable:true
		    },
		    grid: {
		        left: '10%',
		        right: '4%',
		        top:"10%",
		        containLabel: true
		    },
		    xAxis:  {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type: 'value'
		    },
		    yAxis: {
		        type: 'category',
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        data: ['中国']
		    },
		    color:['#a0b9e5','#b0b0b0', '#d68592'],
		    series: [
		        {
		            type: 'bar',
		            barWidth: 32,
		            barGap:"-100%",
		            itemStyle:{
		                normal: {
		                    color:"#fff",
		                    show: true,
		                    barBorderRadius: [30, 30, 30, 30],
		                    shadowColor: 'rgba(0, 0, 0, 0.3)',
		                    shadowOffsetY:5,
		                    shadowBlur: 30,
		                },
		                emphasis:{
		                }
		                
		            },
		            data: [1]
		        },
		        {
		            name: '赞成',
		            type: 'bar',
		            stack: "中国",
		            barWidth: 32,
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [190, 0, 0, 190],
		                },
		                emphasis:{
		                    color:'#38b1d5',
		                    borderWidth:"5", 
		                    borderColor:'#38b1d5',
		                }
		            },
		            label: {      
		                normal: {
		                    show: true,
		                    fontSize:"16",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"20", 
		                }
		            },
		            data: [data["pos"]]
		        },
		        {
		            name: '中立',
		            type: 'bar',
		            stack: '中国',
		            itemStyle:{
		                normal: {
		                    show: true,
		                },
		                emphasis:{
		                    color:'#a3adc5',
		                    borderWidth:"5", 
		                    borderColor:'#a3adc5',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    fontSize:"16",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"20", 
		                }
		            },
		            data:[data["neu"]]
		        },
		        {
		            name: '反对',
		            type: 'bar',
		            stack: '中国',
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [0, 30, 30, 0],
		                },
		                emphasis:{
		                    color:'#f26078',
		                    borderWidth:"5", 
		                    borderColor:'#f26078',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    fontSize:"16",
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"20", 
		                }
		            },
		            data: [data["neg"]]
		        },
		    ]
		};
		this.createChart(dom,option);
	}

	// 图谱
	keywordGraph(dom,data){
		var option = {
		    animationDurationUpdate: 1500,
		    animationEasingUpdate: 'quinticInOut',
		    series : [
		        {
		            type: 'graph',
		            layout: 'none',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                }
		            },
		            edgeSymbol: ['circle'],
		            edgeSymbolSize: [4, 10],
		            edgeLabel: {
		                normal: {
		                    textStyle: {
		                        fontSize: 20
		                    }
		                }
		            },
		            data: [{
		                name: data.keywords[0].word,
		                x: 250,
		                y: 250,
		                symbolSize: [70,70],
		                itemStyle:{
			            	color:"#aca0c4",
			            },
		                color:"#aca0c4"
		            }, {
		                name: data.keywords[1].word,
		                x: 450,
		                y: 250,
		                symbolSize: [100,100],
		                itemStyle:{
			            	color:"#bbcdec",
			            },
		                color:"#bbcdec"
		            }, {
		                name: data.keywords[2].word,
		                x: 350,
		                y: 150,
		                symbolSize: [70,70],
		                itemStyle:{
			            	color:"#a0b9e5",
			            },
		                color:"#a0b9e5"
		            }, {
		                name: data.keywords[3].word,
		                x: 350,
		                y: 350,
		                symbolSize: [70,70],
		                itemStyle:{
			            	color:"#7999d2",
			            },
		                color:"#7999d2"
		            }, {
		                name: data.title,
		                x: 350,
		                y: 250,
		                symbolSize: [146,146],
		                itemStyle:{
			            	color:"#a0b9e5",
			            },
		                color:"#a0b9e5"
		            }],
		            // links: [],
		            links: [{
		                source: data.keywords[0].word,
		                target: data.title
		            }, {
		                source: data.keywords[1].word,
		                target: data.title
		            }, {
		                source: data.keywords[2].word,
		                target: data.title
		            }, {
		                source: data.keywords[3].word,
		                target: data.title
		            }],
		            lineStyle: {
		                normal: {
		                    opacity: 0.9,
		                    width: 2,
		                    curveness: 0
		                }
		            }
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	//关系图谱
	relationGraph(dom,data){
		var option = {
            tooltip: {
                formatter: function (x) {
                    return x.data.des;
                }
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 50,
                    roam: true,
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    force: {
                        repulsion: 1000,
                        edgeLength: [10, 20]
                    },
                    draggable: true,
                    itemStyle: {
                        normal: {
                            color: '#4b565b'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#4b565b'

                        }
                    },
                    edgeLabel: {
                        normal: {
                            show: true,
                            formatter: function (x) {
                                return x.data.name;
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                            }
                        }
                    },
                    data: [
                        {
                            name: '侯亮平',
                            des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
                            symbolSize: 50,
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '李达康',
                            des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '祁同伟',
                            des: '汉东省公安厅厅长',
                            symbolSize: 50
                        }, {
                            name: '陈岩石',
                            des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '陆亦可',
                            des: '汉东省检察院反贪局一处处长',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '高育良',
                            des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
                            symbolSize: 50
                        }, {
                            name: '沙瑞金',
                            des: '汉东省省委书记',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '高小琴',
                            des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
                        }, {
                            name: '高小凤'
                        }, {
                            name: '赵东来',
                            des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '程度',
                            des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
                        }, {
                            name: '吴惠芬',
                            des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '赵瑞龙',
                            des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
                        }, {
                            name: '赵立春',
                            des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
                        }, {
                            name: '陈海',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '梁璐',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '刘新建'
                        }, {
                            name: '欧阳菁'
                        }, {
                            name: '吴心怡',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '蔡成功'
                        }, {
                            name: '丁义珍'
                        }
                    ],
                    links: [
                        {
                            source: '高育良',
                            target: '侯亮平',
                            name: '师生',
                            des: '侯亮平是高育良的得意门生'
                        }, {
                            source: '高育良',
                            target: '祁同伟',
                            name: '师生'
                        }, {
                            source: '赵立春',
                            target: '高育良',
                            name: "前领导"
                        }, {
                            source: '赵立春',
                            target: '赵瑞龙',
                            name: "父子"
                        }, {
                            source: '赵立春',
                            target: '刘新建',
                            name: "前部队下属"
                        }, {
                            source: '李达康',
                            target: '赵立春',
                            name: "前任秘书"
                        }, {
                            source: '祁同伟',
                            target: '高小琴',
                            name: "情人"
                        }, {
                            source: '陈岩石',
                            target: '陈海',
                            name: "父子"
                        }, {
                            source: '陆亦可',
                            target: '陈海',
                            name: "属下"
                        }, {
                            source: '沙瑞金',
                            target: '陈岩石',
                            name: "故人"
                        }, {
                            source: '祁同伟',
                            target: '陈海',
                            name: "师哥"
                        }, {
                            source: '祁同伟',
                            target: '侯亮平',
                            name: "师哥"
                        }, {
                            source: '侯亮平',
                            target: '陈海',
                            name: "同学，生死朋友"
                        }, {
                            source: '高育良',
                            target: '吴惠芬',
                            name: "夫妻"
                        }, {
                            source: '陈海',
                            target: '赵东来',
                            name: "朋友"
                        }, {
                            source: '高小琴',
                            target: '高小凤',
                            name: "双胞胎",
                            symbolSize: '1'
                        }, {
                            source: '赵东来',
                            target: '陆亦可',
                            name: "爱慕"
                        }, {
                            source: '祁同伟',
                            target: '程度',
                            name: "领导"
                        }, {
                            source: '高育良',
                            target: '高小凤',
                            name: "情人"
                        }, {
                            source: '赵瑞龙',
                            target: '祁同伟',
                            name: "勾结",
                            symbolSize: '1',
                        }, {
                            source: '李达康',
                            target: '赵东来',
                            name: "领导"
                        }, {
                            source: '赵瑞龙',
                            target: '程度',
                            name: "领导"
                        }, {
                            source: '沙瑞金',
                            target: '李达康',
                            name: "领导"
                        }, {
                            source: '沙瑞金',
                            target: '高育良',
                            name: "领导"
                        }, {
                            source: '祁同伟',
                            target: '梁璐',
                            name: "夫妻"
                        }, {
                            source: '吴惠芬',
                            target: '梁璐',
                            name: "朋友"
                        }, {
                            source: '李达康',
                            target: '欧阳菁',
                            name: "夫妻"
                        }, {
                            source: '赵瑞龙',
                            target: '刘新建',
                            name: "洗钱工具"
                        }, {
                            source: '赵瑞龙',
                            target: '高小琴',
                            name: "勾结，腐化",
                            symbolSize: '1'
                        }, {
                            source: '赵瑞龙',
                            target: '高小凤',
                            name: "腐化"
                        }, {
                            source: '吴心怡',
                            target: '陆亦可',
                            name: "母女"
                        }, {
                            source: '吴心怡',
                            target: '吴惠芬',
                            name: "姐妹"
                        }, {
                            source: '蔡成功',
                            target: '侯亮平',
                            name: "发小"
                        }, {
                            source: '蔡成功',
                            target: '欧阳菁',
                            name: "举报",
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '欧阳菁',
                            target: '刘新建',
                            name: "举报",
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '刘新建',
                            target: '赵瑞龙',
                            name: "举报",
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '李达康',
                            target: '丁义珍',
                            name: "领导"
                        }, {
                            source: '高小琴',
                            target: '丁义珍',
                            name: "策划出逃"
                        }, {
                            source: '祁同伟',
                            target: '丁义珍',
                            name: "勾结"
                        }, {
                            source: '赵瑞龙',
                            target: '丁义珍',
                            name: "勾结"
                        }]
                }
            ]
        };
		this.createChart(dom,option)
	}

}

export default new chartFactory