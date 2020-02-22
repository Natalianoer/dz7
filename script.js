//редактирование данных в одной персоне
function editRasteniya(i){
  display("create_person");
  document.getElementById("plantName").value=  arrRasteniyas[i].plantName;
  document.getElementById("descriptionPlants").value=  arrRasteniyas[i].plantsDescription;
  document.getElementById("domainPlant").value=  arrRasteniyas[i].domainPlant;
  document.getElementById("plantDepartment").value=  arrRasteniyas[i].plantDepartment;
  document.getElementById("plantClass").value=  arrRasteniyas[i].plantClass;
  document.getElementById("plantOrder").value=  arrRasteniyas[i].plantOrder;
  document.getElementById("plantFamily").value=  arrRasteniyas[i].plantFamily;
  document.getElementById("plantKind").value=  arrRasteniyas[i].plantKind;
  document.getElementById("plantBelarus").value=  arrRasteniyas[i].plantBelarus;
  document.getElementById("countryPlant").value=  arrRasteniyas[i].countryPlant;
  document.getElementById("applicationPlant").value=  arrRasteniyas[i].applicationPlant;
  document.getElementById("discovererPlant").value=  arrRasteniyas[i].discovererPlant;
  document.getElementById("habitatPlant").value=  arrRasteniyas[i].habitatPlant;
  deleteRasteniya(i,arrRasteniyas);
  document.getElementById("mainMenu").style.display="none";
}

//удаление информации о персоне из массива и страницы

function deleteRasteniya(i,arrRasteniyas) {
  arrRasteniyas.splice(i,1);
  printInfo(arrRasteniyas);
}

//подробная информация
function infoRasteniya(i){
  display("info_person");
  document.getElementById("plantName").value=  arrRasteniyas[i].plantName;
  document.getElementById("descriptionPlants").value=  arrRasteniyas[i].plantsDescription;
  document.getElementById("domainPlant").value=  arrRasteniyas[i].domainPlant;
  document.getElementById("plantDepartment").value=  arrRasteniyas[i].plantDepartment;
  document.getElementById("plantClass").value=  arrRasteniyas[i].plantClass;
  document.getElementById("plantOrder").value=  arrRasteniyas[i].plantOrder;
  document.getElementById("plantFamily").value=  arrRasteniyas[i].plantFamily;
  document.getElementById("plantKind").value=  arrRasteniyas[i].plantKind;
  document.getElementById("plantBelarus").value=  arrRasteniyas[i].plantBelarus;
  document.getElementById("countryPlant").value=  arrRasteniyas[i].countryPlant;
  document.getElementById("applicationPlant").value=  arrRasteniyas[i].applicationPlant;
  document.getElementById("discovererPlant").value=  arrRasteniyas[i].discovererPlant;
  document.getElementById("habitatPlant").value=  arrRasteniyas[i].habitatPlant;
  //deleteRasteniya(i,arrRasteniyas);
  document.getElementById("mainMenu").style.display="none";
}

// вывод всей информации на странице о выбранной персоне в классе all_info
function printDetailedInfo(i){
  let form = document.getElementById("all_info").getElementsByTagName("form");
  //первый инпут в форме
  form[0].innerHTML='<br>';
  form[0].innerHTML+='<div class="detailInfo">'+
      '<div class="details">'+
        '<div class="elem">Название</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantName+'</div><br>'+
        '<div class="elem">Описание</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantsDescription+'</div><br>'+
        '<div class="elem">Домен</div>'+
        '<div class="elem">'+arrRasteniyas[i].domainPlant+'</div><br>'+
        '<div class="elem">Отдел</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantDepartment+'</div><br>'+
        '<div class="elem">Класс</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantClass+'</div><br>'+
        '<div class="elem">Порядок</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantOrder+'</div><br>'+
        '<div class="elem">Семейство</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantFamily+'</div><br>'+
        '<div class="elem">Род</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantKind+'</div><br>'+
        '<div class="elem">Растет в Беларуси</div>'+
        '<div class="elem">'+arrRasteniyas[i].plantBelarus+'</div><br>'+
        '<div id="fernActive">'+
        '<div class="elem">Страна происхождения</div>'+
        '<div class="elem" id="elemPlant">'+arrRasteniyas[i].countryPlant+'</div><br>'+
        '<div class="elem">Область применения</div>'+
        '<div class="elem">'+arrRasteniyas[i].applicationPlant+'</div><br>'+
        '</div>'+
        '<div id="spruceActive">'+
        '<div class="elem">Первооткрыватель</div>'+
        '<div class="elem" id="elemSpruce">'+arrRasteniyas[i].discovererPlant+'</div><br>'+
        '<div class="elem">Арея произрастания</div>'+
        '<div class="elem">'+arrRasteniyas[i].habitatPlant+'</div><br>'+
        '</div>'+
      '</div>'+
    '</div><br>'+
    '<input type="button" class="buttons" id="mainMenu2" value="Главное меню">';

printPlantValue();
  document.getElementById("mainMenu2").addEventListener("click",function() {
    display("information");
  });
}

