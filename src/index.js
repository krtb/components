import React from 'react';
import ReactDOM from 'react-dom'
// can treat api as large object, need to add () to use
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));