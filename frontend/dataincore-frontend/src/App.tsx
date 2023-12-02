import Dashboard from './components/Dashboard';
import DataTablePage from './components/DataTable/index.tsx';
import FileUploadPage from './components/FileUpoad/index.tsx';
import Sidebar from './components/SideBar.tsx';
import SigninSignup from './components/SignInSignUp/SignInSignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
function App() {

  return (
    <>
      <AuthProvider>
        <div className="d-flex app-container">
          <Router>
            <Sidebar />
            < div className="content-container flex-grow-1">

              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<SigninSignup />} />
                <Route path="/employees" element={<DataTablePage />} />
                <Route path="/upload" element={<FileUploadPage />} />


              </Routes>
            </div>
          </Router >
        </div >
      </AuthProvider>
    </>
  )
}

export default App
