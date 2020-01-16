import React, {Component} from 'react';
import InfoCard from '../modules/InfoCard';
import BlogFeed from '../modules/BlogFeed';
export default class Home extends Component{
    render(){
        return(
            <div className="d-md-flex align-items-md-start">
                <InfoCard/>
                <BlogFeed/>
            </div>
        );
    }
}