import CategoriesAPI from './services';

const categoryActionCreators = { 
    addNew(categoryName){
        return function(dispatch){
            const newCategory = { id : 0, name : categoryName};
            const action = { type : 'ADD_CATEGORY', payload : newCategory };
            CategoriesAPI
                .save(newCategory).then((newCategory) => {
                    dispatch(action);
                }).catch(() => {
                    dispatch(action);
                })
        }
    },
    setSelected(category){
        const action = { type : 'SET_SELECTED_CATEGORY', payload : category};
        return action;
    },
    loadCategories(){
        return function(dispatch){
            CategoriesAPI
                .getAll()
                .then(function(categories){
                    const action = { type: "INIT_CATEGORIES", payload: categories };
                    dispatch(action);
                });
        }
    }
}

export default categoryActionCreators;