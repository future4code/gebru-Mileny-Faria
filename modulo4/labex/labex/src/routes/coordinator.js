export const goToLogin = (navigate) => {
    navigate("/login")
  }
  
export const goToListTrips = (navigate) => {
  navigate("/trips/list")

}

export const goBack = (navigate) => {
    navigate(-1)
  }


  export const goToApplicationForm = (navigate) => {
    navigate("/trips/application")
  }

  export const goToAdminPage = (navigate) => {
    navigate("/admin/trips/list")
  }

  export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create")
  }

  export const gotToDetailsTrip = (navigate) => {
    navigate("/admin/trips/:id")
  }

  export const goToHomePage = (navigate) => {
    navigate("/")
  }

