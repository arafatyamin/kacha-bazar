import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "customer",
      async authorize(credentials) {
        try {
          // console.log("using authorize function");
          const { email, password } = credentials;
          const response = await axios.post(
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/login",
            {
              email,
              password,
            }
          );
          // console.log("customer => ", response.data.user);
          console.log(response.data.user);
          return { ...response.data.user };
        } catch (err) {
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: "admin",
      async authorize(credentials) {
        try {
          // console.log("using authorize function");
          const { email, password } = credentials;
          const response = await axios.post(
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/admin/login",
            {
              email,
              password,
            }
          );
          // console.log("admin => ", response.data.user);
          return { ...response.data.admin };
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;

      return false;
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          id: user?.id,
          email: user?.email,
          type: user?.type,
          ...(user?.token ? { token: user?.token } : {}),
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.type = token.type;
      if (token?.token) {
        session.user.token = token.token;
      }

      session.user.image = "";
      session.isLoggedIn = true;
      return session;
    },
  },
  secret: "GfnaiVAi454FGDD4WF",
};

export default NextAuth(authOptions);
