import Sequelize from 'sequelize'

const path = 'mysql://root:@localhost:3306/employeedb';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
}).finally(() => {
  sequelize.close();
});

let Employee = sequelize.define('employee', {
  name: Sequelize.STRING
});

export class Controller {
  create(req, res) {

      const employeeRef = Employee.build(req);
      employeeRef.save().then(() => {
        console.log('new Employee saved');
      }).finally(() => {
          sequelize.close();
          res
          .status(201)
          .json({"message":"success"})
      });
  }
}
export default new Controller();
