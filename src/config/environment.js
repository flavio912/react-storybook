let ENGINE_HTTP_URL, ENGINE_WS_URL, ETHEREUM_NODE_HTTP_URL, ETHEREUM_NODE_WS_URL, DEFAULT_NETWORK_ID, MIXPANEL_TOKEN

if (window.env) {
  // ENGINE_HTTP_URL = '/engine'
  // ENGINE_WS_URL = 'ws/engine'
  // ETHEREUM_NODE_HTTP_URL = '/ethereum/'
  // ETHEREUM_NODE_WS_URL = '/ethereum/ws/'
  ENGINE_HTTP_URL = window.env.REACT_APP_ENGINE_HTTP_URL
  ENGINE_WS_URL = window.env.REACT_APP_ENGINE_WS_URL
  ETHEREUM_NODE_HTTP_URL = window.env.REACT_APP_ETHEREUM_NODE_HTTP_URL
  ETHEREUM_NODE_WS_URL = window.env.REACT_APP_ETHEREUM_NODE_WS_URL
  DEFAULT_NETWORK_ID = window.env.REACT_APP_DEFAULT_NETWORK_ID
  MIXPANEL_TOKEN = window.env.REACT_APP_MIXPANEL_TOKEN

} else {
  ENGINE_HTTP_URL = process.env.REACT_APP_ENGINE_HTTP_URL
  ENGINE_WS_URL = process.env.REACT_APP_ENGINE_WS_URL
  ETHEREUM_NODE_HTTP_URL = process.env.REACT_APP_ETHEREUM_NODE_HTTP_URL
  ETHEREUM_NODE_WS_URL = process.env.REACT_APP_ETHEREUM_NODE_WS_URL
  MIXPANEL_TOKEN = '0x'
  DEFAULT_NETWORK_ID = process.env.REACT_APP_DEFAULT_NETWORK_ID || 'default'
}

export {
  ENGINE_HTTP_URL,
  ENGINE_WS_URL,
  ETHEREUM_NODE_HTTP_URL,
  ETHEREUM_NODE_WS_URL,
  DEFAULT_NETWORK_ID,
  MIXPANEL_TOKEN
}