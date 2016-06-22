//module.exports = "It Works From content.js.";
//module.exports = "I know everything you do, so if you know I know.";
module.exports = `
SELECT CustomerName,City FROM Customers;

CREATE TABLE Persons
(
  PersonID INT,
  LastName varchar(255),
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255)
);

SELECT EmployeeID, FirstName, LastName, HireDate, City FROM Employees
WHERE City <> 'London'

SELECT EmployeeID, FirstName, LastName, HireDate, City FROM Employees
WHERE HireDate >= '1-july-1993'
`;
