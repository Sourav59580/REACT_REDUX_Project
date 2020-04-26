import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(()=> [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
    <div className='container p-4'>
      <PostForm/>
      <Posts/>
    </div>
    </Provider>
  );
}

export default App;
