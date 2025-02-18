// Home.tsx
// author: 'nombre de alumno'

import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div className="home-container">
          <h2>¡Bienvenido a la vista Home!</h2>
          <p>Aquí puedes comenzar a agregar contenido para tu aplicación.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
