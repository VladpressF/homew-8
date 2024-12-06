// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою. 🔽
// Через for :

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (let i = 0; i < friends.length; i++) {
//   string += friends[i];
//   if (i < friends.length - 1) {
//     string += ',';
//   }
// }

// console.log(string); 

// Через join :

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(', ');
// console.log(string)

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи) 🔽
const cards = [ 
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'

]
// 3. Видалити  🔽

cards.splice(0,1);
console.log(cards);

// 4. Додати 🔽

cards.push('Карточка-6')
console.log(cards);

// 5. Оновити 🔽

cards.splice(4,1,'Карточка-4')
console.log(cards)


