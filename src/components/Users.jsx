import { useState } from "react";

let initialUsers = [
  { id: crypto.randomUUID(), name: "후니" },
  { id: crypto.randomUUID(), name: "제니" },
  { id: crypto.randomUUID(), name: "미나" },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState("");
  return (
    <div>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <button
          onClick={() => {
            setUsers([...users, { id: crypto.randomUUID(), name }]);
          }}
        >
          추가
        </button>
      </div>
      {users.length > 0 && (
        <ul>
          {users.map(({ id, name }) => (
            <>
              <li key={id}>
                {name}
                <button
                  onClick={() => {
                    const deletedUsers = users.filter((user) => user.id !== id);
                    setUsers(deletedUsers);
                  }}
                >
                  제거하기
                </button>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
