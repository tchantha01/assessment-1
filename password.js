
// let password = [r, s, l, t, i, d]
// let num = [0,1,2,3,4,5,6,7,8,9,]
// let letter = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

// if(password.length < 10 && num.length < 1 && letter.length < 1){
//     console.log('password invalid')
// }



let password = 'RslTid09'

let letterCheck = false

let minChars = false

let numCheck = false

let upperCheck = false

for(let i = 0; i < password.length; i++){
    
if(!isNaN(password[i] !== NaN)){
    numCheck = true
}
if(password[i] === password[i].toUpperCase() && isNaN(+password[i])){
    upperCheck = true
}
if(/[a-zA-Z].test(password)/){
    letterCheck = true 
}
if(password.length <= 10 && password.length <=20){
    minChars = true
}
if(minChars && letterCheck && upperCheck && numCheck){
    console.log('Valid password')
}else {
    console.log('Invalid password')
}
}
//Have a better understanding for the syntax after looking ahead into Monday's lecture handouts.