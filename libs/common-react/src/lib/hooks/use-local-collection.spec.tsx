import { act, render, screen, waitFor } from '@testing-library/react';
import { CollectionFilter, useLocalCollection } from './use-local-collection';
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
    const { elements } = useLocalCollection({
      elements: props.initialElements,
      filters: props.initialFilters,
      search: props.initialSearch,
      searchOptions: props.searchOptions,
      sortBy: props.initialSortBy,
      sortDir: props.initialSortDir,
    });
    return (
      <div data-testid="elements">{JSON.stringify(elements, null, 2)}</div>
    );
  }

  /**
   * Helper function to test against the expected elements rendered in the
   * UseLocalCollectionExample component.
   */
  const expectElements = (expected: Array<Element>) =>
    expect(screen.getByTestId('elements').textContent).toEqual(
      JSON.stringify(expected, null, 2)
    );

  test('renders nothing', async () => {
    await act(async () => {
      render(<UseLocalCollectionExample initialElements={[]} />);
    });

    await waitFor(() => {
      expectElements([]);
    });
  });

  test('renders initial elements as-is if given', async () => {
    await act(async () => {
      render(<UseLocalCollectionExample initialElements={initialElements} />);
    });

    await waitFor(() => {
      expectElements(initialElements);
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
      expectElements([firstElement]);
    });
  });

  test.todo('sort asc works');
  test.todo('sort dsc works');
  test.todo('search works');
});
