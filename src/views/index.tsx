import { Route, Switch } from 'react-router-dom';

import { LINK_LOGIN, LINK_PROFILE, LINK_REGISTER } from '@utils';

import ViewHome from './Home';
import ViewLogin from './Login';
import ViewProfile from './Profile';
import ViewRegister from './Register';

const View = () => {
  return (
    <Switch>
      <Route path={LINK_LOGIN} component={ViewLogin} />
      <Route path={LINK_REGISTER} component={ViewRegister} />
      <Route path={LINK_PROFILE} component={ViewProfile} />
      <Route path="/" component={ViewHome} />
    </Switch>
  );
};

export default View;
