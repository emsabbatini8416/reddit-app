import React from 'react';
import { observer } from 'mobx-react';
import './Post.css';

const Post = (post: any) => {
    return (
        <div className="panel panel-default">
            <div className="panel-body media">
                <span className="badge pull-right">{post.data.score}</span>
                {
                    post && post.data && post.data.thumbnail && (
                        <div className="pull-left">
                            <img className="thumbnail" src={post.data.thumbnail} alt="" />
                        </div>
                    )
                }

                <div>
                    <div>
                        <a href={post.data.url}>{post.data.title}</a>
                        <p className="meta">by {post.data.author}</p>
                        <p className="meta-comments">{post.data.num_comments} comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Post);