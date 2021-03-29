import { render, screen } from '@testing-library/react';

describe('IdCard', () => {
  let IdCard;

  beforeAll(async () => {
    const { default: Component } = await import('./components/IdCard');
    IdCard = Component;
  });

  test('should render component', () => {
    render(
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    );
    const linkElement = screen.getByText(/Doe/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Greetings', () => {
  let Greetings;

  beforeAll(async () => {
    const { default: Component } = await import('./components/Greetings');
    Greetings = Component;
  });

  test('should render component', () => {
    render(<Greetings lang="de">Ludwig</Greetings>);
    const linkElement = screen.getByText(/Ludwig/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Random', () => {
  let Random;

  beforeAll(async () => {
    const { default: Component } = await import('./components/Random');
    Random = Component;
  });

  test('should render component', () => {
    render(<Random min={1} max={6} />);
  });

  test('should display random number', () => {
    render(<Random min={5} max={6} />);
    const numberElement = screen.getByText(/[5-6]/i);
    expect(numberElement).toBeInTheDocument();
  });
});
