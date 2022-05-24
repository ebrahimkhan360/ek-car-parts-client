import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex items-center'>
            <div class="mockup-phone mx-50">
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <div>
                            <h2 className='text-white text-center text-5xl font-bold my-4'>Log In</h2>
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <label class="input-group">
                                <input type="text" placeholder="Your Email" class="input input-bordered required" />
                            </label>
                            <label class="label">
                                <span class="label-text">Your Password</span>
                            </label>
                            <label class="input-group">
                                <input type="password" placeholder="Your Password" class="input input-bordered required" />
                            </label>

                            <Link to='/register' className='text-blue-400'><small>You are new user? please Register Now</small></Link>

                            <button class="btn btn-primary font-bold my-6 text-white flex items-center">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;