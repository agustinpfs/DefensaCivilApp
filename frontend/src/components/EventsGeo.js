import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom'


export default class EventsGeo extends Component {

    state = {
        eventosLista: [],
        descSelected: '',
        titleSelected: '',
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
                titleSelected: res.data[0].title,
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
        const eventoTitl = this.state.titleSelected
        // const currev = this.state.currentevent

        for (let i = 0; i < eventos.length; i++) {
            if (eventos[i].title === eventoTitl) {
                this.setState({
                    currentevent: eventos[i],
                    dateSelected: eventos[i].date,
                    titleSelected: eventos[i].title,
                    EntSegunRiesgo: eventos[i].EntSegunRiesgo

                });
            }
        }
        function showHide() {
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
            titleSelected: e.target.value   //input info - e.target.name->depending on the name use a data

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
                {/* <div className="row"> */}
                {/* {<script src="eventScript.js"></script>} */}
                {/* {console.log(this.state.eventosLista)} */}
                {/* {console.log(testeo)} */}
                {/* <div id="mapa" style={{width: "0 px"}}> */}
                {/* <div id="mapid" className="clase" style={{position:"relative", width: "0px", height: '0px'}}> */}
                <div style={{ display: "inline-block",verticalAlign:'top' }}>
                    <h4>Buscar evento por título</h4>
                    <div id="mapid" className="clase"></div>
                </div>

                <div style={{ display: "inline-block" , width: '40%', verticalAlign:'top'}}>
               
                <br />
                <form id="opciones" onSubmit={this.onSubmit}>
                    {/* SELECT THE USER */}
                    <div className="form-group">
                        <select
                            // id="convert"
                            className="form-control"
                            value={this.state.titleSelected}
                            onChange={this.onInputChange}
                            name="descSelected"
                        >
                           
                            {
                                this.state.descriptions.map(desc => (

                                    <option className="option" key={desc.id}>
                                        {desc.title}
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

                    <button id="fer" style={{ background: "#00ACE4", color:"white" }}> <b>Mostrar Evento </b> </button>
                </form>
                <div id="showDesc" style={{ display: "none"}}>
                    <h1 >  {this.state.dateSelected}</h1>
                    <h1 >  {this.state.titleSelected}</h1>
                    <h6>  {this.state.descSelected}</h6>
                    <button id="volverElegir" onClick={this.buttonVolverElegir}>  Elegir otro evento</button>
                </div>
            
            <button id="convertirRiesgo" type='submit' style={{ display: "none" }}>
                showEvento
                    </button>
            <button style={{ marginLeft: "1em", display: "none" }} id="ir" >Mostrar entidades en Riesgo</button>



        <input
            // id='ente'
            id='enterisc'
            className="form-control"
            value={JSON.stringify(this.state.EntSegunRiesgo)}
            style={{ display: "none" }}
            type="text"
        />
             </div >
             </div >
            //  gggg
        )
    }
}





