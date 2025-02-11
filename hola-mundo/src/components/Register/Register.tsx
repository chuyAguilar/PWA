import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import "./Register.css"; // Importamos el CSS con estilos similares al login

interface Registration {
  email: string;
  fullName: string;
  username: string;
  password: string;
  birthDate: string;
}

const Register: React.FC = () => {
  // Estados de cada campo
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // Estado para guardar múltiples registros
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  // Estados para manejo de errores y validez global
  const [errors, setErrors] = useState<{
    email?: string;
    fullName?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    birthDate?: string;
  }>({});

  const [formValid, setFormValid] = useState(false);

  // Se ejecuta cada vez que cambie alguno de los inputs, validando el formulario
  useEffect(() => {
    validateForm();
  }, [email, fullName, username, password, confirmPassword, birthDate]);

  // Funciones para actualizar campos con sus restricciones:
  const handleEmailChange = (event: CustomEvent) => {
    // Elimina espacios
    const value = event.detail.value.replace(/\s/g, "");
    setEmail(value);
  };

  const handleFullNameChange = (event: CustomEvent) => {
    // Mantener espacios, pero forzar a mayúsculas
    const value = event.detail.value.toUpperCase();
    setFullName(value);
  };

  const handleUsernameChange = (event: CustomEvent) => {
    // Sin espacios
    const value = event.detail.value.replace(/\s/g, "");
    setUsername(value);
  };

  const handlePasswordChange = (event: CustomEvent) => {
    // Sin espacios
    const value = event.detail.value.replace(/\s/g, "");
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event: CustomEvent) => {
    // Sin espacios
    const value = event.detail.value.replace(/\s/g, "");
    setConfirmPassword(value);
  };

  const handleBirthDateChange = (event: CustomEvent) => {
    // Fecha (no suele incluir espacios, pero por consistencia)
    const value = event.detail.value.replace(/\s/g, "");
    setBirthDate(value);
  };

  // Validaciones del formulario
  const validateForm = () => {
    const newErrors: any = {};
    let valid = true;

    // Validar email
    if (!email) {
      newErrors.email = "El correo es requerido";
      valid = false;
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Correo inválido";
        valid = false;
      }
    }

    // Validar nombre completo
    if (!fullName) {
      newErrors.fullName = "El nombre completo es requerido";
      valid = false;
    }

    // Validar username
    if (!username) {
      newErrors.username = "El usuario es requerido";
      valid = false;
    }

    // Validar contraseña
    if (!password) {
      newErrors.password = "La contraseña es requerida";
      valid = false;
    }

    // Validar confirmación de contraseña
    if (!confirmPassword) {
      newErrors.confirmPassword = "Debes confirmar la contraseña";
      valid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      valid = false;
    }

    // Validar fecha de nacimiento
    if (!birthDate) {
      newErrors.birthDate = "La fecha de nacimiento es requerida";
      valid = false;
    }

    setErrors(newErrors);
    setFormValid(valid);
  };

  // Acción al pulsar "Registrarse"
  const handleRegister = () => {
    if (!formValid) return;

    const newRegistration: Registration = {
      email,
      fullName,
      username,
      password,
      birthDate,
    };

    // Agregar al array de registros
    setRegistrations([...registrations, newRegistration]);

    // Limpiar campos
    setEmail("");
    setFullName("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setBirthDate("");

    // Notificar (en proyecto real se podría mostrar un modal o redirigir)
    alert("Registro exitoso");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Contenedor con fondo e imagen, igual al login */}
        <div className="register-container">
          {/* Caja translúcida (glass) */}
          <div className="register-box">
            <h2>Register</h2>

            {/* Email */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                value={email}
                onIonInput={handleEmailChange}
                type="email"
                placeholder="Ingresa tu correo"
                required
              />
            </IonItem>
            {errors.email && <p className="error-message">{errors.email}</p>}

            {/* Nombre completo */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Full Name</IonLabel>
              <IonInput
                value={fullName}
                onIonInput={handleFullNameChange}
                type="text"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </IonItem>
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}

            {/* Usuario */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput
                value={username}
                onIonInput={handleUsernameChange}
                type="text"
                placeholder="Ingresa tu usuario"
                required
              />
            </IonItem>
            {errors.username && <p className="error-message">{errors.username}</p>}

            {/* Contraseña */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                value={password}
                onIonInput={handlePasswordChange}
                type="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </IonItem>
            {errors.password && <p className="error-message">{errors.password}</p>}

            {/* Confirmar Contraseña */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput
                value={confirmPassword}
                onIonInput={handleConfirmPasswordChange}
                type="password"
                placeholder="Confirma tu contraseña"
                required
              />
            </IonItem>
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}

            {/* Fecha de nacimiento */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Birth Date</IonLabel>
              <IonInput
                value={birthDate}
                onIonInput={handleBirthDateChange}
                type="date"
                placeholder="Ingresa tu fecha de nacimiento"
                required
              />
            </IonItem>
            {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}

            {/* Botón para registrar */}
            <IonButton
              expand="block"
              disabled={!formValid}
              className="register-button"
              onClick={handleRegister}
            >
              Sign up
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
