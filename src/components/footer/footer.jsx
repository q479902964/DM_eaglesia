import React, { Component } from "react"
import ReactDOM from "react-dom"
import { NavLink } from 'react-router-dom'

import './footer.css'
class Footer extends Component{
    static defaultProps = {
        status: 1,
    }
    render(){
        return(
            <div className={"footer"+(this.props.status==1?"1":"")}>
                <span>© 广东外语外贸大学 智能信息处理研究所 数据挖掘实验室 保留所有权利</span>
            </div>
        )
    }
}
export default Footer;