import { render } from '@testing-library/react';
import { ContentContainer } from 'components/layout/ContentContainer';
import Header from 'components/layout/Header';
import { MainLayout } from 'components/layout/MainLayout';

describe('Snapshots for layout components', () => {
  it('renders contentcontainer', () => {
    const { container } = render(<ContentContainer >Hi</ContentContainer>);
    expect(container).toMatchSnapshot();
  });

  it('renders header', () => {
    const { container } = render(<Header  />);
    expect(container).toMatchSnapshot();
  });

  it('renders article main layout', () => {
    const { container } = render(<MainLayout>Hi</MainLayout>);
    expect(container).toMatchSnapshot();
  });
});