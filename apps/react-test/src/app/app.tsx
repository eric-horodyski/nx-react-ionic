// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  IonButton,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  setupIonicReact,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact({
  mode: 'ios',
});

export function App() {
  return (
    <div>
      <IonDatetime />
      <IonList>
        <IonItem>
          <IonLabel>Text input</IonLabel>
          <IonInput placeholder="Enter text"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Number input</IonLabel>
          <IonInput type="number" placeholder="000"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Password input</IonLabel>
          <IonInput type="password" value="password"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Email input</IonLabel>
          <IonInput type="email" placeholder="email@domain.com"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Telephone input</IonLabel>
          <IonInput type="tel" placeholder="888-888-8888"></IonInput>
        </IonItem>
      </IonList>
      <IonButton>Default</IonButton>
      <IonButton disabled={true}>Disabled</IonButton>
    </div>
  );
}

export default App;
