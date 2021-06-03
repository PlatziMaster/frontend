import React from 'react';
import '../styles/components/Hero.styl';

export default function Hero({ title, name, description }) {
  return (
    <div className="Hero">
      <div className="Hero__name">{name}</div>
      <div className="Hero__title">{title}</div>
      <div className="Hero__description">{description}</div>
    </div>
  );
}
