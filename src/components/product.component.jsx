import React from 'react';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '1% 1%'
  },
  media: {
    height: 160,
  }
})

function Product (props) {
    const classes = useStyles();
    function handleDel () {
        props.onDelete(props.id);
    }
    
    
    return (
      <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={props.imageUrl}
            />
            <CardContent className={classes.media}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                  </Typography>
            </CardContent>
            <CardHeader 
                    Style='Height:100'
                    avatar={
                      <Typography variant="body2" color="textSecondary" component="p">
                        {props.price.toFixed(2)}
                      </Typography>
                    }
                    action={
                      <IconButton aria-label="Kill Item">
                          <HighlightOffTwoToneIcon onClick={handleDel}/>
                      </IconButton>
                    }
            />
                 
      </Card>
    );
  }
  
export default Product;
