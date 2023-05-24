export default function UserProfile({ user }) {
  return (
    <div className="container mx-auto px-4 bg-[#9147ff] mb-[2px] z-10">
      <img
        className="bg-white-500 text-white flex justify-between items-center max-w-[200px] w-full m-auto p-2 rounded-2xl"
        src={user.photoURL}
      />
      <p>
        <i className="bg-[#aa77ec] text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
          @{user.username}
        </i>
      </p>
      <h1 className="bg-[#aa77ec] text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
        {user.displayName}
      </h1>
    </div>
  );
}
