import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Button} from './app/components/button';



bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
