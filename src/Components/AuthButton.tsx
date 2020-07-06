import React from 'react';

// declare var window: any;
declare var gapi: any;

interface Props { }

interface State {
    user: any;
}

class AuthButton extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            user: false
        }

    }

    componentDidMount() {
        const self = this;

        gapi.load('auth2', function () {
            /* Ready. Make a call to gapi.auth2.init or some other API */
            gapi.auth2.init({
                client_id: "781208478456-pbc3vnnuee1lbf101ntm4u3ehphb0qgn.apps.googleusercontent.com"
            })
                .then(function () {
                    console.log("google auth lib loaded");
                    self.checkLogin(); // this is undefined
                })
                .then(function () {
                    console.log("google auth lib error");
                })
        });
    }

    singIn = () => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.signIn({
            scope: "profile email"
        }).then((user: any) => {
            console.log("auth ok", user)
            if (user.wc) {
                console.log("user.Ea", user.Ea);
                console.log("user.Qt.nW", user.Qt.nW);
                this.setState({ user: user.Qt.nW })
            }
        },
            console.log("auth error"))
    }

    signOut = () => {
        const self = this;

        const GoogleAuth = gapi.auth2.getAuthInstance()
        GoogleAuth.signOut().then(function (this: any) {
            console.log('User signed out.');
            self.setState({ user: false })
        })
    }

    checkLogin = () => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        const user = GoogleAuth.currentUser.get();
        console.log("user", user);

        if (user.wc) {
            console.log("user.Ea", user.Ea);
            console.log("user.Qt.nW", user.Qt.nW);
            this.setState({ user: user.Qt.nW })
        } else {
            this.setState({ user: false })
        }
    }

    renderButtons() {
        if (this.state.user) {
            return (
                <div>
                    <div>{this.state.user}</div>
                    <button onClick={this.signOut}>Sign out</button>
                </div>
            )
        } else {
            return (
                <button onClick={this.singIn}>Log in</button>
            )
        }

    }

    render() {
        console.log("this.state.user", this.state.user);

        return (
            <div>
                {this.renderButtons()}
            </div>
        )
    }


}


export default AuthButton;