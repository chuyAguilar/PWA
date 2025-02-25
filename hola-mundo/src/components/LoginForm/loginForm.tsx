// Login.jsx
// author: 'nombre de alumno'
import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import "./login.css"; 

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const history = useHistory();

  const handleUsernameChange = (event: CustomEvent) => {
    let value = event.detail.value.toLowerCase().replace(/\s/g, "");
    setUsername(value);
    validateFields(value, password);
  };

  const handlePasswordChange = (event: CustomEvent) => {
    let value = event.detail.value.replace(/\s/g, "");
    setPassword(value);
    validateFields(username, value);
  };

  const validateFields = (user: string, pass: string) => {
    setIsValid(user.length > 0 && pass.length > 0);
  };

 // Acción para simular login exitoso y redirigir a LoadingLoginSuccess
const handleLogin = () => {
  if (username === "admin" && password === "admin") {
    history.push("/loading-login-success");
  } else {
    alert("Credenciales incorrectas. Intenta con admin/admin");
  }
};


  // (Opcional) Acción para "Forgot Password"
  const handleForgotPassword = () => {
    alert("Funcionalidad de recuperar contraseña");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>

            {/* Input de Email o Username */}
            <IonItem lines="none" className="custom-lines">
              <IonLabel position="stacked">Email / Username</IonLabel>
              <IonInput
                value={username}
                onIonInput={handleUsernameChange}
                type="text"
                placeholder="Ingresa tu usuario"
                required
              />
            </IonItem>

            {/* Input de Password */}
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

            {/* Botón de Login */}
            <IonButton
              expand="block"
              disabled={!isValid}
              className="login-button"
              onClick={handleLogin}  // Se llama a handleLogin al hacer clic
            >
              Log in
            </IonButton>

            {/* Texto para ir a la vista de registro */}
            <p className="register-link">
              Don’t have an account?{" "}
              <IonButton fill="clear" routerLink="/register">
                Register
              </IonButton>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
