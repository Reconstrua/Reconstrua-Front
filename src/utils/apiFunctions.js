import { toast } from 'react-toastify';

import { AxiosAPI } from "../AxiosConfig"

const token = localStorage.getItem("jwtToken")

export async function getVoluntaries(setData) {
  try {
    const response = await AxiosAPI.get("/voluntaries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.status) {
      case 200:
        setData(response.data.voluntaries)
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
export async function getBeneficiaries(setData) {
  try {
    const response = await AxiosAPI.get("/beneficiaries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.status) {
      case 200:
        setData(response.data.beneficiaries)
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
export async function getCompanies(setData) {
  try {
    const response = await AxiosAPI.get("/companies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.status) {
      case 200:
        setData(response.data.companies)
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
export async function deleteData(dataType, dataId, setData) {
  try {
    await toast.promise(
      AxiosAPI.delete(`/${dataType}/${dataId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }), {
      pending: 'Excluindo...',
      success: 'Excluído com Sucesso!',
      error: 'Erro ao excluir!'
    })

    switch (dataType) {
      case "voluntaries":
        await getVoluntaries(setData)
        console.log("Get do DeleteData")
        break;
      case "beneficiaries":
        await getBeneficiaries(setData)
        break;
      case "companies":
        await getCompanies(setData)
        break;
      default:
        location.reload()
        break;
    }

  } catch (error) {
    console.log(error)
  }
}


export async function getDataById(dataType, dataId, setData) {
  try {
    console.log(`/${dataType}/${dataId}`)
    const response = await AxiosAPI.get(`/${dataType}/${dataId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    switch (response.status) {
      case 200:
        console.log(`${response.data.voluntary}`)
        if (dataType === "voluntaries") {
          setData(response.data.voluntary)


        } else if (dataType === "beneficiaries") {
          setData(response.data.beneficiary)
        } else if (dataType === "companies") {
          setData(response.data.company)
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
    let response; //Variavel que é atualizada de acordo com o valor do selectedTable
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