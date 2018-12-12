import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header'
import PublicRank from '@/components/rank/rank'
import EventList from '@/components/event_list/event_list'

import './searchResult.less'

class SearchResult extends Component {
	state = {
	    "results": [],
	    "leader": [],
	     keyword:""
	}
	
	initData = async (keyword = this.props.match.params.keyword) => {
		let params = {
			url:"/results/kw/"+ keyword
		}
		try{
			let results = await Api.getResearchData(params);
			let data = results.data;
			this.setState({
				results : data.results,
				leader : data.leader
			})
		}catch(err){
			console.log(err);
		}
	}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.match.params.keyword != this.props.match.params.keyword){
			this.initData(nextProps.match.params.keyword);
		}
	}

	componentWillMount(){
		
	}
	
	componentDidMount(){
		this.initData();
	}

	buildReport=async(keyword = this.props.match.params.keyword)=>{
        let params = {
            url:"/api/buildReport/"+ keyword
        }
        try{
            let results = await Api.buildReport(params);
            let data = results.data;
            this.setState({
                results : data.results,
                leader : data.leader
            })
        }catch(err){
            console.log(err);
        }
	}
	render() {
		return (
			<div className="searchResult">
				<div className="body">
					<div className="left">
						{
							this.state.results==""?
								<div className="no_search">
									<span>对不起，你搜索的关键词{this.props.match.params.keyword}还未被收录，请尝试其他关键词或立刻生成舆情报表</span>
									<span className="buildReport" onClick={this.buildReport.bind(this)}>立刻生成舆情报表</span>
								</div>
                                :<div className="events">
                                    <EventList events={this.state.results}></EventList>
                                </div>
						}
					</div>
					<div className="right">
						<PublicRank list={this.state.leader}></PublicRank>
					</div>
				</div>
				<div className="header_wrapper">
					<PublicHeader></PublicHeader>
				</div>
			</div>
		);
	}
}

export default SearchResult