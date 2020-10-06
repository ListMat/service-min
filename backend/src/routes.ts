import {Router} from "express"

const routes = Router()

routes.post("/users", (request, response) => {
  const { name, age } = request.body;
  const data = { name, age };

  return response.json(data);
});

export default routes