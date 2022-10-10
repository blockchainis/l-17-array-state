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
        <button>
          추가
        </button>
        <button>
          정렬
        </button>
      </div>
      {users.length > 0 && (
        <ul>
          {users.map(({ id, name }) => (
            <>
              <li key={id}>
                {name}
                <button
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
