Backend - API
---
## Desenvolvimento
- Linguagem server-side: Node.js
- Banco de Dados: MongoDB
- Testes: Tape
- Ferramentas: 
1. Postman (para testar as requisições ao servidor)
2. Visual Studio Code (para editar o código)

## Instalação
- `npm install`
- Modo produção /dist with `npm run build` or `yarn run build`
- Modo dev `npm run dev` or `yarn run dev`
- URL do banco de dados no arquivo `.env`

### API's
- /bosts
>1. GET `api/bosts` - Retorna todos os bosts
```
REQUEST
Parâmetros: nenhum

RESPONSE
Data: [
    { _id: "5d12c47519f5a020b4ca6ca2", name: "Bot"}, 
    { _id: "5d12c51619f5a020b4ca6ca5", name: "Bot2"}, 
]
```
>2. GET `api/bosts/:id` - Retorna um bot buscando pelo id
```
REQUEST
Parâmetros: { id: [String] } [query]

RESPONSE
Data: { _id: "5d12c47519f5a020b4ca6ca2", name: "Bot"}
    
```
>3. POST `api/bosts` - Cria um novo bost
```
REQUEST
Parâmetros: { name: [String] } [body]
Headers: { Content-type: application/x-www-form-urlencoded }

RESPONSE
Data: { _id: "5d12c47519f5a020b4ca6ca2", name: "Bot"}
    
```
>4. PUT `api/bosts/:id` - Atualiza um bost
```
REQUEST
Parâmetros: { id: [String] } [query]

RESPONSE
Data: { _id: "5d12c47519f5a020b4ca6ca2", name: "Bot"}
    
```

>5. DELETE `api/bosts/:id` - Remove um bost
```
REQUEST
Parâmetros: { id: [String] } [query]

RESPONSE
Data: {
    status: 'success',
    message: 'Bot deleted!',
}
    
```


- /messages
>1. GET `api/messages` - Retorna todas as mensagens
```
REQUEST
Parâmetros: nenhum

RESPONSE
Data: [{"conversationId":"5d12c47519f5a020b4ca6ca2","from":null,"to":null,"_id":"5d12c48a19f5a020b4ca6ca3","timestamp":"2019-06-26T01:04:10.071Z","text":"Hello World","__v":0},{"conversationId":"5d12c47519f5a020b4ca6ca2","from":null,"to":null,"_id":"5d12c49e19f5a020b4ca6ca4","timestamp":"2019-06-26T01:04:30.439Z","text":"Ola mundo","__v":0},
]
```
>2. GET `api/messages?conversationId=:conversationId` - Retorna todas a mensagens de uma conversa
```
REQUEST
Parâmetros: { conversationId : [String] } [query]

RESPONSE
Data: [{"conversationId":"5d12c47519f5a020b4ca6ca2","from":null,"to":null,"_id":"5d12c48a19f5a020b4ca6ca3","timestamp":"2019-06-26T01:04:10.071Z","text":"Hello World","__v":0},{"conversationId":"5d12c47519f5a020b4ca6ca2","from":null,"to":null,"_id":"5d12c49e19f5a020b4ca6ca4","timestamp":"2019-06-26T01:04:30.439Z","text":"Ola mundo","__v":0},
]
```
>3. GET `api/messages/:id` - Retorna uma mensagem buscando pelo id
```
REQUEST
Parâmetros: { id : [String] } [query]

RESPONSE
Data: {"conversationId":"5d12c47519f5a020b4ca6ca2","from":null,"to":null,"_id":"5d12c48a19f5a020b4ca6ca3","timestamp":"2019-06-26T01:04:10.071Z","text":"Hello World","__v":0}
```
>4. POST `api/messages` - Cria uma nova mensagem
```
REQUEST
Parâmetros: { 
    text: [String]!, 
    conversationId: [String], 
    from: [String], 
    to: [String] 
    } [body]
Headers: { Content-type: application/x-www-form-urlencoded }

RESPONSE
Data: {"conversationId":"5d12c47519f5a020b4ca6ca2","from":null,"to":null,"_id":"5d12c48a19f5a020b4ca6ca3","timestamp":"2019-06-26T01:04:10.071Z","text":"Hello World","__v":0}
    
```