//родительский класс гет сет

class BaseClass {
  constructor(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus){
    this.plantName = plantName;
    this.plantsDescription = plantsDescription;
    this.domainPlant = domainPlant;
    this.plantDepartment = plantDepartment;
    this.plantClass = plantClass;
    this.plantOrder = plantOrder;
    this.plantFamily = plantFamily;
    this.plantKind = plantKind;
    this.plantBelarus = plantBelarus;
    //this.checkBtn();
  }

  get plantName(){
    return this._plantName;
  }
  get plantsDescription(){
    return this._plantsDescription;
  }
  get domainPlant(){
    return this._domainPlant;
  }
  get plantDepartment(){
    return this._plantDepartment;
  }
  get plantClass(){
    return this._plantClass;
  }
  get plantOrder(){
    return this._plantOrder;
  }
  get plantFamily(){
    return this._plantFamily;
  }
  get plantKind(){
    return this._plantKind;
  }
  get plantBelarus() {
    return this._plantBelarus;
  }

  set plantName(value){
    if(value.length == " "){
      alert("Введите название растения");
    }
    this._plantName = value;
  }

  set plantsDescription(value){
    if(value.length == " "){
      alert("Введите описание");
    }
    this._plantsDescription = value;
  }

  set domainPlant(value){
    if(value.length == " "){
      alert("Введите домен растения");
    }
    this._domainPlant = value;
  }

  set plantDepartment(value){
    if(value.length == " "){
      alert("Введите отдел растения");
    }
    this._plantDepartment = value;
  }

  set plantClass(value){
    if(value.length == " "){
      alert("Введите класс растения");
    }
    this._plantClass = value;
  }

  set plantOrder(value){
    if(value.length == " "){
      alert("Введите порядок растения");
    }
    this._plantOrder = value;
  }

  set plantFamily(value){
    if(value.length == " "){
      alert("Введите семейство растения");
    }
    this._plantFamily = value;
  }
  set plantKind(value){
    if(value.length == " "){
      alert("Введите род растения");
    }
    this._plantKind = value;
  }
  set plantBelarus(value){
    if (plantBelarus.checked) {
        value = "Да";
        this._plantBelarus = value;
    }
    else {
      value = "Нет";
      this._plantBelarus = value;
    }
  }
}

//наследники


class TwoExtendsClass extends BaseClass{
  constructor(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus, discovererPlant, habitatPlant){
    super(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus);
    this.discovererPlant = discovererPlant;//первооткрыватель
    this.habitatPlant = habitatPlant;//ареал произрастания
    this.type = "spruce";
  }

  get discovererPlant() {
    return this._discovererPlant;
  }

  set discovererPlant(value) {
    if (value.length == " ") {
      alert("Введите первооткрыватель растения");
    }
    this._discovererPlant = value;
  }

  get habitatPlant() {
    return this._habitatPlant;
  }

  set habitatPlant(value) {
    if (value.length == " ") {
      alert("Введите ареал произрастания");
    }
    this._habitatPlant = value;
  }

  //**methods */
}
class OneExtendsClass extends BaseClass{
  constructor(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus, countryPlant, applicationPlant){
    super(plantName, plantsDescription, domainPlant, plantDepartment, plantClass, plantOrder, plantFamily, plantKind, plantBelarus);
    this.countryPlant = countryPlant;
    this.applicationPlant = applicationPlant;
    this.type = "fern";
  }

  get countryPlant(){
    return this._countryPlant;
  }

  set countryPlant(value){
    if(value.length == " "){
      alert("Введите страну происхождения растения");
    }
    this._countryPlant = value;
  }

  get applicationPlant() {
    return this._applicationPlant;
  }

  set applicationPlant(value) {
    if (value.length == " ") {
      alert("Введите область применения растения")
    }
    this._applicationPlant = value;
  }
  //**methods */
}
