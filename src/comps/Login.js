import React, { Component } from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { BrowserRouter, Link } from "react-router-dom";
import firebase from 'firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import Contenido from '../comps/Contenido';
import "./App.css"
class Login extends Component {

    state = { isSignedIn: false }

    uiConfig = {

        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],

        callbacks: {

            signInSuccess: () => false

        }

    }

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })

    }

    render() {


        return (


            <div className="Login">

                {this.state.isSignedIn ? (

                    <span>

                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <a className="navbar-brand">
                                Pinterest
                            </a>
                            <a className="navbar-brand">
                                <img
                                    alt="profile picture"
                                    src={firebase.auth().currentUser.photoURL}
                                    class="rounded-circle"
                                />
                            </a>
                            <a className="navbar-brand">

                                {firebase.auth().currentUser.displayName}
                            </a>

                            <div className="navbar-nav mr-auto">

                                <li className="nav-item">
                                    <BrowserRouter>
                                        <Link onClick={() => firebase.auth().signOut()} className="nav-link">
                                            Salir
                                        </Link>

                                    </BrowserRouter>

                                </li>

                            </div>
                           

                        </nav>

                        <Contenido />


                    </span>

                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}

                    />

                )}

            </div>


        )


    }

}

export default Login
