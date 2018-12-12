import React, { Component } from 'react';
import ReactDOM from "react-dom"


import api from '@/api/api.js'
import test from '@/api/test.js'
import charts from '@/echarts/charts.js'

import './company.less'


class Company extends Component{

    state = {
        product:this.props.match.params.product?this.props.match.params.product:"",
        region:this.props.match.params.region?this.props.match.params.region:"",
        company:this.props.match.params.company?this.props.match.params.company:"",
        pageNum:1,
        currentPage:this.props.match.params.page?this.props.match.params.page:1,
        information:[],
        type:this.props.match.params.type
    }

    componentDidMount(){
        console.log(this.props.match.params);
        this.featch();
    }

    featch = async (type=this.props.match.params.type)=>{
        let result;
        if(type==0){
            result = await this.fetchProductType();
        }else{
            result = await this.fetchCompanyType();
        }
        let data = result.data;
        this.setState({
            pageNum:data.pageNum,
            information:data.information
        })
    }

    fetchCompanyType = async()=>{
        try{
            let params = {
                company:this.state.company,
                type:this.state.type,
                currentPage:this.props.match.params.page||""
            }
            let result = api.getCompanyInfo();
            return result;
        }catch (err){
            throw(err)
        }
    }

    fetchProductType = async()=>{
        try{
            let params = {
                product:this.state.product,
                region:this.state.region,
                type:this.state.type,
                currentPage:this.props.match.params.page||""
            }
            let result = api.getCompanyInfo();
            return result;
        }catch (err){
            throw(err)
        }
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
        let product = this.state.product;
        let area = this.region;
        this.props.history.push("/information/searchCompany/"+product+"/"+area+"/"+this.state.type+"/"+page);
    }

    nextPage(){
        if(this.state.type==0){
            let product = this.state.product;
            let area = this.region;
            this.setState((preState)=>{
                currentPage:preState.currentPage++
            },()=>{
                this.props.history.push("/information/searchCompany/"+product+"/"+area+"/"+this.state.type+"/"+this.state.currentPage);
            })
        }else{
            let company = this.state.company;
            this.setState((preState)=>{
                currentPage:preState.currentPage++
            },()=>{
                this.props.history.push("/information/searchCompany/"+company+"/"+this.state.type+"/"+this.state.currentPage);
            })
        }
    }

    lastPage(){
        if(this.state.type==0){
            let product = this.state.product;
            let area = this.region;
            this.setState((preState)=>{
                currentPage:preState.currentPage--
            },()=>{
                this.props.history.push("/information/searchCompany/"+product+"/"+area+"/"+this.state.type+"/"+this.state.currentPage);
            })
        }else{
            let company = this.state.company;
            this.setState((preState)=>{
                currentPage:preState.currentPage--
            },()=>{
                this.props.history.push("/information/searchCompany/"+company+"/"+this.state.type+"/"+this.state.currentPage);
            })
        }
    }
    render(){
        var pageNum = () => {
            var pageStart,pageEnd,maxPage;
            maxPage = this.state.pageNum;
            console.log(this.props.match.params)
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
                    {
                        this.state.information.map((item,index)=>{
                            return(
                                <li>
                                    <div>
                                        <p className="englishName"><span className="tl">{index+1}. </span><span className="tl">公司名称：</span><span className="content t1">{item.companyEnglishName}</span></p>
                                        <p className="content t2">{item.companyChineseName}</p>
                                    </div>
                                    <div>
                                        <span className="tl">国家或地区：</span>
                                        <span className="content area">{item.region}</span>
                                    </div>
                                    <div>
                                        <span className="tl product_tl">产品与服务：</span><span className="content product_en">{item.productEnglishName}</span>
                                        <p className="content product_cn">{item.productChineseName}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="page_line">
                    <span className={this.state.currentPage==1?"hidden":"cbtn last_btn"} onClick={this.lastPage.bind(this)}>上一页</span>
                    {pageNum()}
                    <span className={this.state.currentPage==this.state.pageNum?"hidden":"cbtn next_btn" } onClick={this.nextPage.bind(this)}>下一页</span>
                </div>
            </div>
        )
    }
}

export default Company;