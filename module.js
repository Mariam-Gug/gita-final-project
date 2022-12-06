

 export let productsList = [
    {
        id: 1,
        productName: "HL Road Frame - Black, 58",
        productNumber: "FR-R92B-58",
        color: "Black",
        listPrice: 900,
        modifiedDate: "11 November 2021",
    },
    {
        id: 2,
        productName: "Mountain Bike - Red, 58",
        productNumber: "FR-R92R-58",
        color: "Red",
        listPrice: 1432.50,
        modifiedDate: "06 August 2021",
    },
    {
        id: 3,
        productName: "Touring Bike - Red, 62",
        productNumber: "FR-R92R-62",
        color: "Red",
        listPrice: 1431.50,
        modifiedDate: "09 November 2021",
    },    
    {
        id: 4,
        productName: "Folding Bike - Red, 44",
        productNumber: "FR-R92R-44",
        color: "Red",
        listPrice: 1431.50,
        modifiedDate: "18 December 2021",
    },
    {
        id: 5,
        productName: "BMX - Red, 48",
        productNumber: "FR-R92R-48",
        color: "Red",
        listPrice: 1431.50,
        modifiedDate: "13 February 2022",
    },
    {
        id: 6,
        productName: "Recumbent Bike - Red, 52",
        productNumber: "FR-R92R-52",
        color: "Red",
        listPrice: 1431.50,
        modifiedDate: "28 February 2022",
    },
    {
        id: 7,
        productName: "HL Road Frame - Red, 56",
        productNumber: "FR-R92R-56",
        color: "Red",
        listPrice: 1431.50,
        modifiedDate: "25 July 2022",
    },
    {
        id: 8,
        productName: "Cruiser - Black, 58",
        productNumber: "FR-R38B-58",
        color: "Black",
        listPrice: 337.22,
        modifiedDate: "12 January 2022",
    },
    {
        id: 9,
        productName: "HL Road Frame - Black, 60",
        productNumber: "FR-R38B-60",
        color: "Black",
        listPrice: 337.22,
        modifiedDate: "02 December 2021",
    },
    {
        id: 10,
        productName: "HL Road Frame - Black, 62",
        productNumber: "FR-R38B-62",
        color: "Black",
        listPrice: 337.22,
        modifiedDate: "01 December 2021",
    }
];



let filterNameInput = document.getElementById('filter-input-name');

let applyBtn = document.getElementById('apply-filter-btn');

let filteredTable = document.getElementById('filtered-table');




export function filteredTableFunc(item) {


    for(let i = 0; i < item.length; i++) {

        let trTag = document.createElement('tr');
        trTag.setAttribute('class', 'item ' + item[i].id);

        let vals = Object.values(item[i]);

        for(let j = 0; j < vals.length; j++) {
            let td = document.createElement('td');
            td.textContent = vals[j];
            trTag.appendChild(td);
        }


        let btnEdit = document.createElement('button');
        btnEdit.setAttribute('type', 'submit');
        btnEdit.setAttribute('class', 'edit-btn')
        btnEdit.textContent = 'edit';

        trTag.appendChild(btnEdit);


        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'submit');
        btnDelete.setAttribute('class', 'delete-btn')
        btnDelete.textContent = 'Delete';


        trTag.appendChild(btnDelete);


        filteredTable.appendChild(trTag);


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
}

