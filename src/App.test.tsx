import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {json_data} from "./json_data";

test('renders learn react link', () => {
  let words: string[] = json_data.words;
  let word = words[Math.floor(Math.random()*words.length)];
  render(<App word={word}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