function printPlantValue() {
  let elemPlant = document.getElementById('elemPlant');
  let elemSpruce = document.getElementById('elemSpruce');
  let fernActive = document.getElementById('fernActive');
  let spruceActive = document.getElementById('spruceActive');
  if (elemSpruce.value = "undefined") {
    fernActive.style.display = "inline-block";
    spruceActive.style.display = "none";
  }
  if (elemPlant.value = "undefined") {
    spruceActive.style.display = "inline-block";
    fernActive.style.display = "none";
  }
}

  // отрисовка всей информации о персонах в классе info

function printInfo(arrRasteniyas) {
  let form = document.getElementById("information").getElementsByTagName("form");
  form[0].innerHTML='<br>';
  //Первая (верхняя) строка таблицы
  form[0].innerHTML+='<table class="text_description">'+
    '<th class="text_name strong">Название</th>'+
    '<th class="text_name strong">Описание</th>'+
    '<th class="text_name strong">Домен</th>'+
    '<th class="text_name strong">Отдел</th>'+
    '<th class="text_name strong">Класс</th>'+
    '<th class="text_name strong">Порядок</th>'+
    '<th class="text_name strong">Семейство</th>'+
    '<th class="text_name strong">Род</th>'+
    '<th class="text_name strong">В Беларуси</th>'+
    '<th class="text_name strong"></th>'+
    '</table>';

  for (let i=0; i<arrRasteniyas.length; i++) {
    //каждое i - информация о персоне

    form[0].innerHTML+='<table class="text_description">'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantName+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantsDescription+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].domainPlant+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantDepartment+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantClass+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantOrder+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantFamily+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantKind+'</td>'+
      '<td class="text_name " id="details'+i+'">'+arrRasteniyas[i].plantBelarus+'</td>'+
      '<td class="text_name format " id="edit'+i+'">Редактировать</td>'+
      '<td class="text_name format " id="remove'+i+'">Удалить</td>'+
      '</table>';
  }
  form[0].innerHTML+='<br>'+
  '<input type="button" id="newRasteniyaButton" class="buttons" value="Добавить новое растение">';

  // добавим обработчики

  for (let i=0;i<arrRasteniyas.length;i++){
    let edit='edit'+i;
    let remove='remove'+i;
    let details='details'+i;
    document.getElementById(edit).style.color="blue";
    document.getElementById(remove).style.color="red";
    document.getElementById(details).style.color="green";

    document.getElementById(details).addEventListener("click",function(){
      printDetailedInfo(i,arrRasteniyas);
      display("all_info");
    });

    document.getElementById(edit).addEventListener("click",function(){
      editRasteniya(i);
    });
    document.getElementById(remove).addEventListener("click",function(){
      if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
      arrRasteniyas[i].plantName + " " + arrRasteniyas[i].plantsDescription + " " + arrRasteniyas[i].domainPlant +/*arrRasteniyas[i].secondName+*/"?")) {
          deleteRasteniya(i,arrRasteniyas);
      } else {

      }

    });
  }
  document.getElementById("newRasteniyaButton").addEventListener("click",function(){
    display("create_person");
    document.getElementById("createPerson").style.display="";
  })
}

