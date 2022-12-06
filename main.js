


import { productsList } from './module.js';
import { filteredTableFunc } from './module.js';





// filter button

let filterHideShowBtn = document.getElementById('filter-hide-show-btn');
let filterBox = document.getElementById('filter-show-hide-wrapper');

filterHideShowBtn.onclick = () =>  {
    filterBox.classList.toggle('active');
    if (filterHideShowBtn.textContent == "Hide Filter") {
        filterHideShowBtn.textContent = "Show Filter";
    }else {
        filterHideShowBtn.textContent = "Hide Filter";
    }
};



// filtering products

let filterNameInput = document.getElementById('filter-input-name');

let applyBtn = document.getElementById('apply-filter-btn');

let filteredTable = document.getElementById('filtered-table');



applyBtn.onclick = () => {

    let filteredProducts = null;
    let existingTds = document.querySelectorAll('td');
    let existingDeleteBtn = document.querySelectorAll('.delete-btn');
    let existingEditBtn = document.querySelectorAll('.edit-btn');

    existingTds.forEach(td => {
        td.remove();
      });

    existingDeleteBtn.forEach(btn => {
        btn.remove();
      });
    
    existingEditBtn.forEach(btn => {
        btn.remove();
      });




    let nameOutput = filterNameInput.value;



    filteredProducts = productsList.filter(function(product) {
        
        let y = String(product.productName);
        let x = y.toLowerCase();
        return x.includes(nameOutput.toLowerCase()) 
    })



    productTable.classList.add('not-active');
    filteredTable.classList.add('active');
    



    filteredTableFunc(filteredProducts);
}







// creating product table



let productTable = document.getElementById('product-table');


function createTable() {
    
    for(let i = 0; i < productsList.length; i++) {

        let trTag = document.createElement('tr');
        trTag.setAttribute('id', 'item ' + productsList[i].id);

        let vals = Object.values(productsList[i]);

        for(let j = 0; j < vals.length; j++) {
            let td = document.createElement('td');
            td.textContent = vals[j];
            trTag.appendChild(td);
        }


        let btnEdit = document.createElement('button');
        btnEdit.setAttribute('type', 'submit');
        btnEdit.setAttribute('id', 'edit-'+ vals[0])
        btnEdit.textContent = 'edit';

        trTag.appendChild(btnEdit);


        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'submit');
        btnDelete.setAttribute('id', 'delete-'+ vals[0])
        btnDelete.textContent = 'Delete';


        trTag.appendChild(btnDelete);


        productTable.appendChild(trTag);


        //deleting products

        let deleteProduct = document.getElementById('delete-product');

        btnDelete.onclick = () => {
            deleteProduct.classList.add('active');
            document.getElementById('create-new-product-btn').classList.add('not-active');
            document.getElementById('filter-wrapper').classList.add('not-active')
            filterHideShowBtn.classList.add('not-active');
            filterBox.classList.add('not-active');
        }


        document.getElementById('close-delete-product-btn').onclick = () => {
            deleteProduct.classList.remove('active');
            document.getElementById('create-new-product-btn').classList.remove('not-active');
            document.getElementById('filter-wrapper').classList.remove('not-active')
            filterHideShowBtn.classList.remove('not-active');
            filterBox.classList.remove('not-active');

        }


        // editing products


        let editProduct = document.getElementById('edit-product');

        btnEdit.onclick = () => {
            editProduct.classList.add('active');
            createNewProductForm.classList.add('active');
            document.getElementById('create-new-product-btn').classList.add('not-active');
            document.getElementById('filter-wrapper').classList.add('not-active');
            
            document.getElementById('create-pr-bt').classList.add('not-active');
            document.getElementById('close-product-btn').classList.add('not-active');
            document.getElementById('create-product-title').textContent = 'Edit Product';
            filterHideShowBtn.classList.add('not-active');
            filterBox.classList.add('not-active');


        }


        document.getElementById('close-edit-product-btn').onclick = () => {
            editProduct.classList.remove('active');
            createNewProductForm.classList.remove('active');
            document.getElementById('create-new-product-btn').classList.remove('not-active');
            document.getElementById('filter-wrapper').classList.remove('not-active');


            document.getElementById('create-pr-bt').classList.remove('not-active');
            document.getElementById('close-product-btn').classList.remove('not-active');
            document.getElementById('create-product-title').textContent = 'Create New Product';
            filterHideShowBtn.classList.remove('not-active');
            filterBox.classList.remove('not-active');



        }





    }


};


createTable()







// create new product section

    let createNewProductForm = document.querySelector('.create-product-container');

    document.querySelector('#create-new-product-btn').onclick = () =>{
        createNewProductForm.classList.add('active');
        document.getElementById('create-new-product-btn').classList.add('not-active');
        document.getElementById('filter-wrapper').classList.add('not-active')
    };
    
    // product registration validation
    
    
    document.getElementById('registration').addEventListener('submit', function(event) {
        event.preventDefault();
    
        let errors = {};
        let form = event.target;

    
        // product name
        let name = document.getElementById('name').value;
    
        if (name.length < 4 || name == '') {
            errors.name = 'The Name field is required';
        }
    

        // product number

        let productNumber = document.getElementById('productNumber').value;

        if (productNumber.length < 4 || productNumber == '') {
            errors.productNumber = 'The Product Number field is required';
        }


        // List Price

        let listPrice = document.getElementById('listPrice').value;
        
        if (listPrice < 0.1 || listPrice > 10000) {
            errors.listPrice = 'The field ListPrice must be between 0.1 and 10000';
        }

    
        
        form.querySelectorAll('.error-text').forEach(item => {
            item.innerHTML = '';
        });
        

        for(let item in errors) {
            let errorSpan = document.getElementById('error_' + item);
            if(errorSpan) {
                errorSpan.textContent = errors[item];
            }
        }
    
        document.getElementById('close-product-btn').onclick = () => {
            createNewProductForm.classList.remove('active');
            document.getElementById('create-new-product-btn').classList.remove('not-active');
            document.getElementById('filter-wrapper').classList.remove('not-active');
            form.querySelectorAll('.error-text').forEach(item => {
                item.innerHTML = '';
            });
        }
        
        if (Object.keys(errors).length == 0) {
            form.submit();
        }
        
    });


    document.getElementById('close-product-btn').onclick = () => {
        createNewProductForm.classList.remove('active');
        document.getElementById('create-new-product-btn').classList.remove('not-active');
        document.getElementById('filter-wrapper').classList.remove('not-active')
    }



