import { Route, Switch } from 'react-router-dom';

import ViewAuth from './Auth';
import ViewHome from './Home';
import ViewProfile from './Profile';

const View = () => {
  return (
    <Switch>
      <Route path="/auth" component={ViewAuth} />
      <Route path="/profile" component={ViewProfile} />
      <Route path="/" component={ViewHome} />
    </Switch>
  );
};

export default View;
