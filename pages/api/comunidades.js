import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response) {
  if(request.method === 'POST'){
    const TOKEN = '8526de707baa8ca3b14f118308d7e3'
    const client = new SiteClient(TOKEN)
  
    const registroCriado = await client.items.create({
        itemType: '968065', //ID do Model de comunidades criado pelo Dato
        ...request.body,
    })
  
    console.log(TOKEN)
    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
      message: 'Ainda não temos nada no GET, mas no POST tem ;)'
  })
}
