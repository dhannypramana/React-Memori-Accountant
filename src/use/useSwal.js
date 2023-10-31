import Swal from "sweetalert2";

const Toast = (title, icon = "success") => {
  Swal.fire({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 1750,
    timerProgressBar: true,
    title,
    icon
  })
}

const Confirm = (title, text) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit!'
    })
      .then(result => {
        if (result.isConfirmed) {
          resolve(result)
        }
      })
      .catch(e => {
        reject(e)
      })
  })
}

export {
  Confirm,
  Toast
}
