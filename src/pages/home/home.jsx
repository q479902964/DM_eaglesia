import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';
import PublicFooter from '@/components/footer/footer';

import './home.less';

class Home extends Component {

	state = {
		events:[],
		keyword:"",
	}
	/*
	初始化数据
	1.获取数据
	2.绑定windows函数
	*/
	initData = async () => {
		try{
			var result = await Api.getHomeData();
			var data = result.data;
			this.setState({
				events:data,
			})
		}catch(err){
			console.error(err);
		}
	}
	
	inputKeyword = (e) => {
		var value = e.target.value;
		this.setState({keyword:value});
	}

	componentWillMount(){

	}

	componentDidMount(){
		this.initData();
	}

	render() {
		return (
			<div className="Home">
				<PublicHeader status="2"></PublicHeader>
				<div className="body">
					<div className="background">
						<img src="./img/background.png" alt=""/>
						<div className="cover"></div>
					</div>
					<div className="main">
						<div className="logo">
                            <img src="./img/logo3.png" alt=""/>
						</div>
						<div className="searchbox">
							<form action="">
								<input type="text" placeholder="请输入关键字进行搜索" onInput={this.inputKeyword}/>
								<Link to={"/searchResult/"+this.state.keyword}>
									<button></button>
								</Link>
								<img src="./img/search.png" alt="" className="icon"/>
							</form>
						</div>
						<div className="events">
							{
								this.state.events.map((item,index) => {
									return (
										<Link to={"/event/"+item.title} key={index}>
											<div className={"event_box event"+(index+1)}>
												<img className="tl_pt" src="./img/time.png"/><span className="title">{item.title}</span>
											</div>
										</Link>
									)
								})
							}
						</div>
					</div>
				</div>
                <PublicFooter status="2"></PublicFooter>
			</div>

		);
	}
}

export default Home;
