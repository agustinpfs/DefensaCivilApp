import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom'


export default class EventsGeo extends Component {

    state = {
        eventosLista: [],
        descSelected: '',
        descriptions: [],
        currentevent: []
    }

    async componentDidMount() {
        this.getGeo();
        // this.currentEvent()
        // {this.currentEvent}
        const res = await axios.get('http://localhost:4000/api/geo');
        if (res.data.length > 0) {
            // this.setState({users: res.data}) //this fetchs all the data but I just need the username
            this.setState({
                // descriptions: res.data.map(desc => desc.description),
                descriptions: res.data,
                descSelected: res.data[0].description
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
                    currentevent: eventos[i]
                });
            }
        }
        //    function  showHide () {
        //         document.getElementById("opciones").style.display = "none";
        //         document.getElementById("mapid").style.width = "400px";
        //         document.getElementById("mapid").style.height = "400px";
        //         // document.getElementById("mapa").style.display = "block";

        //    }
        //       showHide()
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

                </Helmet>
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
                                        <option key={desc.id}>
                                            {desc.description}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input
                            id='events'
                            className="form-control"
                            value={JSON.stringify(this.state.currentevent)}
                            type="text"
                        />
                        <button id="convert" type='submit'>
                            showEvento
                    </button>
                    <button id="fer">gggggggggg</button>
                        {/* <button type='submit'>
                            submit
                    </button> */}
                        {/* <Link to={"/ListEvents"} id = 'convert'>
                        showEvento
                                    </Link> */}
                    </form>
                    <p>
                        {/* {this.state.descSelected} */}
                        {JSON.stringify(this.state.currentevent) + "AAAAAAAAAA"}
                        {/* {JSON.stringify(this.state.descriptions)} */}
                    </p>
                </div>
            </div >
        )
    }
}