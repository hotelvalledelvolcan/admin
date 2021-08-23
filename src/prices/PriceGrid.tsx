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
import { Price } from "../types";

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

const getTypeDescription = (price: Price, translate: Translate): string => {
  let typeDescription = "";
  switch (price.type) {
    case 1:
      typeDescription = translate("resources.prices.types.full");
      break;
    case 2:
      typeDescription = translate("resources.prices.types.half");
      break;
    case 3:
      typeDescription = translate("resources.prices.types.without");
      break;

    default:
      typeDescription = price.id;
      break;
  }
  return typeDescription;
};

const PriceGrid: FC = (props) => {
  const classes = useStyles(props);
  const translate = useTranslate();
  const { data, ids } = useListContext<Price>();

  return ids ? (
    <Grid container spacing={2} className={classes.root}>
      {ids.map((id) => (
        <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
          <Card>
            <CardContent className={classes.title}>
              <Typography variant="h5" component="h2" align="center">
                {inflection.humanize(
                  getTypeDescription(data[id], translate)
                )}
              </Typography>
              <Box pt="1em" />
              <Typography variant="h6" component="h2" align="center">
                ${data[id].amount}
              </Typography>
            </CardContent>
            <CardActions>
              <EditButton record={data[id]} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default PriceGrid;
