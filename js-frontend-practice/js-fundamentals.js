// ===================== 1. Count frequency of numbers (using object) =====================
const nums = [1, 2, 3, 2, 1, 4, 2, 3, 5, 1];

function countFrequency(nums) {
    // count how many times each number appears using a plain object
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    return obj;
}
console.log(countFrequency(nums));


// ===================== 2. Group user names by age =====================
const users = [
    { name: "Ali", age: 10 },
    { name: "John", age: 25 },
    { name: "Sara", age: 16 },
    { name: "Mike", age: 25 },
    { name: "Emma", age: 30 }
];

function groupByAge(users) {
    // group just the names, keyed by age
    const res = {};
    for (let i = 0; i < users.length; i++) {
        var name = users[i].name;
        var age = users[i].age;
        if (res[age] != undefined) {
            res[age].push(name);
        } else {
            res[age] = [name];
        }
    }
    return res;
}
console.log(groupByAge(users));


// ===================== 3. Group full user objects by age =====================
function groupByAgeObject(users) {
    // same as above, but keep the whole user object instead of just the name
    const res = {};
    for (let i = 0; i < users.length; i++) {
        var name = users[i].name;
        var age = users[i].age;
        if (res[age] != undefined) {
            res[age].push(users[i]);
        } else {
            res[age] = [users[i]];
        }
    }
    return res;
}
console.log(groupByAgeObject(users));


// ===================== 4. Count frequency of numbers (using Map) =====================
const arr = [1, 2, 3, 2, 1, 4, 2, 3, 5, 1];

function countFreqMap(arr) {
    // same frequency count as problem 1, but using a Map instead of an object
    const freq = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!freq.has(arr[i])) {
            freq.set(arr[i], 1);
        } else {
            freq.set(arr[i], freq.get(arr[i]) + 1);
        }
    }
    return freq;
}
console.log(countFreqMap(arr));


// ===================== 5. Find the first non-repeating character in a string =====================
const str = "aabbcddeff";

function findUnique(str) {
    // build a frequency map of characters, then return the first one with count 1
    const freq = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!freq.has(str[i])) {
            freq.set(str[i], 1);
        } else {
            freq.set(str[i], freq.get(str[i]) + 1);
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (freq.get(str[i]) == 1) {
            return str[i];
        }
    }
    return '';
}
console.log(findUnique(str));


// ===================== 6. Remove duplicates from an array =====================
const arr1 = [1, 2, 3, 4, 2, 5, 1, 6, 3];

function removeDuplicates(nums) {
    // use a Set to keep only the first occurrence of each value
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        }
    }
    return [...set];
}
console.log(removeDuplicates(arr1));


// ===================== 7. Find duplicate values in an array =====================
function findDuplicates(nums) {
    // track values already seen, and collect any value seen a second time
    const seen = new Set();
    const res = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            res.add(nums[i]);
        } else {
            seen.add(nums[i]);
        }
    }
    return [...res];
}
console.log(findDuplicates(arr1));


// ===================== 8. Group employee names by department =====================
const employees = [
    { name: "Ali", department: "Engineering" },
    { name: "Sara", department: "HR" },
    { name: "John", department: "Engineering" },
    { name: "Mike", department: "Sales" },
    { name: "Emma", department: "HR" },
    { name: "David", department: "Engineering" }
];

function groupByDepartment(employees) {
    // group employee names, keyed by department
    const res = {};
    for (let i = 0; i < employees.length; i++) {
        const name = employees[i].name;
        const dept = employees[i].department;
        if (res[dept] != undefined) {
            res[dept].push(name);
        } else {
            res[dept] = [name];
        }
    }
    return res;
}
console.log(groupByDepartment(employees));


// ===================== 9. Extract names / square numbers with .map() =====================
function getNames(users) {
    // pull just the "name" field out of each user object
    return users.map(x => x.name);
}

const nums1 = [1, 2, 3, 4, 5];
function square(nums) {
    // square every number in the array
    return nums.map(x => x * x);
}
console.log(square(nums1));
console.log(getNames(users));


// ===================== 10. Filter numbers greater than 10 =====================
const nums2 = [10, 5, 20, 8, 30, 15, 3];

function greaterThanTen(nums) {
    // keep only numbers strictly greater than 10
    return nums.filter(x => x > 10);
}
console.log(greaterThanTen(nums2));


