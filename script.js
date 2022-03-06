var words = new Object();

words.word = ['apple','during','learn','develop'];
words.translate=['elma','boyunca','öğrenmek','geliştirmek'];

var index=Math.floor(Math.random()*words.word.length)

document.querySelector('.word').innerHTML=words.word[index]

var input=document.querySelector('#input');
var result=document.querySelector('.result');
function deneme(){
    if(input.value==words.translate[index]){
        result.innerHTML="basardın "
    }else{
        result.innerHTML="yanlis kardes "
    }

    words.word.splice(index,1);
    words.translate.splice(index,1)

    index=Math.floor(Math.random()*words.word.length)


    document.querySelector('.word').innerHTML=words.word[index]
}
