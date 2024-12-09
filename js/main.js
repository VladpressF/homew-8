// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою. 🔽
// Через for :

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ',';
  }
}

console.log(string); 

// Через join :

const friendsJoin = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let stringJoin = friendsJoin.join(', ');
console.log(stringJoin);


// 2. Працюємо з колекцією карток в trello. Метод splice() 🔽

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5'
];

const cardToRemove = 'Карточка-3';
const cardToInsert = 'Карточка-6';
const cardToUpdate = 'Карточка-4';

for (let i = 0; i < cards.length; i++) {
  // Видалити
  if (cards[i] === cardToRemove) {
      cards.splice(i, 1);
      i--; 
      console.log('Видалено:', cards);
      continue; 
  }

  // Додати
  if (cards[i] === 'Карточка-2' && !cards.includes(cardToInsert)) {
      cards.splice(i + 1, 0, cardToInsert); 
      console.log('Додано:', cards);
      continue;
  }

  // Оновити
  if (cards[i] === cardToUpdate) {
      cards[i] = 'Оновлена-' + cardToUpdate; 
      console.log('Оновлено:', cards);
  }
}
// // 3. Видалити  🔽

// cards.splice(0,1);
// console.log(cards);

// // 4. Додати 🔽

// cards.push('Карточка-6')
// console.log(cards);

// // 5. Оновити 🔽

// cards.splice(4,1,'Карточка-4')
// console.log(cards)
