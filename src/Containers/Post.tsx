import React from 'react';
import { observer, inject } from 'mobx-react';
import Post from '../Components/Post';

const PostContainer = (props: any) => {
    React.useEffect(() => {
      props.PostStore.getPostsAsync();
    }, [props.PostStore]);
    return (
      <div>
          {
            props.PostStore.postData.posts.map((post: any, index: number)=> {
              return <Post key={index} {...post} />
            })
          }
      </div>
    )
}

export default inject("PostStore")(observer(PostContainer));