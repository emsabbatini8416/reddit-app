import React from 'react';
import { Provider } from "mobx-react"
import PostStore from './Stores/PostStore'
import PostContainer from './Containers/Post';

function App() {
  return (
  <Provider PostStore={PostStore}>
    <PostContainer />
  </Provider>
  )
}

export default App;
