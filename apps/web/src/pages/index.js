import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <h1> Loader </h1>
      <Loader show />
    </div>
  );
}
