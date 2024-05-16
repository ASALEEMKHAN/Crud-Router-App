import React from 'react'
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@mui/material';


function Base({tittle, description, children}) {
    // const history = useHistory() v5  
    const navigate = useNavigate() // v6  
  return (
    <div className='main-container'>
        <header>
            <nav>
        <AppBar position="static">

  <Toolbar variant="dense">

    <Typography edge="end" 
    color="inherit" 
    aria-label="menu"
    sx={{ mr: 2 }}>
      Student App
    </Typography>

    <IconButton edge="end" 
    color="inherit" 
    aria-label="menu"
    onClick={()=>navigate("/")} 
    sx={{ mr: 2 }}>
      Dashboard
    </IconButton>

    <IconButton edge="end" 
    color="inherit" 
    aria-label="menu"
    onClick={()=>navigate("/students")} 
    sx={{ mr: 2 }}>
      Students
    </IconButton>

    <IconButton edge="end" 
    color="inherit" 
    aria-label="menu"
    onClick={()=>navigate("/add-students")} 
    sx={{ mr: 2 }}>
      Add Student
    </IconButton>

  </Toolbar>

</AppBar>
            </nav>
        </header>
        <main>
            <h1>{tittle}</h1>
            <h4>{description}</h4>
            <div className='contents'>
                {children}
            </div>
        </main>
    </div>
  );
}

export default Base;

