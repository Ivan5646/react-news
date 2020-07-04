import React from 'react';

// declare var window: any;
declare var gapi: any;

class AuthButton extends React.Component {

    componentDidMount() {    
        console.log("check mount");

        gapi.load('auth2', function () {
            /* Ready. Make a call to gapi.auth2.init or some other API */
            gapi.auth2.init({
                client_id: "781208478456-pbc3vnnuee1lbf101ntm4u3ehphb0qgn.apps.googleusercontent.com"
            })
                .then(
                    console.log("google auth lib loaded")
                )
                .then(
                    console.log("google auth lib error")
                )
        });
    }

    singIn() {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.signIn();
    }

    render() {
        console.log("auth id", process.env.REACT_APP_GOOGLE_CLIENT_ID);
        return (
            <button onClick={this.singIn}>Log in</button>
            // <div>hhhhhhhhhhhhh</div>
        )
    }


}


export default AuthButton;