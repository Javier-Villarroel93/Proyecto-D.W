<template>
    <div id="app">
      <aside class="sidebar">
        <div class="logo">
          <h1><span class="open">Navegacion</span></h1>
        </div>
        <nav>
          <ul>
            <li>
              <router-link to="/" class="active">
                <i class="fas fa-tachometer-alt"></i> Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/create/User" class="active">
                <i class="fas fa-user"></i> Menu
              </router-link>
            </li>
            <li>
              <router-link to="/create/EstacionMetro">
                <i class="fas fa-map-marker-alt"></i> Visualizar
              </router-link>
            </li>
            <li>
              <router-link to="/create/PuntoInteres">
                <i class="fas fa-map-signs"></i> Empleados
              </router-link>
            </li>
            <li>
              <router-link to="/create/Ruta">
                <i class="fas fa-route"></i> Metodos de pagos
              </router-link>
            </li>
            <li>
              <router-link to="/create/MensajePersonalizado">
                <i class="fas fa-envelope"></i> Proveedores
              </router-link>
            </li>
            <li>
              <router-link to="/create/GuiaVoz">
                <i class="fas fa-headset"></i> Inventario
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <div class="content">
        <h1>-Digital Waiter-</h1>
      </div>
      <div class="hermanos">
        <h3>Hermanos don Chifle</h3>
      </div>
      <div class="container"></div>
      <div class="buscar">
        <input type="text" placeholder="Adam Schwartz...">
      </div>
     
      <div class="rectangulo1"></div>
      <div class="rec1">
        <h3>Categorias</h3>
        <div class="re2">
            <h3>Entradas</h3>
            <button class="boton1">Ver</button>
            <div class="re3">
                <h3>Sopas</h3>
                <button class="boton2">Ver</button>
                <div class="re4">
                    <h3>Bebidas</h3>
                    <button class="boton3">Ver</button>
                    <div class="re5">
                        <h3>Postres</h3>
                        <button class="boton4">Ver</button>
                    </div>
                </div>
            </div>


        </div>
      </div>
       
      <div class="rect1">
        <h5>Ingresos totales</h5>
        <h3>3,291,922</h3>
        <div class="rect2">
            <button class="arrow-btn">➔</button>

            <div class="rect3">
                <h5>Pedidos de hoy</h5>
                <h3>290</h3>
                <div class="rect4">
                <button class="arrow-btn2">➔</button>

                <div class="rect5">
                    <h5>Pedidos pendientes</h5>
                    <h3>10</h3>
                    <div class="rect6">
                   <button class="arrow-btn3">➔</button>

                   <div class="rect7">
                    <h5>Pedidos entregados</h5>
                    <h3>400</h3>
                    <div class="rect8">
                    <button class="arrow-btn4">➔</button>
                </div>
                   </div>
                   </div>
                </div>
            </div>
        </div>
            
        </div>
      </div>
     
      <div class="rectangulo2"></div>
      <div class="rec2">
        <h3>Redes Sociales</h3>
      </div>
      <div class="rectangulo3"></div>
      
      <div class="rectangulo4">Empleados</div>
      <div class="emp"></div>
      <div class="h1">

      </div>
      <div class="emp2"></div>
    
      <div class="emp3"></div>
      
      <div class="emp"></div>

      <div class="texto">Digital Waiter 
