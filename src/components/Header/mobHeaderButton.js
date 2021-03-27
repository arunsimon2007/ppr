import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";
const MobHeaderButton = (props) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="flex-start"
    className={"Header"}
  >
    <Grid item>
      <MoreHorizIcon />
    </Grid>
  </Grid>
);

export default MobHeaderButton;
