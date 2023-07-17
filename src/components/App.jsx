import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import user from 'components/user.json';
import data from 'components/data.json';

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
    </>
  );
};
