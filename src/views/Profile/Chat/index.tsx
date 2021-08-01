import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ViewProfileChat from './Chat';

const ViewProfileChatRoot = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/`} component={ViewProfileChat} />
    </Switch>
  );
};

export default ViewProfileChatRoot;
