import { Route, Routes } from 'react-router-dom';

import { LINK_CHAT } from '@utils';

import PageProfileChatRoot from './Chat';
import PageProfilePreference from './Settings';

import './style.scss';

const PageProfile = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="account-wrap">
          <Routes>
            <Route path={LINK_CHAT} element={<PageProfileChatRoot />} />
            <Route path="/" element={<PageProfilePreference />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PageProfile;
