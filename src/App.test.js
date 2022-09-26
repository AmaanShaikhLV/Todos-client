import { render, screen } from '@testing-library/react';
import App from './App';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';


test('renders main', () => {
  render(<App />);
  render(<InputTodo/>);
  render(<ListTodo/>);
});
