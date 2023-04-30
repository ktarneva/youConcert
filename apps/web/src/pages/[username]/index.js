import UserProfile from "../../components/UserProfile";
import { getUserWithUsername } from "../../utils/firebase";

export async function getServerSideProps({ query }) {
  const { username } = query;

  const userDoc = await getUserWithUsername(username);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }
  //JSON serialicable data
  let user = null;

  if (userDoc) {
    user = userDoc.data();
  }
  return {
    props: { user },
  };
}

export default function UserProfilePage({ user }) {
  return (
    <main>
      <UserProfile user={user} />
    </main>
  );
}
