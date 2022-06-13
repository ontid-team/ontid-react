import { AuthLogin } from '@modules/Auth';
import { UIButton } from '@ui';
import { LINK_REGISTER, LINK_FORGOT_PASSWORD } from '@utils';

import './styles.scss';

const ViewAuthLogin = () => {
  return (
    <div className="signUpIn-content">
      <div className="signUpIn-main">
        <div className="signUpIn-main__title">Log In</div>
        <AuthLogin />
        <div className="signUpIn-main__haveAccount">
          <div>
            Don’t have an account?{' '}
            <UIButton link={LINK_REGISTER} children="Sign up" />
          </div>
          <div>
            Don’t remember your password?{' '}
            <UIButton link={LINK_FORGOT_PASSWORD} children="Recover passord" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAuthLogin;
