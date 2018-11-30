import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Api from '@/api/api.js'

import PublicHeader from '@/components/header/header';
import PublicFooter from '@/components/footer/footer';

import './information.less';

class Information extends Component{
    render(){
        return (
            <div className="information">
                <PublicHeader/>
                <PublicFooter/>
            </div>
        )
    }
}

export default Information;