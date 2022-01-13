import react from 'react'
import ReactDom from 'react-dom';

import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return <div className='ui container comments'>
    <ApprovalCard>
     <CommentDetail author="John" avatar={faker.image.image()} timeAgo="Today at 6:00PM" content="Nice blog post!" />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail author="Ozi" avatar={faker.image.image()} timeAgo="Yesterday at 6:00AM" content="Nice blog post!" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Uche" avatar={faker.image.image()} timeAgo="Today at 5:00PM" content="Nice blog post!" />
    </ApprovalCard>

  </div>
}

ReactDom.render(<App />, document.querySelector('#root'));