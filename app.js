// https://github.com/Shieda1/Inscribed-Angle-Calculator

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const centralAngleofPolygonRadio = document.getElementById('centralAngleofPolygonRadio');
const numberofSidesofPolygonRadio = document.getElementById('numberofSidesofPolygonRadio');

let centralAngleofPolygon;
let numberofSidesofPolygon = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

centralAngleofPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Central Angle of Polygon (Degrees)';
  numberofSidesofPolygon = v1;
  result.textContent = '';
});

numberofSidesofPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of Sides of Polygon';
  centralAngleofPolygon = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(centralAngleofPolygonRadio.checked)
    result.textContent = `Central Angle of Polygon = ${computeCentralAngleofPolygon().toFixed(5)} Degrees`;

  else if(numberofSidesofPolygonRadio.checked)
    result.textContent = `Number of Sides of Polygon = ${computeNumberofSidesofPolygon().toFixed(5)}`;
})

// calculation

function computeCentralAngleofPolygon() {
  return 360 / Number(numberofSidesofPolygon.value);
}

function computeNumberofSidesofPolygon() {
  return 360 / Number(centralAngleofPolygon.value);
}