import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    'margin-left': '37%',
    width: 400,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.5)',
  },
  title: {
    fontSize: 14,
    color: 'blue',
  },
  pos: {
    marginBottom: 12,
    color: 'green',
  },
});

export default function SimpleCard({name, phonenumber, email}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Business Card
        </Typography>
        <Typography variant="h5" component="h2">
        {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {email}
        </Typography>
        <Typography variant="body2" component="p">
          {phonenumber}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}