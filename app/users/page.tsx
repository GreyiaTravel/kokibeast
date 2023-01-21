import Link from "next/link";

type User = {
  id: number;
  username: string;
  email: string;
};

const fetchUsers = async () => {
  const res = await fetch("http://localhost:8080/api/v1/users");
  const users: User[] = await res.json();

  return users;
};

const Users = async () => {
  const myUsers = await fetchUsers();

  console.log(myUsers);

  return (
    <div>
      <h1>Users List</h1>

      {myUsers?.map((myUser) => (
        <>
          <Link href={`/users/${myUser.id}`}>
            <p>User: {myUser.id}</p>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Users;
