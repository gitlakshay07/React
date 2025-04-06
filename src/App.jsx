import React from 'react'
import Usestat from './hooks/usestat'
import Portals from './portals/Portals'
import Useeffect from './hooks/Useeffect'
import Usecontext from './hooks/Usecontext'
import { DataProvider } from './contextAPI/Provider'
import Updater from './contextAPI/Updater'
import Usereducer from './hooks/Usereducer'
import Useref from './hooks/Useref'
import Fetch from './customHook/Fetch'
// for the UseContext

const App = () => {
  return (
    <div>
      {/* <Usestat/> */}
      {/* <Portals/> */}
      {/* <Useeffect/> */}
      {/* <DataProvider>
          <Usecontext/>
          <Updater/>
      </DataProvider> */}
      {/* <Usereducer/> */}
      {/* <Useref/> */}
      <Fetch/>
    </div>
  )
}

export default App