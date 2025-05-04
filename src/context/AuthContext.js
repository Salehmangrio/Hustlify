export const handleRegisterSubmit = (values, setLoading, navigate) => {
    let users = JSON.parse(localStorage.getItem('users')) || [
        {
            username: 'Saleh',
            email: 'saleh@gmail.com',
            password: '123456',
        }
    ];

    const userExists = users.some(
        (user) =>
            user?.email?.toLowerCase() === values?.email?.toLowerCase() ||
            user?.username?.toLowerCase() === values?.username?.toLowerCase()
    );

    if (userExists) {
        alert('User with this email or username already exists!');
        localStorage.setItem('isLogged',false)
        return;
    }
    const newUser = {
        username: values.username,
        email: values.email,
        password: values.password
    };
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users));
    setLoading(true);
    setTimeout(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        console.log(storedUsers);
        alert('User registered successfully!');
        localStorage.setItem('isLogged',true)
        setLoading(false);
        navigate('/')
    }, 1500);
};

export const handleLoginSubmit = (values, setLoading, navigate) => {
    setLoading(true);
    const username = values.username;
    const password = values.password;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const exists = users.filter(
        (user) =>
            user.username.toLowerCase() === username.toLowerCase() &&
            user.password === password
    );

    setTimeout(() => {
        if (exists.length > 0) {
            localStorage.setItem('isLogged', true);
            console.log("You logged in");
            navigate('/')
        } else {
            localStorage.setItem('isLogged', false);
            console.log("Enter correct username and password");
        }
        setLoading(false);

    }, 1000)
};
