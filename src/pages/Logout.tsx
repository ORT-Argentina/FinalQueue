import React, { Component, memo } from 'react';
import Background from '../components/Background';
import Loading from '../components/Loading';
import deviceStorage from '../services/deviceStorage';

class Logout extends Component {
    
    constructor(props) {

        super(props);
        
        this.state = {
            jwt: '',
            user: '',
            loading: true
        };

        this.deleteJWT = deviceStorage.deleteJWT.bind(this);
        this.deleteUser = deviceStorage.deleteUser.bind(this);

        this.deleteJWT();
        this.deleteUser();
    }

    render() {
        return (
            <Background>
                <Loading size={'large'} />
            </Background>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default memo(Logout);