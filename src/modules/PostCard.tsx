import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FeedPostVM, FeedPostVMParams } from '../class-definition/FeedPostVM';


interface PostCardProps {
    post: FeedPostVM
}

export default class PostCard extends Component<PostCardProps>{
    constructor(props: PostCardProps) {
        super(props);
    }

    render() {
        return (
            <div className="card blog-horizontal">
                <div className="card-header">
                    <h5 className="card-title font-weight-semibold">
                        <Link to={`/${this.props.post.url_slug}`} className="text-default">{this.props.post.title}</Link>
                    </h5>
                </div>

                <div className="card-body">
                    <div className="card-img-actions mr-3">
                        <img className="card-img img-fluid" src="global_assets/images/demo/cover3.jpg" alt="" />
                    </div>

                    <p>{this.props.post.description}</p>
                    <Link to={`/${this.props.post.url_slug}`}>Show more...</Link>
                </div>

                <div className="card-footer bg-transparent d-sm-flex justify-content-sm-between align-items-sm-center border-top-0 pt-0 pb-3">
                    <ul className="list-inline list-inline-dotted text-muted mb-3 mb-sm-0">
                        <li className="list-inline-item">By <a href="#" className="text-muted">{this.props.post.user.fullName}</a></li>
                        <li className="list-inline-item">August 10th, 2019</li>
                        {/* <!-- <li className="list-inline-item"><a href="#" className="text-muted">12 comments</a></li> --> */}
                    </ul>

                    {/* <!-- <a href="#" className="text-muted"><i className="icon-heart6 text-pink-300 mr-2"></i> 281</a> --> */}
                </div>
            </div>
        );
    }
}