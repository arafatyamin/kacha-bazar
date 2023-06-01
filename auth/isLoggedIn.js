import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const isLoggedIn = async (ctx) => {
  const { req, res } = ctx;
  const session = await getServerSession(req, res, authOptions);
  const token = req.cookies["next-auth.session-token"];

  return session
    ? { loggedIn: true, user: { ...session.user }, token }
    : { loggedIn: false };
};

export default isLoggedIn;
