import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"
const handler = NextAuth({
    providers:[
        Credentials({
            name: "Email",
            credentials: {
                username:{ label: 'email', type: 'text', placeholder: 'Email'},
                password: { label: 'password', type: 'password', placeholder: 'password'},
            },
            async authorize(credentials:any){
                return {
                    id: 'user1'
                };
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID ||"",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        session: ({session, token, user}:any)=>{
            console.log(session)
            if(session && session.user){
                session.user.id= token.sub;
            }
            return session;
        }
    }
});

export const GET= handler;
export const POST= handler;