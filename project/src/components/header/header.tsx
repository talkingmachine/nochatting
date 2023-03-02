import { useContext, useState } from 'react';
import { GContext } from '../..';
import { USER_INFO } from '../../consts/constUserInfo';
import { useAppDispatch } from '../../hooks/useStoreSelectors';
import { setUser } from '../../store/actions';
import { UserType } from '../../types/User';

function Header(): JSX.Element {

  const dispatch = useAppDispatch();
  const {signIn} = useContext(GContext);
  const [userInfo, setUserInfo] = useState<UserType>(USER_INFO);
  const signInClickHandler = () => {

    signIn().then((result) => {
      const user: UserType = {
        displayName: result.user.displayName ? result.user.displayName : USER_INFO.displayName,
        photoURL: result.user.photoURL ? result.user.photoURL : USER_INFO.photoURL,
      };
      if (user.photoURL && user.displayName) {
        setUserInfo(user);
        dispatch(setUser(user));
      }
    });
  };

  return (
    <header className="header wrapper">
      <a href="/#" className="header__logo">
        <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.68 60"><title>header-logo</title><rect x="129.25" width="215.43" height={60} style={{fill: '#ccc'}} /><path d="M840.44,526.31l-1.55-1.88a12.68,12.68,0,0,1-8,2.65,9.92,9.92,0,0,1-7.23-2.78,9.41,9.41,0,0,1-2.86-7,8.82,8.82,0,0,1,1.71-5.54,14,14,0,0,1,5.64-3.9,17.18,17.18,0,0,1-1.86-6.61,7,7,0,0,1,11.54-5.14,5.62,5.62,0,0,1,1.82,4.34q0,4.69-6.54,8.44a59.84,59.84,0,0,0,7,10.3,13.78,13.78,0,0,0,2-7.82l0-1.6h4.13q-.45,7.78-4.15,11.91c1.32,1.57,2.7,3.12,4.15,4.67ZM837.07,522a61.14,61.14,0,0,1-7.69-11.64q-4.3,2.13-4.3,6a7.93,7.93,0,0,0,1.91,5.36,5.9,5.9,0,0,0,4.63,2.21A9.65,9.65,0,0,0,837.07,522Zm-5.2-15.95c2.64-1.26,4-3.06,4-5.38a3.54,3.54,0,0,0-.74-2.31,2.39,2.39,0,0,0-1.91-.89,2.47,2.47,0,0,0-2,1,3.41,3.41,0,0,0-.82,2.32A14.27,14.27,0,0,0,831.87,506.09Z" transform="translate(-820.28 -482.39)" style={{fill: '#ccc'}} /><path d="M873.94,526.31V503.46h3.62v4.29q2.67-4.78,5.07-4.79,3.09,0,4,4.79h.15c1.45-3.19,3.16-4.79,5.11-4.79a3.36,3.36,0,0,1,3.1,1.56,10,10,0,0,1,1,5.06v16.73h-3.63V509.75a7.84,7.84,0,0,0-.27-2.54,1,1,0,0,0-1-.68q-2,0-4.25,5v14.75h-3.62v-15.8a11.22,11.22,0,0,0-.28-3.15,1.07,1.07,0,0,0-1.09-.79c-.58,0-1.28.49-2.08,1.45a14,14,0,0,0-2.11,3.58v14.71Z" transform="translate(-820.28 -482.39)" style={{fill: '#ccc'}} /><path d="M901.76,525.38v-3.74a21.64,21.64,0,0,0,8.3,2.08,7.77,7.77,0,0,0,4.16-1,3,3,0,0,0,1.64-2.58c0-1.33-1.3-2.42-3.92-3.26l-4.42-1.45q-5.17-1.68-5.17-5.93a5.61,5.61,0,0,1,2.34-4.82,11,11,0,0,1,6.61-1.7,33.17,33.17,0,0,1,7.43,1v3.36a25.75,25.75,0,0,0-7.46-1.24,6.89,6.89,0,0,0-3.61.82,2.49,2.49,0,0,0-1.35,2.21c0,1.13,1,2.06,3.08,2.78l5.22,1.83a9.78,9.78,0,0,1,4.09,2.4,5.28,5.28,0,0,1,1.25,3.63,6.08,6.08,0,0,1-2.66,5.17,12,12,0,0,1-7.15,1.92A27.12,27.12,0,0,1,901.76,525.38Z" transform="translate(-820.28 -482.39)" style={{fill: '#ccc'}} /><path d="M933.52,526.31v-6.23h6.21v6.23Z" transform="translate(-820.28 -482.39)" style={{fill: '#ccc'}} /><path d="M820.28,531.69v-2.14H949.55v2.14Z" transform="translate(-820.28 -482.39)" style={{fill: '#ccc'}} /><g style={{isolation: 'isolate'}}><path d="M968,526.31V522q-3,4.82-7.46,4.81a7.14,7.14,0,0,1-6.08-3q-2.24-3-2.24-8.18a14.84,14.84,0,0,1,2.64-9.18,8.25,8.25,0,0,1,6.92-3.5,7.76,7.76,0,0,1,6.22,3.11v-13h4.13v33.22Zm0-17.13c-1.93-2.07-3.81-3.11-5.66-3.11a4.72,4.72,0,0,0-4.22,2.4,12.78,12.78,0,0,0-1.5,6.76q0,8.07,4.8,8.07c2.33,0,4.53-1.47,6.58-4.4Z" transform="translate(-820.28 -482.39)" /><path d="M990.66,526.31V518H977.73v-3.49l12.93-19.34h3.88v19.71h4.12V518h-4.12v8.31Zm-9.45-11.43h9.45V500.75Z" transform="translate(-820.28 -482.39)" /><path d="M1007.71,526.31V503.46h4.13v4.29a9.67,9.67,0,0,1,8.45-4.79,19.76,19.76,0,0,1,4.23.52V510h-3.1v-3.17a7.75,7.75,0,0,0-5.84.89,14.49,14.49,0,0,0-3.74,3.75v14.88Z" transform="translate(-820.28 -482.39)" /><path d="M1031.58,526.31V493.09h4.13v21.27l9.55-10.9h4.46l-9,10.28,11.3,12.57h-5.55l-10.74-11.95v11.95Z" transform="translate(-820.28 -482.39)" /><path d="M1056.78,526.31V503.46h4.13v4.29q2.85-4.78,7.75-4.79,6.48,0,6.48,7.72v15.63H1071v-14.5a6.58,6.58,0,0,0-.83-3.79,3.23,3.23,0,0,0-2.78-1.13c-2.06,0-4.23,1.49-6.49,4.48v14.94Z" transform="translate(-820.28 -482.39)" /><path d="M1101.83,525.4a25.25,25.25,0,0,1-7.88,1.43q-5.87,0-9-3t-3.15-8.66a12.75,12.75,0,0,1,3-8.75,9.82,9.82,0,0,1,7.7-3.43c3.15,0,5.46.94,7,2.84s2.23,4.83,2.23,8.83V516h-15.5q.45,7.75,8.34,7.76a19.72,19.72,0,0,0,7.31-1.6Zm-15.53-12.56h11v-.59q0-6.18-5.13-6.18a5,5,0,0,0-4,1.79A8.66,8.66,0,0,0,1086.3,512.84Z" transform="translate(-820.28 -482.39)" /><path d="M1108.59,525.38v-3.74a21.64,21.64,0,0,0,8.3,2.08,7.77,7.77,0,0,0,4.16-1,3,3,0,0,0,1.65-2.58q0-2-3.92-3.26l-4.42-1.45q-5.17-1.68-5.18-5.93a5.61,5.61,0,0,1,2.34-4.82,11,11,0,0,1,6.61-1.7,33.32,33.32,0,0,1,7.44,1v3.36a25.8,25.8,0,0,0-7.46-1.24,6.91,6.91,0,0,0-3.62.82,2.49,2.49,0,0,0-1.35,2.21c0,1.13,1,2.06,3.08,2.78l5.22,1.83a9.78,9.78,0,0,1,4.09,2.4,5.24,5.24,0,0,1,1.25,3.63,6.08,6.08,0,0,1-2.66,5.17,12,12,0,0,1-7.14,1.92A27.13,27.13,0,0,1,1108.59,525.38Z" transform="translate(-820.28 -482.39)" /><path d="M1134.45,525.38v-3.74a21.6,21.6,0,0,0,8.3,2.08,7.73,7.73,0,0,0,4.15-1,3,3,0,0,0,1.65-2.58q0-2-3.92-3.26l-4.42-1.45q-5.18-1.68-5.17-5.93a5.61,5.61,0,0,1,2.33-4.82A11,11,0,0,1,1144,503a33.18,33.18,0,0,1,7.44,1v3.36a25.75,25.75,0,0,0-7.46-1.24,6.87,6.87,0,0,0-3.61.82,2.49,2.49,0,0,0-1.35,2.21c0,1.13,1,2.06,3.08,2.78l5.21,1.83a9.83,9.83,0,0,1,4.1,2.4,5.28,5.28,0,0,1,1.24,3.63,6.06,6.06,0,0,1-2.66,5.17,11.94,11.94,0,0,1-7.14,1.92A27.07,27.07,0,0,1,1134.45,525.38Z" transform="translate(-820.28 -482.39)" /><path d="M949.55,531.69v-2.14h206.83v2.14Z" transform="translate(-820.28 -482.39)" /></g></svg>
      </a>
      <div onClick={signInClickHandler} className="header__user">
        <span className="user__name">{userInfo.displayName}</span>
        <a href="/#" className="user__profile-picture">
          <img src={userInfo.photoURL} alt="profile" />
        </a>
      </div>
    </header>
  );
}

export default Header;
