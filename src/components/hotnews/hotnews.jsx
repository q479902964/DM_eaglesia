import React,{ Component } from "react"
import { connect } from 'react-redux'

import Api from "@/api/api.js"

import PublicDetail from '@/components/detail/detail'

import './hotnews.less'

class Report extends Component {
	static defaultProps = {
		txtmaxLength: 160,
		titlemaxLangth:35
	}
	state = {
		"news":[],
	    isShowDetial:false,
		newsPage:1,
		classMap:{
			political:"政治",
			economic:"经济",
			society:"社会",
			technology:"科技",
			military:"军事",
			culture:"文化",
			surroundings:"环境",
		}
	}

	showDetail = (item) => {
		let detailDom = this.refs.detail;
		detailDom.props.news.title = item.title;
		detailDom.props.news.pub_time = item.pub_time;
		detailDom.props.news.source = item.source;
		detailDom.props.news.body = item.body;

		this.setState({
			isShowDetial:true
		})
	}

	hideDetail = (a) =>{
		this.setState({
			isShowDetial:false
		})
	}

	fetchData = async () => {
		let params = {
			data:{
				page: this.state.newsPage,
				language: this.props.language,
				class: this.state.classMap[this.props.match.params.type]
			}
		}
		console.log(params.data);
		try{
			let result = await Api.loadHotNews(params);
			
			let data = result.data;
			let news = this.state.news;
			data.forEach((item) => {
				news.push(item);
			})

			this.setState({
				news:news,
				newsPage:this.state.newsPage+1
			})
		}catch(err){
			throw(err);
		}
	}

	componentDidMount(){
		this.fetchData();
	}

	componentWillReceiveProps(nextProps){
		if(this.props.match.params.type !== nextProps.match.params.type){
			this.setState({
				"news":[],
				isShowDetial:false,
				newsPage:1,
			},() => {
				this.fetchData();
			})
		}

		if(this.props.language !== nextProps.language){
			this.setState({
				"news":[],
				isShowDetial:false,
				newsPage:1,
			},() => {
				this.fetchData();
			})
		}
	}

	render(){
		return (
			<div id="hotnews">
				<h5 className="module_title news_title">印尼媒体相关报道</h5>
				<div className="text_flow_box text_flow_box_height">
					{
						this.state.news.map((item,index)=>{
							return (
								<div className="text_flow" key={index} onClick={this.showDetail.bind(this,item)}>
									<h5 className="text_title">
										
										{item.title.length <= this.props.titlemaxLangth ? item.title : item.title.slice(0,this.props.titlemaxLangth)+"..."}
										<span className="pub_time">{item.pub_time}</span>
									</h5>
									<div className="text_content">
										<span className="username">报道摘要</span>:{item.body.length <= this.props.txtmaxLength ? item.body : item.body.slice(0,this.props.txtmaxLength)+"..."}
									</div>
									<p className="text_source">报道来源: {item.source}</p>
								</div>
							)
						})
					}
				</div>
				<div className="loadMoreBtn" onClick={this.fetchData}>点击加载更多</div>
				<div className={this.state.isShowDetial ? "" : "hidden_detail"}>
					<PublicDetail hide={this.hideDetail.bind(this)} ref="detail"></PublicDetail>
				</div>
			</div>
		)
	}
}

export default connect(
	(state) => ({
		language:state.language
	})
)(Report);