es tu mejor acompanante
a la hora de
administar tu restaurante...</div>
    </div>
  </template>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
  
  #app {
    display: flex;
    min-height: 100vh; 
    background-color: #141313;
  }
  
  .sidebar {
    flex: 0 0 215px; 
    background-color: #2C2E3A;
    padding-top: 25px;
  }
  
  .logo {
    text-align: center;
    padding-bottom: 20px;
  }
  
  .logo h1 {
    font-size: 2.5em; 
  }
  
  .logo .open {
    font-weight: bold; 
    color: #8C9094;
    font-size: 1em; 
    display: block;
    line-height: 0.8em; 
    margin-right: 70px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    padding: 10px;
    padding-left: 20px;
    transition: transform 0.3s ease;
  }
  
  
  nav ul li a i {
    margin-right: 10px;
  }
  
  nav ul li:hover {
    transform: translateX(10px);
  }
  
  .container {
      width: 1280px;
      height: 100px;
      margin-left: -500px;
      margin-top: 1px; /* Ajustado aquí */
      background-color: #000000;
      position: relative;
      z-index: 0;
    }
    
  .buscar {
    margin-top: 20px;
    margin-left: -200px;
    position: relative;
    z-index: 1;
  }
  
  .content {
    width: 500px;
    color: #8C9094;
    margin-top: 10px;
    z-index: 9999;
  }

  .hermanos {
      text-align: center;
      width: 200px;
      height: 30px;
      color: #8C9094;
      position: absolute; 
      top: 0; 
      left: 0; 
      z-index: 9999; 
      background-color: #000000; 
      margin-top: 30px;
      margin-left: 850px;
    }

    .rectangulo1 {
    width: 800px; 
    height: 130px; 
    background-color: #2E2C2C; 
    margin-left: -1210px; 
    margin-top: 130px; 
    border: 2px solid #333; 
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
}
.rect1 {
      width: 170px;
      height: 90px;
      background-color: #348FE2;
      border-radius: 10px;
      position: absolute;
      left: 450px;
      top: 190px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.arrow-btn {
  padding: 4px 8px; 
  background-color: #8C9094;
  border-radius: 10px;
  color: #fff; 
  border: none; 
  cursor: pointer; 
  margin-left: 130px;
  margin-top: -11px;
  position: relative; 
  z-index: 0; 
}




.rect2 {
  width: 170px;
  height: 30px;
  background-color: #15395A;
  position: absolute;
  left: 85px;
  top: 88px; 
  transform: translate(-50%, -50%);
  padding-top: 7px; 
  padding-left: 10px;
  z-index: 9999;
  white-space: nowrap;
  border-radius: 0 0 10px 10px;
}
    .rect3 {
      width: 170px;
      height: 90px;
      background-color: #49B6D6;
      border-radius: 10px;
      position: absolute;
      left: 280px;
      top: -28px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.arrow-btn2 {
  padding: 4px 8px; 
  background-color: #8C9094; 
  border-radius: 10px;
  color: #fff; 
  border: none; 
  cursor: pointer; 
  margin-left: 130px;
  margin-top: -11px;
  position: relative; 
  z-index: 0; 
}




    .rect4 {
      width: 170px;
      height: 30px;
      background-color: #15395A;
      position: absolute;
      left: 85px;
      top: 88px;
      transform: translate(-50%, -50%);
      padding-top: 7px;
      padding-left: 10px;
      z-index: 9999;
      white-space: nowrap;
      border-radius: 0 0 10px 10px;
    }

    .rect5 {
      width: 170px;
      height: 90px;
      background-color: #FF5B57;
      border-radius: 10px;
      position: absolute;
      left: 280px;
      top: -28px;
      transform: translate(-50%, -50%);
      padding: 20px;
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.arrow-btn3 {
  padding: 4px 8px; 
  background-color: #8C9094; 
  border-radius: 10px;
  color: #fff; 
  border: none; 
  cursor: pointer; 
  margin-left: 130px;
  margin-top: -11px;
  position: relative; 
  z-index: 0; 
}




    .rect6 {
      width: 170px;
      height: 30px;
      background-color: #15395A;
      position: absolute;
      left: 85px;
      top: 88px;
      transform: translate(-50%, -50%);
      padding-top: 7px; 
      padding-left: 10px; 
      z-index: 9999;
      white-space: nowrap;
      border-radius: 0 0 10px 10px;
    }

    .rect7 {
      width: 170px;
      height: 90px;
      background-color: #F59C1A;
      border-radius: 10px;
      position: absolute;
      left: 280px;
      top: -28px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.arrow-btn4 {
  padding: 4px 8px; 
  background-color: #8C9094; 
  border-radius: 10px;
  color: #fff;
  border: none; 
  cursor: pointer; 
  margin-left: 130px;
  margin-top: -11px;
  position: relative; 
  z-index: 0; 
}




    .rect8 {
      width: 170px;
      height: 30px;
      background-color: #15395A;
      position: absolute;
      left: 85px;
      top: 88px;
      transform: translate(-50%, -50%);
      padding-top: 7px; 
      padding-left: 10px; 
      z-index: 9999;
      white-space: nowrap;
      border-radius: 0 0 10px 10px;
    }

    

.rectangulo2 {
    width: 800px; 
    height: 260px; 
    background-color: #2E2C2C; 
    margin-left: -800px; 
    margin-top: 280px; 
    border: 2px solid #333; 
    border-radius: 5px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    color: #979797;
    font-family: 'montserrat', sans-serif;
    padding-left: 10px;
    padding-top: 10px;
}

.re2 {
      color:#fff;
      text-align: center;
      width: 170px;
      height: 200px;
      background-color: #394148;
      border-radius: 10px;
      position: absolute;
      left: 200px;
      top: 135px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.boton1 {
  padding: 5px 15px; 
  background-color: #0085FF; 
  border-radius: 10px;
  color: #fff; 
  border: none; 
  cursor: pointer; 
  margin-left: 1px;
  margin-top: 110px;
  position: relative; 
  z-index: 0; 
}

.re3 {
      color:#fff;
      text-align: center;
      width: 170px;
      height: 200px;
      background-color: #394148;
      border-radius: 10px;
      position: absolute;
      left: 270px;
      top: 100px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.boton2 {
  padding: 5px 15px; 
  background-color: #0085FF; 
  border-radius: 10px;
  color: #fff; 
  border: none;
  cursor: pointer; 
  margin-left: 1px;
  margin-top: 110px;
  position: relative; 
  z-index: 0; 
}

.re4 {
      color:#fff;
      text-align: center;
      width: 170px;
      height: 200px;
      background-color: #394148;
      border-radius: 10px;
      position: absolute;
      left: 270px;
      top: 100px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.boton3 {
  padding: 5px 15px; 
  background-color: #0085FF; 
  border-radius: 10px;
  color: #fff; 
  border: none; 
  cursor: pointer; 
  margin-left: 1px;
  margin-top: 110px;
  position: relative; 
  z-index: 0; 
}

.re5 {
      color:#fff;
      text-align: center;
      width: 170px;
      height: 200px;
      background-color: #394148;
      border-radius: 10px;
      position: absolute;
      left: 270px;
      top: 100px;
      transform: translate(-50%, -50%);
      padding: 20px; 
      z-index: 9999;
      white-space: nowrap;
      text-align: center;
    }

.boton4 {
  padding: 5px 15px; 
  background-color: #0085FF; 
  border-radius: 10px;
  color: #fff; 
  border: none; 
  cursor: pointer; 
  margin-left: 1px;
  margin-top: 110px;
  position: relative; 
  z-index: 0; 
}

.rectangulo3 {
    width: 800px; 
    height: 100px; 
    background-color: #2E2C2C; 
    margin-left: -800px; 
    margin-top: 580px; 
    border: 2px solid #333; 
    border-radius: 5px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    color: #979797;
    font-family: 'montserrat', sans-serif;
    padding-left: 10px;
    padding-top: 10px;
}


.rectangulo4 {
      width: 380px;
      height: 250px;
      background-color: #2E2C2C;
      position: absolute;
      left: 1190px; 
      top: 430px; 
      border: 2px solid #333;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      color: #979797;
      font-family: 'Montserrat', sans-serif;
      padding-left: 10px;
      padding-top: 10px;
    }

    .empleado {
    color: #979797;
    margin-left: 850px;
    margin-top: -145px;
      width: 200px;
      height: 30px;
      position: absolute; 
      left: 22%; 
      top: 81%; 
      transform: translate(-50%, -50%); 
      padding-top: 7px;
      padding-left: 100px;
      z-index: 9999; 
      white-space: nowrap;
    }

.emp {
    position: absolute;
    top: 470px;
    left: 1200px;
    width: 360px;
    height: 50px;
    background-color: #D9D9D9;
    z-index: 9999; 
}
.emp2 {
    position: absolute;
    top: 540px;
    left: 1200px;
    width: 360px;
    height: 50px;
    background-color: #D9D9D9;
    z-index: 9999; 
}
.emp3 {
    position: absolute;
    top: 610px;
    left: 1200px;
    width: 360px;
    height: 50px;
    background-color: #D9D9D9;
    z-index: 9999; 
}




.texto {
    width: 380px; 
    height: 250px; 
    background-color: #2E2C2C; 
    margin-left: 60px; 
    margin-top: 125px; 
    border: 2px solid #333; 
    border-radius: 5px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    color: #979797;
    font-family: 'montserrat', sans-serif;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 35px; 
}


.rec1 {
    color: #979797;
      width: 200px;
      height: 30px;
      position: absolute; 
      left: 22%; 
      top: 41%; 
      transform: translate(-50%, -50%); 
      padding-top: 7px;
      padding-left: 100px;
      z-index: 9999; 
    }

.rec2 {
    color: #979797;
      width: 200px;
      height: 30px;
      position: absolute; 
      left: 22%; 
      top: 81%; 
      transform: translate(-50%, -50%); 
      padding-top: 7px;
      padding-left: 100px;
      z-index: 9999; 
      white-space: nowrap;
    }

    .h1 {
    color: #979797;
    width: 200px;
    height: 30px;
    position: absolute; 
    left: 50px; /* Ajusta la posición left según necesites */
    top: 50px; /* Ajusta la posición top según necesites */
    transform: translate(-50%, -50%); /* Centra el elemento */
    padding-top: 7px;
    padding-left: 100px;
    z-index: 9999; /* Asegura que esté encima de otros elementos si es necesario */
    white-space: nowrap; /* Evita que el texto se divida en varias líneas */
}





  </style>
  