// Задание 1
// Функция для задержки на 1 секунду
let delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// Асинхронная функция для удаления нечетных чисел из массива
async function removeOddNumbers(numbers: number[]): Promise<number[]> {
    let index = 0;
    while (index < numbers.length) {
        if (numbers[index] % 2 !== 0) {
            console.log(`Удаление нечетного числа: ${numbers[index]}`);
            numbers.splice(index, 1); // Удаляем нечетное число
            await delay(1000); // Ждем 1 секунду перед следующим удалением
        } else {
            index++; // Переход к следующему элементу, если число четное
        }
    }
    return numbers;
}
// Пример использования
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeOddNumbers(numberss).then(result => {
    console.log("Числа:", result);
});
// Задание 2
// Функция, которая возвращает другую функцию
function createLock(message: string): () => void {
    // Замыкание: возвращаемая функция "замыкает" переменную message
    return function() {
        console.log(`Замыкание: ${message}`);
    };
}
// Пример использования замыкания
let lock1 = createLock("Раз");
let lock2 = createLock("Два");
// Вызов функций
lock1();
lock2();
// Задание 3
// Декоратор класса, блокирующий изменение прототипа
function FreezeClass(constructor: Function) {
    console.log("Freeze decorator");
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
// Класс Автомобиль с применением декоратора
class MyCarClass {
    public brand: string;
    public model: string;
    public year: number;
    public vin: string;
    public regNumber: string;
        constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        regNumber: string,
        ) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.regNumber = regNumber;
        }
        printInfo(): void {
            console.log(`Автомобиль: ${this.brand} ${this.model}, 
                Год: ${this.year}, VIN: ${this.vin}, 
                Регистрационный номер: ${this.regNumber}`);
        }
}
//Проверка работоспособности
let MyCarClass1 = new MyCarClass("Lada", "Granta", 2013, "1234", "567890");
MyCarClass1.printInfo();
//Добавляем новое поле в объект car
(MyCarClass1 as any).newField = "Новое поле";
console.log(MyCarClass1);
//Добавляем новое поле в прототип класса Car
(MyCarClass.prototype as any).newPrototypeField = "Новое поле в прототипе";
console.log(MyCarClass.prototype);
// Проверка успешности добавления поля
console.log((MyCarClass as any).newField); // undefined, если прототип заморожен
console.log((MyCarClass.prototype as any).newPrototypeField); // undefined, если прототип заморожен
// Задание 4
// Декоратор метода, преобразующий результат в заглавные буквы
function upperCase1(target:any, key:string, descriptor:PropertyDescriptor){
    // Переопределяем дескриптор свойства
    Object.defineProperty(target, key, {
        ...descriptor,
        value: function() {
            return descriptor.value.call(this).toUpperCase();
        }
    }
);
    return target;
}
// Класс Автомобиль с применением декоратора @Uppercase
class My2CarClass extends MyCarClass {
    constructor(
        brand: string, 
        model: string, 
        year: number, 
        vin: string, 
        regNumber: string
    ) {
        super(brand, model, year, vin, regNumber);
    }
    // Применение декоратора к методу
    @upperCase1
    getCarInfo(): string {
        return `Автомобиль: ${this.brand} ${this.model}, Год: ${this.year}, 
        VIN: ${this.vin}, Регистрационный номер: ${this.regNumber}`;
    }
}
// Пример использования
let MyCarClass2 = new My2CarClass("Lada", "Granta", 2013, "1234", "567890");
console.log(MyCarClass2.getCarInfo()); 