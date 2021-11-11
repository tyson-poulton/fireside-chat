import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'


function SignIn() {
    function signInWithGoogle() {
        // Displays a popup prompting the user to sign in with Google
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            height: '100vh', 
            alignItems: 'center'
            }}>
            {/* Signs user in and displays the chatroom */}
            <Button variant="contained" style={{ 
                padding: '30px', 
                fontSize: '20px', 
                borderRadius: '0', 
                fontWeight: '600', 
                backgroundColor: '#DDD'
                }} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn