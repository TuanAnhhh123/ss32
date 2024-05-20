import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState<{ email: string } | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedData({ email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedData && <div>{JSON.stringify(submittedData)}</div>}
    </div>
  );
};

export default EmailForm;
