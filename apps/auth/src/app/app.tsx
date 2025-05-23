import { AssetsImage } from '@mf-store-apps/ui';
import { useState } from 'react';
import axios from 'axios';

export function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const url = 'http://localhost:8080/api/v1/auth/authenticate';

  const login = (e: any): void => {
    e.preventDefault();
    console.log('login');

    if (!email || !password) {
      return;
    }

    axios
      .post(url, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <main className="p-4 md:px-8 lg:px-20 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center ">
      <article className="flex flex-col h-full md:h-2/3 shadow-lg rounded-md md:flex-row md:w-full lg:w-[-60%] 2xl:w-1/2">
        <figure className="relative h-1/3 w-full md:h-full md:w-1/2 rounded-md">
          <img
            src={AssetsImage.loginBg}
            alt=""
            className="object-cover w-full h-full"
          />
        </figure>
        <section className="p-10 flex flex-col gap-8 justify-center items-stretch  md:w-1/2">
          <h1 className="font-bold text-center text-xl lg:text-2xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md items-center">
            <img src={AssetsImage.google} className="w-[2rem]" />{' '}
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md items-center">
            <img src={AssetsImage.facebook} className="w-[2rem]" />{' '}
            <span>Sign in with Facebook</span>{' '}
          </button>
          <p className="text-sm">
            Have a problems? <a className="underline">Contact us</a>
          </p>

          <form onSubmit={(e) => login(e)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      </article>
    </main>
  );
}

export default App;
