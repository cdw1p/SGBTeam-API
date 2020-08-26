const { WebBased, WebBasedRegion, CLIBased } = require('../index');

(async () => {
  const SGB_CODE = ''
  const SGB_SECRET = ''
  console.log(await CLIBased(SGB_CODE, SGB_SECRET))
})()