import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Api from '@/api/api.js'
import charts from '@/echarts/charts.js'

import PublicHeader from '@/components/header/header';
import PublicFooter from '@/components/footer/footer';



import './relation.less';
import ReactDOM from "react-dom";



class Relation extends Component{

    state = {
        relation:{}
    }

    componentDidMount(){
        this.loadGraph();
    }
    loadGraph = async ()=>{
        try{
            let result = await Api.getRelationGraph();
            let data = result.data;
            this.setState({
                relation:data
            })
            var relation_chart_box =  ReactDOM.findDOMNode(this.refs.relation_chart_box);
            charts.relationGraph(relation_chart_box,data);
        }catch(err){
            console.error(err);
        }
    }



    render(){
        return (
            <div className="relation">
                <PublicHeader/>
                <div className="body">
                    <h5 className="module_title">重要人物关系图</h5>
                    <div className="relation_chart" ref="relation_chart_box"></div>
                </div>
                <PublicFooter/>
            </div>
        )
    }
}

export default Relation;