function display(visibleId/*выбирается либо:"information" либо "all_info" либо "create_person"*/) {
  //display flex чтобы отобразить нужный блок

  switch (visibleId) {
  case "create_person":
  document.getElementById("information").style.display="none";
  document.getElementById("all_info").style.display="none";
  document.getElementById("create_person").style.display="flex";
  break;
  case "all_info":
  document.getElementById("information").style.display="none";
  document.getElementById("all_info").style.display="flex";
  document.getElementById("create_person").style.display="none";
  break;
  case "information":
  default :
  document.getElementById("information").style.display="flex";
  document.getElementById("all_info").style.display="none";
  document.getElementById("create_person").style.display="none";
  }
}

//классы



// проверка какая радио-кнопка и возвращаем его value
function checkRadio() {
    var radio=document.getElementsByName('radioRasteniyaType');
    for (var i=0;i<radio.length; i++) {
        if (radio[i].checked) {
            return(radio[i].value);
        }
    }

}


function checkBelarus() {//проверка на нажатый checkbox
  let checkBox = document.querySelectorAll('input.checkbox:checked');
  let checkValue = Array.from(checkBox).map(cb => cb.value);
  // if (checkBox == "checked") {
  //   alert("urraaa");
  // }
  return checkValue; //
}

let arrRasteniyas = []; // массив из персон


//Создание экземпляров класса



//статичные
let Rasteniya1 = new OneExtendsClass("Чистоустовые", "семейство папоротников одноимённого монотипного порядка", "Эукариоты", "Папоротниковидные", "Двудольные", "Астроцветные", "Астровые", "Гербера", "Да", "Южная Африка", "оранжереях");
arrRasteniyas.push(Rasteniya1);
let Rasteniya2 = new TwoExtendsClass("Марсилиевые", "семейство папоротников порядка Сальвиниевые", "Эукариоты", "Папоротниковидные", "Двудольные", "Астроцветные", "Астровые", "Марсиль", "Нет", "Броун, Роберт", "низовья Волги");
arrRasteniyas.push(Rasteniya2);
display("information");
printInfo(arrRasteniyas);

//Подтягивание контента при клике на input
document.getElementById("radio_ext1").addEventListener('click', () => {
  document.getElementById("oneClass").style.display = 'block';
  document.getElementById("twoClass").style.display = 'none';
});
document.getElementById("radio_ext2").addEventListener('click', () => {
  document.getElementById("oneClass").style.display = 'none';
  document.getElementById("twoClass").style.display = 'block';
});



// главная страница готова
// с кнопками crud


/*listeners*/
//
//на главное меню
document.getElementById("createPerson").addEventListener("click", function() {
document.getElementById("mainMenu").style.display="";


  //checkBelarus();

  let plantName = document.getElementById("plantName").value;
  let plantsDescription = document.getElementById("descriptionPlants").value;
  let domainPlant = document.getElementById("domainPlant").value;
  let plantDepartment = document.getElementById("plantDepartment").value;
  let plantClass = document.getElementById("plantClass").value;
  let plantOrder = document.getElementById("plantOrder").value;
  let plantFamily = document.getElementById("plantFamily").value;
  let plantKind = document.getElementById("plantKind").value;
  let plantBelarus = document.getElementById("plantBelarus").value;
  let countryPlant = document.getElementById("countryPlant").value;
  let applicationPlant = document.getElementById("applicationPlant").value;
  let discovererPlant = document.getElementById("discovererPlant").value;
  let habitatPlant = document.getElementById("habitatPlant").value;
  let type = checkRadio();
  switch (type) {
    case "fern":
      arrRasteniyas[arrRasteniyas.length] = new OneExtendsClass(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus, countryPlant, applicationPlant);
      printInfo(arrRasteniyas);
      display("information");
      alert("Добавил нового");
    break;
    case "spruce":
      arrRasteniyas[arrRasteniyas.length] = new TwoExtendsClass(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus, discovererPlant, habitatPlant);
      printInfo(arrRasteniyas);
      display("information");
      alert("Добавил нового");
      break;
    default :
      arrRasteniyas[arrRasteniyas.length] = new OneExtendsClass(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus, countryPlant, applicationPlant);
      printInfo(arrRasteniyas);
      display("information");
      alert("Добавил нового");
  }
});


document.getElementById("mainMenu").addEventListener("click",function() {
  display("information");
});
