import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'


function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {/* If user is signed in, display the chatroom, otherwise display sign in page */}
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
