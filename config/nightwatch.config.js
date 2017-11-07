// http://nightwatchjs.org/guide#settings-file
let path = require('path')
module.exports = {
  'src_folders': ['test/e2e/specs'],
  'output_folder': 'test/e2e/reports',
  'page_objects_path': 'test/pages',
  'custom_commands_path': ['node_modules/nightwatch-helpers/commands'],
  'custom_assertions_path': ['node_modules/nightwatch-helpers/assertions'],

  'selenium': {
    'start_process': true,
    'server_path': require('selenium-server').path,
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': path.join(__dirname, '../test/lib/chromedriver', 'chromedriver.exe'),
      'webdriver.gecko.driver': path.join(__dirname, '../test/lib/geckodriver', 'geckodriver.exe'),
      'webdriver.firefox.profile': 'nightwatch'
    },
  },

  'test_settings': {
    'default': {
      'launch_url': 'http://localhost:3000',
      'selenium_port': 4444,
      'selenium_host': '127.0.0.1',
      'silent': true,
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': false,
        'path': 'test/e2e/screenshots'
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
      }
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'chromeOptions': {
          'args': ['--no-sandbox', '--user-data-dir', '--headless', '--disable-gpu']
        }
      }
    },

    'firefox': {
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'chromeOptions': {
          'args': ['--no-sandbox', '--user-data-dir']
        }
      }
    }
  }
}
