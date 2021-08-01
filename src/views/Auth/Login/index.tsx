import { AuthLogin } from '@modules/Auth';
import { UIButton } from '@shared/ui';

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
            <UIButton link="/auth/register" children="Sign up" />
          </div>
          <div>
            Don’t remember your password?{' '}
            <UIButton link="/auth/forgot-password" children="Recover passord" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAuthLogin;
