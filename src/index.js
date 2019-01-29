import React from 'react';
import ReactDOM from 'react-dom'
// can treat api as large object, need to add () to use
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return <div className="ui container comments">
        <ApprovalCard>
            {/* now a prop, providing configuration to ApprovalCard Component */}
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:55AM"
                commentSnip="everything is okay"
                fakerImg={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            {/* now a prop, providing configuration to ApprovalCard Component */}
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:55AM"
                commentSnip="everything is okay"
                fakerImg={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            {/* now a prop, providing configuration to ApprovalCard Component */}
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:55AM"
                commentSnip="everything is okay"
                fakerImg={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            {/* now a prop, providing configuration to ApprovalCard Component */}
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:55AM"
                commentSnip="everything is okay"
                fakerImg={faker.image.avatar()}
            />
        </ApprovalCard>
      </div>;
};

ReactDOM.render(<App/>, document.querySelector('#root'));