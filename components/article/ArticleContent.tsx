import React from 'react';
import Paper from '@mui/material/Paper';

interface ArticleContentProps {
  children: React.ReactNode;
}

export const ArticleContent: React.FunctionComponent<ArticleContentProps> = ({
  children,
}: ArticleContentProps) => {

  return (
    <Paper
      elevation={0}
      sx={{
        marginTop: 2,
        marginBottom: 2
      }}
    >
      {children}
    </Paper>
  );
};
