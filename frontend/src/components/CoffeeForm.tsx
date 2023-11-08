import React, { useState } from 'react';
import '../styles/CoffeForm.css';
interface CoffeeFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    type: string;
  }) => void;
  onDiscard: () => void;
}

const CoffeeForm: React.FC<CoffeeFormProps> = ({ onSubmit, onDiscard }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, imageUrl, price: parseFloat(price), type }); //* parse to check her optimal?
  };

  return (
    <div className="form-container">
      <div className="top-form">
        <p className="title-form">CREATE NEW</p>
        <img
          className="x-form"
          src="https://mvstcups.s3.eu-north-1.amazonaws.com/x.png"
          alt="X"
          onClick={onDiscard}
        ></img>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="name-price-row">
          <div className="name-box">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              placeholder="Name your coffee here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="price-group">
            <label htmlFor="price">Price</label>
            <div className="price-box">
              <span className="euro-symbol">€</span>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                step="0.01"
                min="0.01"
                max="999.99"
                placeholder="0.00"
                required
              />
            </div>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="type">Type</label>
          <div className="type-selection">
            <input
              type="radio"
              id="arabic"
              name="coffeeType"
              value="arabic"
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="arabic"> Arabic</label>

            <input
              type="radio"
              id="robusta"
              name="coffeeType"
              value="robusta"
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="robusta"> Robusta</label>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="imageUrl">Upload image</label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Paste image URL here"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={onDiscard}>
            Discard
          </button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CoffeeForm;
