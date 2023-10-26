import React, { useState } from 'react';

interface CoffeeFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    type: string;
  }) => void;
}

const CoffeeForm: React.FC<CoffeeFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0.0);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('robusta');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, imageUrl, price, type });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="robusta">Robusta</option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
        <div>
          <label htmlFor="imageUrl">Upload image</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button>Discard</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CoffeeForm;
