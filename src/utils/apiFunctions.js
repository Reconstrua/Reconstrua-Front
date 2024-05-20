import { toast } from 'react-toastify';
import { AxiosAPI } from "../AxiosConfig";

export async function getVoluntaries() {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await AxiosAPI.get("/voluntaries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    switch (response.status) {
      case 200:
        return response.data.voluntaries;
      default:
        throw new Error('Unexpected response status');
    }
  } catch (error) {
    throw error;
  }
}

export async function getBeneficiaries() {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await AxiosAPI.get("/beneficiaries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    switch (response.status) {
      case 200:
        return response.data.beneficiaries;
      default:
        throw new Error('Unexpected response status');
    }
  } catch (error) {
    throw error
  }
}

export async function getCompanies() {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await AxiosAPI.get("/companies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    switch (response.status) {
      case 200:
        return response.data.companies;
      default:
        throw new Error('Unexpected response status');
    }
  } catch (error) {
    throw error
  }
}

export async function deleteData(selectedTable, id) {
  try {
    const token = localStorage.getItem("jwtToken");
    await toast.promise(
      AxiosAPI.delete(`/${selectedTable}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }), {
      pending: 'Excluindo...',
      success: 'Excluído com Sucesso!',
      error: 'Erro ao excluir!'
    });

    switch (selectedTable) {
      case "voluntaries":
        return await getVoluntaries();
      case "beneficiaries":
        return await getBeneficiaries();
      case "companies":
        return await getCompanies();
      default:
        return null;
    }

  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getDataById(selectedTable, id) {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await AxiosAPI.get(`/${selectedTable}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    switch (response.status) {
      case 200:
        if (selectedTable === "voluntaries") {
          return response.data.voluntary;
        } else if (selectedTable === "beneficiaries") {
          return response.data.beneficiary;
        } else if (selectedTable === "companies") {
          return response.data.company;
        }
      default:
        throw new Error('Unexpected response status');
    }
  } catch (error) {
    throw error
  }
}

export async function updateData(selectedTable, dataId, newData) {
  try {
    const token = localStorage.getItem("jwtToken");
    let response;
    switch (selectedTable) {
      case "voluntaries":
        response = await toast.promise(
          AxiosAPI.put(`/voluntaries/${dataId}`, newData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }), {
          pending: 'Atualizando...',
          success: 'Atualizado com sucesso!',
          error: 'Erro ao atualizar!'
        });
        break;
      case "beneficiaries":
        response = await toast.promise(
          AxiosAPI.put(`/beneficiaries/${dataId}`, newData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }), {
          pending: 'Atualizando...',
          success: 'Atualizado com sucesso!',
          error: 'Erro ao atualizar!'
        });
        break;
      case "companies":
        response = await toast.promise(
          AxiosAPI.put(`/companies/${dataId}`, newData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }), {
          pending: 'Atualizando...',
          success: 'Atualizado com sucesso!',
          error: 'Erro ao atualizar!'
        });
        break;
      default:
        throw new Error("selectedTable possui um valor inválido");
    }
    return response;
  } catch (error) {
    throw error
  }
}

export async function postData(selectedTable, data) {
  try {
    const token = localStorage.getItem("jwtToken");
    let response;
    switch (selectedTable) {
      case "voluntaries":
        response = await toast.promise(
          AxiosAPI.post("/voluntaries", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),{
            pending: 'Enviando...',
            success: 'Enviado com sucesso!',
            error: 'Erro ao Enviar!'
          });
        break;
      case "beneficiaries":
        response = await toast.promise(
          AxiosAPI.post("/beneficiaries", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),{
            pending: 'Enviando...',
            success: 'Enviado com sucesso!',
            error: 'Erro ao Enviar!'
          });
        break;
      case "companies":
        response = await toast.promise(
          AxiosAPI.post("/companies", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),{
            pending: 'Enviando...',
            success: 'Enviado com sucesso!',
            error: 'Erro ao Enviar!'
          });
        break;
      default:
        throw new Error("selectedTable possui um valor inválido");
    }
    return response;
  } catch (error) {
    throw error
  }
}

