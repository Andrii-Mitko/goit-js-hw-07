const number = document.querySelector('#categories').children.length;
console.log(`Namber of categories: ${number}`);
const categ = document.querySelectorAll('h2');
categ.forEach(i => {
  console.log(`Category: ${i.textContent}`);
 console.log(`Elements: ${i.nextElementSibling.children.length}`);
});
