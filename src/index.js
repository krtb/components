import React from 'react';
import ReactDOM from 'react-dom'
// can treat api as large object, need to add () to use
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam I Am
                    </a>
                    <div className="metdata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));