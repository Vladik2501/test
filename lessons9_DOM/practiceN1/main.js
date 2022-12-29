// document.createElement('ul');

// console.log(document.head.children)
// let nodelist = document.head.childNodes;
// for (let nodelistElement of nodelist) {
//    if (nodelistElement.nodeType === Node.TEXT_NODE){
//        console.log(nodelistElement,'text')
//    }else if(nodelistElement.nodeType === Node.COMMENT_NODE){
//        console.log(nodelistElement,'comment')
//    }else if(nodelistElement.nodeType === Node.ELEMENT_NODE) {
//        console.log(nodelistElement, 'tag')
//    }
// }
// let li1;
// document.getElementsById() - знайти по id якийсь елемент
// document.getElementsByTagName() - знайти за назвою тегу елемент
// console.log(list1.children)
// let lilist = document.getElementsByTagName('li');
// console.log(lilist)
// console.log(list1.getElementsByTagName('li'))
// let menus = document.getElementsByClassName('menu') - знайти елемент по класу
//  find element node
// let lilist = document.querySelector('.menu:nth-child(1)>li')
// let lilist = document.querySelectorAll('.menu:nth-child(1)>li')
// let list1 = document.getElementsByTagName()][0]; - варіація nth child
// console.log(li.innerText)
// li.innerText === 'html'; - щоб показати текст
// li.innerHTML === '<strong>boom</strong>' - дає можливість використовувати html теги
// li.classList.add('bober') - добавлення
// li.classList.name('a') - щоб показати індекс
// li.classList.remove(a) - для видалення елементу
// li.classList.toggle(b) - перемикач
// document.forms.f1
// let h2 = document.createElement('h2')
// h2.innerText = 'title';
// document.body.appendChild(h2)
// let target = document.getElementsByClassName('target')[0]
// target.appendChild( cloneNode(true))
//events
// let buttons = document.getElementsByTagName('button')
// let button = buttons[0]
// button.onclick = function (eventObj) {
//     console.log('click done',eventObj)
// }
// let div = document.getElementsByTagName('div')[0];
// div.style.width = '300px';
// div.style.height = '300px';
// div.style.borderRadius = '160px'
// div.onmousemove = function (e) {
//     this.style.background = `rgb(${e.clientX},${e.clientY},${e.clientX})`
//
// }
// let form1 = document.forms.f1;
//
// form1.onsubmit = function (e) {
//     e.preventDefault()
// let name = this.name.value;
//     let age = this.age.value
// }