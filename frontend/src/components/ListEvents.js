import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom'


export default class ListEvents extends Component {

    state = {
        eventosLista: [],
        descSelected: '',
        descriptions: [],
        currentevent: []
    }

    async componentDidMount() {
        this.getGeo();
        // this.currentEvent()
        const res = await axios.get('http://localhost:4000/api/geo');
        if (res.data.length > 0) {
            // this.setState({users: res.data}) //this fetchs all the data but I just need the username
            this.setState({
                // descriptions: res.data.map(desc => desc.description),
                descriptions: res.data,
                descSelected: res.data[1].description
            })
        }
        
    }

    getGeo = async () => {
        const res = await axios.get('http://localhost:4000/api/geo')
        this.setState({
            eventosLista: res.data
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        // window.location.reload(true);

        console.log(this.state.descSelected)
    }

    onInputChange = (e) => {
        this.setState({
            descSelected: e.target.value   //input info - e.target.name->depending on the name use a data
            
        })
        console.log(this.state.descSelected)
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
    }



    render() {
        return (
            <div className="">
                <Helmet>
                    {/* <meta charSet="utf-8" />
                    <title>Title</title> */}
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
                        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                        crossorigin="" />
                    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
                        integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
                        crossorigin=""></script>
                    <script src="eventScript.js">
                    

                    </script>

                </Helmet>
                <div className="row">
                    {/* {<script src="eventScript.js"></script>} */}
                    {/* {console.log(this.state.eventosLista)} */}
                    {/* {console.log(testeo)} */}
                    <div id="mapid" className="clase">
                    </div>
                    <div>
                        <button id="conv" >hhhhhhhhhh</button>
                        <button id="co" >vuelva a aparecer</button>
                      <button onClick={this.currentEvent}>curr</button>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        {/* SELECT THE USER */}
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.descSelected}
                                onChange={this.onInputChange}
                                name="descSelected"
                                // onClick= {this.currentEvent}
                                required>
                                {/* {
                                    this.state.descriptions.map(desc => (
                                        <option key={desc} value={desc}>
                                            {desc}
                                        </option>
                                    ))
                                } */}
                                {
                                    this.state.descriptions.map(desc => (
                                        <option key={desc.id}>
                                            {desc.description}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <input
                            id='events'
                            className="form-control"
                            value={JSON.stringify(this.state.currentevent)}
                            type="text"
                        />
                        <button type='submit' id="convert"> {/*//lo mete en el form */}
                            {/* <button id="convert"> */}
                            showEvento
                    </button>
                    </form>
                    <p>
                        {this.state.descSelected}
                        {/* {JSON.stringify(this.state.currentevent)+ "AAAAAAAAAA"} */}
                        {JSON.stringify(this.state.descriptions)}
                    </p>
                </div>
            </div >
        )
    }
}