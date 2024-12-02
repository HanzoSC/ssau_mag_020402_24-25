"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportforLab2 = void 0;
var TransportforLab2;
(function (TransportforLab2) {
    var myDocType;
    (function (myDocType) {
        myDocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        myDocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    })(myDocType = TransportforLab2.myDocType || (TransportforLab2.myDocType = {}));
    var OwnerClass = /** @class */ (function () {
        function OwnerClass(lastName, firstName, middleName, birthDate, docType, docSeries, docNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._docType = docType;
            this._docSeries = docSeries;
            this._docNumber = docNumber;
        }
        Object.defineProperty(OwnerClass.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (lastName) {
                this._lastName = lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (firstName) {
                this._firstName = firstName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "middleName", {
            get: function () {
                return this._middleName;
            },
            set: function (middleName) {
                this._middleName = middleName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "birthDate", {
            get: function () {
                return this._birthDate;
            },
            set: function (birthDate) {
                this._birthDate = birthDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "docType", {
            get: function () {
                return this._docType;
            },
            set: function (docType) {
                this._docType = docType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "docSeries", {
            get: function () {
                return this._docSeries;
            },
            set: function (docSeries) {
                this._docSeries = docSeries;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "docNumber", {
            get: function () {
                return this._docNumber;
            },
            set: function (docNumber) {
                this._docNumber = docNumber;
            },
            enumerable: false,
            configurable: true
        });
        OwnerClass.prototype.printInfo = function () {
            console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this._lastName, " ").concat(this._firstName, " ").concat(this._middleName));
            console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this._birthDate.toDateString()));
            console.log("\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._docType));
            console.log("\u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._docSeries));
            console.log("\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._docNumber));
        };
        return OwnerClass;
    }());
    TransportforLab2.OwnerClass = OwnerClass;
    var VehicleClass = /** @class */ (function () {
        function VehicleClass(brand, model, year, vin, regNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._regNumber = regNumber;
            this._owner = owner;
        }
        Object.defineProperty(VehicleClass.prototype, "brand", {
            get: function () {
                return this._brand;
            },
            set: function (brand) {
                this._brand = brand;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (year) {
                this._year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (vin) {
                this._vin = vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "regNumber", {
            get: function () {
                return this._regNumber;
            },
            set: function (regNumber) {
                this._regNumber = regNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (owner) {
                this._owner = owner;
            },
            enumerable: false,
            configurable: true
        });
        VehicleClass.prototype.printVehicleInfo = function () {
            console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E: ".concat(this._brand, " ").concat(this._model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
            console.log("VIN: ".concat(this._vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._regNumber));
        };
        return VehicleClass;
    }());
    TransportforLab2.VehicleClass = VehicleClass;
    var CarBodyType;
    (function (CarBodyType) {
        CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        CarBodyType["Crossover"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
    })(CarBodyType = TransportforLab2.CarBodyType || (TransportforLab2.CarBodyType = {}));
    var CarClassType;
    (function (CarClassType) {
        CarClassType["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClassType["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClassType["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClassType = TransportforLab2.CarClassType || (TransportforLab2.CarClassType = {}));
    var CarClass = /** @class */ (function (_super) {
        __extends(CarClass, _super);
        function CarClass(brand, model, year, vin, regNumber, owner, carBodyType, carClassType) {
            var _this = _super.call(this, brand, model, year, vin, regNumber, owner) || this;
            _this._carBodyType = carBodyType;
            _this._carClassType = carClassType;
            return _this;
        }
        Object.defineProperty(CarClass.prototype, "carBodyType", {
            get: function () {
                return this._carBodyType;
            },
            // Cеттеры
            set: function (carBodyType) {
                this._carBodyType = carBodyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "carClassType", {
            get: function () {
                return this._carClassType;
            },
            set: function (carClassType) {
                this._carClassType = carClassType;
            },
            enumerable: false,
            configurable: true
        });
        CarClass.prototype.printVehicleInfo = function () {
            _super.prototype.printVehicleInfo.call(this);
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._carBodyType));
            console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this._carClassType));
        };
        return CarClass;
    }(VehicleClass));
    TransportforLab2.CarClass = CarClass;
    var MotorbikeClass = /** @class */ (function (_super) {
        __extends(MotorbikeClass, _super);
        function MotorbikeClass(brand, model, year, vin, regNumber, owner, frameType, isForSport) {
            var _this = _super.call(this, brand, model, year, vin, regNumber, owner) || this;
            _this._frameType = frameType;
            _this._isForSport = isForSport;
            return _this;
        }
        Object.defineProperty(MotorbikeClass.prototype, "frameType", {
            get: function () {
                return this._frameType;
            },
            set: function (frameType) {
                this._frameType = frameType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeClass.prototype, "isForSport", {
            get: function () {
                return this._isForSport;
            },
            set: function (isForSport) {
                this._isForSport = isForSport;
            },
            enumerable: false,
            configurable: true
        });
        MotorbikeClass.prototype.printVehicleInfo = function () {
            _super.prototype.printVehicleInfo.call(this);
            console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType));
            console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ".concat(this._isForSport ? "Да" : "Нет"));
        };
        return MotorbikeClass;
    }(VehicleClass));
    TransportforLab2.MotorbikeClass = MotorbikeClass;
    var VehicleStorageClass = /** @class */ (function () {
        function VehicleStorageClass() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        VehicleStorageClass.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        VehicleStorageClass.prototype.getVehicles = function () {
            return this.vehicles;
        };
        return VehicleStorageClass;
    }());
    TransportforLab2.VehicleStorageClass = VehicleStorageClass;
})(TransportforLab2 || (exports.TransportforLab2 = TransportforLab2 = {}));
