import { Route, Switch } from 'react-router-dom';

import { LINK_PROFILE, LINK_PROFILE_CHAT } from '@utils';

import ViewProfileChatRoot from './Chat';
import ViewProfilePreference from './Settings';

import './style.scss';

const ViewProfile = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="account-wrap">
          <Switch>
            <Route
              path={`${LINK_PROFILE_CHAT}`}
              component={ViewProfileChatRoot}
            />
            <Route
              path={`${LINK_PROFILE}/`}
              component={ViewProfilePreference}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
