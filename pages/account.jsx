import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Account = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
        <h2 className='text-2xl font-bold'>Welcome, {session.user.name}</h2>
        <p className='py-4'>Signed in as {session.user.email}</p>
        <div className='pb-4 m-auto'>
          <Image
            src={session.user.image}
            className='rounded-full'
            alt='/'
            width='100'
            height='100'
          />
        </div>
        <button className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600' onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
      <h2 className='text-3xl font-bold'>Login</h2>
      <p className='py-4'>Choose the account you want to sign in with.</p>
      <button
        className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2'
        onClick={() => signIn()}
      >
        <FaGithub className='mr-2' />
        Sign in with<span className='font-bold pl-1'>Github</span>
      </button>
      <button
        className='flex items-center justify-center p-3 bg-blue-600 border border-blue-600 my-2'
        onClick={() => signIn()}
      >
        <FaGithub className='mr-2' />
        Sign in with<span className='font-bold pl-1'>Google</span>
      </button>
    </div>
  );
};

export default Account;
