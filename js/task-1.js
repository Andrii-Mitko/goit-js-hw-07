const categ = document.querySelectorAll('li.item');
console.log(`Namber of categories: ${categ.length}`);
categ.forEach(i => {
  console.log(`Category: ${i.querySelector('h2').textContent}`);
 console.log(`Elements: ${i.querySelectorAll('ul li').length}`);
});
