import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const isLoggedIn = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  return session
    ? { loggedIn: true, user: { ...session.user } }
    : { loggedIn: false };
};

export default isLoggedIn;
