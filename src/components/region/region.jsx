import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import './region.less'

class Region extends Component{

    state = {
        area:["农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械2","农业机械","农业机械","农业机械","农业机械"],
        inputKeyword:""
    }

    componentDidMount(){
        this.initData();
    }

    initData = async ()=>{

    }

    render(){
        return(
            <div className="region">
                <div className="wrapper">
                    <ul>
                        {
                            this.state.area.map((item)=>{
                                return (<li>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Region;