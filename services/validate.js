const validateForm = (form) => {
  let flag = Object.values(form).every(item => item.length > 0);
  return flag;
}

export default {
  validateForm
}
