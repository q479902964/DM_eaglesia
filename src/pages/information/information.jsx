import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';
import PublicFooter from '@/components/footer/footer';
import Region from '@/components/region/region'
import Enterprise from '@/components/enterprise/enterprise'
import Company from '@/components/company/company'

import './information.less';

class Information extends Component{
    static defaultProps = {
        id:1,
        keyword:""
    }

    state = {
        id:this.props.id,
        keyword:this.props.keyword
    }

    inputKeyword = (e) => {
        var value = e.target.value;
        this.setState({keyword:value});
    }

    changeInfo(id,keyword){
        this.setState({
            keyword:keyword,
            id:this.props.match.params.id
        })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.id !== nextProps.id){
            this.setState({
                id :nextProps.id
            })
        }

        if(this.props.keyword !== nextProps.keyword){
            this.setState({
                keyword:nextProps.keyword
            })
        }
    }

    componentDidMount(){
        this.initData();
    }

    initData= async ()=>{

        //刷新后处理
        let id = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length-2];
        let keyword  = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length-1];
        if(keyword!='information'){
            this.setState({
                id:id,
                keyword:keyword
            })
        }
    }

    render(){
        let id = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length-2];
        let keyword  = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length-1];
        return (
            <div className="information">
                <PublicHeader/>
                <div className="body">
                    <div className="searchbox">
                        <form action="">
                            <input type="text" placeholder="请输入公司名称进行搜索" onInput={this.inputKeyword}/>
                            <Link to={`${this.props.match.path}/region/`+this.state.keyword}>
                                <button></button>
                            </Link>
                            <img src="./img/search1.png" alt="" className="icon"/>
                        </form>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><NavLink to={`${this.props.match.path}/enterprise/product/${this.state.id}/${this.state.keyword}`} isActive={()=>{
                                console.log(this.props)
                                if(this.props.location.pathname.indexOf('product')!=-1){
                                    return true
                                }else{
                                    return false
                                }
                            }
                            }>企业产品</NavLink></li>
                            <li><NavLink to={`${this.props.match.path}/enterprise/service/${this.state.id}/${this.state.keyword}`} isActive={()=>{
                                if(this.props.location.pathname.indexOf('service')!=-1){
                                    return true
                                }else{
                                    return false
                                }
                            }
                            }>产品服务</NavLink></li>
                            <li><NavLink to={`${this.props.match.path}/region/${this.state.id}/${this.state.keyword}`} isActive={()=>{
                                if(this.props.location.pathname.indexOf('region')!=-1){
                                    return true
                                }else{
                                    return false
                                }
                            }
                            }>所属地区</NavLink></li>
                        </ul>
                    </div>
                    <div className="main">
                        <Switch>
                            <Route path={`${this.props.match.path}/enterprise/:type/:id/:keyword?`} component={Enterprise}></Route>
                            <Route path={`${this.props.match.path}/region/:id/:keyword?`} component={Region}></Route>
                            <Route path={`${this.props.match.path}/searchCompany/:product/:region`} component={Company}></Route>
                            <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/enterprise/product/1/`} component={Enterprise}/>
                        </Switch>
                    </div>
                </div>
                <PublicFooter/>
            </div>
        )
    }
}
export default connect(
    (state) => ({
        id:state.id,
        keyword:state.keyword
    })
)(Information);