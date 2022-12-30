let container = document.getElementById('container');
let input = document.getElementById('input');
let form = document.getElementById('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let value = input.value;
    // console.log(value);
    alertMessage();
    poem(value);
});

let alertMessage = () => {
    if(input.value===''){
        alert("Please enter the thirukkural poem number")
    };
};

const poem = async(value) => {
try{
    let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${value}`);
    // console.log(res);
    let data = await res.json();
    // console.log(data);

        let ul = document.createElement('ul');
        let tamil_ul = document.createElement('ul');
        let english_ul = document.createElement('ul');

        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3= document.createElement('li');
        let li4= document.createElement('li');
        let li5= document.createElement('li');
        let li6= document.createElement('li');
        let li7= document.createElement('li');

        let li8= document.createElement('li');
        let li9= document.createElement('li');
        let li10= document.createElement('li');
        let li11= document.createElement('li');
        let li12= document.createElement('li');
        let li13= document.createElement('li');
        let br= document.createElement('br');
        let hr= document.createElement('hr');

        li1.innerText = (`The kural poem number is = ${data.number}`);
        li2.innerText = (`The chapter group tamil is = ${data.chapgrp_tam}`);
        li3.innerText = (`The chapter tamil is = ${data.chap_tam}`);
        li4.innerText = (`The line 1 is = ${data.line1}`);
        li5.innerText = (`The line 2 is = ${data.line2}`);
        li6.innerText = (`The section tamil is = ${data.sect_tam}`);
        li7.innerText = (`The tamil Explanation is = ${data.tam_exp}`);

        li8.innerText = (`The kural poem number is = ${data.number}`);
        li9.innerText = (`The chapter group english is = ${data.chapgrp_eng}`);
        li10.innerText = (`The chapter english is = ${data.chap_eng}`);
        li11.innerText = (`The english is = ${data.eng}`);
        li12.innerText = (`The section english is = ${data.sect_eng}`);
        li13.innerText = (`The english Explanation is = ${data.eng_exp}`);

        tamil_ul.append(li1,li2,li3,li4,li5,li6,li7);
        english_ul.append(li8,li9,li10,li11,li12,li13);
        ul.append(tamil_ul,br,english_ul,hr);
        container.append(ul);

    }catch(err){
        console.log('Error', err);
    };
};