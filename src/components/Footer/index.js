import Grid from "@material-ui/core/Grid";
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";

const Footer = () => (
  <Grid
    container
    spacing={3}
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid item xs={4} />
    <Grid item xs={1}>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Facebook fontSize="large" color="primary" />
      </a>
    </Grid>
    <Grid item xs={1}>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <Instagram fontSize="large" color="primary" />
      </a>
    </Grid>
    <Grid item xs={1}>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <Twitter fontSize="large" color="primary" />
      </a>
    </Grid>
    <Grid item xs={1}>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <LinkedIn fontSize="large" color="primary" />
      </a>
    </Grid>
    <Grid item xs={4} />
  </Grid>
);

export default Footer;
