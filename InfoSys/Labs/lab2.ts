// Задание 1
// Тип перечисления для документа
enum myDocType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение"
}
// Интерфейс Владелец (Owner)
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: myDocType;
    docSeries: string;
    docNumber: string;
    printInfo(): void;
}
// Интерфейс Транспортное средство (Vehicle)
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    regNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
}
// Класс, реализующий интерфейс Owner
class OwnerClass implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _docType: myDocType;
    private _docSeries: string;
    private _docNumber: string;
    // Геттеры
    get lastName() {
        return this._lastName;
    }
    get firstName() {
        return this._firstName;
    }
    get middleName() {
        return this._middleName;
    }
    get birthDate() {
        return this._birthDate;
    }
    get docType() {
        return this._docType;
    }
    get docSeries() {
        return this._docSeries;
    }
    get docNumber() {
        return this._docNumber;
    }
    // Сеттеры
    set lastName(lastName: string) {
        this._lastName = lastName;
    }
    set firstName(firstName: string) {
        this._firstName = firstName;
    }
    set middleName(middleName: string) {
        this._middleName = middleName;
    }
    set birthDate(birthDate: Date) {
        this._birthDate = birthDate;
    }
    set docType(docType: myDocType) {
        this._docType = docType;
    }
    set docSeries(docSeries: string) {
        this._docSeries = docSeries;
    }
    set docNumber(docNumber: string) {
        this._docNumber = docNumber;
    }
    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        docType: myDocType,
        docSeries: string,
        docNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNumber = docNumber;
    }
    // Метод для вывода информации о владельце
    printInfo(): void {
        console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toDateString()}`);
        console.log(`Тип документа: ${this._docType}`);
        console.log(`Серия документа: ${this._docSeries}`);
        console.log(`Номер документа: ${this._docNumber}`);
    }
}
// Класс, реализующий интерфейс Vehicle
class VehicleClass implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _regNumber: string;
    private _owner: Owner;
    // Геттеры
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get vin() {
        return this._vin;
    }
    get regNumber() {
        return this._regNumber;
    }
    get owner() {
        return this._owner;
    }
    // Сеттеры
    set brand(brand: string) {
        this._brand = brand;
    }
    set model(model:string) {
        this._model = model;
    }
    set year(year: number) {
        this._year = year;
    }
    set vin(vin: string) {
        this._vin = vin;
    }
    set regNumber(regNumber: string) {
        this._regNumber = regNumber;
    }
    set owner(owner: Owner) {
        this._owner = owner;
    }
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        regNumber: string,
        owner: Owner
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regNumber = regNumber;
        this._owner = owner;
    }
    // Метод для вывода информации о транспортном средстве (без владельца)
    printVehicleInfo(): void {
        console.log(`Транспортное средство: ${this._brand} ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._regNumber}`);
    }
}
// Создаем объекты и выводим информацию
let owner1 = new OwnerClass(
    "Лазарев",
    "Михаил",
    "Юрьевич",
    new Date(1992, 2, 8),
    myDocType.Passport,
    "1234",
    "567890"
);
let vehicle1 = new VehicleClass(
    "Lada",
    "Granta",
    2013,
    "JTDBE32K500123456",
    "A123BC",
    owner1
);
// Вывод информации
owner1.printInfo();
vehicle1.printVehicleInfo();
//Задание 2
// Перечисления для Автомобиля
enum CarBodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    Crossover = "Кроссовер",
}
enum CarClassType {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум",
}
// Интерфейс Автомобиль (Car)
interface Car extends Vehicle {
    carBodyType: CarBodyType;
    carClassType: CarClassType;
}
// Класс, реализующий интерфейс Car
class CarClass extends VehicleClass implements Car {
    private _carBodyType: CarBodyType;
    private _carClassType: CarClassType;
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        regNumber: string,
        owner: Owner,
        carBodyType: CarBodyType,
        carClassType: CarClassType
    ) {
        super(brand, model, year, vin, regNumber, owner);
        this._carBodyType = carBodyType;
        this._carClassType = carClassType;
    }
    // Геттеры
    get carBodyType() {
        return this._carBodyType;
    }
    get carClassType() {
        return this._carClassType;
    }
    // Cеттеры
    set carBodyType(carBodyType: CarBodyType) {
        this._carBodyType = carBodyType;
    }
    set carClassType(carClassType: CarClassType) {
        this._carClassType = carClassType;
    }
    // Переопределение метода для вывода информации о транспортном средстве
    printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`Тип кузова: ${this._carBodyType}`);
        console.log(`Класс автомобиля: ${this._carClassType}`);
    }
}
// Интерфейс Мотоцикл (Motorbike)
interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
}
// Класс, реализующий интерфейс Motorbike
class MotorbikeClass extends VehicleClass implements Motorbike {
    private _frameType: string;
    private _isForSport: boolean;
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        regNumber: string,
        owner: Owner,
        frameType: string,
        isForSport: boolean
    ) {
        super(brand, model, year, vin, regNumber, owner);
        this._frameType = frameType;
        this._isForSport = isForSport;
    }
    // Геттеры
    get frameType() {
        return this._frameType;
    }
    get isForSport() {
        return this._isForSport;
    }
    // Сеттеры
    set frameType(frameType: string) {
        this._frameType = frameType;
    }
    set isForSport(isForSport: boolean) {
        this._isForSport = isForSport;
    }
    // Переопределение метода для вывода информации о транспортном средстве
    printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isForSport ? "Да" : "Нет"}`);
    }
}
// Пример использования
let owner2 = new OwnerClass(
    "Дьяконов",
    "Александр",
    "Викторович",
    new Date(1975, 8, 15),
    myDocType.DriverLicense,
    "4321",
    "987654"
);
let car1 = new CarClass(
    "Mercedes",
    "C-Class",
    2019,
    "WBA3A5C50FF123456",
    "B456DE",
    owner2,
    CarBodyType.Sedan,
    CarClassType.Premium
);
let motorbike1 = new MotorbikeClass(
    "Ducatti",
    "YZF-R1",
    2021,
    "JYARN23E0KA012345",
    "C789GH",
    owner2,
    "Спортивная рама",
    true
);
// Вывод информации
car1.printVehicleInfo();
motorbike1.printVehicleInfo();
//Задание 3
// Интерфейс Хранилище (VehicleStorage) с обобщением типа T, ограниченным типом Vehicle
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;  // Дата создания хранилища
    vehicles: T[];  // Массив транспортных средств

    getVehicles(): T[];  // Метод для получения всех элементов массива типа T
}
// Класс, реализующий интерфейс VehicleStorage
class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();  // Устанавливаем текущую дату при создании хранилища
        this.vehicles = [];
    }

    // Метод для добавления транспортного средства в хранилище
    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    // Метод для возврата всех транспортных средств
    getVehicles(): T[] {
        return this.vehicles;
    }
}
// Пример использования
let owner3 = new OwnerClass(
    "Сидоров",
    "Сидор",
    "Сидорович",
    new Date(1990, 2, 28),
    myDocType.Passport,
    "5678",
    "123456"
);
let car2 = new CarClass(
    "Mercedes-Benz",
    "E-Class",
    2019,
    "WDDZF8KBXKA123456",
    "E234FG",
    owner3,
    CarBodyType.Sedan,
    CarClassType.Business
);
let motorbike2 = new MotorbikeClass(
    "Honda",
    "CBR600RR",
    2021,
    "JH2PC3704MK012345",
    "F987JK",
    owner3,
    "Алюминиевая рама",
    true
);
// Создаем хранилище для автомобилей
let carStorage = new VehicleStorageClass<Car>();
carStorage.addVehicle(car2);
// Создаем хранилище для мотоциклов
let motorbikeStorage = new VehicleStorageClass<Motorbike>();
motorbikeStorage.addVehicle(motorbike2);
// Выводим все транспортные средства из хранилищ
console.log("Автомобили в хранилище:");
carStorage.getVehicles().forEach(vehicle => vehicle.printVehicleInfo());
console.log("Мотоциклы в хранилище:");
motorbikeStorage.getVehicles().forEach(vehicle => vehicle.printVehicleInfo());
//Задание 4
//Пространство имен
namespace Transport {
    export enum myDocType {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение"
    }
    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        docType: myDocType;
        docSeries: string;
        docNumber: string;
        printInfo(): void;
    }
    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        printVehicleInfo(): void;
    }
    export class OwnerClass implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _birthDate: Date;
        private _docType: myDocType;
        private _docSeries: string;
        private _docNumber: string;
        get lastName() {
            return this._lastName;
        }
        get firstName() {
            return this._firstName;
        }
        get middleName() {
            return this._middleName;
        }
        get birthDate() {
            return this._birthDate;
        }
        get docType() {
            return this._docType;
        }
        get docSeries() {
            return this._docSeries;
        }
        get docNumber() {
            return this._docNumber;
        }
        set lastName(lastName: string) {
            this._lastName = lastName;
        }
        set firstName(firstName: string) {
            this._firstName = firstName;
        }
        set middleName(middleName: string) {
            this._middleName = middleName;
        }
        set birthDate(birthDate: Date) {
            this._birthDate = birthDate;
        }
        set docType(docType: myDocType) {
            this._docType = docType;
        }
        set docSeries(docSeries: string) {
            this._docSeries = docSeries;
        }
        set docNumber(docNumber: string) {
            this._docNumber = docNumber;
        }
        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            birthDate: Date,
            docType: myDocType,
            docSeries: string,
            docNumber: string
        ) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._docType = docType;
            this._docSeries = docSeries;
            this._docNumber = docNumber;
        }
        printInfo(): void {
            console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toDateString()}`);
            console.log(`Тип документа: ${this._docType}`);
            console.log(`Серия документа: ${this._docSeries}`);
            console.log(`Номер документа: ${this._docNumber}`);
        }
    }
    export class VehicleClass implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _regNumber: string;
        private _owner: Owner;
        get brand() {
            return this._brand;
        }
        get model() {
            return this._model;
        }
        get year() {
            return this._year;
        }
        get vin() {
            return this._vin;
        }
        get regNumber() {
            return this._regNumber;
        }
        get owner() {
            return this._owner;
        }
        set brand(brand: string) {
            this._brand = brand;
        }
        set model(model:string) {
            this._model = model;
        }
        set year(year: number) {
            this._year = year;
        }
        set vin(vin: string) {
            this._vin = vin;
        }
        set regNumber(regNumber: string) {
            this._regNumber = regNumber;
        }
        set owner(owner: Owner) {
            this._owner = owner;
        }
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._regNumber = regNumber;
            this._owner = owner;
        }
        printVehicleInfo(): void {
            console.log(`Транспортное средство: ${this._brand} ${this._model}`);
            console.log(`Год выпуска: ${this._year}`);
            console.log(`VIN: ${this._vin}`);
            console.log(`Регистрационный номер: ${this._regNumber}`);
        }
    } 
    export enum CarBodyType {
        Sedan = "Седан",
        Hatchback = "Хэтчбек",
        Crossover = "Кроссовер",
    }
    export enum CarClassType {
        Economy = "Эконом",
        Business = "Бизнес",
        Premium = "Премиум",
    }
    export interface Car extends Vehicle {
        carBodyType: CarBodyType;
        carClassType: CarClassType;
    }
    export class CarClass extends VehicleClass implements Car {
        private _carBodyType: CarBodyType;
        private _carClassType: CarClassType;
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner,
            carBodyType: CarBodyType,
            carClassType: CarClassType
        ) {
            super(brand, model, year, vin, regNumber, owner);
            this._carBodyType = carBodyType;
            this._carClassType = carClassType;
        }
        get carBodyType() {
            return this._carBodyType;
        }
        get carClassType() {
            return this._carClassType;
        }
        // Cеттеры
        set carBodyType(carBodyType: CarBodyType) {
            this._carBodyType = carBodyType;
        }
        set carClassType(carClassType: CarClassType) {
            this._carClassType = carClassType;
        }
        printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`Тип кузова: ${this._carBodyType}`);
            console.log(`Класс автомобиля: ${this._carClassType}`);
        }
    }
    export interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
    }
    export class MotorbikeClass extends VehicleClass implements Motorbike {
        private _frameType: string;
        private _isForSport: boolean;
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner,
            frameType: string,
            isForSport: boolean
        ) {
            super(brand, model, year, vin, regNumber, owner);
            this._frameType = frameType;
            this._isForSport = isForSport;
        }
        get frameType() {
            return this._frameType;
        }
        get isForSport() {
            return this._isForSport;
        }
        set frameType(frameType: string) {
            this._frameType = frameType;
        }
        set isForSport(isForSport: boolean) {
            this._isForSport = isForSport;
        }
        printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Для спорта: ${this._isForSport ? "Да" : "Нет"}`);
        }
    }
    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
    
        getVehicles(): T[];
    }
    export class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
        creationDate: Date;
        vehicles: T[];
        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        addVehicle(vehicle: T): void {
            this.vehicles.push(vehicle);
        }
        getVehicles(): T[] {
            return this.vehicles;
        }
    }
}
// Пример использования пространства имен Transport
let owner4 = new Transport.OwnerClass(
    "Кузнецов",
    "Алексей",
    "Алексеевич",
    new Date(1993, 3, 15),
    Transport.myDocType.Passport,
    "9876",
    "543210"
);
let car3 = new Transport.CarClass(
    "Audi",
    "A6",
    2022,
    "WAUZZZ4G0DN123456",
    "H567JK",
    owner4,
    Transport.CarBodyType.Sedan,
    Transport.CarClassType.Business
);
let motorbike3 = new Transport.MotorbikeClass(
    "Kawasaki",
    "Ninja ZX-10R",
    2023,
    "JKBZXV000NA123456",
    "K123LM",
    owner4,
    "Трековая рама",
    true
);
let carStorage2 = new Transport.VehicleStorageClass<Transport.Car>();
carStorage2.addVehicle(car3);
let motorbikeStorage2 = new Transport.VehicleStorageClass<Transport.Motorbike>();
motorbikeStorage2.addVehicle(motorbike3);
//Выводим информацию о владельце
owner4.printInfo()
// Вывод информации из хранилищ
console.log("Автомобили в хранилище:");
carStorage2.getVehicles().forEach(vehicle => vehicle.printVehicleInfo());
console.log("Мотоциклы в хранилище:");
motorbikeStorage2.getVehicles().forEach(vehicle => vehicle.printVehicleInfo());
//Задание 5
// Импортируем пространство имен Transport из файла lab2transport.ts
import {TransportforLab2} from './lab2transport.js';
// Пример использования
let owner5 = new TransportforLab2.OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1985, 5, 23),
    TransportforLab2.myDocType.DriverLicense,
    "4567",
    "765432"
);
let car4 = new TransportforLab2.CarClass(
    "Toyota",
    "Camry",
    2021,
    "JTNBE46K703023456",
    "L123MN",
    owner5,
    TransportforLab2.CarBodyType.Sedan,
    TransportforLab2.CarClassType.Business
);
let motorbike4 = new TransportforLab2.MotorbikeClass(
    "Ducati",
    "Panigale V4",
    2023,
    "ZDM14BPW5NB123456",
    "M654OP",
    owner5,
    "Монокок",
    true
);
let carStorage3 = new TransportforLab2.VehicleStorageClass<TransportforLab2.Car>();
carStorage3.addVehicle(car4);
let motorbikeStorage3 = new TransportforLab2.VehicleStorageClass<TransportforLab2.Motorbike>();
motorbikeStorage3.addVehicle(motorbike4);
// Вывод информации о владельце
owner5.printInfo()
// Вывод информации из хранилищ
console.log("Автомобили в хранилище:");
carStorage3.getVehicles().forEach(vehicle => vehicle.printVehicleInfo());
console.log("Мотоциклы в хранилище:");
motorbikeStorage3.getVehicles().forEach(vehicle => vehicle.printVehicleInfo());