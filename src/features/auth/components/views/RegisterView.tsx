import { RegisterDesktop } from './RegisterDesktop';
import { RegisterMobile } from './RegisterMobile';

export function RegisterView() {
  return (
    <>
      <div className='hidden lg:block'>
        <RegisterDesktop />
      </div>

      <div className='lg:hidden'>
        <RegisterMobile />
      </div>
    </>
  );
}
