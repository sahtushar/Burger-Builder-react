import React, {Component} from 'react';
import classes from './BuildControl.css'

class buildControl extends Component{

    constructor(props){
        super(props);
    }
    render() {

        console.log("buildControl" ,this.props);
        return (
            <div className={classes.BuildControl}>
                <div className={classes.Label}>{this.props.type}</div>

                {this.props.type?( <div onClick={() => {this.props.removeIngredient(this.props.type)}} className={classes.Less}>Less</div>):null}
               {this.props.type?( <div onClick={() => {this.props.addIngredient (this.props.type)}} className={classes.More}>More</div>):null}

            </div>
        )
    }
    }
    export default buildControl;