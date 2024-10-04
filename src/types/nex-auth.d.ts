interface SignInResult {
    error?: string;
    ok?: boolean;
  }
 

import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    token: string; 
  }

  interface Session extends DefaultSession {
    accessToken: string; 
  }
}
 