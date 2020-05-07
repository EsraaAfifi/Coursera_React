import React,{Component}from 'react';
import {Card ,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class Menu extends Component{
    constructor (props){
        super(props);
      
            this.state={
             selectedDish:null
    }
} 
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
    renderDish(dish){
        // when selected dish != null , return/render the dish --> card img and body
        if (dish!=null){
            return(
              <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name}/>
                  <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>  
            );

        }
        // if the selected dish= null , return empty div or nothing
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        // define here const menu 
        // map or iterate for every dish here and retrn something
        const menu= this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
// let's craete a div container contain menu items we want to display/render , then add Media in row div
        return(
            <div className="container">
                <div className="row">
                   
                    {/*add js const menu*/}
                         {menu} 
                </div>
                {/*I will create another row here to display the card , so when 
                renderDish() Function is called and i click on any dish, that 'll return the selected dish in 
                the form of a Card and then that'll be displayed the clicked dish down below here 
                */}
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
                <div className="row">additional empty row</div>
            </div>
        );
    }

}
export default Menu;