import NextAuth from "next-auth";
import { authOptions } from "../../../../utils/auth";

// export default NextAuth(authOptions);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
