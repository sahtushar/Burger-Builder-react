import React, {Component} from 'react';
import classes from './BuildControl.css'

class buildControl extends Component{

    increase=label=>{
        console.log(label);
        console.log(this.props.ingredients);
        let current_count=this.props.ingredients[label.toLowerCase()];
        ++current_count;
        this.props.ingredients[label.toLowerCase()]=current_count;

    }
    render() {


        console.log("buildControl" ,this.props);
        return (
            <div className={classes.BuildControl}>
                <div className={classes.Label}>{this.props.label}</div>
                <div onClick={()=>{this.increase(this.props.label)}} className={classes.Less}>Less</div>
                <div className={classes.More}>More</div>
            </div>
        )
    }
    }
    export default buildControl;