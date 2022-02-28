import type { NextPage, GetServerSideProps } from 'next'
import React from 'react';
import Head from 'next/head'
import { MainLayout } from 'components/layout/MainLayout';
import { ArticlesService } from 'services/ArticlesService';
import { ResponsiveImage } from 'components/article/ResponsiveImage';
import { ArticleHeader } from 'components/article/ArticleHeader';
import { ArticleContent } from 'components/article/ArticleContent';
import { SanitizerService } from 'services/SanitizerService';

interface MainPageProps {
  article: {
    heading: any,
    author: any,
    date: any,
    mainImage: any,
    body: any
  };
}

const Home: NextPage<MainPageProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>Article</title>
        <meta name="description" content="Article reader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ArticleHeader
          title={article.heading.value}
          author={article.author.value}
          date={article.date.value}
        />
        <ResponsiveImage imageUrl={article.mainImage.value.leadImage.renditions.lead.url} />
        <ArticleContent>
          {
            article.body.values.map(
              (line, index) =>
                <span
                  key={index} dangerouslySetInnerHTML={{ __html: SanitizerService.sanitizeString(line) }}>
                </span>
            )
          }
        </ArticleContent>
      </MainLayout>
    </>
  )
}

export async function getServerSideProps() {
  const response = await ArticlesService.getArticle();
  const article = JSON.parse(JSON.stringify(response));
  return { props: { article } }
}

export default Home
