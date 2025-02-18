// App.tsx
// author: 'nombre de alumno'

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import LoadingInit from './components/LoadingInit/LoadingInit';
import LoadingLoginSuccess from './components/LoadingLoginSuccess/LoadingLoginSuccess';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import RegisterPage from './pages/Register/RegisterPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* Pantalla de carga inicial */}
          <Route exact path="/loading-init" component={LoadingInit} />

          {/* Pantalla de Login */}
          <Route exact path="/login" component={Login} />

          {/* Loading tras login exitoso */}
          <Route exact path="/loading-login-success" component={LoadingLoginSuccess} />

          {/* Home */}
          <Route exact path="/home" component={Home} />

          {/* Página de Registro */}
          <Route exact path="/register" component={RegisterPage} />

          {/* Redirige la raíz a la pantalla de carga inicial */}
          <Route exact path="/" render={() => <Redirect to="/loading-init" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
