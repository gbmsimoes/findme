
import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/views/LoginForm';
import SignupForm from './components/views/SignupForm';
import EmployeesList from './components/views/EmployeesList';
import EmployeeCreate from './components/views/EmployeeCreate';


const RouterComponent = () => {
    return (
        <Router >
            <Scene key="root" hideNavBar>
                <Scene key="auth" >
                    <Scene
                        key="loginform"
                        component={LoginForm}
                        hideNavBar={true}
                        title="Login"
                        panHandlers = { null }
                        initial // neste caso não é obrigatório o "initial" pq esta scene está em primeiro (quer dizer q é a inicial)
                    />
                    <Scene
                        key="signupForm"
                        component={SignupForm}
                        hideNavBar={true}
                        title="Signup"
                        panHandlers = { null }
                    />
                    <Scene
                        key="forgotPasswordForm"
                        component={LoginForm}
                        hideNavBar={true}
                        title="Forgot Password"
                        panHandlers = { null }
                    />

                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate() }}
                        component={EmployeesList}
                        title="Employee List"
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />

                </Scene>
            </Scene>



        </Router>

    );
};

const styles = {
    navBarStyle: {
        backgroundColor: 'rgba(0,0,0,0)' ,
        borderBottomColor:'rgba(0,0,0,0)'
    },
    rightButtonStyle: {
        color: '#ffffff'

    }
};


export default RouterComponent;