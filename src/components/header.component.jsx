import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Logo } from './../assets/puzzle.svg'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link} from 'react-router-dom';



const useStyles = makeStyles(() => createStyles({
  body:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    height: '100px',
    width:'100%',
    padding: '10px 10px',
    border: [
        [2, 'solid', 'black']
    ],
    

  },
  hov_curr:{
    cursor: 'pointer',
} ,
  logoContainer: {
    height: '100%',
    width: '15%',
    align:'right'

  },
  textContainer:{
    width:'70%',
    textAlign:'center',
    verticalAlign: 'baseline',
  },
  menuContainer:{
    
    width:'15%',
    textAlign:'center',
  }
  
}));

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <div className={classes.body}>
                <Logo className={classes.logoContainer}/>
                <p className={classes.textContainer}> 
                   Sorry, but you cannot actually buy Tesla here
                </p>
                <div className={classes.menuContainer}>
                <MenuRoundedIcon className={classes.hov_curr} onClick={handleClick}/>
                  
                  <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>

                      <MenuItem onClick={handleClose} 
                                component={Link} 
                                to='/'>Item List</MenuItem>
                      <MenuItem onClick={handleClose} 
                                component={Link} 
                                to='/item-add'>Item Add</MenuItem>

                  </Menu>
                </div>
            </div>
        </Grid>
    );

}
