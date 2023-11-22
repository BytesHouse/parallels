import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "386300293874-epv0sc7hklgflj7mmcuusnrs59uc620a.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_SECRET_ID ?? "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"
        })
    ]
})
export {handler as GET, handler as POST}