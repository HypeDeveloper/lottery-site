import { useEffect, useState } from "react";
import { authAdmin } from "../lotterydb/admin";
import { createUser, getUsers } from "../lotterydb/usersService";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [authValid, setAuthValid] = useState(false)
    

    const switchScreen = (id) => {
        setAuthValid(id)
    }

    return (
        <>
            {authValid ? <Admin admin={ authValid} /> : <AdminAuth validator={switchScreen} />}
        </>
    )
}

function AdminAuth(props) {
    const [authToken, setAuthToken] = useState({
        token: ''
    });
    
    const { token } = authToken

    const submit = (e) => {
        e.preventDefault()
        if (token === "") {
            alert('No role or token')
            return
        }
        const tokenData = {
            token: token
        }
        handleAuthing(tokenData)
    }

    async function handleAuthing(data) {
        await authAdmin(data).then((info) => {
            alert("Login Success")
            props.validator(info.data.id)
        }).catch((err) => {
            console.log(err);
            alert(err.response.data.message)
        })
    }

    const handleInput = (e) => {
        setAuthToken((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="authSection-Admin">
            <div className="wrapAuth">
                <h1>Welcome Back</h1>
                <p>Enter your admin token</p>
                <form onSubmit={submit}>
                    <input onChange={handleInput} type="password" name="token" id="token" className="input adminInput" placeholder="Admin Token" />
                    <button onSubmit={submit} type="submit">Login to Dashboard</button>
                </form>
            </div>
        </div>
    )   
}

function Admin(props){
    const [users, setUsers] = useState([])
    const nav = useNavigate()
    let winnerCount = 0
    useEffect(() => {
        getUsersm()
    }, [])
    const handleCreate = () => {
        nav('/admin/createuser')
    }
    const getUsersm = async () => {
        await getUsers().then((data) => {
            setUsers(data.userList.map((user) => {

                if (user.winner === true) {
                    winnerCount = winnerCount + 1
                }
                return (
                    <div className="UserTags">
                        <div className="tagWrap">
                            <p className="Name">{user.name}</p>
                            <p className="Phone n-mobile-d">{user.phoneNumber}</p>
                            <p className="User n-mobile-d">{user._id}</p>
                            <p className="WinId">{user.lotteryId}</p>
                            <button className="buttonAdmin n-mobile-d">Add winner</button>
                        </div>
                    </div>
                )
            }))
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <div className="adminSection">
                <div className="top">
                    <div className="topInfo">
                        <div className="mainText">
                            <h1>Admin Dashboard</h1>
                            <p>{ props.admin}</p>
                        </div>
                        <div className="usersTotal">
                            <div className="boxUser">
                                <h1>{winnerCount}</h1>
                                <p>Winners</p>
                            </div>
                            <div className="boxUser">
                                <h1>{ users.length}</h1>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="topButtons">
                        <button onClick={handleCreate}>Create User</button>
                    </div>
                </div>

                <div className="buttom">
                    <div className="topBott">
                        <div className="MainText">
                            <h1>Your Users</h1>
                            <p>Select a user to expand</p>
                        </div>
                    </div>

                    <div className="listSection">
                        <div className="topTags">
                            <div className="tagWrap">
                                <p className="Name">Name</p>
                                <p className="Phone n-mobile-d">Phone Number</p>
                                <p className="User n-mobile-d">UserId</p>
                                <p className="WinId">Winning Id</p>
                                <p className="Winner n-mobile-d">Winner List</p>
                            </div>
                        </div>

                        {users}
                    </div>
                </div>
            </div>
        </>
    )
}

export function CreateUser() {
    const [userData, setUserData] = useState({
        name: '',
        phoneNumber: '',
        lotteryId: "",
    });
    const nav = useNavigate()

    const { name, phoneNumber, lotteryId } = userData

    const submit = (e) => {
        e.preventDefault()
        if (name && phoneNumber && lotteryId) {
            console.log(userData);
            handleAuthing(name, phoneNumber, lotteryId)
            return
        }
        
        alert('Fill in all fields')

    }

    async function handleAuthing(name, phoneNumber, lotteryId) {
        await createUser(name, phoneNumber, lotteryId).then((info) => {
            alert("Created user")
            nav('/admin')
        }).catch((err) => {
            console.log(err);
            alert('the Lottery Id or Phone Number is already used')
        })
    }

    const handleInput = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="authSection-Admin">
            <div className="wrapAuth">
                <h1>Create New User</h1>
                <p></p>
                <form onSubmit={submit}>
                    <input onChange={handleInput} type="text" name="name" id="name" className="input adminInput" placeholder="Name" />
                    <input onChange={handleInput} type="tel" name="phoneNumber" id="phoneNumber" className="input adminInput" placeholder="PhoneNumber" />
                    <input onChange={handleInput} type="text" name="lotteryId" id="lotteryId" className="input adminInput" placeholder="Lottery Id" />
                    <button onSubmit={submit} type="submit">Create User</button>
                </form>
            </div>
        </div>
    )
}