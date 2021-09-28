let n = "";

do {
    n = +prompt("Введіть ціле число n:", "");
} while(isNaN(n) || n % 1 !==0 );
document.writeln(n);

let m = "";
 
do {
    m = +prompt("Введіть ціле число m:", "");
} while(isNaN(m) || m % 1 !==0 || m < n);
document.writeln(m);

const evenNumbers = confirm("Пропускати парні числа?", "");

let sum = 0;

if (evenNumbers) {
     for (let i = n; i <= m; i++) {
        if (i % 2 != 0) {
            sum += i;
        };
    };
} else {
        for (let i = n; i <= m; i++) {
            sum += i;
    };
};
document.writeln(sum);
