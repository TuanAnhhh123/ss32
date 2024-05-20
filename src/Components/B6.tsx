import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (user.password !== confirmPassword) {
      setError('Mật khẩu không khớp!');
      return;
    }
    console.log(user);
    setError('');
  };

  return (
    <div>
      <h1>Thêm mới tài khoản</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ và tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default SignupForm;
