import React from "react";
import { Field, FormikConsumer } from "formik";
import { CheckboxFormField } from "FormFields/CheckboxFormField";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";
import format from "date-fns/format";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "normal"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const monthlyStoragePriceGB = 2;

const ConfirmationPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <FormikConsumer>
        {({
          values: {
            upfront,
            duration,
            amount,
            firstName,
            lastName,
            street,
            eMail,
            CVV,
            cardNumber,
            expDate
          },
          ...rest
        }) => {
          const price = duration * amount * monthlyStoragePriceGB;
          const discount = upfront ? price / 10 : 0;
          const priceDiscounted = price - discount;
          return (
            <>
              <Typography variant="h6" gutterBottom>
                Subscription Details
              </Typography>
              <List disablePadding>
                <ListItem className={classes.listItem} key={duration}>
                  <ListItemText
                    primary="Duration"
                    secondary="Choosen subscription period in months"
                  />
                  <Typography variant="body2">{duration} months</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={amount}>
                  <ListItemText
                    primary="Capacity"
                    secondary="Choosen storage capacity in gb"
                  />
                  <Typography variant="body2">{amount} GB</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={upfront}>
                  <ListItemText
                    primary="Upfront payment discount"
                    secondary="Discount for upfront payment"
                  />
                  <Typography variant="body2">
                    {upfront ? "12%" : "no upfront discount"}
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" className={classes.total}>
                    {price}$
                  </Typography>
                  <Typography variant="subtitle1" className={classes.total}>
                    -{discount}$
                  </Typography>
                  <Typography variant="subtitle1" className={classes.total}>
                    ={priceDiscounted}$
                  </Typography>
                </ListItem>
              </List>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.title}
                  >
                    User Details
                  </Typography>
                  <Typography gutterBottom>{eMail}</Typography>
                  <Typography gutterBottom>
                    {firstName} {lastName}
                  </Typography>
                  <Typography gutterBottom>{street}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.title}
                  >
                    Payment details
                  </Typography>
                  <Grid container>
                    <React.Fragment key="payment">
                      <Grid item xs={6}>
                        <Typography gutterBottom>
                          Credit card number:
                        </Typography>
                        <Typography gutterBottom>{cardNumber}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>Security code:</Typography>
                        <Typography gutterBottom>{CVV}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>Expiration Date:</Typography>
                        <Typography gutterBottom>
                          {format(expDate, "MM/yy")}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                </Grid>
              </Grid>
              <Field
                label="I read the terms"
                name="terms"
                value="terms"
                component={CheckboxFormField}
              />
            </>
          );
        }}
      </FormikConsumer>
    </>
  );
};

export { ConfirmationPage };
