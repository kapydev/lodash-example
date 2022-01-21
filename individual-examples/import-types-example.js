const merge = require("lodash.merge"); //Bad

const merge = require("lodash/merge") //Good

import {merge} from "lodash" //Good if webpack or rollup