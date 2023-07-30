import { Given} from 'cypress-cucumber-preprocessor/steps';
import addAdminRequest from "../api/addAdminRequest.js";
import authRequest from "../api/authRequest.js";

const addAdmin= new addAdminRequest();
const auth= new authRequest();

Given("Create user", ()=>{

    addAdmin.add()
});

And("Update user", ()=>{

    addAdmin.update();
});

And("Delete user", ()=>{

    addAdmin.delete();
});
