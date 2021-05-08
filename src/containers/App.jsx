import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import getData from '../utils/getData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#f0f6fc',
    backgroundColor: '#484F58',
  },
}));

const App = () => {
  const classes = useStyles();
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    getData('http://localhost:3000/data').then(data => {
      setData(data || 'No data');
    });
  }, []);
  console.log(data);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Header
                avatar={data.avatar}
                name={data.name}
                profession={data.profession}
              >
                <About
                  phone={data.phone}
                  email={data.email}
                  social={data.social}
                  address={data.address}
                  website={data.website}
                />
              </Header>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Profile Profile={data.Profile} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Experience experience={data.experience} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Academic Academic={data.Academic} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Skills skills={data.skills} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Interest interest={data.interest} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Languages languages={data.languages} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
