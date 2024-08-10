export const validateName = (name: string) => {
    if (!name) return 'El nombre es obligatorio.';
    return '';
  };
  
  export const validateEmail = (email: string) => {
    if (!email) return 'El correo electrónico es obligatorio.';
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return 'El formato del correo electrónico no es válido.';
    return '';
  };
  
  export const validatePhone = (phone: string) => {
    if (!phone) return 'El celular es obligatorio.';
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) return 'El celular debe tener 10 dígitos.';
    return '';
  };
  
  export const validateMessage = (message: string) => {
    if (!message) return 'El mensaje es obligatorio.';
    return '';
  };
  
  export const validateFormData = (formData: { name: string, email: string, phone: string, message: string }) => {
    const errors: { [key: string]: string } = {};
  
    errors.name = validateName(formData.name);
    errors.email = validateEmail(formData.email);
    errors.phone = validatePhone(formData.phone);
    errors.message = validateMessage(formData.message);
  
    return Object.keys(errors).reduce((acc, key) => {
      if (errors[key]) acc[key] = errors[key];
      return acc;
    }, {} as { [key: string]: string });
  };
  