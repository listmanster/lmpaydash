
exports.onRenderBody = ({setBodyAttributes}, pluginOptions) => {
    const BodyAttributes = {
        "className": "gradient leading-relaxed tracking-wide flex flex-col"
    }
    setBodyAttributes(BodyAttributes)
};