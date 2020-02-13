// import React, { Component } from 'react';
// import axios from 'axios';
// import { Helmet } from "react-helmet";
// // import Select from 'react-select';



// export default class GeoRender extends Component {
//     state = {
//         all: '',
//         description: '',
//         entitySelected: '',
//         riscSelected: '',
//         entidadLista: [],
//         currententity: [],
//         currentrisc: [],
//         value: [],
//         EntSegunRiesgo: []
//     }




//     async componentDidMount() {
//         this.getEntity();
//     }

//     getEntity = async () => {
//         const res = await axios.get('http://localhost:4000/api/entity')
//         // const entidades = "features:" + res.data
//         // console.log(entidades)
//         this.setState({
//             // entidadLista: entidades
//             entidadLista: res.data,
//             entitySelected: res.data[0].properties.nombre,
//             riscSelected: res.data[0].properties.riesgo
//         });
//     }
//     // componentDidMount() {
//     //     this.getGeo();
//     // }

//     // getGeo = async () => {
//     //     const res = await axios.get('http://localhost:4000/api/geo');
//     //     this.setState({
//     //         all: res.data
//     //     });

//     currentEntity = (e) => {
//         // window.location.reload(true);
//         e.preventDefault();
//         const entidades = this.state.entidadLista
//         const entidadesNombre = this.state.entitySelected
//         // const currev = this.state.currentevent
//         for (let i = 0; i < entidades.length; i++) {
//             if (entidades[i].properties.nombre === entidadesNombre) {
//                 this.setState({
//                     currententity: entidades[i]
//                 });
//             }
//         }
//     }
//     currentRisc = (e) => {
//         // window.location.reload(true);
//         e.preventDefault();
//         const entidades = this.state.entidadLista
//         const entidadesRiesgo = this.state.riscSelected
//         // const currev = this.state.currentevent
//         for (let i = 0; i < entidades.length; i++) {
//             if (entidades[i].properties.riesgo === entidadesRiesgo) {
//                 this.setState({
//                     currentrisc: entidades[i]
//                 });
//             }
//         }
//     }



//     getElementandSet = (e) => {
//         e.preventDefault(); //cancel reset

//         const valor = document.getElementById('demo').value;
//         const valor2 = document.getElementById('demo2').value;

//         this.setState({
//             all: valor,
//             description: valor2,
//         })
//     }

//     onSubmit = async (e) => {
//         e.preventDefault(); //cancel reset

//         await axios.post('http://localhost:4000/api/geo', {
//             all: this.state.all,
//             description: this.state.description
//         });
//     }




//     onInputChange = (e) => {
//         // e.onClick.target.value = this.currentEvent()
//         this.setState({
//             entitySelected: e.target.value   //input info - e.target.name->depending on the name use a data

//         })
//         // const es = e.target.value
//         // es.onClick = currentEvent()
//         // console.log(this.state.descSelected)
//     }


//     handleChange = (event) => {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit = (event) => {

//         const entidades = this.state.entidadLista
//         const tipoRiesgo = this.state.value
//         const entidadesSegunRiesgo = []
//         console.log(this.state.value)
//         console.log(entidadesSegunRiesgo)

//         // const currev = this.state.currentevent
//         for (let i = 0; i < entidades.length; i++) {
//             for (let j = 0; j < entidades[i].properties.riesgo.length; j++) {
//                 if (entidades[i].properties.riesgo[j] === tipoRiesgo) {
//                     entidadesSegunRiesgo.push(entidades[i])
//                     this.setState({
//                         EntSegunRiesgo: entidadesSegunRiesgo
//                     });
//                     // console.log(entidades[i])
//                     // console.log(entidadesSegunRiesgo)
//                 }
//             }
//         }

//         event.preventDefault();
//     }



//     render() {
//         // const options = [
//         //     // { label: "Incendio", value: "a", isDisabled: true },
//         //     { label: "Incendio", value: "incendio"},
//         //     { label: "Inundación", value: "inundación" },
//         //     { label: "Accidente", value: "accidente" },
//         //     { label: "Amenaza climática", value: "amenaza climática" }
//         // ];

//         return (
//             <div className="">
//                 <Helmet>
//                     {/* <meta charSet="utf-8" />
//                     <title>Title</title> */}
//                     <link rel="stylesheet" href="https://unpkg.com/leaflet@0.7.7/dist/leaflet.css" />
//                     <script src="https://unpkg.com/leaflet@0.7.7/dist/leaflet-src.js"></script>
//                     <link rel="stylesheet" href="https://cdn.rawgit.com/Leaflet/Leaflet.draw/v0.3.0/dist/leaflet.draw.css" />
//                     <script src="https://cdn.rawgit.com/Leaflet/Leaflet.draw/v0.3.0/dist/leaflet.draw-src.js"></script>
//                     <script src="script.js"></script>

