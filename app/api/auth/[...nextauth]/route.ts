import GithubProvider from "next-auth/providers/github"
import NextAuth from "next-auth"
import { NextApiRequest, NextApiResponse } from "next"
import { redirect } from "next/dist/server/api-utils"

 const authOptions = {
  callbacks: {
    async signIn( user: any) {
      console.log('signIn req', user)
      //redirect to home page after login
      const isAllowedToSignIn = true
    if (isAllowedToSignIn) {
      return '/'
    } else {
      // Return false to display a default error message
      return false
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
    },
    async jwt({ token, account, profile, isNewUser }: any) {
      console.log('jwt token', token);
      console.log('jwt account', account);
      console.log('jwt profile', profile);
      console.log('jwt isNewUser', isNewUser);
        if (account) {
          token.accessToken = account.access_token;
          token.id = profile.id;
          token.role = 'admin';
        }
      return token;
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    },
    authorized({ req , token }) {
      console.log('authorized req', req);
      console.log('authorized token', token);
      if(token) return true // If there is a token, the user is authenticated
    }  },
   providers: [
     GithubProvider({
       clientId: process.env.GITHUB_ID ?? '',
       clientSecret: process.env.GITHUB_SECRET ?? '',
     })
   ],
 };

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }


