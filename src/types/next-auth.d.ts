import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    fullName: string;
    userRole: string;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      fullName: string;
      userRole: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    fullName: string;
    userRole: string;
  }
}