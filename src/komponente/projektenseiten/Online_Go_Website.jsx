import Projekt from '../Projekt.jsx';
import indexImg from "../../assets/screenshots/index_onlineGo.png";
import lobbyImg from "../../assets/screenshots/lobby_onlineGo.png";
import gameImg from "../../assets/screenshots/game_onlineGo.png";

export default function OnlineGoWebsite() {
    return (
        <Projekt
            contain
            title="Online Go Website"
            description="Eine vollständige Multiplayer-Implementierung des Brettspiels Go — mit Lobby, Echtzeit-Gameplay und persistenter Datenbank."
            technologies={["JavaScript", "HTML", "CSS", "WebSocket", "Node.js", "Express", "Render"]}
            images={[indexImg, lobbyImg, gameImg]}
            githubLink="https://github.com/laurens-hertzer/Online_Go"
            liveLink="https://online-go.onrender.com"
            backLink="/persProjekte"
        >
            <div className="mb-4">
                <h4>Projektziel</h4>
                <p>
                    Ziel war es, das klassische Brettspiel Go vollständig im Browser spielbar zu machen —
                    inklusive Echtzeit-Multiplayer, Benutzerverwaltung und persistenter Datenspeicherung.
                </p>
            </div>

            <div className="mb-4">
                <h4>Technische Umsetzung</h4>
                <p>
                    Das Backend basiert auf Node.js mit Express und kommuniziert über WebSockets
                    in Echtzeit mit den Clients. Die Spielzustände werden in einer eigenen Datenbank
                    auf Render gespeichert, sodass Spiele auch nach einem Verbindungsabbruch
                    fortgesetzt werden können.
                </p>
            </div>

            <div className="mb-4">
                <h4>Features</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Authentifizierung:</strong> Registrierung und Login mit eigenem Benutzerkonto
                    </li>
                    <li className="list-group-item">
                        <strong>Lobby:</strong> Spiele erstellen mit wählbarer Brettgrösse und Zeitkontrolle, oder offenen Spielen beitreten
                    </li>
                    <li className="list-group-item">
                        <strong>Spielregeln:</strong> Automatisches Entfernen gefangener Steine, Suizid-Züge verboten
                    </li>
                    <li className="list-group-item">
                        <strong>Spielsteuerung:</strong> Passen, Aufgeben und Rejoin bei Verbindungsabbruch
                    </li>
                    <li className="list-group-item">
                        <strong>Deployment:</strong> Live deployed auf Render mit eigener Datenbank
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h4>Herausforderungen</h4>
                <p>
                    Die grösste Herausforderung war die Verwaltung von Spieler-Joins und Rejoins —
                    sicherzustellen dass der richtige Spieler dem richtigen Spiel zugeordnet wird,
                    auch nach einem Verbindungsabbruch oder einem Seitenneuladung. Die WebSocket-Verbindungen
                    mussten mit dem Datenbankzustand synchron gehalten werden.
                </p>
            </div>

            <div className="mb-4">
                <h4>Zukünftige Erweiterungen</h4>
                <ul>
                    <li>Automatische Punkteberechnung am Spielende</li>
                    <li>Rangliste und Spielerstatistiken</li>
                    <li>Zuschauer-Modus</li>
                </ul>
            </div>
        </Projekt>
    );
}