import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Post, { PostParams } from '../class-definition/Post';

interface DetailProps {
    match: {
        params: {
            postSlug: string
        }
    }
}

interface DetailState {
    slug: string;
    post?: Post
}

export default class PostDetail extends Component<DetailProps, DetailState>{
    constructor(props: DetailProps) {
        super(props);

        this.state = {
            slug: this.props.match.params.postSlug
        }
    }

    componentDidMount = async () => {
        let fetchItem: any = await fetch(`http://localhost:3000/posts/get-by-slug/${this.state.slug}`);
        let response = await fetchItem.json();

        let data: PostParams = response.data;
        this.setState({
            post: new Post(data)
        })
    }

    render() {
        return (
            <div className="tab-pane fade active show" id="post-detail-pane">
                <div className="card">
                    <div className="card-header bg-transparent border-bottom">
                        <h6 className="card-title">
                            <Link to="/">
                                <i className="icon-arrow-left7"></i>
                                Go back to list
                            </Link>
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <div className="mb-3 text-center">
                                <a href="#" className="d-inline-block">
                                    <img src="global_assets/images/demo/cover3.jpg" className="img-fluid" alt="" />
                                </a>
                            </div>

                            <h4 className="font-weight-semibold mb-1">
                                <a href="#" className="text-default">{this.state.post?.title}</a>
                            </h4>

                            <ul className="list-inline list-inline-dotted text-muted mb-3">
                                <li className="list-inline-item">By {this.state.post?.user.fullName}</li>
                                {
                                    this.state.post?.status == "updated" ?
                                        <li className="list-inline-item">
                                            <Moment format="MMM Do, YYYY">{this.state.post?.updated_at}</Moment> (updated)
                                        </li>
                                        :
                                        <li className="list-inline-item">
                                            <Moment format="MMM Do, YYYY">{this.state.post?.created_at}</Moment>
                                        </li>
                                }
                                {/* <li className="list-inline-item"><a href="#" className="text-muted">12 comments</a></li>
                                <li className="list-inline-item"><a href="#" className="text-muted"><i className="icon-heart6 font-size-base text-pink-300 mr-2"></i> 281</a></li> */}
                            </ul>

                            <div>
                                {this.state.post?.content}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}