import { act, render, RenderResult } from '@testing-library/react';
import Index from '../pages/index';

describe('App', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    ) as Partial<typeof fetch> as typeof fetch;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', async () => {
    let baseElement: RenderResult;
    await act(async () => {
      baseElement = render(<Index />);
    });

    expect(baseElement).toBeTruthy();
  });
});
