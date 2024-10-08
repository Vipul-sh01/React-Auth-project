export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  export const isLoggedIn = () => {
    return !!localStorage.getItem('isLoggedIn');
  };
  
  export const logoutUser = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };
  