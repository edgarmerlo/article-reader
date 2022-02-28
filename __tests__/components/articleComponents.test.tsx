import { render } from '@testing-library/react';
import { ArticleContent } from 'components/article/ArticleContent';
import { ArticleHeader } from 'components/article/ArticleHeader';
import { ResponsiveImage } from 'components/article/ResponsiveImage';

describe('Snapshots for article components', () => {
  it('renders articlecontent', () => {
    const { container } = render(<ArticleContent >Hi</ArticleContent>);
    expect(container).toMatchSnapshot();
  });

  it('renders article header', () => {
    const { container } = render(<ArticleHeader author='Test' title='test' date='2020-12-09' />);
    expect(container).toMatchSnapshot();
  });

  it('renders article header', () => {
    const { container } = render(<ResponsiveImage imageUrl='/test' />);
    expect(container).toMatchSnapshot();
  });
});