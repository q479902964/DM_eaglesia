import React, { Component } from 'react';
import ReactDOM from "react-dom"


import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import './company.less'


class Company extends Component{

    state = {
        product:this.props.match.params.product,
        region:this.props.match.params.region,
        pageNum:10,
        currentPage:this.props.match.params.page
    }

    componentDidMount(){
        this.featch();
    }

    featch = async ()=>{

    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.page !== nextProps.match.params.page){
            this.setState({
                currentPage :nextProps.match.params.page
            })
            this.featch();
        }

    }


    changePage(page){
        let product = this.props.match.params.product;
        let area = this.props.match.params.region;
        this.props.history.push("/information/searchCompany/"+product+"/"+area+"/"+page);
    }

    render(){
        var pageNum = () => {
            var pageStart,pageEnd,maxPage;
            maxPage = this.state.pageNum;
            if(maxPage>1){
                pageStart = this.state.currentPage - 5;
                if(pageStart<1){
                    pageStart = 1;
                }
                // 最大页码
                pageEnd = pageStart + 9;
                if(pageEnd > maxPage) {
                    // 最后一个页码不能大于总页数
                    pageEnd = maxPage;
                }
                // 修正begin 的值, 理论上 begin 是 end - 9
                pageStart = pageEnd - 9;
                if(pageStart < 1) { // 第一个页码 不能小于1
                    pageStart = 1;
                }
            }
            var res = [];
            for(var i = pageStart; i <= pageEnd; i++) {
                res.push(<span className={"page "+(this.state.currentPage==i?"now_page":"")}   ref={"page"+i} onClick={this.changePage.bind(this,i)}>{i}</span>)
            }
            return res
        }
        return (
            <div className="company">
                <ul>
                    <li>
                        <div>
                            <p className="englishName"><span className="tl">1. </span><span className="tl">公司名称：</span><span className="content t1">ALK SIM Cooked Fisn</span></p>
                            <p className="content t2">伊森熟鱼公司</p>
                        </div>
                        <div>
                            <span className="tl">国家或地区：</span>
                            <span className="content area">Singapore</span>
                        </div>
                        <div>
                            <span className="tl product_tl">产品与服务：</span><span className="content product_en">Lorem ipsum dolor sitd sddddddddddddddddddddddddddd</span>
                            <p className="content product_cn">专营新鲜及冰冻鱼类产品</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className="englishName"><span className="tl">1. </span><span className="tl">公司名称：</span><span className="content t1">ALK SIM Cooked Fisn</span></p>
                            <p className="content t2">伊森熟鱼公司</p>
                        </div>
                        <div>
                            <span className="tl">国家或地区：</span>
                            <span className="content area">Singapore</span>
                        </div>
                        <div>
                            <span className="tl product_tl">产品与服务：</span><span className="content product_en">Lorem ipsum dolor sitd sddddddddddddddddddddddddddd</span>
                            <p className="content product_cn">专营新鲜及冰冻鱼类产品</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className="englishName"><span className="tl">1. </span><span className="tl">公司名称：</span><span className="content t1">ALK SIM Cooked Fisn</span></p>
                            <p className="content t2">伊森熟鱼公司</p>
                        </div>
                        <div>
                            <span className="tl">国家或地区：</span>
                            <span className="content area">Singapore</span>
                        </div>
                        <div>
                            <span className="tl product_tl">产品与服务：</span><span className="content product_en">Lorem ipsum dolor sitd sddddddddddddddddddddddddddd</span>
                            <p className="content product_cn">专营新鲜及冰冻鱼类产品</p>
                        </div>
                    </li>
                </ul>
                <div className="page_line">
                    <span className={this.state.currentPage==1?"hidden":"cbtn last_btn"}>上一页</span>
                    {pageNum()}
                    <span className={this.state.currentPage==this.state.pageNum?"hidden":"cbtn next_btn"}>下一页</span>
                </div>
            </div>
        )
    }
}

export default Company;