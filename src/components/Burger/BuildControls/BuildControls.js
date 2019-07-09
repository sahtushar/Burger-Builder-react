import React, {Component} from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: "Salad", type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

class buildControls extends Component {

    render() {
        return (
            <div className={classes.BuildControls}>
                {
                    controls.map((control) => {
                        return (
                            <BuildControl  addIngredient={this.props.addIngredient}  removeIngredient={this.props.removeIngredient} type={control.type} label={control.label}/>
                        )
                    })
                }

            </div>
        )

    }
}

export default buildControls;