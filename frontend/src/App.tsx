import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { initGA, logPageView } from './config/analytics';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
      light: '#62efff',
      dark: '#008ba3',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #00bcd4 40%, #ff4081 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(19, 47, 76, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(19, 47, 76, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

// Componente separado para o conteúdo que usa useLocation
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    // Inicializa o Google Analytics
    initGA();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App; 