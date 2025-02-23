import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from '@routes/AppRoutes.tsx'
import '@services/baseUrl'
import { Provider } from 'react-redux'
import { Provider as UiProvider } from '@components/ui/provider'
import {persistor, store} from '@store/store'
import { PersistGate } from "redux-persist/integration/react";



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}  loading={null}>

    
    <UiProvider>
    <AppRoutes/>
    </UiProvider>
    </PersistGate>
 
  </Provider>
)
