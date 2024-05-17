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
    handleError(error);
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
    handleError(error);
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
    handleError(error);
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
    handleError(error);
  }
}

export async function updateData(selectedTable, dataId, newData) {
  try {
    const token = localStorage.getItem("jwtToken");
    let response; 
    switch (selectedTable) {
      case "voluntaries":
        response = await AxiosAPI.put(`/voluntaries/${dataId}`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      case "beneficiaries":
        response = await AxiosAPI.put(`/beneficiaries/${dataId}`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      case "companies":
        response = await AxiosAPI.put(`/companies/${dataId}`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      default:
        throw new Error("selectedTable possui um valor inválido");
    }
    return response;
  } catch (error) {
    handleError(error);
  }
}

export async function postData(selectedTable, data) {
  try {
    const token = localStorage.getItem("jwtToken");
    let response; 
    switch (selectedTable) {
      case "voluntaries":
        response = await AxiosAPI.post(`/voluntaries`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      case "beneficiaries":
        response = await AxiosAPI.post(`/beneficiaries`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      case "companies":
        response = await AxiosAPI.post(`/companies`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        break;
      default:
        throw new Error("selectedTable possui um valor inválido");
    }
    return response;
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('Response error:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request error:', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
  }
}
