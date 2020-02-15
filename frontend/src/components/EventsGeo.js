import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom'


export default class EventsGeo extends Component {

    state = {
        eventosLista: [],
        descSelected: '',
        dateSelected: '',
        descriptions: [],
        currentevent: [],
        EntSegunRiesgo: []
    }
    // refreshPage = () => {
    //     location.reload();
    // }

    async componentDidMount() {
        (function () {
            if (window.localStorage) {
                if (!localStorage.getItem('firstLoad')) {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        })();
        // window.location.reload(false);

        // setTimeout(function refreshPage() {
        //     window.location.reload();
        // }, 500)
        this.getGeo();
        // this.refreshPage();
        // this.currentEvent()
        // {this.currentEvent}
        const res = await axios.get('http://localhost:4000/api/geo');
        if (res.data.length > 0) {
            // this.setState({users: res.data}) //this fetchs all the data but I just need the username
            this.setState({
                // descriptions: res.data.map(desc => desc.description),
                descriptions: res.data,
                descSelected: res.data[0].description,
                dateSelected: res.data[0].date,
                // EntSegunRiesgo: res.data[0].EntSegunRiesgo[0]

            })
        }

    }

    getGeo = async () => {
        const res = await axios.get('http://localhost:4000/api/geo')
        this.setState({
            eventosLista: res.data
        });
    }
    currentEvent = () => {
        // window.location.reload(true);



        const eventos = this.state.descriptions
        const eventoDesc = this.state.descSelected
        // const currev = this.state.currentevent

        for (let i = 0; i < eventos.length; i++) {
            if (eventos[i].description === eventoDesc) {
                this.setState({
                    currentevent: eventos[i],
                    dateSelected: eventos[i].date,
                    EntSegunRiesgo: eventos[i].EntSegunRiesgo
                    
                });
            }
        }
           function  showHide () {
                document.getElementById("opciones").style.display = "none";
                // document.getElementById("mapid").style.width = "400px";
                // document.getElementById("mapid").style.height = "400px";
                document.getElementById("showDesc").style.display = "block";

           }
              showHide()
    }
    buttonVolverElegir = () => {
        // document.getElementById("opciones").style.display = "block";
        // // document.getElementById("mapid").style.width = "400px";
        // // document.getElementById("mapid").style.height = "400px";
        // document.getElementById("showDesc").style.display = "none";

        (function () {
            if (window.localStorage) {
                if (!localStorage.getItem('firstLoad')) {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                }
                else
                    localStorage.removeItem('firstLoad');
            }
        })();
    }

    onSubmit = async (e) => {
        e.preventDefault();
        // window.location.reload(true);
        this.currentEvent()

        console.log(this.state.descSelected)

    }

    onInputChange = (e) => {
        // e.onClick.target.value = this.currentEvent()
        this.setState({
            descSelected: e.target.value   //input info - e.target.name->depending on the name use a data

        })
        // const es = e.target.value
        // es.onClick = currentEvent()
        console.log(this.state.descSelected)
    }

    // Date = (f) => {
    // var f = new Date();
    // return (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    // }




    render() {
        return (
            <div className="">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Title</title>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
                        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                        crossorigin="" />
                    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
                        integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
                        crossorigin=""></script>
                    <script src="eventScript.js"></script>
                    {/* <script src="script.js"></script> */}


                </Helmet>
                        <h4>Buscar evento por descripción</h4>
                <div className="row">
                    {/* {<script src="eventScript.js"></script>} */}
                    {/* {console.log(this.state.eventosLista)} */}
                    {/* {console.log(testeo)} */}
                    {/* <div id="mapa" style={{width: "0 px"}}> */}
                    {/* <div id="mapid" className="clase" style={{position:"relative", width: "0px", height: '0px'}}> */}
                    <div id="mapid" className="clase">
                        {/* </div> */}
                    </div>

                    <div>
                        {/* <button id="conv" >hhhhhhhhhh</button> */}
                        {/* <button id="co" >vuelva a aparecer</button> */}
                        {/* <button onClick={this.currentEvent}>curr</button> */}

                        {/* <button onLoad={this.currentEvent}>curr</button> */}

                    </div>
                            <br/>
                    <form id="opciones" onSubmit={this.onSubmit}>
                        {/* SELECT THE USER */}
                        <div className="form-group">


                            <select
                                // id="convert"
                                className="form-control"
                                value={this.state.descSelected}
                                onChange={this.onInputChange}
                                name="descSelected"
                                // onClick= {this.currentEvent}
                                // placeholder="Type or select a stock here..."
                                // isDisabled={this.props.disabled}
                                // onClick= {this.showHide}
                                // required
                                >
                                {/* {
                                    this.state.descriptions.map(desc => (
                                        <option key={desc} value={desc}>
                                        {desc}
                                        </option>
                                        ))
                                    }
                                </select> */}
                                {
                                    this.state.descriptions.map(desc => (
                        
                                        <option className="option" key={desc.id}>
                                            {desc.description}
                                            {/* {desc.description + this.state.dateSelected} */}
                                            {/* {desc.description + ' ' + desc.date} */}
                                            
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <br />
                        <input
                            id='events'
                            className="form-control"
                            value={JSON.stringify(this.state.currentevent)}
                            type="text"
                            style={{ display: "none" }}
                        />
                        <button id="convert" type='submit' style={{ display: "none" }}>
                        

                            showEvento(oculto)
                    </button>
                        <button id="fer">Mostrar Evento</button>
                        {/* <p> {this.Date()} </p> */}
                        {/* <button type='submit'>
                            submit
                    </button> */}
                        {/* <Link to={"/ListEvents"} id = 'convert'>
                        showEvento
                                    </Link> */}
                    </form>
                    <div id="showDesc" style={{display: "none"}}> 
                    <h1 >  {this.state.descSelected}</h1>
                    <h1 >  {this.state.dateSelected}</h1>
                    <button id="volverElegir" onClick = {this.buttonVolverElegir}>  Elegir otro evento</button>
                    </div>
                    <p>
                        {/* {this.state.descSelected} */}
                        {/* {JSON.stringify(this.state.currentevent) + "AAAAAAAAAA"} */}
                        {/* {JSON.stringify(this.state.descriptions)} */}
                    </p>
                </div>
                <button id="convertirRiesgo" type='submit' style={{ display: "none" }}>
                            showEvento
                    </button>
                        <button style={{ marginLeft: "1em" }} id="ir" >Mostrar entidades en Riesgo</button>
                        {/* <button id="co" type='submit'>
                            showEvento
                    </button>
                    <button id="fer">gggggggggg</button> */}



                    <input
                        // id='ente'
                        id='enterisc'
                        className="form-control"
                        // value={JSON.stringify(this.state.currententity)}
                        // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
                        // value={JSON.stringify(this.state.currententity)}
                        value={JSON.stringify(this.state.EntSegunRiesgo)}
                        style={{ display: "none" }}
                        type="text"
                    />
{JSON.stringify(this.state.EntSegunRiesgo) +'yyy'}
            </div >
        )
    }
}