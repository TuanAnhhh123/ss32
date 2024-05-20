import React, { useState } from 'react';

const ColorForm: React.FC = () => {
  const [color, setColor] = useState('');
  const [submittedColor, setSubmittedColor] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Màu sắc:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Nhập mã màu sắc (ví dụ: #e14141)"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submittedColor && (
        <div>
          <p>Color: {submittedColor}</p>
          <div style={{ width: '100px', height: '100px', backgroundColor: submittedColor }}></div>
        </div>
      )}
    </div>
  );
};

export default ColorForm;
