import './App.css';
import Header from './components/header'
import Sidebar from "./components/sidebar";
import { useState } from "react";
import FilesView from './components/filesView/FilesView';
import SideIcons from "./components/sideIcons";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState()
  
  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="App">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />

          <div className="app_main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app_login">
          <img
            src="https://img.icons8.com/external-wanicon-two-tone-wanicon/100/000000/external-cloud-cloud-technology-wanicon-two-tone-wanicon.png"
            alt="Cloud Space"
          />
          <button onClick={handleLogin}>Log in to Cloud Space</button>
        </div>
      )}
    </div>
  );
}

export default App;
