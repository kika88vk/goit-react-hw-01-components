import { Profile } from 'components/Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
// import { FriendListItem } from './FriendListItem/FriendListItem';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="UPLOAD STATS" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends}></FriendList>
    </div>
  );
};
