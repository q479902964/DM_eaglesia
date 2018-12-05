import React,{ Component } from "react"
import ReactDOM from "react-dom"
import api from '@/api/api.js'

import './enterprise.less'
import {connect} from "react-redux";

import { changeID } from '@/redux/action'
import { changeKey } from "@/redux/action";

class Enterprise extends Component{

    state = {
        service_data:[],
        product_data:[]
    }

    initData= async ()=>{
        try{
            let result = await api.getChooseInfo();
            let data = result.data;
            this.setState({
                service_data:data.service,
                product_data:data.product
            })
        }catch(err){
            throw(err);
        }
    }

    jumpArea (item){
        let id = this.props.match.params.id;
        let keyword = this.props.keyword||this.props.match.params.keyword
        console.log(this.props)
        if(id==1){
            this.props.changeID(2);
            this.props.changeKeyword(item);
            this.props.history.push("/information/region/2/"+item);
        }else if(id==2){
            this.props.changeID(2);
            this.props.changeKeyword(item);
            this.props.history.push("/information/region/2/"+item);
        }
        else {
            this.props.history.push("/information/searchCompany/"+item+"/"+keyword+"/0/");
        }
    }

    componentDidMount(){
        this.initData();
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

        return (
            <div className="enterprise">
                <div className="wrapper">
                    {message}
                    <ul>
                        {
                            this.props.match.params.type=="product"?
                                this.state.product_data.map((item)=>{
                                    return (<li onClick={this.jumpArea.bind(this,item)}>{item}</li>)
                                 })
                            :
                                this.state.service_data.map((item)=>{
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
export default connect(mapStateToProps, mapDispatchToProps)(Enterprise);