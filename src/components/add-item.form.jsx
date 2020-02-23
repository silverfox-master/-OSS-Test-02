import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'


class AddItems extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title : '',
            description : '',
            price: '',
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        const {title,description, price} = this.state;

        this.props.onSubmit(title,description, price)
        this.setState({title: '', description: '', price: 0})

    }

    clearForm = ()=>{
        this.setState({title: '', description: '', price: ''})
    }

    handleChange = (event) =>{
        const {id,value} = event.target;
        this.setState({[id] : value});

    }
    
    render(){
        return(
            <div className='sign-in'>
                <h2>Добавить новый товар</h2>
                <hr width='100%'></hr>
                <form onSubmit={this.handleSubmit}>
                    <FormControl fullWidth 
                                 margin="normal" 
                                 variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">название товара</InputLabel>
                                <OutlinedInput id='title'
                                               value={this.state.title}
                                               onChange={this.handleChange}
                                               labelWidth={140}
                                               required
                                />
                    </FormControl>
                    <FormControl fullWidth 
                                 margin="normal" 
                                 variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">краткое описание</InputLabel>
                                <OutlinedInput id="description"
                                               value={this.state.description}
                                               onChange={this.handleChange}
                                               labelWidth={140}
                                />
                    </FormControl>
                    <FormControl fullWidth  
                                 margin="normal"
                                 variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">цена</InputLabel>
                                <OutlinedInput id="price"
                                               value={this.state.price}
                                               onChange={this.handleChange}
                                               startAdornment={
                                                    <InputAdornment position="start">
                                                        UAH
                                                    </InputAdornment>
                                                }
                                               labelWidth={55}
                                               required
                                />
                    </FormControl>
                    
                    
                    
                    <div className='buttons'>
                        <Button variant="outlined"
                                onClick={this.clearForm}
                                margin="normal">Отменить                              
                        </Button>
                        <Button variant="outlined" 
                                color="primary"
                                type='submit'
                                margin="normal">Добавить
                        </Button>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItems;


