import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { close } from "ionicons/icons";

const login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleUsernameChange = (event: CustomEvent) => {
    let value = event.detail.value.toLowerCase(); // Convierte a minúsculas
    value = value.replace(/\s/g, ""); // Elimina espacios
    // value = value.trim();
    setUsername(value);
    validateFields(value, password);
  };

  const handlePasswordChange = (event: CustomEvent) => {
    let value = event.detail.value.replace(/\s/g, ""); // Elimina espacios
    setPassword(value);
    validateFields(username, value);
  };

  const validateFields = (user: string, pass: string) => {
    setIsValid(user.length > 0 && pass.length > 0);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div className="splash-container">
          <h2>Bienvenido</h2>

          {/* Input de Username */}
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              value={username}
              onIonInput={handleUsernameChange}
              type="text"
              placeholder="Ingresa tu usuario"
              required
            />
          </IonItem>

          {/* Input de Password */}
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              value={password}
              onIonInput={handlePasswordChange}
              type="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </IonItem>

          {/* Botón para mostrar la Modal */}
          <IonButton expand="full" disabled={!isValid} onClick={() => setShowModal(true)}>
            Ver Credenciales
          </IonButton>

          {/* Modal para mostrar la información */}
          <IonModal isOpen={showModal}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Credenciales</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setShowModal(false)}>
                    <IonIcon icon={close} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <p><strong>Username:</strong> {username}</p>
              <p><strong>Password:</strong> {password}</p>
              <IonButton expand="full" onClick={() => setShowModal(false)}>
                Cerrar
              </IonButton>
            </IonContent>
          </IonModal>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default login;
