import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import inflection from "inflection";
import { FC } from "react";
import {
  CardActions,
  EditButton,
  Translate,
  useListContext,
  useTranslate,
} from "react-admin";
import { Price, Season } from "../types";

const useStyles = makeStyles({
  root: {
    marginTop: "1em",
  },
  media: {
    height: 140,
  },
  title: {
    paddingBottom: "0.5em",
  },
  actionSpacer: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const SeasonGrid: FC = (props) => {
  const classes = useStyles(props);
  const translate = useTranslate();
  const { data, ids } = useListContext<Season>();
  const season = data[ids[0]];

  return season?.start ? (
    <Grid container spacing={2} className={classes.root}>
      <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
        <Card>
          <CardContent className={classes.title}>
            <Typography variant="h5" component="h2" align="center">
              {inflection.humanize(translate("resources.season.fields.start"))}
            </Typography>
            <Box pt="1em" />
            <Typography variant="h6" component="h2" align="center">
              {new Date(season.start).toLocaleDateString()}
            </Typography>
          </CardContent>
          <CardActions>
            <EditButton record={season} />
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
        <Card>
          <CardContent className={classes.title}>
            <Typography variant="h5" component="h2" align="center">
              {inflection.humanize(translate("resources.season.fields.end"))}
            </Typography>
            <Box pt="1em" />
            <Typography variant="h6" component="h2" align="center">
              {new Date(season.end).toLocaleDateString()}
            </Typography>
          </CardContent>
          <CardActions>
            <EditButton record={season} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  ) : null;
};

export default SeasonGrid;
