/*
// Задание 1
function fileXML() {
    const emptyParser = new DOMParser();
    const xmlStringCode = `
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
</list>`

    const newXmlDOM = emptyParser.parseFromString(xmlStringCode, "text/xml");

    const xmlDOMOne = newXmlDOM.querySelector("list"),
        studentDOMOne = xmlDOMOne.querySelectorAll("student"),
        nameIvan = studentDOMOne[0].querySelector("name"),
        // const firstNode = newXmlDOM.getElementsByTagName("first")[0].textContent;
        // const secondNode = newXmlDOM.getElementsByTagName("second")[0].textContent;
        firstIvan = studentDOMOne[0].querySelector("first"),
        secondIvan = studentDOMOne[0].querySelector("second"),
        ageIvan = studentDOMOne[0].querySelector("age"),
        profIvan = studentDOMOne[0].querySelector("prof"),
        langAttrinyteIvan = nameIvan.getAttribute('lang')

    const namePetr = studentDOMOne[1].querySelector("name"),
        // const firstNode = newXmlDOM.getElementsByTagName("first")[0].textContent;
        // const secondNode = newXmlDOM.getElementsByTagName("second")[0].textContent;
        firstPetr = studentDOMOne[1].querySelector("first"),
        secondPetr = studentDOMOne[1].querySelector("second"),
        agePetr = studentDOMOne[1].querySelector("age"),
        profPetr = studentDOMOne[1].querySelector("prof"),
        langAttrinytePetr = namePetr.getAttribute('lang')

    resultJsIvan = {
        // list: xmlDOMOne,
        // student: studentDOMOne,
        // name: nameNode.textContent,
        name: firstIvan.textContent + " " + secondIvan.textContent,
        age: Number(ageIvan.textContent),
        prof: profIvan.textContent,
        lang: langAttrinyteIvan,
        // secon
        // d: secondNode.textContent,
    }
    resultJsPetr = {
        // list: xmlDOMOne,
        // student: studentDOMOne,
        // name: nameNode.textContent,
        name: firstPetr.textContent + " " + secondPetr.textContent,
        age: Number(agePetr.textContent),
        prof: profPetr.textContent,
        lang: langAttrinytePetr,
        // secon
        // d: secondNode.textContent,
    }
    console.log(resultJsIvan);
    console.log(resultJsPetr);
}

let taskOne = document.querySelector('.task__one')

taskOne.addEventListener('click', function(){
    fileXML()
})
*/



/*
// Задание 2
function fileJSON() {
    const JsonStringCode = `
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
}`
    const dataq = JSON.parse(JsonStringCode);
    const list = dataq.list;
    const petrResult = {
        name: list[0].name,
        age: Number(list[0].age),
        prof: list[0].prof,
    }
    
    const vovaResult = {
        name: list[1].name,
        age: Number(list[1].age),
        prof: list[1].prof,
    }
console.log(vovaResult)
console.log(petrResult)
}

let taskTwo = document.querySelector('.task__two')

taskTwo.addEventListener('click', function(){
    fileJSON()
})
*/



/*
// Задание 3
let formNumber = document.querySelector('.three__form-number'),
    formData = document.querySelector('.three__form-data'),
    formBtn = document.querySelector('.three__form-btn'),
    formTitle = document.querySelector('.three__number-title')

    // 
formBtn.addEventListener('click', function(){ // клик покнопке
    formDataValue = Number(formData.value)// берёмзачение value и преобразуем в число
    if(formDataValue < 1 || formDataValue > 10){ // если меньше одного, но больше десяти, то
        formTitle.textContent = 'Число вне диапазона от 1 до 10'
    } else { // если ппадам , то
        formTitle.textContent = `Вы ввели цифру ${formDataValue}`

let xhr = new XMLHttpRequest();// создаем XMLHttpRequest
// делаем GET запрос с введённым аргументом
xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${formDataValue}`);

// Добавляем обрабочик ответа сервера
xhr.onload = function() {
    if (xhr.status != 200) { // Если запрос выполнен успешно. Не 200, то
        console.log('Статус ответа: ', xhr.status);
    } else {
        // Ответ мы получаем в формате JSON, поэтому его надо распарсить
        console.log('Результат: ', JSON.parse(xhr.response));
    }
};

// Добавляем обрабочик процесса загрузки
xhr.onprogress = function(event) {
    // Выведем прогресс загрузки
    console.log(`Загружено ${event.loaded} из ${event.total}`)
};
// делаем запрос
xhr.send();
    }
})
*/



/*
// Задание 4
let formNumber = document.querySelector('.four__form-number'),
    dataOne = document.querySelector('.four__data-one'),
    dataTwo = document.querySelector('.four__data-two'),
    fourBtn = document.querySelector('.four__form-btn'),
    numberTitle = document.querySelector('.four__number-title'),
    numberImg = document.querySelector('.four__number-img')
    
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
    .then((response) => {
        console.log('response', response);
        const result = response.json();
        console.log('result', result);
        numberImg.className = "new-class"
        numberImg.style.height = `${dataValueOne}px`
        numberImg.style.width = `${dataValueTwo}px`
      return result;
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => { console.log('error') });
    }
    })
    */



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
            if(dataValueFiveOne < 1 || dataValueFiveOne > 10){ // если первый аргумент меньше ста, но больше трёхсот, то
                numberTitleFive.textContent = 'Номер страницы вне диапазона от 1 до 10'
            } else if (dataValueFiveTwo < 1 || dataValueFiveTwo > 10){ // если второй аргумент меньше ста, но больше трёхсот, то
                numberTitleFive.textContent = 'Лимит вне диапазона от 1 до 10'
            } else if (dataValueFiveOne < 1 || dataValueFiveOne > 10 && dataValueFiveTwo < 1 || dataValueFiveTwo > 10){ // если второй аргумент меньше ста, но больше трёхсот, то
                numberTitleFive.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
            } else { // если ппадам , то
                numberTitleFive.textContent = `Вы ввели цифры ${dataValueFiveOne} и ${dataValueFiveTwo} - это и есть размер картинки`
        fetch(`https://dummyimage.com/${dataValueFiveOne}x${dataValueFiveTwo}`)
        .then((response) => {
            console.log('response', response);
            const result = response.json();
            console.log('result', result);
            numberImg.className = "new-class"
            numberImg.style.height = `${dataValueFiveOne}px`
            numberImg.style.width = `${dataValueFiveTwo}px`
          return result;
        })
        .then((data) => {
          console.log(data);
        })
        .catch(() => { console.log('error') });
        }
        })        