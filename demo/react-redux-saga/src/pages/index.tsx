import { Route, Routes } from 'react-router-dom';

import { LINK_LOGIN, LINK_PROFILE, LINK_REGISTER } from '@utils';

import PageHome from './Home';
import PageLogin from './Login';
import PageProfile from './Profile';
import PageRegister from './Register';

const Page = () => {
  return (
    <Routes>
      <Route path={LINK_LOGIN} element={<PageLogin />} />
      <Route path={LINK_REGISTER} element={<PageRegister />} />
      <Route path={`${LINK_PROFILE}/*`} element={<PageProfile />} />
      <Route path="/" element={<PageHome />} />
    </Routes>
  );
};

export default Page;
