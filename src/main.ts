import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';
import {  APOLLO_OPTIONS } from 'apollo-angular';
import { AppComponent } from './app/app.component';


const graphqlUri = 'http://localhost:4000/graphql'; // replace with your GraphQL server endpoint

const apolloClientOptions = {
  link: new HttpLink({ uri: graphqlUri }),
  cache: new InMemoryCache(),
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([])),
    {
      provide: APOLLO_OPTIONS,
      useFactory: () => apolloClientOptions,
    },
  ],
}).catch((err) => console.error(err));
  