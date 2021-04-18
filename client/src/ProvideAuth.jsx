import currentContext from './context';
import { useSelector } from 'react-redux';
export default function ProvideAuth({ children }) {
    const auth = useSelector(state => state);
    return (
        <currentContext.Provider value={auth}>
            {children}
        </currentContext.Provider>
    );
}