import { act, render, screen, waitFor } from '@testing-library/react';
import { useLocalCollection } from './use-local-collection';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

describe('useLocalCollection', () => {
  type Element = { name: string; age: number };

  let initialElements: Array<Element>;
  let firstElement: Element;
  let secondElement: Element;
  let thirdElement: Element;

  beforeEach(() => {
    firstElement = {
      name: 'Brad',
      age: 100,
    };
    secondElement = {
      name: 'Ada',
      age: 25,
    };
    thirdElement = {
      name: 'Claude',
      age: 25,
    };

    initialElements = [firstElement, secondElement, thirdElement];
  });

  function UseLocalCollectionExample(props: {
    initialElements: Parameters<
      typeof useLocalCollection<Element>
    >[0]['elements'];
    initialFilters?: Parameters<
      typeof useLocalCollection<Element>
    >[0]['filters'];
    initialSearch?: Parameters<typeof useLocalCollection<Element>>[0]['search'];
    searchOptions?: Parameters<
      typeof useLocalCollection<Element>
    >[0]['searchOptions'];
    initialSortBy?: Parameters<typeof useLocalCollection<Element>>[0]['sortBy'];
    initialSortDir?: Parameters<
      typeof useLocalCollection<Element>
    >[0]['sortDir'];
  }) {
    const { results, numOfResults, diffResults } = useLocalCollection({
      elements: props.initialElements,
      filters: props.initialFilters,
      search: props.initialSearch,
      searchOptions: props.searchOptions,
      sortBy: props.initialSortBy,
      sortDir: props.initialSortDir,
    });
    return (
      <div>
        <div data-testid="results">{JSON.stringify(results, null, 2)}</div>
        <div data-testid="numOfResults">{numOfResults}</div>
        <div data-testid="diffResults">{diffResults}</div>
      </div>
    );
  }

  /**
   * Helper function to test against the expected elements rendered in the
   * UseLocalCollectionExample component.
   */
  const expectResults = (
    expected: Array<Element>,
    params?: {
      numOfResults?: number;
      diffResults?: number;
    }
  ) => {
    expect(screen.getByTestId('results').textContent).toEqual(
      JSON.stringify(expected, null, 2)
    );

    if (params?.numOfResults) {
      expect(screen.getByTestId('numOfResults')).toHaveTextContent(
        '' + params.numOfResults
      );
    }

    if (params?.diffResults) {
      expect(screen.getByTestId('diffResults')).toHaveTextContent(
        '' + params.diffResults
      );
    }
  };

  test('renders nothing', async () => {
    await act(async () => {
      render(<UseLocalCollectionExample initialElements={[]} />);
    });

    await waitFor(() => {
      expectResults([]);
    });
  });

  test('renders initial elements as-is if given', async () => {
    await act(async () => {
      render(<UseLocalCollectionExample initialElements={initialElements} />);
    });

    await waitFor(() => {
      expectResults(initialElements);
    });
  });
  test('filters work', async () => {
    await act(async () => {
      render(
        <UseLocalCollectionExample
          initialElements={initialElements}
          initialFilters={[
            {
              key: 'name',
              value: 'Brad',
            },
          ]}
        />
      );
    });

    await waitFor(() => {
      expectResults([firstElement], {
        diffResults: 2,
        numOfResults: 1,
      });
    });
  });

  test('sort asc works', async () => {
    await act(async () => {
      render(
        <UseLocalCollectionExample
          initialElements={initialElements}
          initialSortBy={'name'}
          initialSortDir={'asc'}
        />
      );
    });

    await waitFor(() => {
      expectResults([secondElement, firstElement, thirdElement]);
    });
  });

  test('sort dsc works', async () => {
    await act(async () => {
      render(
        <UseLocalCollectionExample
          initialElements={initialElements}
          initialSortBy={'name'}
          initialSortDir={'dsc'}
        />
      );
    });

    await waitFor(() => {
      expectResults([thirdElement, firstElement, secondElement]);
    });
  });

  test('search works', async () => {
    await act(async () => {
      render(
        <UseLocalCollectionExample
          initialElements={initialElements}
          initialSearch={'Ada'}
          searchOptions={{
            keys: ['name'],
            // low threshold for testing
            distance: 5,
          }}
        />
      );
    });

    await waitFor(() => {
      expectResults([secondElement]);
    });
  });

  test('combining search+filtering+sort works', async () => {
    await act(async () => {
      render(
        <UseLocalCollectionExample
          initialElements={[...initialElements, { name: 'Ada', age: 100 }]}
          initialFilters={[
            {
              key: 'age',
              value: 25,
            },
          ]}
          initialSearch={'Ada'}
          searchOptions={{
            keys: ['name'],
            // low threshold for testing
            distance: 5,
          }}
          initialSortBy={'name'}
          initialSortDir={'dsc'}
        />
      );
    });

    await waitFor(() => {
      expectResults([secondElement]);
    });
  });
});
