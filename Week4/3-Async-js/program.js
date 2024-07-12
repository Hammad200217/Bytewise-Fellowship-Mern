//Synchronous
// consolelog("I");
// consolelog("Eat");
// consolelog(" Spoon");
// consolelog(" Ice Cream");
// consolelog(" With a");

//ASynchronous
// consolelog("I");
// consolelog("Eat");

// setTimeout(()=>{ consolelog(" Ice Cream")},4000)

// consolelog(" With a");
// consolelog(" Spoon");

// callbacks
let Stock= {
    fruits: ["Stawbary, grapes, banana, apple"],
    liquid:["water , ice"],
    holder:["cone, cup, stick"],
    toppings:["chocolate, peanuts"]
};
let order = (fruit_name, call_production) => {
setTimeout(()=>{
    console.log(`${Stock.fruits[fruit_name]} was Selected`);
}, 2000)

    call_production();
};
let production = ()=>{

setTimeout(()=>{
    console.log("Production Has Started");
}, 0)

};
order(" ",production);

// callback-nesting -> callback hell
h1 = document.querySelector("h1");
function changecolor(color , delay , nextcolor){
    setTimeout(()=>{
        h1.style.color = color;
        nextcolor();
    }
    ,delay)

    
}
changecolor("red", 1000, ()=>{
    changecolor("blue", 1000, ()=>{
        changecolor("green", 1000, ()=>{
            changecolor("yellow", 1000,);
        } );
    });
});

// Promises
let isShopOpen = false;
let willShopOpen = new Promise((resolve, reject)=>{
    if(isShopOpen){
        resolve("Shop is Open");
    }else{
        reject("Shop is Closed");
    }
});

willShopOpen.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
}); 

// promise chaining
let shopOpen = true;
let orderFood = new Promise((resolve, reject)=>{
    if(shopOpen){
        let food = {
            item: "Pizza",
            price: 200
        };
        resolve(food);
    }else{
        reject("Shop is Closed");
    }
});
orderFood.then((food)=>{
    console.log(food);
    return new Promise((resolve, reject)=>{
        if(food.price < 300){
            resolve("Price is okay");
        }else{
            reject("Price is too high");
        }
    });
}).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});

// async and await
let eshopOpen = true;
let eorderFood = new Promise((resolve, reject)=>{
    if(eshopOpen){
        let food = {
            item: "Pizza",
            price: 200
        };
        resolve(food);
    }else{
        reject("Shop is Closed");
    }
});
