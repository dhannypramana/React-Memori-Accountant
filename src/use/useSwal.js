import Swal from "sweetalert2";

const Custom = (title, html) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title,
      width: '800px',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#0ea5e9',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Submit',
      html,
    }).then(res => {
      if (res.isConfirmed) {
        resolve(res)
      }
    }).catch(e => {
      reject(e)
    })
  });
}

const Toast = (msg) => {
  Swal.fire(msg)
}

export {
  Custom,
  Toast
}
