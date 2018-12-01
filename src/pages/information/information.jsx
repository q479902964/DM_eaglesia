import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect,Link } from 'react-router-dom'

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';
import PublicFooter from '@/components/footer/footer';
import Region from '@/components/region/region'
import Enterprise from '@/components/enterprise/enterprise'

import './information.less';

class Information extends Component{

    state = {
        keyword:""
    }

    inputKeyword = (e) => {
        var value = e.target.value;
        this.setState({keyword:value});
    }

    render(){
        return (
            <div className="information">
                <PublicHeader/>
                <div className="body">
                    <div className="searchbox">
                        <form action="">
                            <input type="text" placeholder="请输入公司名称进行搜索" onInput={this.inputKeyword}/>
                            <NavLink to={`${this.props.match.path}/region`}>
                                <button></button>
                            </NavLink>
                            <img src="./img/search1.png" alt="" className="icon"/>
                        </form>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><NavLink to={`${this.props.match.path}/enterprise/product`}>企业产品</NavLink></li>
                            <li><NavLink to={`${this.props.match.path}/enterprise/service`}>产品服务</NavLink></li>
                            <li><NavLink to={`${this.props.match.path}/region`}>所属地区</NavLink></li>
                        </ul>
                    </div>
                    <div className="main">
                        <Switch>
                            <Route path={`${this.props.match.path}/enterprise/:type`} component={Enterprise}></Route>
                            <Route path={`${this.props.match.path}/region`} component={Region}></Route>
                            <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/enterprise/product`} exact component={Enterprise} />
                        </Switch>
                    </div>
                </div>
                <PublicFooter/>
            </div>
        )
    }
}

export default Information;