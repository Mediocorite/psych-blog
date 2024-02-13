import NextAuth from "next-auth";
import { Options } from "@/src/middleware/nextAuthOptions";
const handler = NextAuth(Options);
export { handler as GET, handler as POST };
