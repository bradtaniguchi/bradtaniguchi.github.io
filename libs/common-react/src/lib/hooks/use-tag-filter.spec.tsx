import { act, render, screen, waitFor } from '@testing-library/react';
import { useTagFilter } from './use-tag-filter';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
import { useEffect } from 'react';

describe('useTagFilter', () => {
  type Element = { tags: string[] };

  let firstElement: Element;
  let secondElement: Element;
  let thirdElement: Element;

  beforeEach(() => {
    firstElement = {
      tags: ['cat'],
    };
    secondElement = {
      tags: ['bat'],
    };
    thirdElement = {
      tags: ['cat', 'dog'],
    };
  });

  function UseTagFilterExample(props: {
    elements: Parameters<typeof useTagFilter<Element>>[0]['elements'];
    initiallySelectedTags?: string[];
  }) {
    const { elements, initiallySelectedTags } = props;
    const { selectableTags, selectedTags, toggleTag, setSelectedTags } =
      useTagFilter({
        elements,
      });

    // effects
    useEffect(() => {
      if (initiallySelectedTags && initiallySelectedTags.length > 0) {
        setSelectedTags(initiallySelectedTags);
      }
    }, [initiallySelectedTags, setSelectedTags]);

    // callbacks
    const handleToggleTagClick = (tag: string) => () => {
      toggleTag(tag);
    };

    return (
      <div>
        <div data-testid="elements">
          {JSON.stringify(props.elements, null, 2)}
        </div>
        <div data-testid="selectableTags">
          {JSON.stringify(selectableTags, null, 2)}
        </div>
        <div data-testid="selectedTags">
          {JSON.stringify(selectedTags, null, 2)}
        </div>
        {selectableTags.map((tag) => (
          <button
            key={tag}
            data-testid={`${tag}-btn`}
            onClick={handleToggleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }

  const expectResults = (params: {
    expectedSelectableTags?: string[];
    expectedSelectedTags?: string[];
  }) => {
    const { expectedSelectableTags, expectedSelectedTags } = params;

    if (expectedSelectableTags) {
      expect(screen.getByTestId('selectableTags').textContent).toEqual(
        JSON.stringify(expectedSelectableTags, null, 2)
      );
      expectedSelectableTags.forEach((tag) => {
        expect(screen.getAllByTestId(`${tag}-btn`)).toHaveLength(1);
      });
    }
    if (expectedSelectedTags) {
      expect(screen.getByTestId('selectedTags').textContent).toEqual(
        JSON.stringify(expectedSelectedTags, null, 2)
      );
    }
  };

  const clickTag = (tag: string) => {
    screen.getByTestId(`${tag}-btn`).click();
  };

  test('renders nothing', async () => {
    await act(async () => {
      render(<UseTagFilterExample elements={[]} />);
    });

    await waitFor(() => {
      expectResults({
        expectedSelectableTags: [],
        expectedSelectedTags: [],
      });
    });
  });

  test('handles single tag rendering and selection', async () => {
    render(<UseTagFilterExample elements={[firstElement]} />);

    expectResults({
      expectedSelectableTags: ['cat'],
      expectedSelectedTags: [],
    });

    clickTag('cat');

    await waitFor(() => {
      expectResults({
        expectedSelectableTags: ['cat'],
        expectedSelectedTags: ['cat'],
      });
    });

    clickTag('cat');

    await waitFor(() => {
      expectResults({
        expectedSelectableTags: ['cat'],
        expectedSelectedTags: [],
      });
    });
  });

  test('handles multi-tag rendering and selection', async () => {
    render(
      <UseTagFilterExample
        elements={[firstElement, secondElement, thirdElement]}
      />
    );

    expectResults({
      expectedSelectableTags: ['bat', 'cat', 'dog'],
      expectedSelectedTags: [],
    });

    act(() => {
      clickTag('dog');
    });
    act(() => {
      clickTag('cat');
    });

    await waitFor(() => {
      expectResults({
        expectedSelectableTags: ['bat', 'cat', 'dog'],
        expectedSelectedTags: ['dog', 'cat'],
      });
    });
  });
});
