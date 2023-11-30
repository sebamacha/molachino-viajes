import { useState } from "react";
import Dropzone from "react-dropzone";
import { Container } from "reactstrap";
import "../index.css";
import axios from "axios";
import { Padding } from "@mui/icons-material";

const MultiplesImagenes = (props) => {
  // Declaración de estados iniciales
  const [image, setImage] = useState({ Array: [] });
  const [loading, setLoading] = useState("");

  // Función para manejar la caída de imágenes en el área de Dropzone
  const handleDrop = (files) => {
    // Crear un objeto FormData para enviar imágenes al servidor
    const formData = new FormData();

    // Mapear y agregar cada archivo al objeto FormData
    const uploaders = files.map((file) => {
      formData.append("file", file);
      formData.append("tags", "codeinfuse, medium, gist");
      formData.append("upload_preset", "escuela");
      formData.append("api_key", "632948737713239");
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Establecer el estado de carga en "true"
      setLoading("true");

      // Realizar una solicitud a Cloudinary para cargar la imagen
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/drhivw7p6/image/upload",
          formData
        )
        .then((Response) => {
          // Manejar la respuesta de Cloudinary
          const data = Response.data;

          const fileURL = data.secure_url;
          let specificArrayInObject = image.Array;
          specificArrayInObject.push(fileURL);
          const newobj = { ...image, specificArrayInObject };
          setImage(newobj);
          console.log(image);
        });
    });

    // Esperar a que todas las solicitudes se completen antes de cambiar el estado de carga
    axios.all(uploaders).then(() => {
      setLoading("false");
    });
  };
  //funcion para mostrar las imagenes subidas
  function imagePreview() {
    if (loading === true) {
      return <h3>cargando imagenes</h3>;
    }
    if (loading === false) {
      return (
        <h3>
          {image.Array.length <= 0
            ? "no hay imágenes cargadas"
            : image.Array.map((item, index) => (
                <img
                  alt="imagen"
                  style={{
                    width: "125px",
                    height: "70px",
                    backgroundSize: "cover",
                    paddingRight: "15px",
                  }}
                  src={item}
                  key={index} // Agrega una clave única para cada imagen
                />
              ))}
        </h3>
      );
    }
  }

  return (
    <div>
      <Container>
        <h1 className="text-center">Sube tus imágenes aquí</h1>
        <Dropzone
          className="dropzone"
          onDrop={handleDrop}
          onChange={(e) => setImage(e.target.value)}
          value={image}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <span>CLICK PARA SUBIR IMÁGENES</span>
              </div>
            </section>
          )}
        </Dropzone>
        {imagePreview()}
      </Container>
    </div>
  );
};

export default MultiplesImagenes;
