import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';



import TopBar from './components/TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));


const Container = (props) => {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });
  
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  // const handleSidebarClose = () => {
  //   setOpenSidebar(false);
  // };

  // const shouldOpenSidebar = isDesktop ? true : openSidebar;


  return (
    <div className={clsx({
      [classes.root]: true,
      [classes.shiftContent]: isDesktop
    })}>
      <TopBar onSidebarOpen={handleSidebarOpen} />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}

export default Container;