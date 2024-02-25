import './App.css'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Dashboard } from './components/Dashboard/Dashboard'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FilterProvider } from './components/Dashboard/useFilterContext'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
import { Route, Routes } from "react-router-dom";
import { Charts } from './components/Charts/Charts'


function App() {

  return (

    <QueryClientProvider client={queryClient}>
      <FilterProvider>

        <Header />
        <div className="flex flex-row w-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>

        </div>
      </FilterProvider>

    </QueryClientProvider>

  )
}

export default App
