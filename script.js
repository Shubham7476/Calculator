let input=document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

//empty string
let string="";
//we want all button so we store in array
let arr=Array.from(buttons)
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        //first chech btn is clicked is it equal btn
        if(e.target.innerHTML == '='){
            //eval is a inbuilt js func to evaluate
            string=eval(string);
            //to show output
            input.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            //when i press ac i wnt all cleard 
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            //when i press del i wnt last element of string to be cleared so 
            //we ll use substring, will return substring
            //so by -1 it will remove last part
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            //if i enter 8 followed by 7 then store it
        string= string + e.target.innerHTML;
        input.value=string;
        }
    })
})