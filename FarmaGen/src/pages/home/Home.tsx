import ListaCategoria from "../../components/categorias/listacategoria/ListaCategoria"

function Home() {
  return (
    <>
       <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "2rem"
                    }}>
                        <h2>Bem-vindo à Drogaria Saúde+</h2>
                        <p>Encontre os melhores medicamentos, cuidados e bem-estar para você e sua família.</p>
                    </div>

                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "1.5rem"
                    }}>
                        <img 
                            src="https://i.imgur.com/E5Z9zCt.png" 
                            alt="Imagem ilustrativa da Drogaria" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
           
        
        <ListaCategoria />
    </>

  )
}

export default Home