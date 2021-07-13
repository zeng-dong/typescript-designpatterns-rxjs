import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from './external';

name$.subscribe(value => console.log(value));

//storeDataOnServer("new value").subscribe(value => console.log(value));

// prior to rxjs7 style
storeDataOnServerError("new value").subscribe(
      value => console.log(value),
      error => console.log('Error when saving: ', error.message)
    );