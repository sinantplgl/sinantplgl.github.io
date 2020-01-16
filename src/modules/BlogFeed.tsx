import React, { Component } from 'react';
import { FeedPostVM, FeedPostVMParams } from '../class-definition/FeedPostVM'
import PostCard  from '../modules/PostCard';
interface FeedProps {

}

interface FeedState {
  isLoading: boolean
  postData: FeedPostVM[]
}

export default class BlogFeed extends Component<FeedProps, FeedState> {
  constructor(props: FeedProps) {
    super(props);

    this.state = {
      isLoading: true,
      postData: []
    }

    this.loadItems();
  }

  loadItems = async () => {
    let fetchItem: any = await fetch("http://localhost:3000/posts?skip=0&take=10");
    let response = await fetchItem.json();
    
    if (!response.has_error) {
      let data = response.data.map((item: FeedPostVMParams) => {
        return new FeedPostVM(item);
      });

      this.setState({postData: data});
    }
  }
  render() {
    return (
      <div className="tab-content w-100">
        <div className="tab-pane fade active show" id="blog-posts-pane" >
          {this.state.postData.map(item => (
              <PostCard post={item}/>
          ))}
        </div>
      </div>
    );
  }
}