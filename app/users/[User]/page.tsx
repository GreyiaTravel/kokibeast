type Pageprops = {
  params: {
    User: string;
  };
};

type User = {
  id: number;
  username: string;
  email: string;
};

const fetchUser = async (User: string) => {
  const res = await fetch(`http://localhost:8080/api/v1/users/${User}`);
  const user: User = await res.json();

  return user;
};

const User = async ({ params: { User } }: Pageprops) => {
  const user = await fetchUser(User);

  console.log(user);

  return (
    <div>
      <h1>User</h1>

      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
