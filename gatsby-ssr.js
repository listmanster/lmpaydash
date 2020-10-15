const React = require("react");
const wrapRootElement = require("./wrap-root-element");


exports.onRenderBody = ({setBodyAttributes}, pluginOptions) => {
    const BodyAttributes = {
        "className": "gradient leading-relaxed tracking-wide flex flex-col"
    }
    setBodyAttributes(BodyAttributes)
};


exports.wrapRootElement = wrapRootElement;

