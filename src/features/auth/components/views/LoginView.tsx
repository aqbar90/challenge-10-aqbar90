import { LoginDesktop } from './LoginDesktop';
import { LoginMobile } from './LoginMobile';

export function LoginView() {
  return (
    <>
      <div className='hidden lg:block'>
        <LoginDesktop />
      </div>

      <div className='lg:hidden'>
        <LoginMobile />
      </div>
    </>
  );
}
