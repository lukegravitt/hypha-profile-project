import { Api, JsonRpc } from 'eosjs'
import encoding from 'text-encoding'
import axios from 'axios'

const getTableRows = async function (options) {
  return this.$defaultApi.rpc.get_table_rows({
    json: true,
    ...options
  })
}

const getAccount = async function (account) {
  return this.$defaultApi.rpc.get_account(account)
}

export default async ({ store }) => {
  if (!window.TextEncoder) {
    window.TextEncoder = encoding.TextEncoder
  }

  if (!window.TextDecoder) {
    window.TextDecoder = encoding.TextDecoder
  }

  const apiUrl = await getBestEndpoint()
  store.$apiUrl = apiUrl

  const rpc = new JsonRpc(apiUrl)
  store.$defaultApi = new Api({ rpc, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() })

  store.$api = {
    getTableRows: getTableRows.bind(store),
    getAccount: getAccount.bind(store)
  }
}

const getBestEndpoint = async () => {
  const promises = []
  for (const endpoint of process.env.TELOS_ENDPOINTS.split(',')) {
    promises.push(pingEndpoint(endpoint))
  }
  const result = await Promise.all(promises)
  result.sort((a, b) => a.time - b.time)
  return result[0].url
}

const pingEndpoint = async (url) => {
  const start = Date.now()
  try {
    await axios.get(`${url}/v2/health`, {
      timeout: 5000
    })
  } catch (e) {
    return { time: 50000, url }
  }
  return { time: Date.now() - start, url }
}
