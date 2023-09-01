const Logout = ({children}) => {
    localStorage.removeItem('loggedInUser');
    return children;

}

export default Logout