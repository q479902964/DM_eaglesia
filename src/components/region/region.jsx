import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'


import { changeID } from '@/redux/action'
import { changeKey } from "@/redux/action";
import api from '@/api/api.js'
import test from '@/api/test.js'

import './region.less'
import {connect} from "react-redux";

class Region extends Component{

    state = {
        area:[],
        inputKeyword:""
    }

    componentDidMount(){
        this.initData();
    }

    initData = async ()=>{
        try{
            // let result = await api.getChooseInfo();
            // let data  = result.data;
            let data = test.data1;
            this.setState({
                area:data.region
            })
        }catch(err){
            throw(err);
        }
    }

    jumpArea (item){
        let id = this.props.match.params.id;
        let keyword = this.props.keyword||this.props.match.params.keyword;
        if(id==1){
            this.props.changeID(3);
            this.props.changeKeyword(item);
            this.props.history.push("/information/enterprise/product/3/"+item);
        }else if(id==3){
            this.props.changeID(3);
            this.props.changeKeyword(item);
            this.props.history.push("/information/enterprise/product/3/"+item);
        }else{
            this.props.history.push("/information/searchCompany/"+keyword+"/"+item+"/0/");
        }
    }



    render(){
        let message;
        if(this.props.id==3||this.props.match.params.id==3){
            message = (<div className="chosen">
                <p>你选择了以下国家／地区：[ {this.props.keyword||this.props.match.params.keyword} ]</p>
                <p>请选择产品或服务：</p>
            </div>)
        }else if(this.props.id==2||this.props.match.params.id==2){
            message = (<div className="chosen">
                <p>你选择了以下产品／服务：[ {this.props.keyword||this.props.match.params.keyword} ]</p>
                <p>请选择国家或地区：</p>
            </div>)
        }else{
            message = ("")
        }
        return(
            <div className="region">
                {message}
                <div className="wrapper">
                    <ul>
                        {
                            this.state.area.map((item)=>{
                                return (<li onClick={this.jumpArea.bind(this,item)}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeID: (id) => {
            dispatch(changeID(id))
        },
        changeKeyword: (keyword) => {
            dispatch(changeKey(keyword))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        id:state.id,
        keyword:state.keyword
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Region);