//                 </Helmet>

//                 {/* <Select
//                     name="myselect"
//                     options={options}
//                     placeholder= "Elegir Tipo de Evento"
//                 /> */}
//                 <div id="map" className="clase"></div>


//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                    <h3> Elegir Tipo de Evento</h3>
//           <select value={this.state.value} onChange={this.handleChange}>
//                             <option value="elegir">Elegir</option>
//                             <option value="incendio">Incendio</option>
//                             <option value="inundación">Inundación</option>
//                             <option value="accidente">Accidente</option>
//                             <option value="amenaza climática">Amenaza Climática</option>
//                         </select>
//                     </label>

//                     {/* <input id = "co" type="submit"/> */}
//                     <button id="convertirRiesgo" type='submit' style={{ display: "none" }}>
//                         showEvento
//                     </button>
//                     <button id="ir" >Mostrar entidades en Riesgo</button>
//                     {/* <button id="co" type='submit'>
//                             showEvento
//                     </button>
//                     <button id="fer">gggggggggg</button> */}


//                 </form>

//                 <input
//                     // id='ente'
//                     id='enterisc'
//                     className="form-control"
//                     // value={JSON.stringify(this.state.currententity)}
//                     // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
//                     // value={JSON.stringify(this.state.currententity)}
//                     value={JSON.stringify(this.state.EntSegunRiesgo)}
//                     style={{ display: "none" }}
//                     type="text"
//                 />
//                 {/* <button type='submit'>
//                     submit
//                     </button> */}
//                 {/* {JSON.stringify(this.state.currententity)+ "aca"} */}
//                 {/* <button id="convertire" > */}
//                 {/* <button id="convertirRiesgo" >
//                     sendToScript
//                     </button> */}






//                 {/* BUSCAR POR ENTIDAD */}
//                 {/* BUSCAR POR ENTIDAD */}
//                 {/* BUSCAR POR ENTIDAD */}


// <br/>
// <br/>
//                 <h3>Insertar en mapa por entidad:</h3>

//                 <form id="opciones" onSubmit={this.currentEntity}>
//                     {/* SELECT THE USER */}
//                     <div>


//                         <select
//                             // id="convert"
//                             className="form-control"
//                             value={this.state.entitySelected}
//                             onChange={this.onInputChange}
//                             name="entitySelected"
//                         >
//                             {
//                                 this.state.entidadLista.map(nom => (
//                                     <option >
//                                         {nom.properties.nombre}
//                                     </option>
//                                 ))
//                             }
//                         </select>
//                     </div>
//                     <input
//                         id='ente'
//                         className="form-control"
//                         // value={JSON.stringify(this.state.currententity)}
//                         // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
//                         value={JSON.stringify(this.state.currententity)}

//                         type="text"
//                         style={{ display: "none" }}
//                     />
//                     {/* <button type='submit'>
//                         submite
//                     </button> */}
//                     {/* {JSON.stringify(this.state.currententity)+ "aca"} */}
//                     {/* <button id="convertire" >
//                         automático
//                     </button> */}


//                     <button id="convertire" type='submit' style={{ display: "none" }}>
//                         show entidad elegida
//                     </button>
//                     <button id="Xentidad" >Mostrar por entidad elegida</button>
//                 </form>




//                 {/* FIN BUSCAR POR ENTIDAD */}
//                 {/* FIN BUSCAR POR ENTIDAD */}
//                 {/* FIN BUSCAR POR ENTIDAD */}



// <br/>
// <br/>
//                 <h3>Agregar descripción del evento:</h3>
//                 <form onSubmit={this.getElementandSet} >{/*//lo manda al estado */}
//                     <div >
//                         <input
//                             // type="hidden"
//                             style={{ display: "none" }}
//                             id="demo"
//                         />
//                     </div>
//                     <div className="">
//                         <input
//                             // type="text" 
//                             id="demo2"
//                             placeholder="Descripción del evento"
//                         />
//                     </div>
//                     <br/>
//                     <br/>
//                     <button type='submit' id="convert"> {/*//lo mete en el form */}
//                         {/* <button id="convert"> */}
//                         Agrgar datos al informe del evento
//                     </button>

