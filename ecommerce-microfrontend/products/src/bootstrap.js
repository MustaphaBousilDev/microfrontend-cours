import faker from 'faker';

const mount=(el)=>{
    let products= '';
    for(let i=0; i <3; i++){
        const name= faker.commerce.productName();
        products+= `<div>${name}</div>`
    }
    el.innerHTML=products
    //document.querySelector('#dev-products').innerHTML=products
}


if(process.env.NODE_ENV==='development'){
    const el = document.querySelector('#dev-products');
    if(el){
        //we are probably running in isolation
        mount(el)
    }
}




// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNIYEly has an element with an id of 'dev-products'
// We want to immediately render our app into that element 

export {mount}