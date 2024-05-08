"use strict";
/*
 * Copyright (c) - All Rights Reserved.
 *
 * See the LICENSE file for more information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
// let's create an instance
let myCustomer = new Customer_1.Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
