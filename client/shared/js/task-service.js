import { api } from "./api-client.js";

export const Tasks = {
  list(){
    return api.get("/tasks");
  },
  create(title, description = "", status = "todo"){
    return api.post("/tasks", { title, description, status });
  },
  update(id, data){
    return api.put(`/tasks/${id}`, data);
  },
  delete(id){
    return api.del(`/tasks/${id}`);
  }
};
