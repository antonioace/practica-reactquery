import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Contenedor from './componentes/Contenedor'
import Rutas from './Rutas/Rutas'
const queryClient = new QueryClient()
function Principal() {
  return (
    <QueryClientProvider client={queryClient}>
  <Rutas/>
  </QueryClientProvider>
  )
}

export default Principal