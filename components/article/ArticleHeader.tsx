import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { DateTimeService } from 'services/DateTimeService';

interface ArticleHeaderProps {
  title: string,
  author: string,
  date: string
}

export const ArticleHeader: React.FunctionComponent<ArticleHeaderProps> = ({
  title,
  author,
  date
}: ArticleHeaderProps) => {

  return (
    <>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {author.charAt(0)}
          </Avatar>
        }
        title={`Author: ${author}`}
        subheader={DateTimeService.getDateFromString(date)}
      />
    </>
  );
};
