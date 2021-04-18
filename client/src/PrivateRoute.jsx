import currentContext from './context';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN } from './actions/actionTypes';
import { useContext } from 'react';

export default function PrivateRoute({ children, ...rest }) {
    let auth = useContext(currentContext);
    return (
        <Route {...rest} render={() =>
            auth.userStatus === LOGIN ? (children) : (<Redirect to="/" />)
        }
        />
    );
}