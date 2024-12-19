import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ApolloProvider, client } from "./apolloclient"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
