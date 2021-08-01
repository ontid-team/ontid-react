import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ViewProfileChatRoot from './Chat';
import ViewProfilePreference from './Preference';

import './style.scss';

const ViewProfile = () => {
  const { path } = useRouteMatch();

  return (
    <div className="account">
      <div className="container">
        <div className="account-wrap">
          <Switch>
            <Route path={`${path}/chat`} component={ViewProfileChatRoot} />
            <Route path={`${path}/`} component={ViewProfilePreference} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
