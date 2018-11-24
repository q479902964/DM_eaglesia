import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';

import './relation.less';

class Relation extends Component{
    render(){
        return (
            <div className="relation">
                <PublicHeader/>
            </div>
        )
    }
}

export default Relation;