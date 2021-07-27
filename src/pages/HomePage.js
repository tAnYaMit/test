import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {TeamTile} from '../components/TeamTile';

import './HomePage.scss';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(

                () => {

                    const getTeams = async () => {

                        const response = await fetch(`http://localhost:8080/team/allTeams`);
                        const data = await response.json();
                        setTeams(data);
                    };

                    getTeams();

                }, []
            );


  return (
    <div className="HomePage">

        <div className="homepage-header">
            <h1 className="app-name; font-size:100px;text-align: center;"> IPL Dashboard Application</h1>
        </div>

        <div className="team-grid">
            {teams.map(team => <TeamTile teamName={team.teamName} />)}
        </div>

    </div>
  );
}