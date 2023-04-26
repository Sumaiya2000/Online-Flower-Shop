import {FaSignInAlt, FaSignOutAlt,FaUser} from 'react-icons/fa'
import Logo from "../image/1Phulel.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';
function Navbar() {
  return (
    <>
  <html lang="en"/>
  <head>
    <meta charset="UTF-8"/>
   
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    
    <link rel="stylesheet" href="./index.css"/>
    </head>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark py-3 fixed-top">
        <div class="container-fluid">
            <img src={Logo} width = "110" height = "50"alt=""/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link">Phulel : Home</a>
                    </li>
                    <li class="parent">
                        <a class="nav-link">Categories</a>
                            <ul>
                                <li> <center> Round Bouquets </center></li>
                                <li> <center> Cascade Style Bouquets </center></li>
                                <li> <center> Other </center></li>
                                
                            </ul>
                    </li>
                    <li class="parent">
                        <a class="nav-link">Occasions</a>
                            <ul>
                               <li> <center> Wedding Bouquets </center></li>
                                <li> <center> Congratulatory Bouquets </center></li>
                                <li> <center> Other </center></li>
                            </ul>
                        
                    </li>
                    
                      
                        <li class="nav-item">
        
                            <a class="nav-link">Sign In <FaSignInAlt/></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Sign Up <FaUser/></a>
                        </li>
                    <li class="nav-item">
                    <a class="nav-link">Cart
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon sx={{ color: pink[500] }}  id='icon'/>
                        </Badge>
                        </a>
                    </li>
                    <li class="nav-item"><a class="nav-link"><Avatar sx={{ width: 30, height: 30 }}/></a></li>
                    
                    </ul>
                </div>
        </div>
    </nav>
</>
   
  )
}

export default Navbar