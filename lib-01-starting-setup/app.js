const customers = ['Max', 'Manuel', 'Anna'];

const activeCustomers = ['Max', "Manuel"];

const inactiveCutomers = _.difference(customers, activeCustomers);

console.log(inactiveCutomers);
