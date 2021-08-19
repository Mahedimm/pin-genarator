

document.querySelector('.generate-btn').addEventListener('click', ()=>{


    const formInput = document.querySelector('.form-control');
    formInput.value = getPin();
    

})

function getPin(){
    let randomId = Math.random()*10000;
    randomId = Math.floor(randomId);

    // console.log(randomId);

    //check how much digit using digit function
    // const len = digit(randomId);

    //also another way check 
    const randomIdString = randomId+"";

    if( randomIdString.length == 4){
        return randomId;
    }
    else{
        return getPin();
    }
}

//find digit of number

function digit(num){
    let count = 0;
    while(num != 0){
        num = Math.floor(num/10);
        ++count ;
        
    }
    return count;
}