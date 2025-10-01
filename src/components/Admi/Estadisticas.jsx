import { useEffect, useState } from "react";
import { getUsuarios, getEventos, getinscritos } from "../../services/servicesEventos";
import {BarChart,Bar,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer,PieChart,Pie,Cell,} from "recharts";

function Estadisticas() {
  const [usuarios, setUsuarios] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataUsuarios = await getUsuarios();
      const dataEventos = await getEventos();
      const dataInscripciones = await getinscritos();
      setUsuarios(dataUsuarios);
      setEventos(dataEventos);
      setInscripciones(dataInscripciones);
    }
    fetchData();
  }, []);

  // 📊 Datos para barras
  const dataBarras = [
    { name: "Usuarios", cantidad: usuarios.length },
    { name: "Eventos", cantidad: eventos.length },
    { name: "Eventos activos", cantidad: eventos.filter((e) => e.estado === "activo").length },
    { name: "Inscripciones", cantidad: inscripciones.length },
  ];
  return (
    <div className="card">
      <h3>📊 Estadísticas Generales</h3>

      {/* Gráfico de barras */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dataBarras}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="cantidad" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Estadisticas;

