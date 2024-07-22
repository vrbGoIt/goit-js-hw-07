const list = document.querySelectorAll('#categories > .item');
// console.log(list);
console.log(`Number of categories: ${list.length}`);
list.forEach(element => {
    console.log('Category: ' + element.querySelector('h2').textContent);
    console.log('Elements: ' + element.querySelectorAll('ul>li').length);
});
