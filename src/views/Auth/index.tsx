import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ViewLogin from './Login';
import ViewRegister from './Register';

const ViewAuth = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/login`} component={ViewLogin} />
      <Route path={`${path}/register`} component={ViewRegister} />
    </Switch>
  );
};

export default ViewAuth;