//                 </form>
// <br/>
// <br/>
//                 <form onSubmit={this.onSubmit} >
//                     <button type="submit" className="btn btn-primary">
//                         Finalizar evento
//                     </button>
//                 </form>
//             </div>

//         )

//     }

// }











































import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import Select from 'react-select';



export default class GeoRender extends Component {
    state = {
        all: '',
        description: '',
        entitySelected: '',
        riscSelected: '',
        entidadLista: [],
        currententity: [],
        currentrisc: [],
        value: [],
        EntSegunRiesgo: []
    }




    async componentDidMount() {
        this.getEntity();
    }

    getEntity = async () => {
        const res = await axios.get('http://localhost:4000/api/entity')
        // const entidades = "features:" + res.data
        // console.log(entidades)
        this.setState({
            // entidadLista: entidades
            entidadLista: res.data,
            entitySelected: res.data[0].properties.nombre,
            riscSelected: res.data[0].properties.riesgo
        });
    }
    // componentDidMount() {
    //     this.getGeo();
    // }

    // getGeo = async () => {
    //     const res = await axios.get('http://localhost:4000/api/geo');
    //     this.setState({
    //         all: res.data
    //     });

    currentEntity = (e) => {
        // window.location.reload(true);
        e.preventDefault();
        const entidades = this.state.entidadLista
        const entidadesNombre = this.state.entitySelected
        // const currev = this.state.currentevent
        for (let i = 0; i < entidades.length; i++) {
            if (entidades[i].properties.nombre === entidadesNombre) {
                this.setState({
                    currententity: entidades[i]
                });
            }
        }
    }
    currentRisc = (e) => {
        // window.location.reload(true);
        e.preventDefault();
        const entidades = this.state.entidadLista
        const entidadesRiesgo = this.state.riscSelected
        // const currev = this.state.currentevent
        for (let i = 0; i < entidades.length; i++) {
            if (entidades[i].properties.riesgo === entidadesRiesgo) {
                this.setState({
                    currentrisc: entidades[i]
                });
            }
        }
    }



    getElementandSet = (e) => {
        e.preventDefault(); //cancel reset

        const valor = document.getElementById('demo').value;
        const valor2 = document.getElementById('demo2').value;

        this.setState({
            all: valor,
            description: valor2,
        })
    }

    onSubmit = async (e) => {
        e.preventDefault(); //cancel reset

        await axios.post('http://localhost:4000/api/geo', {
            all: this.state.all,
            description: this.state.description
        });
    }




