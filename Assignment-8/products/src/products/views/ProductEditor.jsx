import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductEditor extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        category: '',
    };

    onAddNewProductClick = () => {
        const { addNew } = this.props,
            { name, description, price , category} = this.state;
        addNew(name, description, price, category);
    };

    onCategoryChange = (evt) => {
      const { value } = evt.target;
      console.log({...evt});
      this.setState({ category: value});
    }
    render() {
      const { categories } = this.props;
      let categoriesOptions = categories.map((category) => (<option key={category.id} value={category.name}>{category.name}</option>));
      categoriesOptions = [<option value="" disabled selected hidden>Please Choose...</option> , ...categoriesOptions];
        return (
          <section className="edit">
            <div className="field">
              <label htmlFor="">Name :</label>
              <input
                type="text"
                onChange={evt => this.setState({ name: evt.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="">Description :</label>
              <input
                type="text"
                onChange={evt =>
                  this.setState({ description: evt.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="">Price :</label>
              <input
                type="number"
                onChange={evt =>
                  this.setState({ price: parseInt(evt.target.value) })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="">Category</label>
              <select name="categories" id="categories" onChange={this.onCategoryChange}>
                {categoriesOptions}
              </select>
            </div>
            <div className="field">
              <input
                type="button"
                value="Add Product"
                onClick={this.onAddNewProductClick}
              />
            </div>
          </section>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps,null)(ProductEditor);