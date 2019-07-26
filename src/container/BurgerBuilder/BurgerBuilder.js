import React, {Component, Suspense} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.5
}
class BurgerBuilder extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
            totalPrice:4
    }

    }
    addIngredient=(type)=>{
        let currentCount=this.state.ingredients[type];
        ++currentCount;
        //new state object
        let updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=currentCount;
        let newPrice=INGREDIENT_PRICES[type]+this.state.totalPrice;
        setTimeout(()=>{
            this.setState({newPrice:newPrice,ingredients:updatedIngredients});
        },1000)
        // this.setState({newPrice:newPrice,ingredients:updatedIngredients});
    }
    removeIngredient=(type)=>{
        let currentCount=this.state.ingredients[type];

        console.log(currentCount);
        --currentCount;
        //new state object
        let updatedIngredients={
            ...this.state.ingredients
        };
        if(currentCount<0)
        {
            currentCount=0;
        }
        updatedIngredients[type]=currentCount;
        let newPrice=INGREDIENT_PRICES[type]+this.state.totalPrice;

        setTimeout(()=>{
            this.setState({newPrice:newPrice,ingredients:updatedIngredients});
        },1000)

    }
    render() {
        return(
            <Aux>
                <Suspense fallback={<h2>Product list is loading...</h2>}>

                <Burger ingredients={this.state.ingredients}/>
                {/*<BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} />*/}
                    <Router>
                        <ul>
                            <li > <Link to='/BuildControls'> Start Editing Burger</Link></li>
                        </ul>
                        <Route path='/BuildControls' render={() => <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}  />} />
                    </Router>
                </Suspense>

            </Aux>
        )
    }
}

export default BurgerBuilder;