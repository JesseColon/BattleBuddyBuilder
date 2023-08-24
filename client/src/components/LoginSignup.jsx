import { useState } from 'react';

function LoginSignup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        //profilePicture: ''
    });

    const HandleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const HandleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('something went wrong');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

        return (
            <div className="login-signup-container">
                <form onSubmit={HandleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={formData.username} 
                        onChange={HandleInputChange}
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={HandleInputChange}
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={HandleInputChange}
                        required
                    />
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
    }

export default LoginSignup;