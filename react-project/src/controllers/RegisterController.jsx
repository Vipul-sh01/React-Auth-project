
export const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  export const checkIfUserExists = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find((user) => user.email === email);
  };
  
  export const registerUser = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password});
    localStorage.setItem('users', JSON.stringify(users));
  };
  