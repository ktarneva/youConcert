import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  function backToLogin() {
    router.push("/");
  }

  return (
    <>
      <form>
        <input type="email" placeholder="Enter your email" />
        <input type="username" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <input type="first_name" placeholder="First name" />
        <input type="last_name" placeholder="Last name" />

        <button>Register</button>
      </form>

      <Link href={"/"}>Already have an account? Click here to login!</Link>
    </>
  );
}
