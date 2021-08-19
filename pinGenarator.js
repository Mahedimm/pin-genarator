

document.querySelector('.generate-btn').addEventListener('click', ()=>{

    //disable notify
    document.querySelectorAll('.notify')[0].style.display ='none';
    document.querySelectorAll('.notify')[1].style.display ='none';

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


document.querySelector(".calc-body").addEventListener('click', function(event){
    let clickButtonValue = event.target.innerText;
    const inputForm = document.querySelector('#input-form-control');

    if(isNaN(clickButtonValue )){
        if(clickButtonValue == "C"){
            inputForm.value = '';

        }
        else if(clickButtonValue =="Submit"){
            matchpin();
            
        }
    }
    else{
            // console.log(event.target.innerText);
         inputForm.value =inputForm.value + clickButtonValue;

    }

})

//check matching pin
function matchpin(){
    const pinForm = document.querySelector('.form-control').value;
    const inputForm = document.querySelector('#input-form-control');
    const inputFormValue = inputForm.value;

    const successMessage = document.querySelectorAll('.notify')[1];
    const errorMessage = document.querySelectorAll('.notify')[0];



    if(pinForm == inputFormValue){
        inputForm.value = " ";
        successMessage.style.display ='block';
        errorMessage.style.display ='none';
        


     
    }
    else{
      errorMessage.style.display='block';
      successMessage.style.display='none';
    }

}
