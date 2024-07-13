<template>
    <div id="app">
      <aside class="sidebar">
        <div class="logo">
        </div>
        <nav>
        </nav>
      </aside>
  
      <div class="content">
        <div class="logo1">
          <h1>-Digital Waiter-</h1>
        </div>
  
        <div class="container">
          <nav>
            <div class="buscar">
              <input type="text" placeholder="Adam Schwartz...">
            </div>
            
          </nav>
        </div>
        <div class="cerrar">
            <button class="cerrar1"></button>
        </div>
  
        <main>
          <div class="hero">
            <h1 class="titulo">Mis restaurantes</h1>
          </div>
        </main>
  
        <div class="agregar">
          <button class="agregar1">Agregar Restaurante</button>
        </div>
  
        <footer>
            <div class="boton1">
                <button class="btn-small1"></button>
             </div>
                <div class="boton2">
                <button class="btn-small2"></button>
          </div>
        </footer>
      </div>
    </div>
  </template>

<script>
</script>
  
  <style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: Arial, sans-serif;
  background-color: #141313;
  color: #fff;
}
  #app {
    display: flex;
    min-height: 100vh;
  }
  
  .logo h1 {
    font-size: 2.5em;
    position: relative; /* Asegura que el posicionamiento funcione */
    z-index: 9999; /* Ajusta el valor según la necesidad para enviarlo al frente */
}

  
  .logo h1 {
    font-size: 2.5em;
    position: relative;
  }
  .buscar{
    margin-left: 1210px;
  }

  .content {
    flex: 1;
    padding: 20px;
  }
  
  .container {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px 100px;
    text-align: center;
    position: relative;
    top: -58px;
    margin-left: -20px;
  }
  
  .usuario {
    display: flex;
    align-items: center;
  }
  
  .usuario img {
    width: 25px;
    margin-top: -10px;
    margin-right: 10px; /* Ajusta el margen para la notificación */
  }
  
  .hero {
    text-align: center;
    margin-top: -180px;
    margin-right: 1000px;
  }

  .hero::after {
  content: "";
  display: block;
  width: 80%; 
  height: 1px; 
  background-color: #ffffff; 
  position: absolute;
  bottom: 550px; 
  left: 50%; 
  transform: translateX(-50%); 
  margin-top: 100px; 
}
  .titulo {
    font-size: 2em;
  }
  
  .agregar {
    text-align: center;
    margin-top: 20px;
  }
  
  .agregar1 {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff6f00;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 70px;
    margin-left: 700px;
  }
  
  footer {
    text-align: center;
    margin-top: 50px;
  }

  .cerrar1 {
    width: 25px;
    height: 20px;
    margin-left: 102px; 
    margin-top: 170px;
}

  
  .box {
    display: flex;
    justify-content: center;
    border-color: #007bff;
    width: 100px;
    height: 100px;
    
  }
  
  .mesas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .mesa {
    margin: 10px;
    width: 100px;
    height: 100px;
  }
  
  .texto-sobre-imagen,
  .texto2 {
    text-align: center;
  }
  
  .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.boton1, .boton2 {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 40px;
  height: 40px; 
}

.btn-small1,
.btn-small2 {
  width: 100%; 
  height: 100%; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 900px;
}

.btn-small1 {
  background-color: #007bff;
}

.btn-small2 {
  background-color: #28a745;
}
  </style>

