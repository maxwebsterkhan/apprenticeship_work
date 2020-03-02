import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.random.locale()}
          face={faker.image.avatar()}
          commentContent={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.random.locale()}
          face={faker.image.avatar()}
          commentContent={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={faker.random.locale()}
          face={faker.image.avatar()}
          commentContent={faker.hacker.phrase()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
