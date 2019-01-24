import React from 'react';
import ReactDOM from 'react-dom'
// can treat api as large object, need to add () to use
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return <div className="ui container comments">
        <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:55AM" 
            commentSnip="everything is okay" 
            fakerImg={faker.image.avatar()} 
        />
        <CommentDetail 
            author="Gwen" 
            timeAgo="TODAY AT 5:00PM" 
            commentSnip="everything is okay" 
            fakerImg={faker.image.avatar()} 
        />
        <CommentDetail
            author="Sam"
            timeAgo="Today at 4:55AM"
            commentSnip="everything is okay"
            fakerImg={faker.image.avatar()}
        />
        <CommentDetail
            author="Gwen"
            timeAgo="TODAY AT 5:00PM"
            commentSnip="everything is okay"
            fakerImg={faker.image.avatar()}
        />
      </div>;
};

ReactDOM.render(<App/>, document.querySelector('#root'));