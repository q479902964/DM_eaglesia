import React,{ Component } from "react"
import ReactDOM from "react-dom"

import './enterprise.less'

class Enterprise extends Component{

    state = {
        service_data:["农业机械","农业机械","农业机械","农业机械","农业机械","农业机械","农业机械","农业机械","农业机械","农业机械","农业机械","农业机械"],
        product_data:["农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械","农业机械","农业机械","农业机械"]
    }

    initData= async ()=>{

    }

    componentDidMount(){
        this.initData();
    }

    render(){
        return (
            <div className="enterprise">
                <div className="wrapper">
                    <ul>
                        {
                            this.props.match.params.type=="product"?
                                this.state.product_data.map((item)=>{
                                    return (<li>{item}</li>)
                                 })
                            :
                                this.state.service_data.map((item)=>{
                                    return (<li>{item}</li>)
                                })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Enterprise;