// ===================== 11. Filter adult users (age > 18) =====================
function getAdults(users) {
    // keep only users older than 18
    return users.filter(x => x.age > 18);
}
console.log(getAdults(users));


// ===================== 12. Get names of adult users (filter + map) =====================
function getAdultName(users) {
    // filter adults, then map to just their names
    return users.filter(x => x.age > 18).map(el => el.name);
}
console.log(getAdultName(users));


// ===================== 13. Sum all numbers with .reduce() =====================
function sum(nums) {
    // add up every number in the array
    return nums.reduce((a, c) => a + c, 0);
}
console.log(sum(nums));


// ===================== 14. Find the maximum number with .reduce() =====================
function findMax(nums) {
    // keep the larger of the accumulator and current value
    return nums.reduce((a, c) => (a > c ? a : c));
}
console.log(findMax(nums));


// ===================== 15. Count frequency of numbers (using .reduce()) =====================
function countFrequencyReduce(nums) {
    // same result as problem 1, rewritten with reduce instead of a for-loop
    return nums.reduce((a, c) => {
        if (a[c]) {
            a[c]++;
        } else {
            a[c] = 1;
        }
        return a;
    }, {});
}
console.log(countFrequencyReduce(nums));


// ===================== 16. Orders: filter, map, and total completed orders =====================
const orders = [
    { id: 1, customer: "Ali", amount: 500, status: "completed" },
    { id: 2, customer: "John", amount: 1200, status: "pending" },
    { id: 3, customer: "Ali", amount: 800, status: "completed" },
    { id: 4, customer: "Sara", amount: 300, status: "cancelled" },
    { id: 5, customer: "John", amount: 700, status: "completed" },
    { id: 6, customer: "Ali", amount: 400, status: "completed" }
];

function getCompletedOrders(orders) {
    // keep only orders with status "completed"
    return orders.filter(o => o.status === "completed");
}

function getCompletedOrderAmount(orders) {
    // get just the amounts of completed orders
    return orders.filter(o => o.status === "completed").map(o => o.amount);
}

function getCompletedOrderAmountTotal(orders) {
    // sum up the amounts of all completed orders
    return orders.filter(o => o.status === "completed").map(o => o.amount).reduce((a, c) => a + c, 0);
}
console.log(getCompletedOrders(orders));
console.log(getCompletedOrderAmount(orders));
console.log(getCompletedOrderAmountTotal(orders));


// ===================== 17. Total revenue per customer (completed orders only) =====================
function revenueByCustomer(orders) {
    // sum completed order amounts, grouped by customer name
    return orders.reduce((acc, order) => {
        if (order.status === "completed") {
            if (acc[order.customer] != undefined) {
                acc[order.customer] += order.amount;
            } else {
                acc[order.customer] = order.amount;
            }
        }
        return acc;
    }, {});
}
console.log(revenueByCustomer(orders));


// ===================== 18. Products: filter, map, group, and total by category =====================
const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Phone", price: 500, category: "Electronics" },
    { id: 3, name: "Shoes", price: 100, category: "Fashion" },
    { id: 4, name: "Watch", price: 200, category: "Fashion" },
    { id: 5, name: "Keyboard", price: 80, category: "Electronics" }
];

function getExpensiveProducts(products) {
    // keep only products priced at 200 or more
    return products.filter(p => p.price >= 200);
}

function getProductName(products) {
    // pull just the product names
    return products.map(p => p.name);
}

function getTotalInventory(products) {
    // sum the price of every product
    return products.reduce((a, c) => a + c.price, 0);
}

function groupByCategory(products) {
    // group full product objects by category
    return products.reduce((a, c) => {
        if (a[c.category] != undefined) {
            a[c.category].push(c);
        } else {
            a[c.category] = [c];
        }
        return a;
    }, {});
}

function getTotalByCategory(products) {
    // sum product prices, grouped by category
    return products.reduce((a, c) => {
        if (a[c.category] != undefined) {
            a[c.category] += c.price;
        } else {
            a[c.category] = c.price;
        }
        return a;
    }, {});
}

function getProductNameExpensive(products) {
    // filter expensive products, then map to just their names
    return products.filter(p => p.price >= 200).map(p => p.name);
}

console.log(getExpensiveProducts(products));
console.log(getProductName(products));
console.log(getTotalInventory(products));
console.log(groupByCategory(products));
console.log(getTotalByCategory(products));
console.log(getProductNameExpensive(products));