import { useEffect,useState } from "react";
import { getinscritos } from "../../services/servicesEventos";

function Voluntarios() {
  const [voluntariados,setVoluntariados] = useState([]);

  useEffect(()=>{
    async function traerVoluntariados() {
      const peticion = await getinscritos()
      setVoluntariados(peticion)
    }
    traerVoluntariados()
  },[])
  return (
    <section className="voluntarios">
      <h3>Voluntarios Inscritos</h3>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Lugar</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {voluntariados.map((v)=>{
            return(
              <tr key={v.id}>
                <td>{v.fecha}</td>
                <td>{v.lugar}</td>
                <td>{v.estado}</td>
              </tr>
            )
          })}
         
        </tbody>
      </table>
    </section>
  );
}

export default Voluntarios;
