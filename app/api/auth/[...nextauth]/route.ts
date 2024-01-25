import NextAuth from "next-auth";
import { Options } from "@/utilities/authOptions";

export const authOptions = NextAuth(Options);
export { authOptions as GET, authOptions as POST };
