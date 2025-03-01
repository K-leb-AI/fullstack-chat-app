import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import AuthImagePattern from '../components/AuthImagePattern';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login, isLogginIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className='min-h-screen grid lg:grid-cols-2 mt-[60px]'>
      {/* left side */}
      <div className='flex flex-col items-center p-0 sm:p-12'>
        <div className='w-full max-w-md'>
          {/* LOGO */}
          <div className='text-center'>
            <div className='flex flex-col items-center gap-2 group'>
              <div
                className='size-12 rounded-xl bg-primary/10 flex items-center justify-center 
                group-hover:bg-primary/20 transition-colors'
              >
                <MessageSquare className='size-6 text-primary' />
              </div>
              <h1 className='text-2xl font-bold'>Welcome Back</h1>
              <p className='text-base-content/60'>Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-3 px-10'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Email</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='size-5 text-base-content/40' />
                </div>
                <input
                  type='email'
                  className={`input input-bordered w-full pl-10`}
                  placeholder='you@example.com'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Password</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='size-5 text-base-content/40' />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`input input-bordered w-full pl-10`}
                  placeholder='••••••••'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className='size-5 text-base-content/40' />
                  ) : (
                    <Eye className='size-5 text-base-content/40' />
                  )}
                </button>
              </div>
            </div>

            <button
              type='submit'
              className='btn btn-primary w-full mt-2'
              disabled={isLogginIn}
            >
              {isLogginIn ? (
                <>
                  <Loader2 className='size-5 animate-spin' />
                  Loading...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className='text-center mt-6'>
            <p className='text-base-content/60'>
              Already have an account?{' '}
              <Link to='/signup' className='link link-primary'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <AuthImagePattern
        title='Welcome back!'
        subtitle='Sign in to continue your conversations and catch up with your messages.'
      />
    </div>
  );
};

export default LoginPage;
