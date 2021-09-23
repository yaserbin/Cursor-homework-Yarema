const trousers = 15.678;
const shoes = 123.965;
const shirt = 90.2345;
// 1 task
console.log("Максимальна ціна:"+Math.max(trousers,shoes,shirt));
// 2 task
console.log("Мінімальна ціна:"+Math.min(trousers,shoes,shirt));
// 3 task
const sum = trousers + shoes + shirt;
console.log("Вартість всіх товарів:"+sum);
// 4 task
console.log ("Сума вартості без дробів:"+Math.floor (Math.trunc(trousers) + Math.trunc(shoes) + Math.trunc(shirt)));
//  5 task
console.log ("Сума товарів заокруглена до сотень:"+Math.round((sum)/100)*100);
//  6 task
const booleanValue =  Math.floor(trousers) + Math.floor(shoes) + Math.floor(shirt);
console.log(booleanValue %2 === 0);
// 7 task
const cash = 500;
console.log("Здача:"+(cash - sum));
// 8 task
const averageValue = (sum / 3);
console.log+("Середнє значення" +averageValue.toFixed(2));
// 9 task
const randomDiscount = Math.round(Math.random()*101);
console.log("Випадкова знижка:" +randomDiscount);

const payRandomDiscount = +((sum-sum * (randomDiscount / 100)).toFixed(2));
console.log ("Оплата зі знижкою:" +payRandomDiscount);
const productionCost = (Math.round(sum)) / 2;
const netprofit = +(productionCost - payRandomDiscount).toFixed(2);
console.log("Чистий прибуток зі знижкою:" +netprofit);
