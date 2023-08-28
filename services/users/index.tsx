import API from '../../helpers/api'

const getAllDoctors = async() => await API.get(`/usuarios?perfil_acesso=profissional&showAllPatients=true`);
const getSpecsDoctors = async(id) => await API.get(`/usuarios-especialidades?id_usuario=${id}`);
const sendEmail = async(data) => await API.post(`/usuarios/enviar-email`, data);

export {
    getAllDoctors,
    getSpecsDoctors,
    sendEmail
}