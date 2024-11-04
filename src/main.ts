import { bootstrapApplication } from '@angular/platform-browser';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';

import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApolloProvider } from '@apollo/client';

const graphqlUri = 'https://your-graphql-endpoint.com/graphql'; // replace with your GraphQL server endpoint

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: graphqlUri }),
  cache: new InMemoryCache(),
});

  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withInterceptors([])),
      { provide: ApolloProvider, useValue: apolloClient },
    ],
  }).catch((err) => console.error(err));
  