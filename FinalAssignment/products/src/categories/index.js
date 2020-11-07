import React, { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import categoryActionCreators from './actions';
import './index.css';

/* class Categories extends React.Component{
    txtNewCategoryNameRef = React.createRef();

    onAddNewClick = () => {
        const newCategoryName = this.txtNewCategoryNameRef.current.value;
        this.props.addNew(newCategoryName);
    }

    render(){
        const { data, selected, setSelected } = this.props;
        return(
            <div>
                <h3>Categores</h3>
                <hr></hr>
                <label>Category Name :</label>
                <input type="text" ref={this.txtNewCategoryNameRef} />                
                <input type="button" value="Add New" onClick={this.onAddNewClick} />
                <ol>
                    { 
                        data.map(category => (
                            <li 
                                key={category.id} 
                                onClick={ () => setSelected(category.name) }
                                className = {category.name === selected ? 'selected' : '' }
                            >
                                {category.name} 
                            </li>)
                        ) 
                    }
                </ol>
            </div>
        )
    }
} */

const Categories = ({ data, selected, setSelected, addNew }) => {
    const txtNewCategoryNameRef = useRef();
    const onAddNewClick = () => {
        addNew(txtNewCategoryNameRef.current.value);
        txtNewCategoryNameRef.current.value = '';
        txtNewCategoryNameRef.current.focus();
    }
    return(
        <div>
            <h3>Categores</h3>
            <hr></hr>
            <label>Category Name :</label>
            <input type="text" ref={txtNewCategoryNameRef} />                
            <input 
                type="button" 
                value="Add New" 
                onClick={onAddNewClick} />
            <ol>
                { 
                    data.map(category => (
                        <li 
                            key={category.id} 
                            onClick={ () => setSelected(category.name) }
                            className = {category.name === selected ? 'selected' : '' }
                        >
                            {category.name} 
                        </li>)
                    ) 
                }
            </ol>
        </div>
    )
}

function mapStateToProps(storeState){
    const categories = storeState.categories.categoryList,
        selected = storeState.categories.selectedCategory
    return { data : categories, selected : selected };
}

function mapDispatchToProps(dispatch){
    const categoryActionDispatchers = bindActionCreators(categoryActionCreators, dispatch);
    return categoryActionDispatchers
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