    onInputChange = (e) => {
        // e.onClick.target.value = this.currentEvent()
        this.setState({
            entitySelected: e.target.value   //input info - e.target.name->depending on the name use a data

        })
        // const es = e.target.value
        // es.onClick = currentEvent()
        // console.log(this.state.descSelected)
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {

        const entidades = this.state.entidadLista
        const tipoRiesgo = this.state.value
        const entidadesSegunRiesgo = []
        console.log(this.state.value)
        console.log(entidadesSegunRiesgo)

        // const currev = this.state.currentevent
        for (let i = 0; i < entidades.length; i++) {
            for (let j = 0; j < entidades[i].properties.riesgo.length; j++) {
                if (entidades[i].properties.riesgo[j] === tipoRiesgo) {
                    entidadesSegunRiesgo.push(entidades[i])
                    this.setState({
                        EntSegunRiesgo: entidadesSegunRiesgo
                    });
                    // console.log(entidades[i])
                    // console.log(entidadesSegunRiesgo)
                }
            }
        }

        event.preventDefault();
    }



    render() {
        // const options = [
        //     // { label: "Incendio", value: "a", isDisabled: true },
        //     { label: "Incendio", value: "incendio"},
        //     { label: "Inundación", value: "inundación" },
        //     { label: "Accidente", value: "accidente" },
        //     { label: "Amenaza climática", value: "amenaza climática" }
        // ];

        return (
            <div className="">
                <Helmet>
                    {/* <meta charSet="utf-8" />
                    <title>Title</title> */}
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@0.7.7/dist/leaflet.css" />
                    <script src="https://unpkg.com/leaflet@0.7.7/dist/leaflet-src.js"></script>
                    <link rel="stylesheet" href="https://cdn.rawgit.com/Leaflet/Leaflet.draw/v0.3.0/dist/leaflet.draw.css" />
                    <script src="https://cdn.rawgit.com/Leaflet/Leaflet.draw/v0.3.0/dist/leaflet.draw-src.js"></script>
                    <script src="script.js"></script>

                </Helmet>

                {/* <Select
                    name="myselect"
                    options={options}
                    placeholder= "Elegir Tipo de Evento"
                /> */}
                <div id="map" className="clase"></div>


{/* BUSCAR POR ENTIDAD */}
                {/* BUSCAR POR ENTIDAD */}
                {/* BUSCAR POR ENTIDAD */}



                <h3>Insertar en mapa por entidad:</h3>

<form id="opciones" onSubmit={this.currentEntity}>
    {/* SELECT THE USER */}
    <div className="form-group">


        <select
            // id="convert"
            className="form-control"
            value={this.state.entitySelected}
            onChange={this.onInputChange}
            name="entitySelected"
        >
            {
                this.state.entidadLista.map(nom => (
                    <option >
                        {nom.properties.nombre}
                    </option>
                ))
            }
        </select>
    </div>
    <input
        id='ente'
        className="form-control"
        // value={JSON.stringify(this.state.currententity)}
        // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
        value={JSON.stringify(this.state.currententity)}

        type="text"
        style={{ display: "none" }}
        
    />





    {/* <button type='submit'>
        submit
    </button> */}
    {/* {JSON.stringify(this.state.currententity)+ "aca"} */}
    {/* <button id="convertire" >
        automático
    </button> */}


<button id="convertire" type='submit' style={{ display: "none" }}>
        show entidad elegida(oculto!)
    </button>
    <button id="Xentidad" >Mostrar por entidad elegida</button>
</form>

<br/>
<br/>


    {/* <button id="ir">show(gg)</button> */}
    {/* <button type='submit'>
            submit
    </button> */}
    {/* <Link to={"/ListEvents"} id = 'convert'>
        showEvento
                    </Link> */}




{/* FIN BUSCAR POR ENTIDAD */}
{/* FIN BUSCAR POR ENTIDAD */}
{/* FIN BUSCAR POR ENTIDAD */}




<h5>Mostrar entidades en riesgo según evento:</h5>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        
          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="elegir">ELEGIR TIPO DE EVENTO</option>
                            <option value="incendio">Incendio</option>
                            <option value="inundación">Inundación</option>
                            <option value="accidente">Accidente</option>
                            <option value="amenaza climática">Amenaza Climática</option>
                        </select>
                    </label>

                    {/* <input id = "co" type="submit"/> */}
                    <button id="convertirRiesgo" type='submit' style={{display:"none"}}>
                            showEvento
                    </button> 
                    <button style={{marginLeft: "1em"}} id = "ir" >Mostrar entidades en Riesgo</button>
                    {/* <button id="co" type='submit'>
                            showEvento
                    </button>
                    <button id="fer">gggggggggg</button> */}
                    

                </form>

                <input
                    // id='ente'
                    id='enterisc'
                    className="form-control"
                    // value={JSON.stringify(this.state.currententity)}
                    // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
                    // value={JSON.stringify(this.state.currententity)}
                    value={JSON.stringify(this.state.EntSegunRiesgo)}
                    style={{display:"none"}}
                    type="text"
                />
                {/* <button type='submit'>
                    submit
                    </button> */}
                {/* {JSON.stringify(this.state.currententity)+ "aca"} */}
                {/* <button id="convertire" > */}
                {/* <button id="convertirRiesgo" >
                    sendToScript
                    </button> */}






                


<br/>
<br/>

                    <h5>Agregue una descripción del suceso:</h5>

                <form onSubmit={this.getElementandSet} >{/*//lo manda al estado */}
                <div >
                        <input
                            // type="hidden"
                            id="demo"
                            // style={{ display: "none" }}

                        />
                    </div>
                    <div className="">
                        <textarea
                            // type="text" 
                            id="demo2"
                            placeholder="Descripción"
                            
                        />
                    </div>
<br/>
<br/>
<br/>
                    <button type='submit' id="convert"> {/*//lo mete en el form */}
                        {/* <button id="convert"> */}
                        Guardar todos los datos
                    </button>
                </form>
<br/>
<br/>
<br/>
                <form onSubmit={this.onSubmit} > {/* update DB */}
                    <button type="submit" className="btn btn-primary">
                        Finalizar evento
                    </button>

                </form>

                <div>
                    <button id="conver"> {/*//lo mete en el form */}
                        {/* <button id="convert"> */}
                        testEntidad
                    </button>
                    <input
                        id='events'
                        className="form-control"
                        // value={JSON.stringify(this.state.entidadLista)}
                        value={'{' + '"features":' + JSON.stringify(this.state.entidadLista) + '}'}
                        type="text"
                    // placeholder="cucu"
                    />
                </div>






            </div>

        )

    }

}
