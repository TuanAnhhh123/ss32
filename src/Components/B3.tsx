import React, { useState } from 'react';

const BirthdateForm: React.FC = () => {
  const [birthdate, setBirthdate] = useState('');
  const [submittedBirthdate, setSubmittedBirthdate] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedBirthdate(birthdate);
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
    return dateObj.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthdate">Ngày sinh:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedBirthdate && (
        <div>
          <p>Ngày sinh: {submittedBirthdate}</p>
          <p>{formatDate(submittedBirthdate)}</p>
        </div>
      )}
    </div>
  );
};

export default BirthdateForm;
