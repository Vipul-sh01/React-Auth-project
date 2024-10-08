export const validateEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/; 
    return emailPattern.test(email); 
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || []; 
    return users.find((user) => user.email === email && user.password === password);
  };
  
  
  export const setUserSession = (user) => {
    localStorage.setItem('isLoggedIn', true); 
    localStorage.setItem('user', JSON.stringify(user)); 
  };
  