import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
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
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export const GET= handler;
export const POST= handler;