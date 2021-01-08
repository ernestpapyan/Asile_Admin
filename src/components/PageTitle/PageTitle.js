import React from "react";
import { Button, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";
import { Print } from "@material-ui/icons";

export default function PageTitle(props) {
  var classes = useStyles();

  const iconVar = [];
  iconVar["Add New"] = <AddIcon />
  iconVar["Add Income"] = <AddIcon />
  iconVar["Add Expense"] = <AddIcon />
  iconVar["Print"] = <Print />
  iconVar["Import"] = <CloudUploadIcon />
  iconVar["Export"] = <CloudDownloadIcon />

  let buttonCount = 1;
  let lgSpan = [0];
  let mdSpan = [0];
  let smSpan = [0];
  if (props.button) {
    buttonCount = props.button.length;
    lgSpan = [2, 4, 4, 6]
    mdSpan = [4, 6, 6, 8]
    smSpan = [4, 4, 8, 12]
  }

  const buttonHandler = (e, item, category) => {
    console.log(e, item, category);
    switch (category) {
      case 'admin':
        if (item === 'Add New') {
          props.history.push("/app/usermanage/admin/add");
        }
        break;
      case 'user':
        if (item === 'Add New') {
          props.history.push("/app/usermanage/user/add");
        }
        break;
      case 'company':
        if (item === 'Add New') {
          props.history.push("/app/company/add");
        }
        break;
      case 'client':
        if (item === 'Add New') {
          props.history.push("/app/client/add");
        }
        break;
      case 'sales':
        if (item === 'Add New') {
          props.history.push("/app/sales/add");
        }
        break;
      case 'salesview':
        if (item === 'Add New') {
          props.history.push("/app/salesview/add");
        }
        break;
      case 'clientview':
        if (item === 'Add New') {
          props.history.push("/app/clientview/add");
        }
        break;
      default:
        console.log();
    }
  }

  return (
    <div className={classes.pageTitleContainer}>
      <Grid container spacing={1} >
        <Grid item
          lg={12 - lgSpan[buttonCount - 1]}
          md={12 - mdSpan[buttonCount - 1]}
          sm={smSpan[buttonCount - 1] === 12 ? 12 : 12 - smSpan[buttonCount - 1]}
          xs={12}>
          <Typography className={classes.typo} variant="h2" size="sm" color="myprimary" weight="bold">
            {props.title}
          </Typography>
        </Grid>
        {props.button && (
          <Grid item lg={lgSpan[buttonCount - 1]} md={mdSpan[buttonCount - 1]} sm={smSpan[buttonCount - 1]} xs={12}>
            <Grid container className={classes.buttonGroup}>
              {
                props.button.length > 0 && props.button.map((item, key) => (
                  <Grid key={key} item className={classes.buttonContainer} lg={12 / buttonCount} md={12 / buttonCount} sm={12 / buttonCount} xs={12}>
                    <Button
                      variant={!item.includes("Add") ? "outlined" : "contained"}
                      classes={{ root: classes.button }}
                      size="large"
                      color="primary"
                      startIcon={iconVar[item]}
                      onClick={(e) => buttonHandler(e, item, props.category)}
                    >
                      {item}
                    </Button>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}