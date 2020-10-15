require("./src/css/global-tailwind.css");
require("./src/css/global.css");
const React = require("react");
const wrapRootElement = require("./wrap-root-element");


exports.wrapRootElement = ({element}) => {
    return wrapRootElement({element});
}
