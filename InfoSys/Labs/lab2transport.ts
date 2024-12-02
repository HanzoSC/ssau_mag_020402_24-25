export namespace TransportforLab2 {
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