import NextAuth from 'next-auth'
// import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
import SlackProvider from 'next-auth/providers/slack'

export default NextAuth({
  providers: [
    SlackProvider({
      clientId: process.env.NEXT_PUBLIC_SLACK_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SLACK_CLIENT_SECRET as string,
      // profile(profile): any {
      //   return profile
      // },
    }),
  ],
  // ログインページを指定する。今回はトップページのため'/'を指定。
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ credentials, account, user }) {
      try {
        // if (account.provider === '') {
        console.log('credentials', credentials)
        console.log('account', account)
        console.log('user', user)

        // const result = await signInWithCredential(auth, cred)
        // }
        return false
      } catch (e) {
        console.error(e)
        return false
      }
    },
  },
})

// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   if (req.query.nextauth.includes('callback') && req.method === 'POST') {
//     console.log('Handling callback request from my Identity Provider', req.body)
//   }
//   // Do whatever you want here, before the request is passed down to `NextAuth`
//   return await NextAuth(req, res, {
//     providers: [
//       SlackProvider({
//         clientId: process.env.NEXT_PUBLIC_SLACK_CLIENT_ID as string,
//         clientSecret: process.env.NEXT_PUBLIC_SLACK_CLIENT_SECRET as string,
//         // profile(profile): any {
//         //   return profile
//         // },
//       }),
//     ],
//     pages: {
//       signIn: '/signin',
//     },
//   })
// }
