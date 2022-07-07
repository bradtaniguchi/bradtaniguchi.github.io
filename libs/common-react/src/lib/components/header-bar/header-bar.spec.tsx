import { render } from '@testing-library/react';

import HeaderBar from './header-bar';

describe('HeaderBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderBar />);
    expect(baseElement).toBeTruthy();
  });
});
