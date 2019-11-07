import React from 'react';

import './sign-in-and-sign-up.style.scss';

import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';


const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default SignInAndSignUp;