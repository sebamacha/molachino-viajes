import React, { useState } from "react";

import Inicio from "./component/inicio";
import Empresa from "./component/empresa";
import Egresados from "./component/egresados";
import Contacto from "./component/contacto";
import Panel from "./component/panel";
import Escuela from "./component/escuela";
import Registro from "./component/registro";
import MultiplesImagenes from "./component/MultiplesImagenes";
import Master from "./component/master";
import Footer from "./component/footer";
import Navbar from "./component/Navbar";

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const [showEscuela, setShowEscuela] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [showMultiplesImagenes, setShowMultiplesImagenes] = useState(false);
  const [showMaster, setShowMaster] = useState(false);

  return (
    <div>
      <Navbar />
      <Inicio />
      <Empresa />
      <Egresados />
      <Contacto />

      {showPanel && <Panel />}
      {showEscuela && <Escuela />}
      {showRegistro && <Registro />}
      {showMultiplesImagenes && <MultiplesImagenes />}
      {showMaster && <Master />}

      <Footer />
    </div>
  );
}

export default App;
