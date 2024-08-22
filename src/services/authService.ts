export interface User {
    email: string;
    password: string;
}

export const signUp = (user: User): boolean => {
    const existingUser = localStorage.getItem(user.email);
    if (existingUser) {
        return false; // User already exists
    }
    localStorage.setItem(user.email, JSON.stringify(user));
    return true;
};

export const signIn = (email: string, password: string): boolean => {
    const user = localStorage.getItem(email);
    if (!user) {
        return false; // User not found
    }
    const parsedUser: User = JSON.parse(user);
    return parsedUser.password === password;
};

export const logout = () => {
    localStorage.removeItem('loggedInUser');
};

export const setLoggedInUser = (email: string) => {
    localStorage.setItem('loggedInUser', email);
};

export const getLoggedInUser = (): string | null => {
    return localStorage.getItem('loggedInUser');
};
