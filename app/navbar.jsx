import Link from "next/link";

export default function Navbar ()  {
  return (
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/register">Sign Up</Link>
        </li>
      </ul>
  );
};