import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from "react-dom"


import './chooser.less'


class Chooser extends Component{
    state={
        year_show:false,
        month_show:false,
        year:[2018,2017,2016,2015,2014,2013,2012,2011,2010],
        month:[12,11,10,9,8,7,6,5,4,3,2,1],
        media:["总体","印度尼西亚媒体","马来西亚媒体","菲律宾媒体"]
    }

    componentDidMount() {
        document.addEventListener('click', this.hideAllMenu);
    }

    hideAllMenu = ()=>{
        this.setState({
            year_show:false,
            month_show:false
        })
    }

    stopPropagation(e) {
        e.nativeEvent.stopImmediatePropagation();
    }

    yearShow = (event)=>{
        this.stopPropagation(event);
        this.setState({
            year_show:true,
            month_show:false
        })
    }

    monthShow = (event)=>{
        this.stopPropagation(event);
        this.setState({
            year_show:false,
            month_show:true
        })
    }

    yearNum = (event)=>{
        console.log(event);
        ReactDOM.findDOMNode(this.refs["year"]).innerText = event.target.innerText;
        this.props.oncurrentYear(event.target.innerText)
    }

   monthNum = (event)=>{
        console.log(event);
        ReactDOM.findDOMNode(this.refs["month"]).innerText = event.target.innerText;
        this.props.oncurrentMonth(event.target.innerText)
    }

    chooseMedia = (event)=>{
        ReactDOM.findDOMNode(this.refs["media"]).innerText = event.target.innerText;
        this.props.oncurrentMedia(event.target.innerText)
    }

    render(){
        return(
            <div className='chooser'>
                {
                    this.props.status=="year"?
                        <div onClick={this.yearShow.bind(this)} ><span className="year" ref="year">请选择年份</span><img src="./img/expend.png"/></div>:
                        this.props.status=="month"?
                            <div onClick={this.monthShow.bind(this)} ><span className="month" ref="month">请选择月份</span><img src="./img/expend.png"/></div>:
                            <div onClick={this.monthShow.bind(this)} ><span className="month" ref="media">印度尼西亚媒体</span><img src="./img/expend.png"/></div>
                }
                {
                    this.props.status=="year"?
                        <div className={this.state.year_show?'year_box':"hidden"}>
                            <ul>
                                {this.state.year.map((item,index)=>{
                                    return (<li onClick={this.yearNum.bind(this)}>{item}</li>)
                                })}
                            </ul>
                        </div>:
                        this.props.status=="month"?
                            <div className={this.state.month_show?'month_box':"hidden"}>
                                <ul>
                                    {this.state.month.map((item,index)=>{
                                        return (<li onClick={this.monthNum.bind(this)}>{item}</li>)
                                    })}
                                </ul>
                            </div>:
                            <div className={this.state.month_show?'month_box':"hidden"}>
                                <ul>
                                    {this.state.media.map((item,index)=>{
                                        return (<li onClick={this.chooseMedia.bind(this)}>{item}</li>)
                                    })}
                                </ul>
                            </div>
                }
            </div>
        )
    }
}

export default Chooser;