import "../styles/admin.css";

function AdminUsers() {
  // Dummy users (later from backend)
  const users = [
    {
      id: 1,
      name: "Afifa",
      email: "afifa@gmail.com",
      role: "user",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "user",
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@tools.com",
      role: "admin",
    },
  ];

  return (
    <div className="admin-content">
      <h1>Registered Users</h1>
      <p>All users in the system</p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <span className={`status ${u.role}`}>
                  {u.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
