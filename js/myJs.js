// Задание 1
function fileXML() {
    const parser = new DOMParser();
    const xmlString = `
<list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

    const xmlDOM = parser.parseFromString(xmlString, "text/xml");
    const students = Array.from(xmlDOM.querySelectorAll("student")).map(student => {
        const nameNode = student.querySelector("name");
        return {
            name: `${student.querySelector("first").textContent} ${student.querySelector("second").textContent}`,
            age: Number(student.querySelector("age").textContent),
            prof: student.querySelector("prof").textContent,
            lang: nameNode.getAttribute("lang")
        };
    });

    console.log(students);
}
let taskOne = document.querySelector('.task__one')

taskOne.addEventListener('click', function(){
    fileXML()
})


// Задание 2
function fileJSON() {
    const jsonString = `
    {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

    const data = JSON.parse(jsonString);
    const result = data.list.map(person => ({
        name: person.name,
        age: Number(person.age),
        prof: person.prof
    }));

    console.log(result);
}
let taskTwo = document.querySelector('.task__two')
taskTwo.addEventListener('click', function(){
    fileJSON()
})



// Задание 3
let formNumber = document.querySelector('.three__form-number'),
    formData = document.querySelector('.three__form-data'),
    formBtn = document.querySelector('.three__form-btn'),
    formTitle = document.querySelector('.three__number-title')
    formBtn.addEventListener('click', function(){ // клик покнопке
    formDataValue = Number(formData.value)// берёмзачение value и преобразуем в число
if(formDataValue < 1 || formDataValue > 10){ // если меньше одного, но больше десяти, то
    formTitle.textContent = 'Число вне диапазона от 1 до 10'
} else { // если ппадам , то
    formTitle.textContent = `Вы ввели цифру ${formDataValue}`

let xhr = new XMLHttpRequest();// создаем XMLHttpRequest
// делаем GET запрос с введённым аргументом
xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${formDataValue}`);
// console.log(xhr)
xhr.onload = function () {
    if (xhr.status !== 200) {
        console.log('Статус ответа: ', xhr.status);
    } else {
        try {
            let data = JSON.parse(xhr.response);
            data.forEach(item => {
                let img = document.createElement('img');
                img.src = item.thumbnailUrl;
                img.alt = item.title;
                img.style.width = '150px';
                img.style.height = '200px';
                console.log(img)
            });
        } catch (e) {
            console.log('Ошибка при разборе JSON:', e);
        
        }
    }
};
xhr.send();
    }
})


// Задание 4
let dataOne = document.querySelector('.four__data-one'),
    dataTwo = document.querySelector('.four__data-two'),
    fourBtn = document.querySelector('.four__form-btn'),
    numberTitle = document.querySelector('.four__number-title'),
    numberImg = document.querySelector('.four__number-img')
    // formNumber = document.querySelector('.four__form-number')
    
fourBtn.addEventListener('click', function(){ // клик покнопке
    dataValueOne = Number(dataOne.value)// берём зачение value и преобразуем в число
    dataValueTwo = Number(dataTwo.value)// берём зачение value и преобразуем в число
if(dataValueOne < 100 || dataValueOne > 300){ // если первый аргумент меньше ста, но больше трёхсот, то
    numberTitle.textContent = 'Одно из чисел вне диапазона от 100 до 300'
} else if (dataValueTwo < 100 || dataValueTwo > 300){ // если второй аргумент меньше ста, но больше трёхсот, то
    numberTitle.textContent = 'Одно из чисел вне диапазона от 100 до 300'
} else { // если ппадам , то
    numberTitle.textContent = `Вы ввели цифры ${dataValueOne} и ${dataValueTwo} - это и есть размер картинки`
    fetch(`https://dummyimage.com/${dataValueOne}x${dataValueTwo}`)
    for(let i = 1; i < dataValueOne; i++){
        let img = document.createElement('img');
            img.src = `https://jsonplaceholder.typicode.com/photos?_limit=${i}`
            img.alt = `title ${i}`;
            img.style.width = '150px';
            img.style.height = '200px';
            console.log(img)
    }
}
})



    // Задание 5
    let fiveNumber = document.querySelector('.five__form-number'),
        dataFiveOne = document.querySelector('.five__data-one'),
        dataFiveTwo = document.querySelector('.five__data-two'),
        fiveBtn = document.querySelector('.five__form-btn'),
        numberTitleFive = document.querySelector('.five__number-title'),
        numberImgFive = document.querySelector('.five__number-img')

        fiveBtn.addEventListener('click', function(){ // клик покнопке
            dataValueFiveOne = Number(dataFiveOne.value)// берём зачение value и преобразуем в число
            dataValueFiveTwo = Number(dataFiveTwo.value)// берём зачение value и преобразуем в число
            if(dataValueFiveOne < 1 || dataValueFiveOne > 10 && dataValueFiveTwo < 1 || dataValueFiveTwo > 10){ // если второй аргумент меньше ста, но больше трёхсот, то
                numberTitleFive.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
            } else if (dataValueFiveOne < 1 || dataValueFiveOne > 10){ // если первый аргумент меньше ста, но больше трёхсот, то
                numberTitleFive.textContent = 'Номер страницы вне диапазона от 1 до 10'
            } else if (dataValueFiveTwo < 1 || dataValueFiveTwo > 10){ // если второй аргумент меньше ста, но больше трёхсот, то
                numberTitleFive.textContent = 'Лимит вне диапазона от 1 до 10'
            } else { // если ппадам , то
                numberTitleFive.textContent = `Вы ввели цифры ${dataValueFiveOne} и ${dataValueFiveTwo}`
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${dataValueFiveOne}&_limit=${dataValueFiveTwo}`)
        for(let i = 1; i < dataValueFiveOne; i++){
// как сохранить данные img в localStorage.setItem() ?
// и выводить в консоль даже после перезагрузки брузера ?
            let img = document.createElement('img');
                img.src = `https://jsonplaceholder.typicode.com/photos?_page=${dataValueFiveOne}&_limit=${dataValueFiveTwo}`
                img.alt = `title ${i}`;
                img.style.width = `${dataValueFiveOne}px`;
                img.style.height = `${dataValueFiveTwo}px`;

            localStorage.setItem('', img)
            console.log(localStorage.getItem(''))
            console.log(img)
        }
        }
        })        