var mongoose = require('mongoose');
var path = require('path');
import User from '../models/User';

class UserController {

    constructor(url) {
        this.url = url;
    }

    find(id) {
        mongoose.connect(this.url);
    }

}

export default UserController;
