import Head from "next/head"
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core';
import useStyles from "../utils/styles";
import NextLink from 'next/link'

const Layout = ({ title, children}) => {
    const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Fred Shop ` : 'Fred Shop'}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Fred Shop</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography variant="body2">&copy; Fred Shop 2020</Typography>
      </footer>
    </div>
  );
}

export default Layout