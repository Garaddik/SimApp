import examplesRouter from './api/controllers/examples/router';

import employeeRouter from './api/employee/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/employees', employeeRouter);
}
