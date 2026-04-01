import React, { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"
import CustomModal from "../../Component/Layouts/customUpdateModal"

const AdminUser = () => {
    const { authorizationToken } = useAuth()
    const [userdata, setUserData] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json()
            setUserData(data)
        } catch (error) {
            console.log(error, "error-fetchData")
        }
    }
    const handleUpdate = (user) => {
        console.log("Update:", user);
        setSelectedUser(user);
        setOpenModal(true);
    };
    const handleSave = (updatedUser) => {
         console.log(updatedUser,"updatedUser")
        const updatedList = userdata.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
        );
        console.log(updatedList,"updatedList")
    };

    const handleDelete = async (id) => {
        try {
            const deleteResponse = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await deleteResponse.json()
            console.log(data, "data-fetchData")
            if (deleteResponse.ok) {
                alert("User Deleted Successfully")
                fetchData()
            }
        } catch (error) {
            console.log(error, "error-handleDelete")
        }
    };
    return (
        <>
            <div className="table-card">
                <h2 className="table-title">Users List</h2>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Admin</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userdata.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.userName || "-"}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.isAdmin ? "Yes" : "No"}</td>

                                <td className="actions">
                                    <button onClick={() => handleUpdate(user)} className="edit-btn">Update</button>
                                    <button onClick={() => handleDelete(user._id)} className="delete-btn"> Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CustomModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Update User"
                data={selectedUser}
                onSave={handleSave}
            />
        </>
    )
}
export default AdminUser