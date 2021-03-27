import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const MobHeaderNav = (props) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="flex-start"
    className={"Header"}
  >
    <Grid item xs={12} color={"primary"}>
      <Typography>
        <Link to="/">Home</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography>
        <Link to="/about">About</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography>
        <Link to="/illustration">Illustration</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography>
        <Link to="/design">Design</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography>
        <Link to="/portfolio">Portfolio</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography>
        <Link to="/contact">Contact</Link>
      </Typography>
    </Grid>
  </Grid>
);

export default MobHeaderNav;
