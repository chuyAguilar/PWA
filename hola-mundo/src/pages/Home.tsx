import React from "react";
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import SplashScreen from "../components/login"; // Importamos el componente

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <SplashScreen /> {/* Mostramos el componente en la Home */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
