import { toast } from 'react-toastify';

import { AxiosAPI } from "../AxiosConfig"

const token = localStorage.getItem("jwtToken")

export async function getVoluntaries() {
  try {
    const response = await AxiosAPI.get("/voluntaries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.status) {
      case 200:
        return response.data.voluntaries
        break;
      default:
        break;
    }

  } catch (error) {
    if (error.message.includes("404")) {

    } else {
      console.log(error)
    }
  }
}
export async function getBeneficiaries() {
  try {
    const response = await AxiosAPI.get("/beneficiaries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.status) {
      case 200:
        return response.data.beneficiaries
        break;
      default:
        break;
    }

  } catch (error) {
    if (error.message.includes("404")) {
      setData([])
    } else {
      console.log(error)
    }
  }
}
export async function getCompanies() {
  try {
    const response = await AxiosAPI.get("/companies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.status) {
      case 200:
        return response.data.companies
        break;
      default:
        break;
    }

  } catch (error) {
    if (error.message.includes("404")) {
      setData([])
    } else {
      console.log(error)
    }
  }
}
export async function deleteData(selectedTable, id) {
  try {
    await toast.promise(
      AxiosAPI.delete(`/${selectedTable}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }), {
      pending: 'Excluindo...',
      success: 'Excluído com Sucesso!',
      error: 'Erro ao excluir!'
    })

    switch (selectedTable) {
      case "voluntaries":
        getVoluntaries()
        break;
      case "beneficiaries":
        await getBeneficiaries()
        break;
      case "companies":
        await getCompanies()
        break;
      default:
        location.reload()
        break;
    }

  } catch (error) {
    console.log(error)
  }
}


export async function getDataById(selectedTable, id) {
  try {
    const response = await AxiosAPI.get(`/${selectedTable}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    switch (response.status) {
      case 200:
        if (selectedTable === "voluntaries") {
          return(response.data.voluntary)
        } else if (selectedTable === "beneficiaries") {
          return(response.data.beneficiary)
        } else if (selectedTable === "companies") {
          return(response.data.company)
        }
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error)
  }
}


export async function updateData(selectedTable, dataId, newData) {
  try {
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
        console.log("selectedTable possui um valor inválido")
        break;
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postData(selectedTable, data) {
  try {
    let response; 
    switch (selectedTable) {
      case "voluntaries":
        response = await AxiosAPI.post(`/voluntaries`, data);
        break;
      case "beneficiaries":
        response = await AxiosAPI.post(`/beneficiaries`, data);
        break;
      case "companies":
        response = await AxiosAPI.post(`/companies`, data);
        break;
      default:
        console.log("selectedTable possui um valor inválido")
        break;
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}