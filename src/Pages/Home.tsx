import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StarRateIcon from "@material-ui/icons/StarRate";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useData } from "../Context/dataContext";
import { useStyles } from "../customStyles";

import { Header } from "../components/header";

export function Home() {
  const classes = useStyles();
  const { quizData } = useData();
  return (
    <>
      <Header />
      <Typography
        className={classes.appHeader}
        variant="h4"
        component="h1"
        color="primary"
      >
        World Of Words
      </Typography>
      <Container>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  color="primary"
                  gutterBottom
                >
                  English Vocab Quiz
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <StarRateIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="5 Questions" color="primary" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRateIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="No negative marks" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRateIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="5 minutes" />
                  </ListItem>
                </List>
                <Link
                  to={{ pathname: "/quiz" }}
                  state={{ quizData, quizChosen: "English Quiz" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.removeOutline}
                  >
                    Take quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  color="primary"
                  gutterBottom
                >
                  Spanish Vocab Quiz
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <StarRateIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="5 Questions" color="primary" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRateIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="No negative marks" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRateIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="5 minutes" />
                  </ListItem>
                </List>
                <Link
                  to={{ pathname: "/quiz" }}
                  state={{ quizData, quizChosen: "Spanish Quiz" }}
                >
                  <Button
                    className={classes.removeOutline}
                    variant="contained"
                    color="primary"
                  >
                    Take quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
