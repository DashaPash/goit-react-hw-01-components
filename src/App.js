import user from './data/user.json';
import friends from './data/friends.json';
import data from './data/data.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import StatisticsList from './components/StatisticsList/StatisticsList.jsx';
import TransactionList from './components/TransactionList/TransactionList.jsx';

function App() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <div className="App">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <FriendList friends={friends} />
      <StatisticsList title="Upload stats" stats={data} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
