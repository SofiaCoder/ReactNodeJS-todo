import { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './scss/friendPage.scss'

const FriendPage = () => {
    const [friendId, setFriendId] = useState()
    const [showFriend, setShowFriend] = useState('')
    const [showFriends, setShowFriends] = useState([])
    const [friends, setFriends] = useState([])
    const [friendTodos, setFriendTodos] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            const res = await fetch('http://localhost:5050/friends', {
                credentials: 'include'
            })
            const data = await res.json()
            setFriends(data)
        } 
        getAllUsers()
    }, [])

    useEffect(() => {
        const displayFriends = async () => {
            const res = await fetch('http://localhost:5050/friends/display', {
                credentials: 'include'
            })
            const data = await res.json()
            setShowFriends(data)
        }
        displayFriends()
    }, [])
    
    const addFriend = async () => {
        const friendID = friendId
        
        const res = await fetch('http://localhost:5050/friends', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({friendID}),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    const getFriendsTodos = async (friendId) => {
        const friendID = friendId

        const res = await fetch('http://localhost:5050/friends/todos', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({friendID}),
            headers: {
                'content-type': 'application/json'
            }
        })
        if(res.status === 500) {
            setFriendTodos([{id: 0, task: 'This user has no todos'}])
            return;
        }
        const data = await res.json()
        setFriendTodos(data)
    }
    

    const friendsChosen = (friend) => {
        setShowFriend(friend.username)
        setFriendId(friend.id)
    }

    return (
        <div className='friendPage'>
            
                <p>Search for friends:</p>
            {friends && 
                <ReactSearchAutocomplete 
                    items={friends}
                    fuseOptions={{keys: ['username']}}
                    resultStringKeyName="username"
                    onSelect={friendsChosen}
                />}
            <p>{showFriend}</p>
            {showFriend &&
                <button onClick={addFriend}>Add this friend</button>}
            <ul>
                {showFriends?.map((friend) => {
                    return (<div key={friend.id}>
                        <li>{friend.username}</li>
                        <button onClick={() => {getFriendsTodos(friend.id)}}>See todos</button>
                    </div>)
                })}
            </ul>
            <div className='friendsTodos'>
            
                {friendTodos &&
                    friendTodos.map((todo) => {
                        return (<p key={todo.id}>{todo.id}) {todo.task} - {todo.text}</p>)
                    })
                }
            
            </div>
        </div>
    )
}

export { FriendPage }