import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import user from 'components/Profile/user.json';
import data from 'components/Statistic/data.json';
import friends from 'components/FriendList/friends.json'
import transactions from 'components/TransactionHistory/transactions.json'



export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
           
    </>
  );
};
