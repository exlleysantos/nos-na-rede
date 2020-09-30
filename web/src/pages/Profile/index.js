import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

/* Importação de Estilos CSS */
import './styles.css';
/* Importação de Imagens */
import logoImg from '../../assets/logo.svg';
/* Importação de Icone */
import { FaPowerOff, FaTrash } from 'react-icons/fa';

const Profile = () => {
    return (
        <h1>PROFILE</h1>
    )
}

export default Profile;

// export default function Profile() {
//     const [incidents, setIncidents] = useState([]);
//     const ongId = localStorage.getItem('ongId');
//     const ongName = localStorage.getItem('ongName');
//     const history = useHistory();

//     useEffect(() => {
//         api.get('profile', {
//             headers: {
//                 Authorization: ongId,
//             }
//         }).then(response => {
//             setIncidents(response.data);
//         })
//     }, [ongId]);

//     async function handleDeleteIncident(id){
//         try{
//             await api.delete(`incidents/${id}`, {
//                 headers: {
//                     Authorization: ongId,
//                 }
//             });
//             setIncidents(incidents.filter(incident => incident.id !== id));
//         } catch(err){
//             alert("Não foi possível deletar!");
//         }
//     };

//     function handleLogout(){
//         localStorage.clear();
//         history.push('/');
//     }

//     return (
//         <div className="profile-container">
//             <header>
//                 <img src={logoImg} alt="logo" />
//                 <span>Bem vinda, {ongName}</span>
//                 <Link className="button" to="/incidents/new">
//                     Cadastrar Novo Caso
//                 </Link>
//                 <button type="button" onClick={() => handleLogout()}>
//                     <FaPowerOff size="18" color="#E02041" />
//                 </button>
//             </header>

//             <h1>Casos Cadastrados</h1>

//             <ul>
//                 {incidents.map(incident => (
//                     <li key={incident.id}>
//                         <strong>CASO:</strong>
//                         <p>{incident.title}</p>
//                         <strong>DESCRIÇÃO:</strong>
//                         <p>{incident.description}</p>
//                         <strong>VALOR:</strong>
//                         <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
//                         <button type="button" onClick={ () => handleDeleteIncident(incident.id)}>
//                             <FaTrash size="20" />
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }