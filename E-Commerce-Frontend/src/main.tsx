import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from '@routes/AppRoutes.tsx'
import '@services/baseUrl'
import { Provider } from 'react-redux'
import { Provider as UiProvider } from '@components/ui/provider'
import {store} from '@store/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <UiProvider>
    <AppRoutes/>
    </UiProvider>
 
  </Provider>
)
