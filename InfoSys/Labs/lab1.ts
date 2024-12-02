// Задание 1

function getMaxNegativeValue(arr: number[]): number | null {
    // Фильтруем массив, что бы остались только отрицательные числа
    const negativeNumbers = arr.filter(num => num < 0);

    // Если отрицательные числа отсутствуют, возвращаем null
    if (negativeNumbers.length === 0) {
        return null;
    }

    // Находим максимальное значение
    return Math.max(...negativeNumbers);
}

// Пример
let numbers = [-10, -20, -3, -50, -7];
let maxNegative = getMaxNegativeValue(numbers);
console.log(maxNegative);

// Задание 2

function booleanMatrixToIntMatrix(booleanMatrix: boolean[][]): number[][] {
    return booleanMatrix.map(row => row.map(value => value ? 1 : 0));
}

// Пример
let booleanMatrix = [
    [true, false, true],
    [false, true, false],
    [true, true, false]
];

let intMatrix = booleanMatrixToIntMatrix(booleanMatrix);
console.log(intMatrix);

// Задание 3

// Тип кортежа
type MyTuple = [number, string, string];

// Пример кортежа
const myTuple: MyTuple = [42, "Hello", "World"];

// Метод для конкатенации
function concatenateStrings(tuple: MyTuple): string {
    const [num, str0, str1] = tuple;
    return `${str1}: ${str0}`;
}

// Пример
let result = concatenateStrings(myTuple);
console.log(result); // Вывод: World: Hello

// Задание 4

// Аминокислоты
enum AminoAcid {
    Glycine = "Глицин",
    Glutamine = "Глутамин",
    Alanine = "Аланин",
    Isoleucine = "Изолецитин",
    Phenylalanine = "Фенилаланин",
    Tyrosine = "Тирозин",
    Tryptophan = "Триптофан",
    Asparagine = "Аспаргин",
    Arginine = "Аргинин",
}

// Пример
console.log(AminoAcid.Glycine);

// Задание 5

class Pet {
    name = 'Some pet';
    age = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = 'AngryHunter';
    age = 8;
    speak() {
        return "Yaw-Gaw";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyaul";
    }
}
// Метод вывода информации обобщенного типа, но ограниченный классом Pet
function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
    if (pet instanceof Dog) {console.log(`Label: ${pet.label}`)}
}


// Пример
let myCat = new Cat();
let myDog = new Dog();

printPetInfo(myDog); // Информация о собаке
printPetInfo(myCat); // Информация о коте

// Задание 6

// Тип для описания
type AminoAcidInfo = {
    name: AminoAcid;
    code: string;
    molecularWeight: number;
};

// Создание объекта на основе типа
let glycineInfo: AminoAcidInfo = {
    name: AminoAcid.Glycine,
    code: "GLY",
    molecularWeight: 75.07
};

// Вывод объекта в формате JSON
console.log(JSON.stringify(glycineInfo, null, 2));