import React, { Component } from 'react';
import { TopPlayerWrapper } from './styled-component/Card.style'

class TopPlayers  extends Component{ 

    constructor(){
        super()
        this.state = {
            players: []
        }
    }

     allPlayer = () => {
        const players =[

            {name: "Vladimir Guerrero Jr.", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35002.png"}, 
            {name: "Shohei Ohtani", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png"}, 
            {name: "Pete Alonso", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/37498.png"}, 
            {name: "Fernando Tatís Jr.", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35983.png"}, 
            {name: "Bryce Harper", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30951.png"}, 
            {name: "Albert Pujols", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4574.png"}, 
            {name: "Mike Trout", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30836.png"}, 
            {name: "Manny Machado", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31097.png"}, 
            {name: "Nelson Cruz", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6242.png"}, 
            {name: "Randy Arozarena", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36488.png"}, 
            {name: "Aaron Judge", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33192.png"}, 
            {name:"Salvador Pérez", url:"https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31127.png"}]

            return players
        }
        
         settingAllPlayer = () => {
            this.setState({
                players: this.allPlayer()
            })
        }

        componentDidMount(){
            this.settingAllPlayer()
        }

        renderPlayers = () =>{
            return(
                this.state.players.map(player => {
                    return(
                        <TopPlayerWrapper>
                            <h3>{player.name}</h3>
                            <img src={player.url} alt={player.name} width="300" />
                        </TopPlayerWrapper>
                    )
                })
            )
        }

        handlechange = (e) => {
            const search = e.target.value
            const allPlayers = this.allPlayer()

            const filter = allPlayers.filter( player => player.name.toLowerCase().includes(search.toLowerCase()))
        
            this.setState({
                players: filter
            })
        }

     render(){
         return(
             <>
             <center><h1>Top Baseball Player Picture</h1></center>
             <div> 
                <label>Filter Player Name</label>
                <input type="text" onChange={this.handlechange} />
            </div>
             
                {this.renderPlayers()}
             </>
         )
     }

}

export default TopPlayers;


