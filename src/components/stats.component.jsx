import React from 'react';
import {Button} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';



const Stats = props => {

    const handleDel =() => {
        props.onDeleteAll();
    }
    const giveMeTollValue = arr => {
      if (arr.length===0) return 0;
      const res = arr.reduce((init,current) =>(
        {price : init.price+current.price}
      ));
      return res.price
    }

    const giveMeMeanValue = arr =>{
      const toll = giveMeTollValue(arr)
      if (toll===0) return 0;
      return (toll/arr.length)
              .toFixed(2)
    }
        
    return (
      <Paper  elevation={8}>
        <div Style='padding:30px 30px'>
            <div align='left'>
                <h3>Items Statistics</h3>            
            </div>
            <hr width='100%'></hr>
            <div align='right'>
              <p>Количество : {props.items.length}</p>
              <p>Суммарная цена : {giveMeTollValue(props.items)}</p>
              <p >Средняя цена : {giveMeMeanValue(props.items)}</p>
              </div>
            <hr width='100%'></hr>
            <div align='right'>
              <Button  onClick={handleDel}>
                      Удалить все товары
              </Button>
              <p></p>
             
            </div>
        </div>
      </Paper>
    );
}
export default Stats;