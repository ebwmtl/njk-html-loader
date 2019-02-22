const loaderUtils = require('loader-utils');

const Loader = require('./lib/loader');

module.exports = async function (source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  try {
    const loader = new Loader(source, this, options.root);

    callback(null, await loader.render(options.data));
  } catch (exc) {
    callback(exc);
  }
};
