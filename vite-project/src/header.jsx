import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/todos">TODOS/POSTS</Link>
                    </li>
                    <li>
                        <Link to="/users">USERS</Link>
                    </li>
                    <li>
                        <Link to="/photos">PHOTOS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setTodos(data));
    }, []);

    return (
        <div>
            <h2>TODOS/POSTS</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>USERS</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

function Photos() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => setPhotos(data));
    }, []);

    return (
        <div>
            <h2>PHOTOS</h2>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/todos" component={Todos} />
                <Route path="/users" component={Users} />
                <Route path="/photos" component={Photos} />
            </div>
        </Router>
    );
}

export default App;