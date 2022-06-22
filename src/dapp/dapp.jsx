import { TempleWallet } from '@temple-wallet/dapp'
import React from 'react'
//Beacon
// dapp/dapp.js
function useDApp({ appName }) {
    const [{ wallet, tezos, accountPkh }, setState] = React.useState(() => ({
      wallet: undefined,
      tezos: undefined,
      accountPkh: undefined,
    }))
  
    const ready = Boolean(tezos)
  
    React.useEffect(() => {
      return TempleWallet.onAvailabilityChange((available) => {
        setState({
          wallet: available ? new TempleWallet(appName) : undefined,
          tezos: undefined,
          accountPkh: undefined,
        })
      })
    }, [setState, appName])
  
  
}

export default useDApp