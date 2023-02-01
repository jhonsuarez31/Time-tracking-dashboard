let daily = document.getElementById("charge-daily");
let weekly = document.getElementById("charge-weekly");
let monthy = document.getElementById("charge-monthy");
document.querySelector(".btn");
let hour = document.getElementsByClassName("pes");
let last = document.getElementsByClassName("fot");

const cargarDatosJson = async () => {
  const respuesta = await fetch("data.json");
  const datos = await respuesta.json();
  console.log(daily.value);

  document.getElementById('charge-daily').addEventListener("click",function(){
    cargarDatosDaily(datos)
  });
  
  document.getElementById('charge-weekly').addEventListener("click",function(){
    cargarDatosWeekly(datos)
  }); 
  document.getElementById('charge-monthy').addEventListener("click",function(){
    cargarDatosMonthy(datos)
  }); 
  
};

const cargarDatosDaily = async (data) => {
  var dayli = [];
  var dailylast = [];

  for (const iterator of data) {
    dayli.push(iterator.timeframes.daily.current);
    dailylast.push(iterator.timeframes.daily.previous);

    for (let index = 0; index < hour.length; index++) {
      hour[index].innerHTML = `${dayli[index]} hrs`;
      last[index].innerHTML = ` Last Daily - ${dailylast[index]} hrs`;
    }
  }
};

const cargarDatosWeekly = async (data) => {
  var weekly = [];
  var weeklylast = [];

  for (const iterator of data) {
    weekly.push(iterator.timeframes.weekly.current);
    weeklylast.push(iterator.timeframes.weekly.previous);

    for (let index = 0; index < hour.length; index++) {
      hour[index].innerHTML = `${weekly[index]} hrs`;
      last[index].innerHTML = ` Last Week - ${weeklylast[index]} hrs`;
    }
  }
};
const cargarDatosMonthy = async (data) => {
  var monthly = [];
  var monthlylast = [];

  for (const iterator of data) {
    monthly.push(iterator.timeframes.monthly.current);
    monthlylast.push(iterator.timeframes.monthly.previous);

    for (let index = 0; index < hour.length; index++) {
      hour[index].innerHTML = `${monthly[index]} hrs`;
      last[index].innerHTML = ` Last Month - ${monthlylast[index]} hrs`;
    }
  }
};
