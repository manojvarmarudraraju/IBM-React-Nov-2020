let newCategoryId = 0;
const categoryActionCreators = { 
    addNew(categoryName){
        const newCategory = { id : ++newCategoryId, name : categoryName};
        const action = { type : 'ADD_CATEGORY', payload : newCategory };
        return action;
    }
}

export default categoryActionCreators;