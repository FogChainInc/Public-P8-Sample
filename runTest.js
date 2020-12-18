const axios = require('axios');

const arg = process.argv;
const company_key = arg[2];
const company_id = arg[3];
const test_project_id = arg[4];
const test_run_id = arg[5];
const test_os = arg[6];
const test_browser = arg[7];
const test_browser_version = arg[8];
const test_platform = arg[9];
const test_grid = arg[10] || 'http://dev.p8hub.com:4444';

const runTest = async () => {
  const url = `https://prometheus8.p8hub.com:7300/v1/test_run/execute_test_run?key=${company_key}`;
  const data = {
    test_run_id: test_run_id,
    os: test_os,
    browser: test_browser,
    browser_version: test_browser_version,
    from_url: '',
    execution_platform_type: test_platform,
    project_id: test_project_id,
    gridUrl: test_grid
  };
  try {
    await axios.post(url, data);
  } catch (err) {
    console.error(err);
  }
};

const determineVerdict = async () => {
  const url = `https://prometheus8.p8hub.com:7300/v1/test_run/get_Report_Status?key=${company_key}`;
  const data = {
    params: {
      test_run_id: test_run_id,
      project_id: test_project_id,
      company_id: company_id
    }
  };
  try {
    const res = await axios.get(url, data);
    if (res.data.successful) {
      console.log('Test Passed');
      process.exit(0);
    }
    console.log('Test Failed');
    process.exit(1);
  } catch (err) {
    console.error(err);
  }
};

// Start P8 Test Framework
runTest().then(() => {
  determineVerdict();
});
